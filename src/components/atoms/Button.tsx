import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        borderRadius: 8,
        padding: '10px 2rem',
        textTransform: "capitalize",
        margin: '.5rem'
    },
});

export default function CustomButton(props: any) {
    const classes = useStyles();
    return <Button {...props} className={classes.root}>{props.children}</Button>;
}
