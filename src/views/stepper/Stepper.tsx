import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {StepperEnum} from "../../models/stepper.enum";
import {RifleStep} from "./steps/rifle";
import {StepItem} from "./stepItem/StepItem";
import {AmmunitionStep} from "./steps/ammunition";

function getSteps() {
    return ['Гвинтівка', 'Набій', 'Налаштування оптики', "Налаштування погоди", "Встановлення цілі"];
}

function getStepContent(stepIndex: number) {
    switch (stepIndex) {
        case 0:
            return <RifleStep/>;
        case 1:
            return <AmmunitionStep/>;
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
        <StepItem
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
        >
            {getStepContent(activeStep)}
        </StepItem>
    )
}
