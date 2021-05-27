import {
    Box,
    FormControl,
    Input,
    InputLabel, Slider, Typography
} from "@material-ui/core";
import {Fragment} from "react";


function valuetext(value: number) {
    return `${value}°C`;
}

interface MarkType {
    value: number;
    label: number
}

const marks: MarkType[] = new Array(20).map((number: number) => {
    return {
        value: number,
        label: number
    }
})

export function GoalStep() {
    return (
        <Fragment>
            <Box flexGrow='1'>
                <Typography variant='h4'>Встановлення цілі</Typography>
            </Box>
            <Typography variant="body2">Параметри цілі задаються максимально точно для точних поправок корегування
                вогню.</Typography>
            <form action="">
                <Box
                    display="flex"
                    flexDirection="column"
                    padding="50px 0"
                >
                    <FormControl>
                        <InputLabel htmlFor="length">Дистанція:</InputLabel>
                        <Input id="length"
                               aria-describedby="twist-text"
                               placeholder="180"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="speed">Кут стрільби:</InputLabel>
                        <Input id="speed" aria-describedby="" placeholder="800"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="weight">Діапазон вітру:</InputLabel>
                        <Slider
                            defaultValue={[2, 6]}
                            getAriaValueText={valuetext}
                            aria-labelledby="range-slider"
                            step={1}
                            marks={marks}
                            valueLabelDisplay="on"
                        />

                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="caliber">Азимут:</InputLabel>
                        <Input id="caliber" aria-describedby="" placeholder="7.62x39"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="caliber">Широта:</InputLabel>
                        <Input id="caliber" aria-describedby="" placeholder="7.62x39"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="caliber">Напрямок вітру:</InputLabel>
                        <Input id="caliber" aria-describedby="" placeholder="7.62x39"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="caliber">Розмір гонгу:</InputLabel>
                        <Input id="caliber" aria-describedby="" placeholder="7.62x39"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="caliber">Фщрма гонгу:</InputLabel>
                        <Input id="caliber" aria-describedby="" placeholder="7.62x39"/>
                    </FormControl>
                </Box>
            </form>
        </Fragment>
    )
}
