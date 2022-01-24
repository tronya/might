import { Field, Form } from "react-final-form";
import StepperButtons from "../stepperButtons/StepperButtons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SAVE_FORM_VALUES } from "../../../store/reducer/formReducer";
import { IState } from "../../../store/state";
import MightInput from "../../../components/ui/Input/Input";
import MightSelect from "../../../components/ui/Select/Select";
import { FC } from "react";

const OpticsStep: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formValues = useSelector((state: IState) => state.userForm);

  const onSubmit = (values: Record<string, unknown>) => {
    dispatch({ type: SAVE_FORM_VALUES, payload: values });
    navigate("/table");
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={formValues}
      render={({ handleSubmit, valid }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Field
            name="distance"
            variant="outlined"
            color="secondary"
            label="Дистанція пристрілки:"
            placeholder="метрів"
            component={MightInput}
          />

          <Field
            name="height_above_thunk"
            variant="outlined"
            color="secondary"
            label="Висота прицілу над стволом:"
            placeholder="см"
            component={MightInput}
          />

          <Field
            name="vertical_step"
            variant="outlined"
            color="secondary"
            label="Вертикальний крок:"
            component={MightSelect}
            required
            options={[
              { value: "mil", label: "mil" },
              { value: "moa", label: "moa" },
            ]}
          />

          <Field
            name="horizontal_step"
            variant="outlined"
            color="secondary"
            label="Горизонтальний крок:"
            component={MightSelect}
            required
            options={[
              { value: "mil", label: "mil" },
              { value: "moa", label: "moa" },
            ]}
          />

          <StepperButtons disabled={valid} />
        </form>
      )}
    />
  );
};

export default OpticsStep;
