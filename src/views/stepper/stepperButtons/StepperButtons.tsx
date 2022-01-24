import Button from "@material-ui/core/Button";
import CustomButton from "../../../components/ui/Button/Button";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface StepperButtonsProps {
  disabled: boolean;
  onDiscard?: () => void;
}

const StepperButtons: FC<StepperButtonsProps> = ({
  disabled = false,
  onDiscard,
}) => {
  const navigate = useNavigate();
  const goBackFunction = () => onDiscard || navigate(-1);

  return (
    <div className="step__buttons">
      <Grid item style={{ marginTop: 16 }}>
        <Button className="step__button" onClick={goBackFunction}>
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
  );
};

export default StepperButtons;
