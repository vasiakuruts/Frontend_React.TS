import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import React from "react";
import styled from "./style.module.css";

const TopPriceComponent = (props: any) => {
  const { assets } = props;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Назва</TableCell>
              <TableCell align="right">Ціна</TableCell>
              <TableCell align="right">Зміни (%)</TableCell>
              <TableCell align="right">Зміни ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((element: any) => (
              <TableRow
                key={element.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {element.name}
                </TableCell>
                <TableCell align="right">{element.current_price}</TableCell>
                <TableCell
                  align="right"
                  className={
                    element.price_change_24h > 0
                      ? `${styled.priceUp}`
                      : `${styled.priceDown}`
                  }
                >
                  {element.price_change_24h.toFixed(2)}
                </TableCell>
                <TableCell
                  align="right"
                  className={
                    element.price_change_percentage_24h > 0
                      ? `${styled.priceUp}`
                      : `${styled.priceDown}`
                  }
                >
                  {element.price_change_percentage_24h.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TopPriceComponent;
