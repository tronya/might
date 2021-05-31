import {TextField, TextFieldProps} from "@material-ui/core";
import {showErrorOnChange} from "./utils";
import {FieldRenderProps} from "react-final-form";

type TextWrapperProps = FieldRenderProps<TextFieldProps, HTMLElement>;
export const MightInput = (props: TextWrapperProps) => {
    const {
        input: {name, value, type, onChange, ...restInput},
        meta,
        color,
        required,
        fullWidth = true,
        helperText,
        showError = showErrorOnChange,
        ...rest
    } = props;

    const {error, submitError} = meta;
    const isError = showError({meta});
    return (
        <TextField
            style={{marginTop: 8, marginBottom: 8}}
            fullWidth={fullWidth}
            helperText={isError ? error || submitError : helperText}
            error={isError}
            color={color}
            onChange={onChange}
            name={name}
            value={value}
            type={type}
            required={required}
            inputProps={{required, ...restInput}}
            {...rest}
        />
    )
}
