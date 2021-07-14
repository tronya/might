import {Box, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TableModel} from "../../models/table.model";
import {IState} from "../../store/state";
import CustomButton from "../../components/atoms/Button";
import {ITableAction, SAVE_TABLE_VALUES} from "../../store/reducer/tableReducer";
import { useHistory } from "react-router-dom";

function createData(
    distance: number,
    min: number | string = "-",
    mid: number | string = "-",
    max: number | string = "-",
    horizont: number | string = "-"
): TableModel {
    return {
        distance,
        min,
        mid,
        max,
        horizont
    };
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const TableView = () => {
    const dispatch = useDispatch();
    const create = () => dispatch<ITableAction>({type: SAVE_TABLE_VALUES, payload: createData(getRandomInt(1000), getRandomInt(8), getRandomInt(10), getRandomInt(20), getRandomInt(50))})
    const history = useHistory();
    const addItem = () => {
        create();
        history.push('/target')
    }
    const tableValues: TableModel[] = useSelector((state: IState) => state.table);

    return (
        <Box>
            <Box flexGrow='1'>
                <Typography variant='h4'>Таблиця</Typography>
            </Box>
            <Box padding={"2rem 0"}>
                <Typography color="textSecondary">Поправки для заданиих мішеней(моа).</Typography>
            </Box>
            <Box padding={"2rem 0"}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Дист.</TableCell>
                            <TableCell>Мін.</TableCell>
                            <TableCell>Сер.</TableCell>
                            <TableCell>Макс.</TableCell>
                            <TableCell>Гориз.</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableValues.map((row: TableModel) => (
                            <TableRow key={row.distance}>
                                <TableCell component="th" scope="row">{row.distance}</TableCell>
                                <TableCell>{row.min}</TableCell>
                                <TableCell>{row.mid}</TableCell>
                                <TableCell>{row.max}</TableCell>
                                <TableCell>{row.horizont}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <CustomButton
                className="step__button"
                variant="contained"
                color="primary"
                onClick={() => addItem()}
            >
                Додати ціль
            </CustomButton>
        </Box>
    )
}
