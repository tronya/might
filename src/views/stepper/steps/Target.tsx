import {Field, Form} from "react-final-form";
import {useSelector} from "react-redux";
import {MightInput} from "../../../components/atoms/MightInput";
import {MightSlider} from "../../../components/atoms/MightSlider";
import {Validate} from '../../../helpers/validate';
import {IState} from "../../../store/state";
import {StepperButtons} from "../stepperButtons/StepperButtons";

const TargetStep = () => {
    // const dispatch = useDispatch()
    // const history = useHistory();

    const onSubmit = (values: any) => {
        console.log(values);

        // dispatch<IAction>({type: SAVE_FORM_VALUES, payload: values})
        // history.push(`/stepper/charge`)
    }

    const formValues: any = useSelector((state: IState) => state.userForm);
    return (
        <Form
            onSubmit={onSubmit}
            validate={Validate}
            initialValues={formValues}
            render={props => (
                <form onSubmit={props.handleSubmit}>
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
                    <StepperButtons disabled={props.valid}/>
                </form>
            )}/>
    )
}
export default TargetStep;
