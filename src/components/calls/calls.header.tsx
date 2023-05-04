import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import TitleWithProgress from "@/components/titleWithProgress";
import DropdownProfile from "@/components/dropdowns/dropdown-profile";
import {str} from '@/libs/utils'


interface CallsHeaderProps {
    children?: React.ReactNode | React.ReactNode[]
}

const CallsHeader = ({children}: CallsHeaderProps) => {
    
    return (
        <Box
            bgcolor='#fff'
            boxShadow='0px 4px 5px #E9EDF3'
        >
            <Container>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    height="64px"
                >
                    
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap="86px"
                        height="64px"
                    >
                        <Box>
                            <Typography variant={'subtitle1'}>
                                {str.capitalize(str.getDateName(null, "ru-RU"))}
                            </Typography>
                        </Box>
                        
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            gap="32px"
                        >
                            <TitleWithProgress progress={[20, 30]} color={'#28A879'} title={'Новые звонки'}/>
                            <TitleWithProgress progress={40} color={'#FFB800'} title={'Качество разговоров'}/>
                            <TitleWithProgress progress={67} color={'#EA1A4F'} title={'Конверсия заказов'}/>
                        </Box>
                    </Box>
                    
                    <Box
                        display="flex"
                        alignItems="center"
                        gap="4"
                    >
                        <DropdownProfile/>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default CallsHeader;