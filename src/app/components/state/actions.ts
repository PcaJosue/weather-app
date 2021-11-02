export const actions = {
    SET_METRIC: 'SET_METRIC',
    SET_INFO: 'SET_INFO'
}


export class SetMetric {
    static readonly type = actions.SET_METRIC;
    constructor(public payload: boolean) { }
}

export class SetInfo {
    static readonly type = actions.SET_INFO;
    constructor(public payload: any) { }
}

