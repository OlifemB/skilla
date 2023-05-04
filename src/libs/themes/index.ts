import {createTheme} from "@mui/material";
import {breakpoints} from './breakpoints'
import {components} from './components'
import {palette} from './palette'
import {typography} from './typography'

export const mainTheme = createTheme({
    breakpoints,
    palette,
    typography,
    components,
})