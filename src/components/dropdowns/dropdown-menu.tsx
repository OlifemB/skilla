import React, {useEffect, useState} from "react";
import {
    Box,
    Paper,
    Avatar,
    Button,
    ClickAwayListener,
    Grow,
    MenuItem,
    MenuList,
    Popper,
} from "@mui/material";
import IconArrowUp from '@/assets/icons/icon-arrowUp.svg'
import IconArrowDown from '@/assets/icons/icon-arrowDown.svg'
import {CallsFilterDateProps} from "@/store/calls";
import {useMUIDropDown} from "@/libs/hooks";


interface FadeMenuItem {
    title: string,
    value: string
    img?: { url: string, isAvatar: boolean }
}

interface FadeMenuProps {
    items: FadeMenuItem[]
    setFilter?: Function
    value?: CallsFilterDateProps
}


export default function DropdownMenu({items, setFilter, value}: FadeMenuProps) {
    const [anchorEl, isOpen, handleOpen, handleClose] = useMUIDropDown();
    const [current, setCurrent] = useState<FadeMenuItem | undefined>(undefined)
    
    const handleCLickItem = (item: FadeMenuItem) => {
        setCurrent(item)
        setFilter && setFilter(item.value)
        handleClose()
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
                sx={{
                    color: items[0] === current ? '#5E7793' : '#005FF8',
                    height: '48px',
                    padding: 0
                }}
                endIcon={
                    <Box component={'span'}>
                        {isOpen
                            ? <IconArrowUp/>
                            : <IconArrowDown/>
                        }
                    </Box>
                }
            >
                <Box>
                    {current?.title}
                </Box>
            </Button>
            
            <Popper
                sx={{zIndex: '10'}}
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
                                    sx={{padding: 0}}
                                >
                                    {items.map(item =>
                                        <MenuItem
                                            key={`menu-item-${item.value}`}
                                            onClick={() => handleCLickItem(item)}
                                            sx={{
                                                height: item.img ? '48px' : '40px',
                                                color: current && current.title === item.title ? '#005FF8' : '#899CB1',
                                            }}
                                        >
                                            {item.img && (
                                                item.img.isAvatar
                                                    ? <Avatar
                                                        alt={''}
                                                        src={item.img.url}
                                                        sx={{width: '32px', height: '32px', mr: '8px',}}
                                                    />
                                                    : <img src={item.img.url} alt={''}/>
                                            )}
                                            {item.title}
                                        </MenuItem>
                                    )}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
}