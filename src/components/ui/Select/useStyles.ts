import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 120,
      width: `100%`,
      marginTop: 8,
      marginBottom: 8,
    },
  })
);

export default useStyles;
