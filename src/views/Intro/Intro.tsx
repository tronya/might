import {
  Box,
  createStyles,
  LinearProgress,
  makeStyles,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const styles = makeStyles(() =>
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

const LogoBlock = () => {
  const classes = styles();
  return (
    <Box>
      <img src={logo} className={classes.logo} alt="logo" />
    </Box>
  );
};

const IntroText = () => {
  const s = styles();
  return (
    <Box flexGrow="1" className={s.text}>
      <Typography variant="h2" className={s.heading}>
        Міць
      </Typography>
      <Typography variant="subtitle2" className={s.secondaryText}>
        В сильних руках, гвинтівка та штик.
      </Typography>
    </Box>
  );
};

const Intro: FC = () => {
  const navigate = useNavigate();
  let progress = 0;

  const handleClick = () => navigate("/stepper/rifle");
  useEffect(() => {
    const timer = setTimeout(() => handleClick(), 5000);
    const progresInterval = setInterval(() => {
      progress += 300;
    }, 300);
    return () => {
      clearTimeout(timer);
      clearInterval(progresInterval);
    };
  });

  const s = styles();
  return (
    <Box className={s.wrapper}>
      <LogoBlock />
      <IntroText />
      <BorderLinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default Intro;
