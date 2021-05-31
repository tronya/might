import {
    Box,
    Grid,
    Typography
} from "@material-ui/core";
import {Fragment, useState} from "react";
import {Form, Field} from 'react-final-form'
import Button from "@material-ui/core/Button";
import {MightInput} from "../../../components/atoms/MightInput";

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

export function RifleStep() {
    const onSubmit = (values: any) => {
        console.log(values);
    }

    return (
        <Fragment>
            <Box flexGrow='1'>
                <Typography variant='h4'>Гвинтівка</Typography>
            </Box>
            <Typography color="textSecondary">Додайте опис гвинтівки для коректного використання
                калькулятора.</Typography>
            <Box
                display="flex"
                flexDirection="column"
                padding="50px 0"
            >
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    // initialValues={{direction: 'left', twist: 200}}
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
                            <Grid item style={{marginTop: 16}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={props.submitting}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </form>
                    )}
                />
            </Box>
        </Fragment>
    )
}
