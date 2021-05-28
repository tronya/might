interface IAction {
    text: string;
    type: string
}

export function todosReducer(state = ['hello'], action: IAction) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.text];
        default:
            return state
    }
}
