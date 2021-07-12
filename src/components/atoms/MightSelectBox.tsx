import {createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import {showErrorOnChange} from "./utils";
import {FieldRenderProps} from "react-final-form";

interface IOptions {
    label: string;
    value: string
}

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  formControl: {
    minWidth: 120,
    width:`100%`,
    marginTop: 8,
    marginBottom: 8
  },
}),
);

type SelectProps = FieldRenderProps<SelectProps, HTMLElement>;
export const MightSelect = (props: SelectProps) => {
    const {
        input: {name, value, onChange},
        meta,
        color,
        required,
        helperText,
        label,
        defaultValue = {label, value: ""},
        showError = showErrorOnChange,
        options = [],
        ...rest
    } = props;


    const classes = useStyles();

    const mergedValue: IOptions[] = [defaultValue, ...options]

    const isError = showError({meta});
    return (
    <FormControl 
        variant="outlined"
        className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
                name={name}
                value={value}
                displayEmpty
                onChange={onChange}
                required={required}
                label={label}
                {...rest}>
                {
                    mergedValue.map(
                        ({label, value}: { label: string; value: string }) =>
                            <MenuItem key={label} value={value}>{label}</MenuItem>
                    )
                }
            </Select>
            {isError}
        </FormControl>
    )
}
