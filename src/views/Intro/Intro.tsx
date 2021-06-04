import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

export function Intro() {
    return (
        <Link to="stepper/rifle">
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </Link>
    )
}
