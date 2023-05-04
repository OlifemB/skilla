import * as React from 'react';
import {DateRange, LocalizationProvider, DateRangeCalendar, ruRU} from '@mui/x-date-pickers-pro';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";


export default function DateRangeCalendarCalendarProp({setState}:{setState:Function}) {
    const [value, setValue] = React.useState<DateRange<dateFns>>([null, null]);
    
    
    value[1] !== null && console.log(value)
    
    const handleChange = (newValue: DateRange<dateFns>) => {
        setValue(newValue)
    }
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangeCalendar
                // maxDate={new Date()}
                value={value}
                onChange={handleChange}
                calendars={1}
            />
        </LocalizationProvider>
    );
}