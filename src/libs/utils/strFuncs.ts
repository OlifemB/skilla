export const capitalize = (str: string) => str.trim().charAt(0).toUpperCase() + str.slice(1);

export const replace = (str: string, value: string) => str.replace(/hn/g, value)

export const getDateName = (dateStr: string | null, locale: string) => {
    const date = dateStr ? new Date(dateStr) : new Date()
    const dayOfWeek = date.toLocaleDateString(locale, {weekday: 'long'})
    const datNum = date.getDate()
    const monStr = date.toLocaleDateString(locale, {month: 'long'}).substring(0, 3)
    return dayOfWeek + ', ' + datNum + ' ' + monStr
}