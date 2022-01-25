export const validate = (values: {
  direction: string;
  twist: string;
}): Record<string, unknown> => {
  const errors: { direction: string | undefined; twist: string | undefined } = {
    direction: undefined,
    twist: undefined,
  };
  if (!values.direction) {
    errors.direction = "Required";
  }
  if (!values.twist) {
    errors.twist = "Required";
  }
  // return errors;
  return {};
};
