import {Box, Button, Drawer, Icon, IconButton, SvgIcon, Typography} from '@mui/material';
import React from 'react';
import {menuButtons, menuData} from "@/libs/data/menu-data";
import Logo from '@/assets/icons/logo.svg'
import IconCircleExclam from '@/assets/icons/icon-circleExclam.svg'
import IconCirclePlus from '@/assets/icons/icon-circlePlus.svg'


const SideMenuButton = ({text, icon}) => {
    return (
        <Button
            variant="contained"
            disableRipple
            size='small'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '200px',
                height: '52px',
            }}
        >
            <Box
                sx={{
                    flex: '1 1 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                }}
            >
                {text}
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <IconCircleExclam/>
            </Box>
        </Button>
    )
}


const SideMenu = () => {
    return (
        <Box
            width='240px'
            height='100%'
            position='fixed'
            zIndex={'100'}
            sx={{
                background: '#091336'
            }}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                height={'80px'}
                paddingLeft={'12px'}
            >
                <Logo/>
            </Box>
            
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'stretch'}
            >
                {menuData.map(({icon, title}) => {
                    return (
                        <Box
                            key={`menu-item-${title}`}
                            
                            position={'relative'}
                            width={'100%'}
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                            justifyContent={'stretch'}
                            borderLeft={'3px solid transparent'}
                            height={'52px'}
                            gap={'12px'}
                            paddingLeft={'9px'}
                            sx={{
                                color: '#FFF',
                                opacity: .55,
                                transitionDuration: '.3s',
                                cursor: 'pointer',
                                '&:hover': {
                                    opacity: 1,
                                },
                                '&.active': {
                                    backgroundColor: '#4B5675',
                                    opacity: 1,
                                    borderColor: '#002CFB',
                                }
                            }}
                            className={title === 'Звонки' && 'active'}
                        >
                            <SvgIcon>
                                <path d={icon}/>
                            </SvgIcon>
                            
                            <Box component='span' sx={{fontSize: '16px'}}>
                                {title}
                            </Box>
                            
                            <Box
                                display={title === 'Звонки' ? 'block' : 'none'}
                                position={'absolute'}
                                right={'16px'}
                                top={'22px'}
                                width={'8px'}
                                height={'8px'}
                                borderRadius={'100%'}
                                bgcolor={'#FFD500'}
                            >
                            
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'stretch'}
                paddingTop={'64px'}
                gap={'32px'}
            >
                {menuButtons.map(item =>
                    <Button
                        key={`side-btns-${item.title}`}
                        variant="contained"
                        disableRipple
                        size='small'
                        sx={{
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '200px',
                            height: '52px',
                        }}
                    >
                        <Box
                            sx={{
                                flex: '1 1 auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px',
                            }}
                        >
                            {item.title}
                        </Box>
                        
                        <SvgIcon sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: '56%',
                            marginRight: '20px'
                        }}>
                            <path d={item.icon}/>
                        </SvgIcon>
                    </Button>
                )}
            
            </Box>
        </Box>
    );
};

export default SideMenu;