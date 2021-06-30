import React from 'react';
import {RifleStep} from "./steps/Rifle";
import {StepItem} from "./stepItem/StepItem";
import {useParams} from "react-router-dom";
import {StepperEnum} from "../../models/stepper.enum";
import {AmmunitionStep} from "./steps/Ammunition";
import {OpticsStep} from "./steps/Optics";


function getStepContent(stepIndex: number) {
    switch (stepIndex) {
        case 0:
            return {
                title: "Гвинтівка 2",
                description: "Додайте опис гвинтівки для коректного використання калькулятора.",
                content: <RifleStep/>
            };
        case 1:
            return {
                title: "Набій",
                description: "Параметри кулі необхідні для корегування роботи калькулятора та врахування балістичного коефіціенту.",
                content: <AmmunitionStep/>
            };
        case 2:
            return {
                title: "Налаштування оптики",
                description: "Введення налаштувань для оптичного прицілу для коректного відображення параметрів введення в коректних одиницях.",
                content: <OpticsStep/>
            };
        // case 2:
        //     return <OpticsStep/>;
        // case 3:
        //     return <WeatherStep/>;
        // case 4:
        //     return <GoalStep/>;
        default:
            return {
                title: "",
                description: "",
                content: null
            };
    }
}

export default function StepperView() {
    let {id} = useParams<{ id: string }>();
    const activeStep: number = Number(Object.keys(StepperEnum)[Object.values(StepperEnum).indexOf(id)]);

    return (
        <StepItem
            title={getStepContent(activeStep).title}
            description={getStepContent(activeStep).description}
            content={getStepContent(activeStep).content}
        />
    )
}
