import React, {useEffect, useState} from 'react';
import {format} from "date-fns";
import DatePicker from "react-datepicker";


const Datepicker = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const onChange = (dates: [start: Date, end: Date]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        if (end) {
            setIsOpen(!isOpen)
        }
    };
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    
    useEffect(() => {
        setIsOpen(false)
    }, [])
    
    
    return (
        <>
            <button className="example-custom-input" onClick={handleClick}>
                {startDate ? format(startDate, "dd-MM-yyyy") : 'дд:мм:гггг'}
                {' - '}
                {endDate ? format(endDate, "dd-MM-yyyy") : 'дд:мм:гггг'}
            </button>
            
            {isOpen && (
                <DatePicker
                    inline
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    locale="ru"
                    maxDate={new Date()}
                    isClearable={true}
                    startOpen={true}
                    
                    calendarClassName={''}
                    className={''}
                    clearButtonClassName={''}
                    // dayClassName={''}
                    // weekDayClassName={''}
                />
            )}
        </>
    )
}

export default Datepicker;