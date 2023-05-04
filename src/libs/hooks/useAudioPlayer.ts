import React, {useState, useEffect} from "react";


interface HTMLAudioState {
    currentTime: number;
    duration: number;
    paused: boolean;
    waiting: boolean;
}

export const useAudioPlayer = ({src}: { src: string }) => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    
    const [state, setState] = useState<HTMLAudioState>({
        currentTime: 0,
        duration: 0,
        paused: true,
        waiting: false
    });
    
    const setPlayer = (partialState: Partial<HTMLAudioState>) =>
        setState((prevState) => ({...prevState, ...partialState}));
    
    
    function handleLoadData() {
        if (audio)
            setPlayer({duration: audio.duration});
    }
    
    function handleTimeUpdate() {
        if (audio)
            setPlayer({currentTime: audio.currentTime});
    }
    
    function handleEnded() {
        if (audio)
            setPlayer({currentTime: 0, paused: true});
    }
    
    function handlePlay() {
        if (audio)
            setPlayer({paused: false});
    }
    
    function handlePause() {
        if (audio)
            setPlayer({paused: true});
    }
    
    let lockPlay: boolean = false;
    
    const controls = {
        play: () => {
            if (!lockPlay) {
                const promise = audio?.play();
                const isPromise = typeof promise === "object";
                if (isPromise) {
                    lockPlay = true;
                    const resetLock = () => {
                        lockPlay = false;
                    };
                    promise?.then(resetLock, resetLock);
                }
                return promise;
            }
            return undefined;
        },
        pause: () => {
            if (audio) {
                audio.pause();
            }
        },
        setTime: (time: number) => {
            if (audio) {
                audio.currentTime = time;
            }
        }
    };
    
    useEffect(() => {
        const newAudio = new Audio(src);
        newAudio.load();
        setAudio(newAudio);
    }, [src]);
    
    useEffect(() => {
        if (audio) {
            audio.addEventListener("loadeddata", handleLoadData);
            audio.addEventListener("timeupdate", handleTimeUpdate);
            audio.addEventListener("ended", handleEnded);
            audio.addEventListener("play", handlePlay);
            audio.addEventListener("pause", handlePause);
        }
        return function cleanup() {
            audio?.pause();
            audio?.removeEventListener("loadeddata", handleLoadData);
            audio?.removeEventListener("timeupdate", handleTimeUpdate);
            audio?.removeEventListener("ended", handleEnded);
            audio?.removeEventListener("play", handlePlay);
            audio?.removeEventListener("pause", handlePause);
        };
    }, [audio]);
    
    return {state, controls, audioElement: audio};
};
