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

export function OpticsStep() {
    return (
        <Fragment>
            <Box flexGrow='1'>
                <Typography variant='h4'>Налаштування оптики</Typography>
            </Box>
            <Typography variant="body2">Введення налаштувань для оптичного прицілу для коректного відображення
                параметрів введення в коректних одиницях.</Typography>
            <form action="">
                <Box
                    display="flex"
                    flexDirection="column"
                    padding="50px 0"
                >
                    <FormControl>
                        <InputLabel htmlFor="length">Дистанція пристрілки:</InputLabel>
                        <Input id="length"
                               aria-describedby="twist-text"
                               placeholder="180"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="speed">Висота прицілу над стволом:</InputLabel>
                        <Input id="speed" aria-describedby="" placeholder="180"/>
                        <FormHelperText>м/с</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="weight">Вертикальний крок:</InputLabel>
                        <Input id="weight" aria-describedby="" placeholder="185"/>
                        <FormHelperText>грейн</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="caliber">Горизонтальний крок:</InputLabel>
                        <Input id="caliber" aria-describedby="" placeholder="180"/>
                    </FormControl>
                </Box>
            </form>
        </Fragment>
    )
}
