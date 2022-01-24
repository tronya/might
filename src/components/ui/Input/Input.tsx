import { TextField, TextFieldProps } from "@material-ui/core";
import { showErrorOnChange } from "../../../utils/utils";
import { FieldRenderProps } from "react-final-form";
import { FC } from "react";

type InputProps = FieldRenderProps<TextFieldProps, HTMLElement>;

const Input: FC<InputProps> = (props) => {
  const {
    input: { name, value, type, onChange, ...restInput },
    meta,
    color,
    required,
    fullWidth = true,
    helperText,
    showError = showErrorOnChange,
    ...rest
  } = props;

  const { error, submitError } = meta;
  const isError = showError({ meta });

  return (
    <TextField
      style={{ marginTop: 8, marginBottom: 8 }}
      fullWidth={fullWidth}
      helperText={isError ? error || submitError : helperText}
      error={isError}
      color={color}
      onChange={onChange}
      name={name}
      value={value}
      type={type}
      required={required}
      inputProps={{ required, ...restInput }}
      {...rest}
    />
  );
};

export default Input;
