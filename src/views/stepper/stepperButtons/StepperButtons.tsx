import Button from "@material-ui/core/Button";
import CustomButton from "../../../components/atoms/Button";
import {Grid} from "@material-ui/core";

export const StepperButtons = ({disabled = false}) => {
    return (
        <div className="step__buttons">
            <Grid item style={{marginTop: 16}}>
                <Button
                    className="step__button"
                    // disabled={props.activeStep === 0}
                    // onClick={props.handleBack}
                >
                    Відмінити
                </Button>
                <CustomButton
                    className="step__button"
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!disabled}
                >
                    Ввести
                </CustomButton>
            </Grid>
        </div>
    )
}
