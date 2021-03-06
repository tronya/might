import { EThemeTypes, ThemeContext } from "../../../theme";
import { Box, ButtonGroup, FormControl, FormLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { FC } from "react";

const checkDark = (theme: EThemeTypes) => EThemeTypes.DARK === theme;

const ThemeSwitcher: FC = () => (
  <ThemeContext.Consumer>
    {({ theme, changeTheme }) => (
      <Box textAlign="center">
        <FormControl component="fieldset">
          <FormLabel component="legend">Change Theme:</FormLabel>
          <ButtonGroup color="primary" style={{ marginTop: 20 }}>
            <Button
              variant={checkDark(theme) ? "contained" : "outlined"}
              onClick={() => changeTheme(EThemeTypes.LIGHT)}
            >
              Light
            </Button>
            <Button
              variant={!checkDark(theme) ? "contained" : "outlined"}
              onClick={() => changeTheme(EThemeTypes.DARK)}
            >
              Dark
            </Button>
          </ButtonGroup>
        </FormControl>
      </Box>
    )}
  </ThemeContext.Consumer>
);

export default ThemeSwitcher;
