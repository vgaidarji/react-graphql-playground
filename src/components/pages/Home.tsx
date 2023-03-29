import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  function handleLoadCountriesClick() {
    navigate("/countries");
  }

  return (
    <Box>
      <Button variant="outlined" onClick={() => handleLoadCountriesClick()}>
        Load countries
      </Button>
    </Box>
  );
};

export default Home;
