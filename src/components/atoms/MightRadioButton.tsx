import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    RadioGroupProps,
} from "@material-ui/core";
import {showErrorOnChange} from "./utils";
import {FieldRenderProps} from "react-final-form";

type TextWrapperProps = FieldRenderProps<RadioGroupProps, HTMLElement>;
export const MightRadioButton = (props: TextWrapperProps) => {
    const {
        input: {name, value, onChange},
        meta,
        color,
        required,
        fullWidth = true,
        helperText,
        showError = showErrorOnChange,
        label,
        options,
        ...rest
    } = props;

    const isError = showError({meta});
    return (
        <FormControl
            component="fieldset"
            fullWidth={fullWidth}
            style={{marginTop: 8, marginBottom: 8}}>
            <FormLabel component="legend">{label}</FormLabel>
            {isError}
            <RadioGroup
                name={name}
                value={value}
                onChange={onChange}
                {...rest}>
                {
                    options.map(
                        ({label, value}: { label: string; value: string }) =>
                            <FormControlLabel
                                key={label}
                                value={value}
                                control={<Radio/>}
                                label={label}
                            />
                    )
                }
            </RadioGroup>
        </FormControl>
    )
}
