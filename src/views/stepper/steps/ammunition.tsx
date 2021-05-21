import {
    Box,
    FormControl,
    FormControlLabel, FormHelperText,
    FormLabel,
    Input,
    InputLabel, Radio,
    RadioGroup, Typography
} from "@material-ui/core";
import {Fragment, useState} from "react";

export function AmmunitionStep() {
    return (
        <Fragment>
            <Box flexGrow='1'>
                <Typography variant='h4'>Набій</Typography>
            </Box>
            <Typography variant="body2">Параметри кулі необхідні для корегування роботи калькулятора та врахування
                балістичного коефіціенту.</Typography>
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
                        <InputLabel htmlFor="speed">Швидкість:</InputLabel>
                        <Input id="speed" aria-describedby="" placeholder="800"/>
                        <FormHelperText>м/с</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="weight">Вага:</InputLabel>
                        <Input id="weight" aria-describedby="" placeholder="195"/>
                        <FormHelperText>грейн</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="caliber">Калібр:</InputLabel>
                        <Input id="caliber" aria-describedby="" placeholder="7.62x39"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="caliber">Балістичний коефіціент::</InputLabel>
                        <Input id="caliber" aria-describedby="" placeholder="7.62x39"/>
                    </FormControl>
                </Box>
            </form>
        </Fragment>
    )
}
