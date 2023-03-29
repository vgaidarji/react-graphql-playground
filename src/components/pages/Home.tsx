import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const styles = {
  stack: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh"
  }
};

export const Home = () => {
  const navigate = useNavigate();

  function handleLoadCountriesClick() {
    navigate("/countries");
  }

  return (
    <Stack style={styles.stack}>
      <Button variant="outlined" onClick={() => handleLoadCountriesClick()}>
        Load countries
      </Button>
    </Stack>
  );
};

export default Home;
