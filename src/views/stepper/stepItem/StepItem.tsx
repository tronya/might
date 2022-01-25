import { Box, Typography } from "@material-ui/core";
import { FC } from "react";

import { StepContent } from "../../../models/step.model";
import TopNavigation from "../../../components/navigation/topNavigation";

import "./StepItem.scss";

const StepItem: FC<StepContent> = ({ title, description, content }) => (
  <div className="step">
    <TopNavigation />
    <Box flexGrow="1">
      <Typography variant="h4">{title}</Typography>
    </Box>
    <Typography color="textSecondary">{description}</Typography>
    <Box display="flex" flexDirection="column" paddingTop="2rem">
      {content}
    </Box>
  </div>
);

export default StepItem;
