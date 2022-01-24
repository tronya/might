import { TextFieldProps } from "@material-ui/core";
import { FieldMetaState } from "react-final-form";

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
