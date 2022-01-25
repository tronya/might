import { FC } from "react";
import StepItem from "../stepper/stepItem/StepItem";
import TargetStep from "../stepper/steps/Target";

const targetPageProps = {
  title: "Встановлення цілі",
  description:
    "Параметри цілі задаються максимально точно для точних поправок корегування вогню.",
};

const TargetView: FC = () => (
  <StepItem {...targetPageProps} content={<TargetStep />} />
);

export default TargetView;
