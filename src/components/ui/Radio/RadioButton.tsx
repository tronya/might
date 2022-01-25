/* eslint-disable react/prop-types */
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@material-ui/core";
import { showErrorOnChange } from "../../../utils/utils";
import { FieldRenderProps } from "react-final-form";
import { FC } from "react";

type RadioButtonProps = FieldRenderProps<RadioGroupProps, HTMLElement>;

const RadioButton: FC<RadioButtonProps> = (props) => {
  const {
    input: { name, value, onChange },
    meta,
    fullWidth = true,
    defaultValue,
    showError = showErrorOnChange,
    label,
    options,
    ...rest
  } = props;

  const isError = showError({ meta });

  return (
    <FormControl
      component="fieldset"
      fullWidth={fullWidth}
      style={{ marginTop: 8, marginBottom: 8 }}
    >
      <FormLabel component="legend">{label}</FormLabel>
      {isError}
      <RadioGroup
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {options.map(({ label, value }: { label: string; value: string }) => (
          <FormControlLabel
            key={label}
            value={value}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
