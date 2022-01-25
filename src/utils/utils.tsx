import { TextFieldProps } from "@material-ui/core";
import { FieldMetaState } from "react-final-form";
import { TableModel } from "../models/table.model";

export type ShowErrorFunc = (props: ShowErrorProps) => boolean;

export interface ShowErrorProps {
  meta: FieldMetaState<TextFieldProps>;
}

export const showErrorOnChange: ShowErrorFunc = ({
  meta: { submitError, dirtySinceLastSubmit, error, touched, modified },
}: ShowErrorProps) =>
  !!(
    ((submitError && !dirtySinceLastSubmit) || error) &&
    (touched || modified)
  );

export const getRandomInt = (max: number): number =>
  Math.floor(Math.random() * max);

export const createData = (
  distance: number,
  min: number | string = "-",
  mid: number | string = "-",
  max: number | string = "-",
  horizont: number | string = "-"
): TableModel => {
  return {
    distance,
    min,
    mid,
    max,
    horizont,
  };
};
