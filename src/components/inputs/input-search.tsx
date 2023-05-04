import * as React from 'react';
import {Input, InputAdornment, InputClasses} from '@mui/material';
import IconSearch from "@/assets/icons/icon-search.svg";
import IconCross from "@/assets/icons/icon-cross.svg";


export default ({classes, placeholder, value, setValue}: {
    classes?: Partial<InputClasses>,
    placeholder?: string,
    value: string | null,
    setValue: Function
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <Input
            type={'search'}
            placeholder={placeholder || '_________'}
            value={value || ''}
            onChange={handleChange}
            disableUnderline={true}
            sx={{
                maxWidth: '482px',
                width: '100%',
                '&:hover:not(.Mui-focused)': {
                    '& .MuiInputAdornment-root': {
                        transitionDuration: '.3s',
                        color: '#005FF8',
                    }
                },
                '&.MuiInput-root': {
                    height: '40px',
                    px: '18px',
                    color: '#5E7793',
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderRadius: '100px',
                    transitionDuration: '.3s',
                    border: '1px solid transparent',
                    '&.Mui-focused': {
                        padding: '0 18px',
                        border: '1px solid #005FF8'
                    }
                }
            }}
            startAdornment={
                <InputAdornment position="start">
                    <IconSearch/>
                </InputAdornment>
            }
        />
    );
}