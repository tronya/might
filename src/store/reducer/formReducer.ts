export const SAVE_FORM_VALUES = "SAVE_FORM_VALUES";

export interface FormAction {
  type: string;
  payload: string;
}

const store = localStorage.getItem("store");
const parsedObject = store ? JSON.parse(store) : {};
const userForm = Object.prototype.hasOwnProperty.call(parsedObject, "userForm")
  ? parsedObject["userForm"]
  : {
      direction: "left",
    };

export const userFormReducer = (
  state = userForm,
  action: FormAction
): Record<string, unknown> => {
  switch (action.type) {
    case SAVE_FORM_VALUES:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
};
