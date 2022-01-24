import { FC } from "react";
import { Field, Form } from "react-final-form";
import { useSelector } from "react-redux";
import MightInput from "../../../components/ui/Input/Input";
import MightSlider from "../../../components/ui/Slider/Slider";
import { Validate } from "../../../helpers/validate";
import { IState } from "../../../store/state";
import StepperButtons from "../stepperButtons/StepperButtons";

const TargetStep: FC = () => {
  const formValues = useSelector((state: IState) => state.userForm);

  const onSubmit = (values: Record<string, unknown>) => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={Validate}
      initialValues={formValues}
      render={({ handleSubmit, valid }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="distance"
            variant="outlined"
            color="secondary"
            label="Дистанція:"
            placeholder="180"
            required
            component={MightInput}
          />

          <Field
            name="angle"
            variant="outlined"
            color="secondary"
            label="Кут стрільби:"
            placeholder="800"
            component={MightInput}
          />

          <Field
            name="wind"
            variant="outlined"
            color="secondary"
            label="Діапазон вітру:"
            placeholder="800"
            component={MightSlider}
          />

          <Field
            name="azimut"
            variant="outlined"
            color="secondary"
            label="Азимут:"
            placeholder="800"
            component={MightInput}
          />

          <Field
            name="latitude"
            variant="outlined"
            color="secondary"
            label="Широта:"
            placeholder="800"
            component={MightInput}
          />
          <Field
            name="wind-direction"
            variant="outlined"
            color="secondary"
            label="Напрямок вітру:"
            placeholder="800"
            component={MightInput}
          />
          <Field
            name="gong-size"
            variant="outlined"
            color="secondary"
            label="Розмір гонгу:"
            placeholder="800"
            component={MightInput}
          />
          <Field
            name="gong-form"
            variant="outlined"
            color="secondary"
            label="Форма гонгу:"
            placeholder="800"
            component={MightInput}
          />
          <StepperButtons disabled={valid} />
        </form>
      )}
    />
  );
};
export default TargetStep;
