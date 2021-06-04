import {Grid} from "@material-ui/core";
import {Form, Field} from 'react-final-form'
import {MightInput} from "../../../components/atoms/MightInput";
import {useDispatch, useSelector} from "react-redux";
import {IAction, SAVE_FORM_VALUES} from "../../../store/reducer/formReducer";
import {StepperButtons} from "../stepperButtons/StepperButtons";
import { useHistory } from "react-router-dom";
import {IState} from "../../../store/state";

const validate = (values: { direction: string; twist: string; }) => {
    const errors: { direction: string | undefined, twist: string | undefined } = {
        direction: undefined,
        twist: undefined
    };
    if (!values.direction) {
        errors.direction = 'Required';
    }
    if (!values.twist) {
        errors.twist = 'Required';
    }
    return errors;
};

export const RifleStep = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const onSubmit = (values: any) => {
        dispatch<IAction>({type: SAVE_FORM_VALUES, payload: values})
        history.push(`/stepper/charge`)
    }

    const formValues:any = useSelector((state: IState) => state.userForm);

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={formValues}
            render={props => (
                <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
                    <Grid container alignItems="flex-start" spacing={0}>
                        <Field
                            name="twist"
                            variant="outlined"
                            color="secondary"
                            label="Twist"
                            placeholder=""
                            required
                            component={MightInput}
                        />

                        <Field
                            name="direction"
                            variant="outlined"
                            color="secondary"
                            component={MightInput}
                            label="Direction"
                            placeholder=""
                        />
                    </Grid>
                    {/*<FormControl component="fieldset">*/}
                    {/*    <FormLabel component="legend">Нарізки:</FormLabel>*/}
                    {/*    <RadioGroup name="direction" value={value} onChange={handleChange}>*/}
                    {/*        <FormControlLabel value="left" control={<Radio/>} label="Ліві"/>*/}
                    {/*        <FormControlLabel value="right" control={<Radio/>} label="Праві"/>*/}
                    {/*    </RadioGroup>*/}
                    {/*</FormControl>*/}

                    {/*<FormControl>*/}
                    {/*    <TextField*/}
                    {/*        id="twist"*/}
                    {/*        label="Outlined secondary"*/}
                    {/*        variant="outlined"*/}
                    {/*        color="secondary"*/}
                    {/*    />*/}
                    {/*</FormControl>*/}
                    <StepperButtons disabled={props.valid}/>
                </form>
            )}
        />
    )
}
