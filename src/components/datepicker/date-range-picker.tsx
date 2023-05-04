import {createTheme, styled, ThemeProvider} from "@mui/material";
import {
    SingleInputDateRangeField,
    SingleInputDateRangeFieldProps
} from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import * as React from "react";
import {DateRange} from "@mui/x-date-pickers-pro";
import dayjs, {Dayjs} from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'


const DatePicker = styled(SingleInputDateRangeField)
    < SingleInputDateRangeFieldProps < any >> (
        ({theme}) => (
            {
                '& .MuiOutlinedInput-root': {
                    outline: 0,
                    
                    '& .MuiInputBase-input': {
                        padding: '2px',
                        fontSize: '14px',
                    }
                },
                
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                }
            }
        )
    )


export const DateRangePicker = () => {
    const [value, setValue] = React.useState<DateRange<dateFns>>();
    const dateRangePickerTheme = createTheme();
    
    return (
        <ThemeProvider theme={dateRangePickerTheme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    placeholder="дд.мм.гггг-дд.мм.гггг"
                    value={value}
                    onChange={(newValue:any) => setValue(newValue)}
                    hiddenLabel={true}
                    fullWidth={true}
                    format={'dd.MM.yyyy'}
                    sx={{borderRadius: 0}}
                />
            </LocalizationProvider>
        </ThemeProvider>
    );
}