import React from 'react';
import {Divider, TableCell, TableRow, Typography} from "@mui/material";
import CallIn from "@/assets/icons/icon-callIn.svg";
import CallOut from "@/assets/icons/icon-callOut.svg";
import {format} from "date-fns";
import UserItem from "@/components/user/user-item";
import {AudioPlayer} from "@/components/player";
import {ICall} from "@/libs/types/types";


const CallsTableRow = ({call, isMatch}: { call: ICall, isMatch: boolean }) => {
    const date = new Date(call.date)
    
    return (
        <>
            {isMatch && <TableRow sx={{border: 'none', height: '78px'}}>
                <TableCell colSpan={6} sx={{border: 'none', paddingTop: '40px', verticalAlign: 'top'}}>
                    {format(date, 'dd.MM.yyyy')}
                </TableCell>
            </TableRow>
            }
            
            <TableRow key={call.id}
                      sx={{
                          borderTop: '1px solid #EAF0FA',
                          '&:hover': {
                              background: 'rgba(212, 223, 243, 0.17)'
                          },
                      }}>
                <TableCell align="left" sx={{backgroundColor: 'FFF'}}>
                    {call.in_out
                        ? <CallIn style={{color: call.time === 0 ? '#EA1A4F' : '#002CFB'}}/>
                        : <CallOut style={{color: call.time === 0 ? '#EA1A4F' : '#28A879'}}/>
                    }
                </TableCell>
                
                <TableCell align="left">
                    <Typography variant={'body1'}>
                        {format(date, 'HH:mm')}
                    </Typography>
                </TableCell>
                
                <TableCell align="left">
                    <UserItem
                        avatar={call.person_avatar}
                        name={call.person_name}
                        surname={call.person_surname}
                    />
                </TableCell>
                
                <TableCell align="left">
                    <Typography variant={'body1'}>
                        +{call.in_out
                        ? call.from_number
                        : call.to_number
                    }
                    </Typography>
                </TableCell>
                
                <TableCell align="left">
                    <Typography variant={'body2'}>
                        {call.source}
                    </Typography>
                </TableCell>
                
                <TableCell align="right">
                    {call.record.length
                        ? <AudioPlayer src={call.record} time={call.time}/>
                        : <Typography variant={'body1'}>
                            {format(call.time, 'm:ss')}
                        </Typography>
                    }
                </TableCell>
            </TableRow>
        </>
    )
}

export default CallsTableRow;