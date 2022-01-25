import { Box, Typography } from "@material-ui/core";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import BorderLinearProgress from "../../components/ui/BorderLinearProgress/BorderLinearProgress";

import useStyles from "./useStyles";

const LogoBlock = () => {
  const classes = useStyles();

  return (
    <Box>
      <img src={logo} className={classes.logo} alt="logo" />
    </Box>
  );
};

const IntroText = () => {
  const classes = useStyles();

  return (
    <Box flexGrow="1" className={classes.text}>
      <Typography variant="h2" className={classes.heading}>
        Міць
      </Typography>
      <Typography variant="subtitle2" className={classes.secondaryText}>
        В сильних руках, гвинтівка та штик.
      </Typography>
    </Box>
  );
};

const Intro: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => navigate("/stepper/rifle");

  let progress = 0;

  useEffect(() => {
    const timer = setTimeout(() => handleClick(), 5000);
    const progressInterval = setInterval(() => (progress += 300), 300);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  });

  return (
    <Box className={classes.wrapper}>
      <LogoBlock />
      <IntroText />
      <BorderLinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default Intro;
