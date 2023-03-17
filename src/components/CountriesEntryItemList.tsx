import React, { Component } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SxProps from '@mui/material/styles';
import { Item } from "../App";

const CountriesEntryItemList = (props: { items: Item[]; }) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    const lists = props.items.map((item : Item) =>
        <StyledTableRow key={item.id}>
            <StyledTableCell component="th" scope="row">
                {item.name}
            </StyledTableCell>
            <StyledTableCell align="right">{item.amount}</StyledTableCell>
            <StyledTableCell align="right">
                {new Date(item.spendDate).toDateString()}
            </StyledTableCell>
            <StyledTableCell align="right">{item.category}</StyledTableCell>
        </StyledTableRow>
    );
    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell align="right">Amount</StyledTableCell>
                        <StyledTableCell align="right">Spend date</StyledTableCell>
                        <StyledTableCell align="right">Category</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lists}
                </TableBody>
            </Table>
        </TableContainer>
      )
}

export default CountriesEntryItemList;