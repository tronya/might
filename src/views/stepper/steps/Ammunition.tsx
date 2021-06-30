
import {Field, Form} from 'react-final-form'
import {useDispatch, useSelector} from "react-redux";
import {IAction, SAVE_FORM_VALUES} from "../../../store/reducer/formReducer";
import {StepperButtons} from "../stepperButtons/StepperButtons";
import {MightInput} from "../../../components/atoms/MightInput";
import {useHistory} from "react-router-dom";
import {IState} from "../../../store/state";
import {MenuItem, Select} from "@material-ui/core";

export function AmmunitionStep() {
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (values: any) => {
        dispatch<IAction>({type: SAVE_FORM_VALUES, payload: values})
        history.push(`/stepper/optics`)
    }

    const formValues: any = useSelector((state: IState) => state.userForm);
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={formValues}
            render={props => (
                <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
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
                        component={MightInput}
                        label="Калібр:"
                        placeholder="7.62x39"
                    />

                    <Select
                        onChange={r => console.log(r)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                    <Field
                        name="ballistics"
                        variant="outlined"
                        color="secondary"
                        component={MightInput}
                        label="Балістичний коефіціент:"
                        placeholder="7.62x39"
                    />
                    <StepperButtons disabled={props.valid}/>
                </form>
            )}/>
    )
}
