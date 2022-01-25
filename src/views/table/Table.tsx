import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { TableModel } from "../../models/table.model";
import { IState } from "../../store/state";
import CustomButton from "../../components/ui/Button/Button";
import {
  ITableAction,
  SAVE_TABLE_VALUES,
} from "../../store/reducer/tableReducer";
import { useNavigate } from "react-router-dom";
import { createData, getRandomInt } from "../../utils/utils";
import { FC } from "react";

const TableView: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tableValues = useSelector((state: IState) => state.table);

  const createItem = () =>
    dispatch<ITableAction>({
      type: SAVE_TABLE_VALUES,
      payload: createData(
        getRandomInt(1000),
        getRandomInt(8),
        getRandomInt(10),
        getRandomInt(20),
        getRandomInt(50)
      ),
    });

  const addItem = () => {
    createItem();
    navigate("/target");
  };

  return (
    <Box width="100%">
      <Box flexGrow="1">
        <Typography variant="h4">Таблиця</Typography>
      </Box>
      <Box padding={"2rem 0"}>
        <Typography color="textSecondary">
          Поправки для заданиих мішеней(моа).
        </Typography>
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
                <TableCell component="th" scope="row">
                  {row.distance}
                </TableCell>
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
  );
};

export default TableView;
