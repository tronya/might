import RifleStep from "./steps/Rifle";
import StepItem from "./stepItem/StepItem";
import { useParams } from "react-router-dom";
import { StepperEnum } from "../../models/stepper.model";
import AmmunitionStep from "./steps/Ammunition";
import OpticsStep from "./steps/Optics";
import { FC } from "react";

const getStepContent = (stepIndex: number) => {
  switch (stepIndex) {
    case 0:
      return {
        title: "Гвинтівка",
        description:
          "Додайте опис гвинтівки для коректного використання калькулятора.",
        content: <RifleStep />,
      };
    case 1:
      return {
        title: "Набій",
        description:
          "Параметри кулі необхідні для корегування роботи калькулятора та врахування балістичного коефіціенту.",
        content: <AmmunitionStep />,
      };
    case 2:
      return {
        title: "Налаштування оптики",
        description:
          "Введення налаштувань для оптичного прицілу для коректного відображення параметрів введення в коректних одиницях.",
        content: <OpticsStep />,
      };
    default:
      return {
        title: "",
        description: "",
        content: null,
      };
  }
};

const StepperView: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (id) {
    const activeStep = Number(
      Object.keys(StepperEnum)[Object.values(StepperEnum).indexOf(id)]
    );

    return (
      <StepItem
        title={getStepContent(activeStep).title}
        description={getStepContent(activeStep).description}
        content={getStepContent(activeStep).content}
      />
    );
  }

  return null;
};

export default StepperView;
