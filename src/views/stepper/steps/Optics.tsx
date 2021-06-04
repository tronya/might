import {Field, Form} from 'react-final-form'
import {StepperButtons} from "../stepperButtons/StepperButtons";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {IAction, SAVE_FORM_VALUES} from "../../../store/reducer/formReducer";
import {IState} from "../../../store/state";
import {MightInput} from "../../../components/atoms/MightInput";

export function OpticsStep() {
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (values: any) => {
        dispatch<IAction>({type: SAVE_FORM_VALUES, payload: values})
        history.push(`/table`)
    }

    const formValues: any = useSelector((state: IState) => state.userForm);
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={formValues}
            render={props => (
                <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
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
                        placeholder="мм"
                        component={MightInput}
                    />

                    <Field
                        name="vertical_step"
                        variant="outlined"
                        color="secondary"
                        label="Вертикальний крок:"
                        placeholder="грейн"
                        component={MightInput}
                    />

                    <Field
                        name="horizontal_step"
                        variant="outlined"
                        color="secondary"
                        label="Горизонтальний крок:"
                        component={MightInput}
                    />

                    <StepperButtons disabled={props.valid}/>
                </form>
            )}/>
    )
}
