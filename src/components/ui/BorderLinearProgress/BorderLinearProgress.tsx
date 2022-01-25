import {
  createStyles,
  LinearProgress,
  Theme,
  withStyles,
} from "@material-ui/core";

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
    },
  })
)(LinearProgress);

export default BorderLinearProgress;
