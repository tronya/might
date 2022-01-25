import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      left: "-20px",
      position: "relative",
    },
    text: {
      color: "#FDCC00",
    },
    heading: {
      fontWeight: "bold",
    },
    secondaryText: {
      borderBottom: "1px solid #FDCC00",
    },
  })
);

export default useStyles;
