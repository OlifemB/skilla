import React, {useEffect, useState} from "react";
import {Box, Button, ClickAwayListener, Divider, Grow, Paper, Popper,} from "@mui/material";
import IconArrowLeft from '@/assets/icons/icon-arrowLeft.svg'
import IconArrowRight from '@/assets/icons/icon-arrowRight.svg'
import IconCalendar from '@/assets/icons/icon-calendar.svg'
import {useAppDispatch, useAppSelector, useMUIDropDown} from "@/libs/hooks";
import DateRangeCalendar from "@/components/datepicker/date-range-calendar";
import {dateOffsetDays, validUIDate} from "@/libs/utils";
import {CallsFilterDateProps, setFilterDate} from "@/store/calls";
import {format} from "date-fns";


interface DropdownMenuProps {
    items: DateRangeItemProps[]
    setStateFilterDate: Function
    stateFilterDate: CallsFilterDateProps
}

interface DateRangeItemProps {
    title: string
    value: string
}


export default function DropdownMenu({items, setStateFilterDate, stateFilterDate}: DropdownMenuProps) {
    const [anchorEl, isOpen, handleOpen, handleClose] = useMUIDropDown();
    const [current, setCurrent] = useState<CallsFilterDateProps>({date_start: 0, date_end: 0, title: ''})
    
    const handleClickItem = (item: DateRangeItemProps) => {
        const date = new Date()
        const dateStart = dateOffsetDays(date.getTime(), Number(item.value))
        const dateEnd = date.getTime()
        const title = `${format(dateStart,'dd.MM.yyyy')}-${format(dateEnd,'dd.MM.yyyy')}`
        setCurrent({date_start: dateStart, date_end: dateEnd, title: title})
    }
    
    const handleSubmit = () => {
        setStateFilterDate(current)
        handleClose()
    }
    
    useEffect(() => {
        setCurrent(stateFilterDate)
    }, [stateFilterDate])
    
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
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <Box
                                    padding={'20px 32px'}
                                    display='flex'
                                    flexDirection='column'
                                    alignItems='flex-end'
                                    gap='12px'
                                >
                                    
                                    <Box
                                        display={'flex'}
                                        flexDirection={'row'}
                                        gap={'24px'}
                                    >
                                        
                                        <DateRangeCalendar current={current} setCurrent={setCurrent}/>
                                        
                                        <Divider orientation="vertical" variant="middle" flexItem/>
                                        
                                        <Box
                                            display='flex'
                                            alignItems="flex-start"
                                            justifyContent="flex-start"
                                            flexDirection={'column'}
                                            paddingTop='35px'
                                            gap='4px'
                                        >
                                            {items.map(item =>
                                                <Button
                                                    key={`date-picker-item-${item.value}`}
                                                    size={'medium'}
                                                    onClick={() => handleClickItem(item)}
                                                    sx={{
                                                        color: current.title === item.title ? '#005FF8' : '#899CB1',
                                                        '&:hover': {
                                                            color: '#002CFB',
                                                        },
                                                    }}
                                                >
                                                    {item.title}
                                                </Button>
                                            )}
                                        </Box>
                                    </Box>
                                    
                                    
                                    <Divider orientation="horizontal" variant="fullWidth" flexItem/>
                                    
                                    <Box
                                        display='flex'
                                        gap='12px'
                                    >
                                        <Button
                                            // onClick={handleClear}
                                            variant={'outlined'}
                                            sx={{borderRadius: '100px'}}
                                        >
                                            Отмена
                                        </Button>
                                        <Button
                                            onClick={handleSubmit}
                                            variant={'contained'}
                                            sx={{borderRadius: '100px'}}
                                        >
                                            Выбрать
                                        </Button>
                                    </Box>
                                
                                </Box>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
}