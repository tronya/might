import {Link} from "react-router-dom";
import './header.scss';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => createStyles({
        header: {},
        item: {
            color: theme.palette.primary.light,
            textDecoration: "none",
        }
    }),
);

export function Header() {
    const classes = styles();
    return (
        <ul className={classes.item}>
            <li>
                <Link to="/" className="item">Home</Link>
            </li>
            <li>
                <Link to="/stepper" className="item">stepper</Link>
            </li>
        </ul>
    )
}
