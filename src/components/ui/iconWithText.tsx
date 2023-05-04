import React from 'react';
import IconMail from "@mui/icons-material/EmailOutlined";
import {Box, Typography} from "@mui/material";


interface IconWithText {
    icon: React.ReactNode
    text: string
}

const IconWithText = ({icon, text}: IconWithText) => {
    return (
        <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='flex-start'
            gap='10px'
            sx={{color: '#5E7793', margin: '8px 0'}}
        >
            {icon}
            <Typography sx={{color: '#5E7793'}}>{text}</Typography>
        </Box>
    );
};

export default IconWithText;