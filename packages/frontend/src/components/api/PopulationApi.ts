import axios from "axios";

export function fetchPopulation() {
  const options = {
    method: "GET",
    url: "http://localhost:8000/api/population",
    headers: {}
  };
  axios
    .request(options)
    .then(function ({ data }: { data: Response }) {
      console.log(data);
    })
    .catch(function (error: any) {
      console.error(error);
    });
}
