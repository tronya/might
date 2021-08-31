import {createMuiTheme} from "@material-ui/core/styles";
import {createContext} from "react";

export const darkTheme = createMuiTheme({
    typography: {
        fontFamily: 'Open Sans',
    },
    palette: {
        background: {
            default: "#2A2A3A",
        },
        text: {
            primary: 'rgba(255,255,255,1)',
            secondary: 'rgba(255,255,255,.65)',
        },
        primary: {
            main: '#2F80ED',
            contrastText: '#fff'
        },
        secondary: {
            main: '#81D3F9',
        },
        type: 'dark',
    }
});

export const lightTheme = createMuiTheme({
    typography: {
        fontFamily: 'Open Sans',
    },
    palette: {
        background: {
            default: "#000",
        },
        text: {
            primary: 'rgba(255,255,255,1)',
            secondary: 'rgba(255,255,255,.65)',
        },
        primary: {
            main: '#eee',
            contrastText: '#fff'
        },
        secondary: {
            main: '#333',
        },
        type: 'dark',
    }
});

export enum EThemeTypes {
    'DARK' = "dark",
    'LIGHT' = "light"
}

export const ThemeContext = createContext({
        theme: EThemeTypes.DARK,
        changeTheme: (event: any) => {
        },
    }
)
