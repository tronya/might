export const Validate = (values: { direction: string; twist: string; }) => {
    const errors: { direction: string | undefined, twist: string | undefined } = {
        direction: undefined,
        twist: undefined
    };
    if (!values.direction) {
        errors.direction = 'Required';
    }
    if (!values.twist) {
        errors.twist = 'Required';
    }
    // return errors;
    return {};
};