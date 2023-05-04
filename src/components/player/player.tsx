import React, {useRef, useState} from "react";
import ReactSlider from "react-slider";
import {useAudioPlayer} from "@/libs/hooks";

import styles from "@/components/player/player.module.scss";
import "@/components/player/player.scss";
import IconLoad from "@/assets/icons/icon-load.svg";
import IconClose from "@/assets/icons/icon-cross.svg";
import IconPlay from "@/assets/icons/icon-play.svg";
import IconPause from "@/assets/icons/icon-pause.svg";
import {format} from "date-fns";
import {Slider} from "@mui/material";


interface ProgressBarProps {
    value: number,
    setValue: Function,
    min: number
    max: number
    props: any
}

const ProgressBar = ({value, setValue, min, max, ...props}: ProgressBarProps) => {
    return (
        <div className={styles.progressWrapper} {...props}>
            <div className={styles.progress} style={{width: max / 100 * value}}></div>
        </div>
    )
}


function Audio({src, time}: { src: string, time: number }) {
    const [currentValue, setCurrentValue] = useState(0);
    const ref = useRef(null)
    const {state, controls} = useAudioPlayer({src});
    const [isOpen, setIsOpen] = useState(true)
    
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        controls.setTime(Number(e.target.value))
    }
    
    const handlePlay = () => {
        // !isOpen && setIsOpen(!isOpen)
        controls.play()
    }
    
    const handlePause = () => {
        controls.pause()
    }
    
    const handleDownload = () => {
        return
    }
    
    // const showTime = (e) => {
    //     console.log(ref.current.offsetWidth)
    // }
    
    return (
        <div className={styles.root}>
            {format(new Date((state.duration | time) * 1000), 'm:ss')}
            {state.paused
                ? <IconPlay className={styles.icon + ' ' + styles.bg} onClick={handlePlay}/>
                : <IconPause className={styles.icon + ' ' + styles.bg} onClick={handlePause}/>
            }
            <ReactSlider
                ref={ref}
                className={"customSlider"}
                trackClassName={"customSlider-track"}
                thumbClassName={"customSlider-thumb"}
                markClassName={"customSlider-mark"}
                min={0}
                max={time}
                value={currentValue}
                onChange={(value) => setCurrentValue(value)}
                // value={state.currentTime}
                // onChange={changeValue}
            />
            
            
            <IconLoad
                className={styles.icon}
                onClick={() => handleDownload()}
            />
            
            <IconClose
                className={styles.icon}
                // onClick={() => setIsOpen(false)}
            />
        
        </div>
    );
}

export default Audio;