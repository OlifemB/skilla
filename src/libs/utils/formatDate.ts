import {format} from "date-fns";


export const formatDate = (date: number) => {
    return format(date, 'dd-MM-yyyy')
}