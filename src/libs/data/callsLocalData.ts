import {compareAsc, format} from 'date-fns'


export const thData = ['Тип', 'Время', 'Сотрудник', 'Звонок', 'Источник', 'Длительность']

export type Type = {
    ALL: 'TYPE_ALL',
    IN: 'TYPE_IN',
    OUT: 'TYPE_OUT',
}

export enum callsFilterType {
    ALL = 'TYPE_ALL',
    IN = 'TYPE_IN',
    OUT = 'TYPE_OUT',
}

export enum callsTableHeadTypes {
    TYPE_ALL = 'TYPE_ALL',
    TYPE_IN = 'TYPE_IN',
    TYPE_OUT = 'TYPE_OUT',
    
    EMPLOYEES_ALL = 'EMPLOYEES_ALL',
    
    CALLS_ALL = 'CALLS_ALL',
    CALLS_ALL_CLIENTS = 'CALLS_ALL_CLIENTS',
    CALLS_NEW_CLIENTS = 'CALLS_NEW_CLIENTS',
    CALLS_ALL_EXECUTORS = 'CALLS_ALL_EXECUTORS',
    CALLS_BY_APP = 'CALLS_BY_APP',
    CALLS_OTHER = 'CALLS_OTHER',
    
    SOURCE_ALL = 'SOURCE_ALL',
    
    GRADE_ALL = 'GRADE_ALL',
    GRADE_RECOGNIZE = 'GRADE_RECOGNIZE',
    GRADE_SCRIPT = 'GRADE_SCRIPT',
    GRADE_BAD = 'GRADE_BAD',
    GRADE_GOOD = 'GRADE_GOOD',
    GRADE_GREAT = 'GRADE_GREAT',
    GRADE_DOT_1 = 'GRADE_DOT_1',
    GRADE_DOT_2 = 'GRADE_DOT_2',
    GRADE_DOT_3 = 'GRADE_DOT_3',
    
    ERROR_ALL = 'ERROR_ALL',
    ERROR_GREETINGS = 'ERROR_GREETINGS',
    ERROR_NAME = 'ERROR_NAME',
    ERROR_PRICE = 'ERROR_PRICE',
    ERROR_DISCOUNT = 'ERROR_DISCOUNT',
    ERROR_PREORDER = 'ERROR_PREORDER',
    ERROR_GRATITUDE = 'ERROR_GRATITUDE',
    ERROR_STOP_WORDS = 'ERROR_STOP_WORDS',
}


export const typesData = [
    {title: 'Все Типы', value: callsTableHeadTypes.TYPE_ALL},
    {title: 'Входящие', value: callsTableHeadTypes.TYPE_IN},
    {title: 'Исходящие', value: callsTableHeadTypes.TYPE_OUT}
]

export const employeesData = [
    {title: 'Все сотрудники', value: callsTableHeadTypes.EMPLOYEES_ALL},
    {title: 'Константин К.', value: 'id1', img: {url: 'https://lk.skilla.ru/img/noavatar.jpg', isAvatar: true}},
    {title: 'Полина З.', value: 'id2', img: {url: 'https://lk.skilla.ru/img/noavatar.jpg', isAvatar: true}},
]

export const callsData = [
    {title: 'Все звонки', value: callsTableHeadTypes.CALLS_ALL},
    {title: 'Все клиенты', value: callsTableHeadTypes.CALLS_ALL_CLIENTS},
    {title: 'Новые клиенты', value: callsTableHeadTypes.CALLS_NEW_CLIENTS},
    {title: 'Все исполнители', value: callsTableHeadTypes.CALLS_ALL_EXECUTORS},
    {title: 'Через приложение', value: callsTableHeadTypes.CALLS_BY_APP},
    {title: 'Прочие звонки', value: callsTableHeadTypes.CALLS_OTHER},
]

export const sourcesData = [
    {title: 'Все источники', value: callsTableHeadTypes.SOURCE_ALL},
]

export const awardsData = [
    {title: 'Все оценки', value: callsTableHeadTypes.GRADE_ALL},
    {title: 'Распознать', value: callsTableHeadTypes.GRADE_RECOGNIZE},
    {title: 'Скрипт не использован', value: callsTableHeadTypes.GRADE_SCRIPT},
    {title: 'Плохо', value: callsTableHeadTypes.GRADE_BAD},
    {title: 'Хорошо', value: callsTableHeadTypes.GRADE_GOOD},
    {title: 'Отлично', value: callsTableHeadTypes.GRADE_GREAT},
]

export const errorsData = [
    {title: 'Все ошибки', value: callsTableHeadTypes.ERROR_ALL},
    {title: 'Приветствие', value: callsTableHeadTypes.ERROR_GRATITUDE},
    {title: 'Имя', value: callsTableHeadTypes.ERROR_NAME},
    {title: 'Цена', value: callsTableHeadTypes.ERROR_PRICE},
    {title: 'Скидка', value: callsTableHeadTypes.ERROR_DISCOUNT},
    {title: 'Предзаказ', value: callsTableHeadTypes.ERROR_PREORDER},
    {title: 'Благодарность', value: callsTableHeadTypes.ERROR_GREETINGS},
    {title: 'Стоп слова', value: callsTableHeadTypes.ERROR_STOP_WORDS},
]

export const dateData = [
    {title: '3 дня', value: 3},
    {title: 'Неделя', value: 7},
    {title: 'Месяц', value: 30},
    {title: 'Год', value: 365},
]


export const profileMenuData = [{
    name: 'Операторы',
    data: [{
        name: 'Мирон Батонов',
    }, {
        name: 'Алексей Ильин',
    }, {
        name: 'Милана Константинопольская',
    }]
}, {
    name: 'Логисты',
    data: [{
        name: 'Александра Сизых',
    }, {
        name: 'Илья Алексеев',
    }, {
        name: 'Владимир Петров',
    }]
}, {
    name: 'Бухгалтеры',
    data: [{
        name: 'Полина Калинина',
    }, {
        name: 'Наталья Натальева',
    }, {
        name: 'Константин Константинопольский',
    }]
}]