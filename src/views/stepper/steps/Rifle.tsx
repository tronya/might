import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    InputLabel, Radio,
    RadioGroup, Typography
} from "@material-ui/core";
import {Fragment, useState} from "react";

export function RifleStep() {
    const [value, setValue] = useState('left');

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    return (
        <Fragment>
            <Box flexGrow='1'>
                <Typography variant='h4'>Гвинтівка</Typography>
            </Box>
            <Typography variant="body2">Додайте опис гвинтівки для коректного використання калькулятора.</Typography>
            <form action="">
                <Box
                    display="flex"
                    flexDirection="column"
                    padding="50px 0"
                >
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Нарізки:</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="left" control={<Radio/>} label="Ліві"/>
                            <FormControlLabel value="right" control={<Radio/>} label="Праві"/>
                        </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="twist">Твіст:</InputLabel>
                        <Input id="twist" aria-describedby="twist-text"/>
                    </FormControl>
                </Box>
            </form>
        </Fragment>
    )
}
