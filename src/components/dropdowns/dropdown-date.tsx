import React, {useEffect, useState} from "react";
import {
    Box,
    Paper,
    Button,
    ClickAwayListener,
    Grow,
    MenuItem,
    MenuList,
    Popper,
    Input,
} from "@mui/material";
import IconArrowLeft from '@/assets/icons/icon-arrowLeft.svg'
import IconArrowRight from '@/assets/icons/icon-arrowRight.svg'
import IconCalendar from '@/assets/icons/icon-calendar.svg'
import {useMUIDropDown} from "@/libs/hooks";
import {DateRangePicker} from "@/components/datepicker/date-range-picker";
import {dateOffsetDays} from "@/libs/utils";
import {CallsFilterDateProps} from "@/store/calls";


interface FadeMenuItem {
    title: string,
    value: number
}

interface FadeMenuProps {
    items: FadeMenuItem[]
    setStateFilterDate: Function
    stateFilterDate: CallsFilterDateProps
}


export default function DropdownMenu({items, setStateFilterDate, stateFilterDate}: FadeMenuProps) {
    const [anchorEl, isOpen, handleOpen, handleClose] = useMUIDropDown();
    const [current, setCurrent] = useState<CallsFilterDateProps>({title: '', date_start: 0, date_end: 0, offset: 0})
    
    const handleClickItem = (item: FadeMenuItem) => {
        const date = new Date()
        
        setStateFilterDate({
            title: item.title,
            date_start: dateOffsetDays(date.getTime(), item.value),
            date_end: date.getTime(),
            offset: 0
        })
        handleClose()
    }
    
    
    useEffect(() => {
        setCurrent(stateFilterDate)
    }, [])
    
    return (
        <Box>
            <Button
                variant={'text'}
                id="calls-button"
                aria-controls={isOpen ? 'calls-menu' : undefined}
                onClick={handleOpen}
                startIcon={<IconArrowLeft/>}
                endIcon={<IconArrowRight/>}
                sx={{
                    color: isOpen ? '#005FF8' : '#ADBFDF',
                    height: '48px',
                }}
            >
                <Box
                    display='flex'
                    alignItems="center"
                    justifyContent="space-between"
                    gap='8px'
                >
                    <IconCalendar/>
                    
                    <Box sx={{color: '#005FF8'}}>
                        {stateFilterDate.title}
                    </Box>
                </Box>
            </Button>
            
            <Popper
                open={isOpen}
                anchorEl={anchorEl}
                role={undefined}
                placement="bottom-end"
                transition
            >
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: placement === 'bottom-start' ? 'left bottom' : 'right top'}}
                    >
                        <Paper  sx={{zIndex: '10'}}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    sx={{
                                        padding: 0,
                                        width: '220px'
                                    }}
                                >
                                    {items.map(item =>
                                        <MenuItem
                                            key={`menu-item-${item.value}`}
                                            onClick={() => handleClickItem(item)}
                                            sx={{
                                                height: '40px',
                                                color: stateFilterDate.title === item.title ? '#005FF8' : '#899CB1',
                                            }}
                                        >
                                            {item.title}
                                        </MenuItem>
                                    )}
                                    <MenuItem sx={{height: '60px', '&:hover': {bgcolor: 'transparent'}}}>
                                        <Box display="flex" flexDirection="column" flex="1 0 auto">
                                            <Box> Указать даты </Box>
                                            <Box
                                                display="flex"
                                                flexDirection="row"
                                                alignItems="center"
                                                justifyContent="space-between"
                                            >
                                                
                                                {/*<Input*/}
                                                {/*    value={value}*/}
                                                {/*    onChange={handleChange}*/}
                                                {/*    disableUnderline*/}
                                                {/*    placeholder={'дд.мм.гггг-дд.мм.гггг'}*/}
                                                {/*    sx={{*/}
                                                {/*        fontSize: '14px',*/}
                                                {/*        lineHeight: '28px',*/}
                                                {/*        width: '90%',*/}
                                                {/*    }}*/}
                                                {/*/>*/}
                                                
                                                
                                                <DateRangePicker/>
                                                
                                                <Box
                                                    sx={{
                                                        color: '#ADBFDF',
                                                        transitionDuration: '.3s',
                                                        '&:hover': {
                                                            color: '#002CFB',
                                                        },
                                                    }}
                                                    // onClick={() => handleSubmit(value)}
                                                >
                                                    <IconCalendar/>
                                                </Box>
                                                
                                                
                                                {/*<CustomInputs/>*/}
                                                
                                                {/*<DateRangeCalendar setState={() => null}/>*/}
                                            
                                            
                                            </Box>
                                        </Box>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
}