import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";

// exported from https://data.worldbank.org/indicator/SP.POP.TOTL?end=2021&start=2021&view=map
// first row: "Data Source","World Development Indicators",
// empty
// third row: "Last Updated Date","2023-03-01",
// fourth row (columns): "Country Name","Country Code","Indicator Name","Indicator Code","1960",...,"2021",
// (data)
const POPULATION_CSV = "../API_SP.POP.TOTL_DS2_en_csv_v2_5358404.csv";

type CountryPopulation = {
  countryName: string;
  countryCode: string;
  indicatorName: string;
  indicatorCode: number;
  1960: string;
};

function transformColumnName(column: string): string {
  // "Country Name" -> "countryName"
  // remove space and lower first char case
  return column.charAt(0).toLocaleLowerCase() + column.slice(1).replace(/\s+/g, "");
}

(() => {
  const csvFilePath = path.resolve(__dirname, POPULATION_CSV);
  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

  parse(
    fileContent,
    {
      delimiter: ",",
      skip_empty_lines: true,
      relax_quotes: true,
      columns: (header) => header.map((column: string) => transformColumnName(column)),
      fromLine: 5
    },
    (error, result: CountryPopulation[]) => {
      if (error) {
        console.error(error);
      }
      console.log("Result", JSON.stringify(result));
    }
  );
})();
