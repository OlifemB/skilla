import React from 'react';
import {Box, Typography} from "@mui/material";

interface TitleWithProgressProps {
    progress: number | number[],
    color: string,
    title: string
}

const TitleWithProgress = ({progress, color, title}: TitleWithProgressProps) => {
    const isAray = Array.isArray(progress)
    const val = isAray ? 100 / progress[1] * progress[0] : progress

    return (
        <Box>
            <Typography sx={{fontSize: '14px', color: '#122945', lineHeight: '148%', marginBottom: '7px'}}>
                {`${title} `}
                <Box
                    component={'span'}
                    sx={{color: color}}
                >
                    {isAray
                        ? `${progress[0]} из ${progress[1]}`
                        : progress + '%'
                    }
                </Box>
            </Typography>

            <Box
                sx={{
                    borderRadius: '100px',
                    backgroundColor: '#DEE6F5',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        width: `${val}%`,
                        height: '6px',
                        backgroundColor: color,
                    }}
                />
            </Box>
        </Box>
    );
};

export default TitleWithProgress;