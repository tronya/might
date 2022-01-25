import { TableModel } from "../../models/table.model";

export const SAVE_TABLE_VALUES = "SAVE_TABLE_VALUES";

export interface TableAction {
  type: string;
  payload: TableModel;
}

const store = localStorage.getItem("store");
const parsedObject = store ? JSON.parse(store) : [];
const table = Object.prototype.hasOwnProperty.call(parsedObject, "table")
  ? parsedObject["table"]
  : [];

export const tableReducer = (
  state = table,
  action: TableAction
): Record<string, unknown> | Record<string, unknown>[] => {
  switch (action.type) {
    case SAVE_TABLE_VALUES:
      return [...state, action.payload];
    default:
      return state;
  }
};
