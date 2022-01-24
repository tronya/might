import './StepItem.scss'
import {Box, Typography} from "@material-ui/core";
import {StepContent} from "../../../models/step.model";
import TopNavigation from '../../../components/navigation/topNavigation';

export function StepItem({title, description, content}: StepContent) {

    return (
        <div className="step">
            <TopNavigation/>
            <Box flexGrow='1'>
                <Typography variant='h4'>{title}</Typography>
            </Box>
            <Typography color="textSecondary">{description}</Typography>
            <Box
                display="flex"
                flexDirection="column"
                paddingTop="2rem"
            >
                {content}
            </Box>
        </div>
    )
}
