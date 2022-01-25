/* eslint-disable react/prop-types */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectInput,
} from "@material-ui/core";
import { showErrorOnChange } from "../../../utils/utils";
import { FieldRenderProps } from "react-final-form";
import { FC } from "react";
import useStyles from "./useStyles";

interface Option {
  label: string;
  value: string;
}

type SelectProps = FieldRenderProps<SelectProps, HTMLElement>;

const Select: FC<SelectProps> = (props) => {
  const classes = useStyles();

  const {
    input: { name, value, onChange },
    meta,
    required,
    label,
    defaultValue = { label, value: "" },
    showError = showErrorOnChange,
    options = [],
    ...rest
  } = props;

  const mergedValue: Option[] = [defaultValue, ...options];
  const isError = showError({ meta });

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <SelectInput
        name={name}
        value={value}
        displayEmpty
        onChange={onChange}
        required={required}
        label={label}
        {...rest}
      >
        {mergedValue.map(
          ({ label, value }: { label: string; value: string }) => (
            <MenuItem key={label} value={value}>
              {label}
            </MenuItem>
          )
        )}
      </SelectInput>
      {isError}
    </FormControl>
  );
};

export default Select;
