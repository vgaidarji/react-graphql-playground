import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/react-hooks";
import { useLocation } from "react-router-dom";
import { GET_COUNTRY } from "../Country/countryGqlQuery";

const Country: React.FC = () => {
  const countryParam = useLocation().state?.country;

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { countryCode: countryParam.code }
  });
  const country = data?.country;

  if (loading) return <h1>Loading country information...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  console.log(data?.country);

  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {country?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {country?.capital}
        </Typography>
        <Typography variant="body2">{country?.emoji}</Typography>
      </CardContent>
    </Card>
  );
};

export default Country
