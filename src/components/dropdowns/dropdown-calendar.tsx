import React, {ChangeEvent, useEffect, useState} from "react";
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
import {formatDate} from "@/libs/utils/formatDate";
import {useMUIDropDown} from "@/libs/hooks";
import {DateRangePicker} from "@/components/datepicker/date-range-picker";
import DateRangeCalendar from "@/components/datepicker/date-range-calendar";
import {validDBDate, validUIDate} from "@/libs/utils";


interface FadeMenuItem {
    title: string,
    value: string | string[] | number[] | number
}

interface FadeMenuProps {
    items: FadeMenuItem[]
    setFilter: Function
}


export default function DropdownMenu({items, setFilter}: FadeMenuProps) {
    const [anchorEl, isOpen, handleOpen, handleClose] = useMUIDropDown();
    const [current, setCurrent] = useState<FadeMenuItem>({title: '', value: ''})
    
    const handleClickItem = (item: FadeMenuItem) => {
        setCurrent(item)
        // setFilter({
        //     date_start: formatDate(Date.now(), Number(item.value)),
        //     date_end: formatDate(Date.now()),
        // })w
        handleClose()
    }
    
    const handleSubmit = (date: number[]) => {
        const title = `${validUIDate(date[0])}-${validUIDate(date[1])}`
        const value = `${validDBDate(date[0])}-${validUIDate(date[1])}`
        
        console.log(title, value)
        
        setCurrent({title: title, value: value})
    }
    
    useEffect(() => {
        setCurrent(items[0])
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
                        {current?.title}
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
                        <Paper>
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
                                                color: current.title === item.title ? '#005FF8' : '#899CB1',
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
                                                
                                                <DateRangeCalendar setCurrent={handleSubmit}/>
                                            
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