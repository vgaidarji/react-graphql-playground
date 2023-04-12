import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { getCountry } from "./getCountryGqlRequest";
import Container from "@mui/material/Container";
import WeatherInfo from "../weather/WeatherInfo";

const CountryComponent: React.FC = () => {
  const countryParam = useLocation().state?.country;
  const [loading, error, country] = getCountry(countryParam.code);

  if (loading) return <h1>Loading country information...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  console.log(country);

  return (
    <Container maxWidth="xs" sx={{ marginTop: 5 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            {country.name} {country.emoji}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
            {country.capital}, <WeatherInfo countryCapital={countryParam.capital} />
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CountryComponent;
