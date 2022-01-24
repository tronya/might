import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FC, ReactNode } from "react";

const useStyles = makeStyles({
  root: {
    borderRadius: 8,
    padding: "10px 2rem",
    textTransform: "capitalize",
    margin: ".5rem",
  },
});

interface CustomButtonProps {
  children: ReactNode;
  className: string;
  variant: "contained";
  color: "primary";
  onClick?: () => void;
  type?: "submit";
  disabled?: boolean;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  const classes = useStyles();

  return (
    <Button {...props} className={classes.root}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
