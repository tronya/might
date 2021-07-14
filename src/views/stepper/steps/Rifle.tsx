import {Grid} from "@material-ui/core";
import {Form, Field} from 'react-final-form'
import {MightInput} from "../../../components/atoms/MightInput";
import {useDispatch, useSelector} from "react-redux";
import {IAction, SAVE_FORM_VALUES} from "../../../store/reducer/formReducer";
import {StepperButtons} from "../stepperButtons/StepperButtons";
import {useHistory} from "react-router-dom";
import {IState} from "../../../store/state";
import {MightRadioButton} from "../../../components/atoms/MightRadioButton";
import {Validate} from '../../../helpers/validate';

export const RifleStep = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const onSubmit = (values: any) => {
        dispatch<IAction>({type: SAVE_FORM_VALUES, payload: values})
        history.push(`/stepper/charge`)
    }

    const formValues: any = useSelector((state: IState) => state.userForm);

    return (
        <Form
            onSubmit={onSubmit}
            validate={Validate}
            initialValues={formValues}
            render={props => (
                <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
                    <Grid container alignItems="flex-start" spacing={0}>
                        <Field
                            name="direction"
                            variant="outlined"
                            color="secondary"
                            component={MightRadioButton}
                            label="Нарізи:"
                            placeholder=""
                            options={[
                                {label: 'Ліво', value: 'left'},
                                {label: 'Право', value: 'right'},
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
                    <StepperButtons disabled={props.valid}/>
                </form>
            )}
        />
    )
}
