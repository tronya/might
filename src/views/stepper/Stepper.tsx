import React from 'react';
import {RifleStep} from "./steps/Rifle";
import {AmmunitionStep} from "./steps/Ammunition";
import {OpticsStep} from "./steps/Optics";
import {WeatherStep} from "./steps/Weather";
import {GoalStep} from "./steps/Goal";
import {StepItem} from "./stepItem/StepItem";

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
            return <OpticsStep/>;
        case 3:
            return <WeatherStep/>;
        case 4:
            return <GoalStep/>;
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
