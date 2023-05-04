import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {playerReducer} from "@/store/player";
import {callsReducer} from "@/store/calls";

const rootReducer = combineReducers({
    player: playerReducer,
    calls: callsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']