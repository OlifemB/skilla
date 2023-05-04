import React, {useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {callsTableHeadTypes, thData} from "@/libs/data/callsLocalData";
import {ICall} from "@/libs/types/types";
import CallsTableRow from "@/components/calls/calls.table.row";
import Spinner from "@/components/spinner";
import {CallsFilterProps, pushCalls} from "@/store/calls";
import {useAppDispatch} from "@/libs/hooks";


interface CallsTableProps {
    callsData: ICall[]
    filter: CallsFilterProps
    isLoading: boolean
    total_rows: number
    current_page: number
    pushNewCalls: Function
}

const CallsTable = ({callsData, filter, isLoading, total_rows, current_page, pushNewCalls}: CallsTableProps) => {
    const [fetching, setFetching] = useState(false)
    let nowDate = new Date()
    
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    
    // useEffect(() => {
    //     pushNewCalls()
    // }, [])
    
    console.log(current_page)
    
    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }
    
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {thData.map(item => (
                            <TableCell align="left" key={item}>
                                {item}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                
                <TableBody>
                    {callsData && callsData.filter((row: ICall) =>
                        filter.type === callsTableHeadTypes.TYPE_ALL
                        || row.in_out === 0 && filter.type === callsTableHeadTypes.TYPE_OUT
                        || row.in_out === 1 && filter.type === callsTableHeadTypes.TYPE_IN
                    ).map((call: ICall, index: number) => {
                        const callDate = new Date(call.date)
                        const isMatch = callDate.getDate() !== nowDate.getDate()
                        if (isMatch)
                            nowDate = callDate
                        
                        return <CallsTableRow call={call} key={`call-row-${call.id}`} isMatch={isMatch}/>;
                    })}
                </TableBody>
            </Table>
            
            {isLoading && <Spinner block/>}
        </TableContainer>
    )
};

export default CallsTable;