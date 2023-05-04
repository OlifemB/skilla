import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container, Pagination,
    Typography
} from "@mui/material";
import {
    awardsData,
    callsData,
    callsTableHeadTypes,
    dateData,
    employeesData, errorsData,
    sourcesData,
    typesData
} from '@/libs/data/callsLocalData'
import {useAppDispatch, useAppSelector} from "@/libs/hooks";
import {
    CallsFilterDateProps,
    setCallsFilterDate,
    setCallsFilterType,
    setCalls, pushCalls
} from "@/store/calls";
import CallsHeader from "@/components/calls/calls.header";
import IconCirclePlus from "@/assets/icons/icon-circlePlus.svg";
import DropdownDate from "@/components/dropdowns/dropdown-date";
import SearchInput from "@/components/inputs/input-search";
import DropdownMenu from "@/components/dropdowns/dropdown-menu";
import CallsTable from "@/components/calls/calls.table";
import SideMenu from "../components/side-menu/side-menu";


const Calls: React.FC = () => {
    const dispatch = useAppDispatch()
    const calls = useAppSelector(state => state.calls)
    const [searchValue, setSearchValue] = useState<string | null>(null)
    let page = 1
    
    useEffect(() => {
        dispatch(setCallsFilterType(callsTableHeadTypes.TYPE_ALL))
    }, [])
    
    
    useEffect(() => {
        changeDate()
    }, [calls.filter.date])
    
    const changeDate = () => {
        dispatch(setCalls(calls.filter.date))
    }
    
    
    const pushNewCalls = () => {
        dispatch(pushCalls({...calls.filter.date, offset: (calls.current_page) * 50}))
    }
    
    return (
        <Box>
            <SideMenu/>
            
            <main style={{marginLeft: '240px'}}>
                <CallsHeader/>
                
                <Container sx={{paddingTop: '20px'}}>
                    <Box
                        sx={{
                            flex: '1 1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            flexDirection: 'row',
                            height: '40px',
                            marginBottom: '20px'
                        }}
                    >
                        <Button
                            endIcon={<IconCirclePlus/>}
                            sx={{
                                height: '40px',
                                textTransform: 'none',
                                backgroundColor: "#fff",
                                borderRadius: '100px',
                                padding: '9px 12px',
                                marginRight: '40px',
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    boxShadow: '0 0 16px #0001',
                                }
                            }}
                        >
                            <Typography sx={{color: '#899CB1', fontSize: '14px'}}>
                                Баланс: <Box component={'span'} sx={{color: '#122945'}}>274 ₽</Box>
                            </Typography>
                        </Button>
                        
                        <DropdownDate
                            items={dateData}
                            setStateFilterDate={(date: CallsFilterDateProps) => dispatch(setCallsFilterDate(date))}
                            stateFilterDate={calls.filter.date}
                        />
                    </Box>
                    
                    
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        gap="30px"
                        sx={{marginBottom: '7px'}}
                    >
                        <Box sx={{flex: '1 0 auto'}}>
                            <SearchInput
                                placeholder={"Поиск по звонкам"}
                                value={searchValue}
                                setValue={setSearchValue}
                            />
                        </Box>
                        
                        <Box display='flex' gap='48px'>
                            <DropdownMenu items={typesData}
                                          setFilter={(type: any) => dispatch(setCallsFilterType(type))}/>
                            <DropdownMenu items={employeesData}/>
                            <DropdownMenu items={callsData}/>
                            <DropdownMenu items={sourcesData}/>
                            <DropdownMenu items={awardsData}/>
                            <DropdownMenu items={errorsData}/>
                        </Box>
                    </Box>
                    
                    {calls.data &&
                        <CallsTable
                            callsData={calls.data}
                            filter={calls.filter}
                            isLoading={calls.isLoading}
                            total_rows={calls.total_rows}
                            current_page={calls.current_page}
                            pushNewCalls={pushNewCalls}
                        />
                    }
                    
                    <Box
                        display={'flex'}
                        alignItems={'flex-end'}
                        justifyContent={'flex-end'}
                        paddingTop={'24px'}
                        paddingBottom={'24px'}
                    >
                        <Button
                            disabled={calls.isLoading || calls.current_page === Math.ceil(calls.total_rows / 50)}
                            variant={'contained'}
                            onClick={pushNewCalls}
                        >
                            Загрузить ещё
                        </Button>
                    </Box>
                </Container>
            </main>
        </Box>
    )
}

export default Calls;
