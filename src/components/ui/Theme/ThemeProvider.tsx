import {
  darkTheme,
  EThemeTypes,
  lightTheme,
  ThemeContext,
} from "../../../theme";
import { MuiThemeProvider } from "@material-ui/core";
import { ReactNode, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const [theme, changeTheme] = useState(EThemeTypes.DARK);
  const callback = (themeType: EThemeTypes) => {
    changeTheme(themeType);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: callback }}>
      <MuiThemeProvider
        theme={theme === EThemeTypes.DARK ? darkTheme : lightTheme}
      >
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.contextType = ThemeContext;
export default ThemeProvider;
