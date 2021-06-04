import './StepItem.scss'
import React from "react";
import {Box, Typography} from "@material-ui/core";
import {StepContent} from "../../../models/step.model";

export function StepItem({title, description, content}: StepContent) {

    return (
        <div className="step">
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
