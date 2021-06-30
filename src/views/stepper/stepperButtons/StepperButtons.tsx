import Button from "@material-ui/core/Button";
import CustomButton from "../../../components/atoms/Button";
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export const StepperButtons = ({disabled = false, onDiscard}: { disabled: boolean; onDiscard?: any }) => {
    const fallBackFunction = useHistory();
    const goBackFunction = () =>  onDiscard || fallBackFunction.goBack();
    return (
        <div className="step__buttons">
            <Grid item style={{marginTop: 16}}>
                <Button
                    className="step__button"
                    onClick={goBackFunction}
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
