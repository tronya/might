import Button from "@material-ui/core/Button";
import CustomButton from "../../../components/atoms/Button";
import './StepItem.scss'

interface IStepItems {
    children: any;
    handleBack: () => void;
    handleNext: () => void;
    handleReset: () => void;
    activeStep: number;
    steps: any;
}

export function StepItem(props: IStepItems) {
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
