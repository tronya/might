import {Box, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from '../../assets/logo.png';
import { StepperEnum } from "../../models/stepper.enum";

const styles = makeStyles((theme: Theme) => createStyles({
    wrapper:{
display:'flex',
alignItems:'center',
    },
  logo: {
    left: '-20px',
    position: 'relative'
  },
  text:{
      color:'#FDCC00'
  },
  heading:{
      fontWeight:'bold',
  },
  secondaryText:{
      borderBottom: '1px solid #FDCC00',
  }
}),
);


const LogoBlock = () => {
    const classes = styles();
    return(
        <Box >
        <img src={logo}  className={classes.logo} />
    </Box>
    )
}

const IntroText = () => {
    const s = styles();
    return(
    <Box flexGrow='1' className={s.text}>
    <Typography variant='h2' className={s.heading}>Міць</Typography>
    <Typography variant='subtitle2' className={s.secondaryText}>В сильних руках, гвинтівка та штик.</Typography>
</Box>
)
    }

export function Intro() {
    const history = useHistory();

    const handleClick= () => history.push(`/stepper/rifle`);
    const time = useEffect(() => {
        let timer1 = setTimeout(() => handleClick(), 5000);
        return () => {
            clearTimeout(timer1);
        }
    }, [])


    const s = styles();
    return (
        <Box className={s.wrapper}>
        <LogoBlock/>
        <IntroText/>
        </Box>
    )
}

