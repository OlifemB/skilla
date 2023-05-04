import React, {ChangeEvent, useState} from 'react';
import {Input} from "@mui/material";
import Box from "@mui/material/Box";
import IconCalendar from "@/assets/icons/icon-calendar.svg";
import {compareAsc, format} from 'date-fns'
import {useAppDispatch} from "@/libs/hooks";
import {fetchCallsOld} from "@/store/calls";

const InputDate = ({setFilter}: { setFilter: Function }) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSubmit = (value: string) => {
        const index = value.indexOf('-')
        const date_start = new Date(value.substring(0, index))
        const date_end = new Date(value.substring(index + 1, value.length))

        dispatch(fetchCallsOld({
            date_start: format(date_start, 'dd-MM-yyyy'),
            date_end: format(date_end, 'dd-MM-yyyy')
        }))
    }

    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
        >

            <Input
                value={value}
                onChange={handleChange}
                disableUnderline={true}
                // placeholder={'__.__.____-__.__.____'}
                placeholder={'15.03.2023-18.03.2023'}
                sx={{
                    fontSize: '14px',
                    lineHeight: '28px',
                    width: '90%',
                }}
            />

            <Box
                sx={{
                    color: '#ADBFDF',
                    transitionDuration: '.3s',
                    '&:hover': {
                        color: '#002CFB',
                    },
                }}
                onClick={() => handleSubmit(value)}
            >
                <IconCalendar/>
            </Box>
        </Box>
    );
};

export default InputDate;