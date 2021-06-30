import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {showErrorOnChange} from "./utils";
import {FieldRenderProps} from "react-final-form";

interface IOptions {
    label: string;
    value: string
}

type SelectProps = FieldRenderProps<SelectProps, HTMLElement>;
export const MightSelect = (props: SelectProps) => {
    const {
        input: {name, value, onChange},
        meta,
        color,
        required,
        fullWidth = true,
        helperText,
        defaultValue = {label: 'None', value: ""},
        showError = showErrorOnChange,
        label,
        options = [],
        ...rest
    } = props;

    const mergedValue: IOptions[] = [defaultValue, ...options]

    const isError = showError({meta});
    return (
        <FormControl
            component="fieldset"
            fullWidth={fullWidth}
            style={{marginTop: 8, marginBottom: 8}}>

            <InputLabel>{label}</InputLabel>

            {isError}

            <Select
                name={name}
                value={value}
                displayEmpty
                onChange={onChange}
                required={required}
                {...rest}>
                {
                    mergedValue.map(
                        ({label, value}: { label: string; value: string }) =>
                            <MenuItem key={label} value={value}>{label}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}
