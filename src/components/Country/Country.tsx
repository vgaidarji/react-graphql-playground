import { useQuery } from "@apollo/react-hooks";
import { GET_COUNTRY } from '../Country/countryGqlQuery';

const CountriesList: React.FC = () => {
    const { loading, error, data } = useQuery(GET_COUNTRY, { 
      variables: { countryCode: "MD" }, 
    });
  
    console.log(data);

      return (
          <> Country page</>
        )
  }
  
  export default CountriesList;