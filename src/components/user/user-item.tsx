import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";


interface UserItemProps {
    name: string
    surname?: string
    avatar?: string
}

const UserItem = ({avatar, name, surname}: UserItemProps) => {
    const displayName = surname ? name + ' ' + surname : name
    
    return (
        <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
        >
            <Avatar
                src={avatar}
                alt={''}
                sx={{
                    width: '32px',
                    height: '32px',
                    marginRight: '12px',
                }}
            />
            
            <Typography>
                {displayName}
            </Typography>
        </Box>
    );
};

export default UserItem;