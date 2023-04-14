import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

import { Country } from "../../types/Country";
import { getCountries } from "./getCountriesGqlRequest";
import { fetchPopulation } from "../api/PopulationApi";

const CountriesList: React.FC = () => {
  const navigate = useNavigate();
  const [loading, error, data] = getCountries();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  fetchPopulation();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }));

  function handleCountryClick(country: Country) {
    navigate(`/countries/${country.code}`, {
      state: {
        country: country
      }
    });
  }

  const countriesList = data.countries.map((item: Country, index) => (
    <StyledTableRow key={item.name} onClick={() => handleCountryClick(item)}>
      <StyledTableCell>{index}</StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {item.name}
      </StyledTableCell>
      <StyledTableCell align="left">{item.capital}</StyledTableCell>
      <StyledTableCell align="left">{item.code}</StyledTableCell>
      <StyledTableCell align="left">{item.emoji}</StyledTableCell>
    </StyledTableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ padding: 5 }} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Capital</StyledTableCell>
            <StyledTableCell align="left">Code</StyledTableCell>
            <StyledTableCell align="left">Emoji</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{countriesList}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CountriesList;
