export const SAVE_FORM_VALUES = 'SAVE_FORM_VALUES';
export interface IAction {
    type: string;
    payload: string
}

const store = localStorage.getItem('store')
const parse = store ? JSON.parse(store) : {};
const userForm = parse.hasOwnProperty("userForm") ? parse["userForm"] : {};

export function userFormReducer(state = userForm, action: IAction) {
    switch (action.type) {
        case SAVE_FORM_VALUES:
            return Object.assign(state,action.payload);
        default:
            return state
    }
}
