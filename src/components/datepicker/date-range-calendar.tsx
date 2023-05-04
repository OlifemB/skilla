import * as React from 'react';
import {useEffect} from 'react';
import {DateRange, DateRangeCalendar, LocalizationProvider, ruRU} from '@mui/x-date-pickers-pro';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DateRangeProps} from "@/components/dropdowns/dropdown-date2";
import {dateOffsetDays, dayDif, validUIDate} from "@/libs/utils";
import {format} from "date-fns";


export default function DateRangeCalendarCalendarProp({
    setCurrent,
    current
}: {
    setCurrent?: Function,
    current?: DateRangeProps
}) {
    const [value, setValue] = React.useState<DateRange<dateFns>>([]);
    const date = new Date
    
    const handleChange = (newValue: DateRange<dateFns>) => {
        setCurrent({date_start: newValue[0], date_end: newValue[0], title:`${format(newValue[0],'dd.MM.yyyy')}-${format(newValue[1],'dd.MM.yyyy')}`})
        setValue(newValue)
    }
    
    useEffect(() => {
        setValue([current.date_start, current.date_end])
    }, [current])
    
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangeCalendar
                locale={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
                maxDate={Date.now()}
                value={value}
                onChange={handleChange}
                calendars={1}
            />
        </LocalizationProvider>
    );
}