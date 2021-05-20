import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {StepperEnum} from "../../models/stepper.enum";
import {RifleStep} from "./steps/rifle";
import CustomButton from "../../components/atoms/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Гвинтівка', 'Набій', 'Налаштування оптики', "Налаштування погоди", "Встановлення цілі"];
}

function getStepContent(stepIndex: number) {
    switch (stepIndex) {
        case 0:
            return <RifleStep/>;
        case 1:
            return StepperEnum.charge;
        case 2:
            return StepperEnum.optics;
        case 3:
            return StepperEnum.weather;
        case 4:
            return StepperEnum.goal;
        default:
            return 'Unknown stepIndex';
    }
}

export default function StepperView() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Відмінити
                            </Button>
                            <CustomButton variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Завершити' : 'Ввести'}
                            </CustomButton>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
