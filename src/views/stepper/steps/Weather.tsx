import {
    Box,
    FormControl,
    FormHelperText,

    Input,
    InputLabel,
    Typography
} from "@material-ui/core";
import {Fragment} from "react";

export function WeatherStep() {
    return (
        <Fragment>
            <Box flexGrow='1'>
                <Typography variant='h4'>Налаштування погоди</Typography>
            </Box>
            <Typography color="textSecondary">Введіть параметри погоди для точної кореляції поправок, рекомендуємо вводити
                параметри раз на годину або при значній зміні погодних умов.</Typography>
            <form action="">
                <Box
                    display="flex"
                    flexDirection="column"
                    padding="50px 0"
                >
                    <FormControl>
                        <InputLabel htmlFor="length">Довжина:</InputLabel>
                        <Input id="length"
                               aria-describedby="twist-text"
                               placeholder="180"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="speed">Температура:</InputLabel>
                        <Input id="speed" aria-describedby="" placeholder="800"/>
                        <FormHelperText>м/с</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="weight">Вологість:</InputLabel>
                        <Input id="weight" aria-describedby="" placeholder="195"/>
                        <FormHelperText>грейн</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="caliber">Тиск:</InputLabel>
                        <Input id="caliber" aria-describedby="" placeholder="7.62x39"/>
                    </FormControl>
                </Box>
            </form>
        </Fragment>
    )
}
