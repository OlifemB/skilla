export const getUnique = (arr: any[]) => arr.filter((el, ind) => ind === arr.indexOf(el))

export const getAverage = (arr: number[]) => arr.reduce((a, b) => a + b) / arr.length;

