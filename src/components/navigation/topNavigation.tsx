import { FC, HTMLAttributes, useState, KeyboardEvent, MouseEvent } from "react";
import { Box, SwipeableDrawer } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { StepperEnum } from "../../models/stepper.model";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ThemeSwitcher from "../ui/Theme/ThemeSwitcher";

type Anchor = "top" | "left" | "bottom" | "right";

const TopNavigation: FC = (props: HTMLAttributes<Element>) => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(`/stepper/${path}`);
    setState({ ...state, top: false });
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        <ThemeSwitcher />
        <Box display="flex" justifyContent="center" paddingTop="2rem">
          <Button onClick={() => redirect(StepperEnum[0])}>Гвинтівка</Button>
          <Button onClick={() => redirect(StepperEnum[1])}>Набій</Button>
          <Button onClick={() => redirect(StepperEnum[2])}>Оптика</Button>
        </Box>
        {props.children}
      </SwipeableDrawer>
      <Box alignSelf="flex-end">
        <Button onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </Button>
      </Box>
    </>
  );
};

export default TopNavigation;
