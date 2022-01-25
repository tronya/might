export const NEXT_STEP = "NEXT_STEP";
export const PREVIOUS_STEP = "PREVIOUS_STEP";

export interface StepperAction {
  type: string;
  payload?: string;
}

export const stepperReducer = (state = 0, action: StepperAction): number => {
  switch (action.type) {
    case NEXT_STEP:
      return ++state;
    case PREVIOUS_STEP:
      return --state;
    default:
      return state;
  }
};
