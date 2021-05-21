import Button from "@material-ui/core/Button";
import CustomButton from "../../../components/atoms/Button";
import React from "react";
import './stepItem.scss'

export function StepItem(props: any) {
    return (
        <div className="step">
            {props.children}
            <div className="step__buttons">
                <Button
                    className="step__button"
                    disabled={props.activeStep === 0}
                    onClick={props.handleBack}
                >
                    Відмінити
                </Button>
                <CustomButton
                    className="step__button"
                    variant="contained"
                    color="primary"
                    onClick={props.handleNext}
                >
                    {props.activeStep === props.steps.length - 1 ? 'Завершити' : 'Ввести'}
                </CustomButton>
            </div>
        </div>
    )
}
