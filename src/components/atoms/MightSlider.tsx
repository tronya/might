import {Slider, SliderProps, Typography} from "@material-ui/core";
import {FieldRenderProps} from "react-final-form";
import React from "react";

// interface MarkType {
//     value: number;
//     label: number
// }
//
// const marks: MarkType[] = new Array(20).map((number: number) => {
//     return {
//         value: number,
//         label: number
//     }
// })

type TextWrapperProps = FieldRenderProps<SliderProps, HTMLElement>;
export const MightSlider = (props: TextWrapperProps) => {
    const {
        input: {name, type, onChange, ...restInput},
        label
    } = props;

    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        onChange(newValue);
    };

    return (
        <>
            <Typography id="range-slider" gutterBottom>{label}</Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </>
    )
}
