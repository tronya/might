export const SAVE_TABLE_VALUES = 'SAVE_TABLE_VALUES';

export interface ITableAction {
    type: string;
    payload: any
}

const store = localStorage.getItem('store');
const parse = store ? JSON.parse(store) : [];

const table = parse.hasOwnProperty("table") ? parse["table"] : [];

export function tableReducer(state = table, action: ITableAction) {
    switch (action.type) {
        case SAVE_TABLE_VALUES:
            return [...state, action.payload];
        default:
            return state
    }
}
