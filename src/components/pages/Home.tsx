import { GetCountriesList } from "../Countries/GetCountriesList";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [loading, error, data] = GetCountriesList();

  navigate("/countries", {
    state: {
      loading: loading,
      error: error,
      data: data
    }
  });

  return <>Home page</>;
};

export default Home;
