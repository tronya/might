import {createMuiTheme} from "@material-ui/core/styles";

export const defaultTheme = createMuiTheme({
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
