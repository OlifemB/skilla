import {format} from "date-fns";

const fullDay = 86400000

export const dateOffsetDays = (date: number, offset: number) => date - (fullDay * offset)

export const validDBDate = (date: number): string => format(date, 'dd-MM-yyyy')
export const validUIDate = (date: number): string => format(date, 'dd.MM.yyyy')

export const dayDif = (date1: Date, date2: Date) =>
    Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / fullDay)

export const isDateValid = (val:string) => !Number.isNaN(new Date(val).valueOf());



 