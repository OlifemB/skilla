import React from 'react';
import {Box, CircularProgress} from '@mui/material';

export default function Spinner({block}: { block?: boolean }) {
    if (block)
        return (
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                padding="8px"
            >
                <CircularProgress/>
            </Box>
        )

    return <CircularProgress/>
};