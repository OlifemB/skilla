export interface IStages {
    person_name: string,
    person_surname: string,
    person_mango_phone: string,
    duration: string,
    disconnect_reason: string
}

export interface ICall {
    id: number,
    partnership_id: string,
    partner_data: {
        id: string,
        name: string,
        phone: string
    },
    date: string,
    date_notime: string,
    time: number,
    from_number: string,
    from_extension: string,
    to_number: string,
    to_extension: string,
    is_skilla: boolean,
    status: string,
    record: string,
    line_number: string,
    in_out: number,
    from_site: number,
    source: string,
    errors: string[],
    disconnect_reason: string,
    results: string[],
    stages: IStages[],
    abuse: [],
    contact_name: string,
    contact_company: string,
    person_id: number,
    person_name: string,
    person_surname: string,
    person_avatar: string
}
