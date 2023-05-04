import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICall} from "@/libs/types/types";
import axios from "axios";
import {format} from "date-fns";
import {callsTableHeadTypes} from "@/libs/data/callsLocalData";
import {dateOffsetDays} from "@/libs/utils";


export interface CallsFilterDateProps {
    date_start: number
    date_end: number
    offset: number
    title?: string
}

export interface CallsFilterProps {
    date: CallsFilterDateProps
    type: string
    search: string
}

type CallsFilterTypeProps = callsTableHeadTypes.TYPE_ALL | callsTableHeadTypes.TYPE_IN | callsTableHeadTypes.TYPE_OUT

export interface CallsDataProps {
    total_rows: number
    results: ICall[]
}


export interface CallsState {
    data: ICall[]
    total_rows: number
    current_page: number
    filter: CallsFilterProps
    isLoading: boolean
}

const date = new Date()
const initialState: CallsState = {
    data: [],
    total_rows: 0,
    current_page: 1,
    filter: {
        date: {
            date_start: dateOffsetDays(date.getTime(), 3),
            date_end: date.getTime(),
            offset: 0,
            title: '3 дня'
        },
        type: callsTableHeadTypes.TYPE_ALL,
        search: ''
    },
    isLoading: true,
}

export const fetchCallsPromise = async ({date_start, date_end, offset}: CallsFilterDateProps) => {
    const params = `date_start=${format(date_start, 'dd-MM-yyyy')}&date_end=${format(date_end, 'dd-MM-yyyy')}&offset=${offset}`
    return await axios.post(`https://api.skilla.ru/mango/getList?${params}`,
        {},
        {headers: {'Authorization': `Bearer ${'testtoken'}`}}
    )
    .then(({data}) => data)
    .catch((error) => console.log(error));
}

export const setCalls = createAsyncThunk(
    'calls/setCalls',
    async ({date_start, date_end, offset}: CallsFilterDateProps, thunkAPI) => {
        try {
            return await fetchCallsPromise({date_start, date_end, offset});
        } catch (error) {
            const message = error.response.data.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    },
)
export const pushCalls = createAsyncThunk(
    'calls/pushCalls',
    async ({date_start, date_end, offset}: CallsFilterDateProps, thunkAPI) => {
        try {
            return await fetchCallsPromise({date_start, date_end, offset});
        } catch (error) {
            const message = error.response.data.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    },
)


export const callsSlice = createSlice({
    name: 'calls',
    initialState,
    reducers: {
        //DATE (date_start, date_end, title, offset)
        setCallsFilterDate: (state, action: PayloadAction<CallsFilterDateProps>) => {
            state.filter.date = action.payload
        },
        //TYPE (TYPE_ALL, TYPE_IN, TYPE_OUT)
        setCallsFilterType: (state, action: PayloadAction<CallsFilterTypeProps>) => {
            state.filter.type = action.payload
        },
        //SEARCH <string>
        setCallsSearchValue: (state, action: PayloadAction<string>) => {
            state.filter.search = action.payload
        },
    },
    extraReducers:
        (builder) => builder
        .addCase(setCalls.pending, (state) => {
            state.isLoading = true
        })
        .addCase(setCalls.fulfilled, (state, action: PayloadAction<{ total_rows: number, results: ICall[] }>) => {
            state.isLoading = false
            state.data = action.payload.results
            state.total_rows = Number(action.payload.total_rows)
        })
        .addCase(setCalls.rejected, (state) => {
            state.isLoading = true
            state.data = []
        })
        .addCase(pushCalls.pending, (state) => {
            state.isLoading = true
        })
        .addCase(pushCalls.fulfilled, (state, action: PayloadAction<{ total_rows: number, results: ICall[] }>) => {
            state.isLoading = false
            state.data = [...state.data, ...action.payload.results]
            state.current_page++
        })
        .addCase(pushCalls.rejected, (state) => {
            state.isLoading = true
        })
})

export const {setCallsFilterDate, setCallsFilterType, setCallsSearchValue} = callsSlice.actions
export default callsSlice.reducer