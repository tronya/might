import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup, RadioGroupProps,
} from "@material-ui/core";
import {showErrorOnChange} from "./utils";
import {FieldRenderProps} from "react-final-form";

type RadioGroupWrapperProps = FieldRenderProps<RadioGroupProps, HTMLElement>;
export const MightRadioButton = (props: RadioGroupWrapperProps) => {
    console.log(props);
    const {
        input: {name, value, onChange},
        meta,
        color,
        required,
        fullWidth = true,
        helperText,
        defaultValue,
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
                defaultValue={defaultValue}
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
