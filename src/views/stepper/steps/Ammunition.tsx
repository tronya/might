import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_FORM_VALUES } from "../../../store/reducer/formReducer";
import StepperButtons from "../stepperButtons/StepperButtons";
import MightInput from "../../../components/ui/Input/Input";
import { useNavigate } from "react-router-dom";
import { IState } from "../../../store/state";
import MightSelect from "../../../components/ui/Select/Select";
import { FC } from "react";

const AmmunitionStep: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formValues = useSelector((state: IState) => state.userForm);

  const onSubmit = (values: Record<string, unknown>) => {
    dispatch({ type: SAVE_FORM_VALUES, payload: values });
    navigate("/stepper/optics");
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={formValues}
      render={({ handleSubmit, valid }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Field
            name="length"
            variant="outlined"
            color="secondary"
            label="Довжина:"
            placeholder="180"
            component={MightInput}
          />

          <Field
            name="speed"
            variant="outlined"
            color="secondary"
            component={MightInput}
            label="Швидкість:"
            placeholder="800"
          />

          <Field
            name="weight"
            variant="outlined"
            color="secondary"
            component={MightInput}
            label="Вага:"
            placeholder=""
          />

          <Field
            name="caliber"
            variant="outlined"
            color="secondary"
            component={MightSelect}
            label="Калібр:"
            options={[
              { value: "308", label: ".308" },
              { value: "221", label: ".22lr" },
              { value: "223", label: ".223 rem" },
              { value: "7.62", label: "7,62x39mm" },
            ]}
          />

          <Field
            name="ballistics"
            variant="outlined"
            color="secondary"
            component={MightInput}
            label="Балістичний коефіціент:"
            placeholder="7.62x39"
          />
          <StepperButtons disabled={valid} />
        </form>
      )}
    />
  );
};

export default AmmunitionStep;
