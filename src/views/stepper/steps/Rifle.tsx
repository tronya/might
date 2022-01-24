import { Grid } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import MightInput from "../../../components/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_FORM_VALUES } from "../../../store/reducer/formReducer";
import StepperButtons from "../stepperButtons/StepperButtons";
import { useNavigate } from "react-router-dom";
import { IState } from "../../../store/state";
import MightRadioButton from "../../../components/ui/Radio/RadioButton";
import { Validate } from "../../../helpers/validate";
import { FC } from "react";

const RifleStep: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formValues = useSelector((state: IState) => state.userForm);

  const onSubmit = (values: Record<string, unknown>) => {
    dispatch({ type: SAVE_FORM_VALUES, payload: values });
    navigate("/stepper/charge");
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={Validate}
      initialValues={formValues}
      render={({ valid, handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Grid container alignItems="flex-start" spacing={0}>
            <Field
              name="direction"
              variant="outlined"
              color="secondary"
              component={MightRadioButton}
              label="Нарізи:"
              placeholder=""
              options={[
                { label: "Ліво", value: "left" },
                { label: "Право", value: "right" },
              ]}
            />
          </Grid>
          <Field
            name="twist"
            variant="outlined"
            color="secondary"
            label="Твіст"
            placeholder=""
            component={MightInput}
          />
          <StepperButtons disabled={valid} />
        </form>
      )}
    />
  );
};

export default RifleStep;
