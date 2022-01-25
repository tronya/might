import Button from "@material-ui/core/Button";
import { FC, ReactNode } from "react";

import useStyles from "./useStyles";

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
