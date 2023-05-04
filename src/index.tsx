import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter,HashRouter } from "react-router-dom";
import {setupStore} from "@/store";
import Router from "@/pages";
import '@/assets/styles/global.scss'
import {createTheme, ThemeProvider, useTheme} from "@mui/material";
import {mainTheme} from "@/libs/themes";
import { getBundles } from 'react-loadable-ssr-addon';

const container = document.getElementById("root")!;
const root = createRoot(container);
const store = setupStore()

const theme = createTheme();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
                <HashRouter >
                    <Router/>
                </HashRouter >
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
)