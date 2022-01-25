import {
  Slider as SliderInput,
  SliderProps as SliderBoxProps,
  Typography,
} from "@material-ui/core";
import { FieldRenderProps } from "react-final-form";
import { ChangeEvent, FC, useState } from "react";

type SliderProps = FieldRenderProps<SliderBoxProps, HTMLElement>;

const Slider: FC<SliderProps> = (props) => {
  const {
    input: { onChange },
    label,
  } = props;

  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (
    event: ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <>
      <Typography id="range-slider" gutterBottom>
        {label}
      </Typography>
      <SliderInput
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </>
  );
};

export default Slider;
