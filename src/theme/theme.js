import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",

        primary: {
            main: "#3FA9F5", // your brand blue
        },

        background: {
            default: "#F9FAFB",   // page background
            paper: "#FFFFFF",     // cards/navbar
        },

        text: {
            primary: "#111827",
            secondary: "#6B7280",
        },
    },

    typography: {
        fontFamily: "Poppins, sans-serif",
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        button: { textTransform: "none" },
    },

    shape: {
        borderRadius: 10,
    },
});

export default theme;