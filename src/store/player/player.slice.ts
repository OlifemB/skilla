import {createAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store";
import axios from "axios";


export interface PlayerState {
    track: null | any;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean;
    isLoading: boolean;
}

const initialState: PlayerState = {
    track: null,
    volume: 100,
    duration: 0,
    currentTime: 0,
    pause: true,
    isLoading: true
}

export const fetchAudio = createAsyncThunk(
    'tracks/fetchOne',
    async (url: string) => {
        try {
            const {data} = await axios.get(url)
            return data
        } catch (e) {
            return e
        }
    }
)

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        pauseTrack(state) {
            state.pause = true
        },
        playTrack(state) {
            state.pause = false
        },
        setCurrentTime(state, action) {
            state.currentTime = action.payload
        },
        setVolume(state, action) {
            state.volume = action.payload
        },
        setDuration(state, action) {
            state.duration = action.payload
        },
        setTrack(state, action) {
            state.track = action.payload
        }
    },
    extraReducers: (builder) =>
        builder
        .addCase(fetchAudio.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchAudio.fulfilled, (state, action) => {
            state.isLoading = false
            state.track = action.payload
        })
        .addCase(fetchAudio.rejected, (state) => {
            state.isLoading = true
            state.track = null
        })
    
})

//{pauseTrack, playTrack, setCurrentTime, setVolume, setDuration, setTrack}
export const playerActions = playerSlice.actions
export const selectPlayerState = (state: RootState) => state.player
export default playerSlice.reducer