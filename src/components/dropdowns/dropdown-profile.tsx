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
    Popper, Typography, Divider,
} from "@mui/material";
import IconArrowUp from '@/assets/icons/icon-arrowUp.svg'
import IconArrowDown from '@/assets/icons/icon-arrowDown.svg'
import {CallsFilterDateProps} from "@/store/calls";
import UserItem from "@/components/user/user-item";
import IconPhone from '@mui/icons-material/LocalPhoneOutlined';
import IconMail from '@mui/icons-material/EmailOutlined';
import IconWithText from "@/components/ui/iconWithText";
import {profileMenuData} from "@/libs/data/callsLocalData";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import {useMUIDropDown} from "@/libs/hooks";


interface FadeMenuItem {
    title: string,
    value: string
    img?: { url: string, isAvatar: boolean }
}

interface FadeMenuProps {
    items?: FadeMenuItem[]
    setFilter?: Function
    value?: CallsFilterDateProps
}


export default function DropdownProfile({items, setFilter, value}: FadeMenuProps) {
    const [anchorEl, isOpen, handleOpen, handleClose] = useMUIDropDown();
    const [current, setCurrent] = useState<FadeMenuItem>({title: '', value: ''})
    
    return (
        <Box>
            <Button
                variant={'text'}
                id="calls-button"
                aria-controls={isOpen ? 'calls-menu' : undefined}
                onClick={handleOpen}
                sx={{
                    color: isOpen ? '#005FF8' : '#5E7793',
                    height: '48px'
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
                <Avatar sx={{width: '40px', height: '40px'}} src={''}/>
            </Button>
            
            <Popper
                open={isOpen}
                anchorEl={anchorEl}
                role={undefined}
                placement="bottom-end"
                transition
                sx={{zIndex: '10'}}
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
                                        paddingBottom: '20px',
                                        width: '368px',
                                        transform: 'translateZ(200px)'
                                    }}
                                >
                                    <Box sx={{
                                        position: 'absolute',
                                        right: '30px',
                                        top: '18px',
                                        color: '#ADBFDF',
                                        '&:first-of-type': {
                                            transitionDuration: '.3s',
                                            transform: 'translate(-8px)',
                                        },
                                        '&:hover:first-of-type': {
                                            color: '#0000F4',
                                            transform: 'translate(0)',
                                        }
                                    }}>
                                        <LogoutIcon/>
                                    </Box>
                                    
                                    <Box sx={{padding: '20px 32px 8px 32px'}}>
                                        <Typography
                                            variant={'h4'}
                                            sx={{marginBottom: '6px'}}
                                        >
                                            Упоров Кирилл
                                        </Typography>
                                        
                                        <Typography
                                            variant={'body2'}
                                            sx={{marginBottom: '20px'}}
                                        >
                                            Директор <span style={{padding: "0 8px", color: '#ADBFDF'}}>⦁</span> Санкт-Петербург
                                        </Typography>
                                        
                                        <IconWithText
                                            icon={<IconPhone sx={{fontSize: '16px'}}/>}
                                            text={'8 (800) 333-17-21'}
                                        />
                                        
                                        <IconWithText
                                            icon={<IconMail sx={{fontSize: '16px'}}/>}
                                            text={'hi@skilla.ru'}
                                        />
                                    </Box>
                                    
                                    <Divider sx={{margin: '0 32px -8px'}}/>
                                    
                                    {profileMenuData.map(category =>
                                        <Box key={`category-${category.name}`}>
                                            <Typography
                                                sx={{margin: '24px 32px 16px', lineHeight: '19px'}}
                                                variant={'body2'}
                                            >
                                                {category.name}
                                            </Typography>
                                            {category.data.map(user =>
                                                <MenuItem sx={{
                                                    padding: '0 32px',
                                                    height: '48px',
                                                    '&:hover .MuiBox-root': {
                                                        transform: 'translateX(0px)',
                                                        opacity: 1,
                                                    }
                                                }}
                                                          key={`menu-item-${user.name}`}>
                                                    <UserItem
                                                        name={user.name.length > 28 ? user.name.substring(0, 28) + '...' : user.name}/>
                                                    <Box
                                                        sx={{
                                                            position: 'absolute',
                                                            right: '30px',
                                                            transitionDuration: '300ms',
                                                            transform: 'translateX(10px)',
                                                            opacity: 0,
                                                            color: '#005FF8'
                                                        }}
                                                    >
                                                        <LoginIcon/>
                                                    </Box>
                                                </MenuItem>
                                            )}
                                        </Box>
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