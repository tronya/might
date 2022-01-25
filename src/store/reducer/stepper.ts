export const NEXT_STEP = "NEXT_STEP";
export const PREVIOUS_STEP = "PREVIOUS_STEP";

export interface IStepperAction {
  type: string;
  payload?: string;
}

export const stepperReducer = (state = 0, action: IStepperAction): number => {
  switch (action.type) {
    case NEXT_STEP:
      return ++state;
    case PREVIOUS_STEP:
      return --state;
    default:
      return state;
  }
};
