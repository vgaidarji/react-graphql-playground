import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Item } from "../App";

const CountriesEntryItemList = (props: { items: Item[]; }) => {
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);
    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

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