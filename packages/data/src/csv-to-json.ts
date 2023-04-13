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
const POPULATION_JSON = "../population.json";
const FILES_ENCODING = "utf-8";

/**
 * Removes spaces from column name and lowercases first character. E.g. "Country Name" -> "countryName".
 * @param column column name from parsed CSV file
 * @returns
 */
function transformColumnName(column: string): string {
  return column.charAt(0).toLocaleLowerCase() + column.slice(1).replace(/\s+/g, "");
}

function readPopulationCsvToJson(callback: Function) {
  const csvFilePath = path.resolve(__dirname, POPULATION_CSV);
  const fileContent = fs.readFileSync(csvFilePath, { encoding: FILES_ENCODING });
  parse(
    fileContent,
    {
      delimiter: ",",
      skip_empty_lines: true,
      relax_quotes: true,
      columns: (header) => header.map((column: string) => transformColumnName(column)),
      fromLine: 5
    },
    (_error, result) => {
      callback(result);
    }
  );
}

function formatJson(json: string): string {
  let formattedJson = JSON.stringify(json, null, 2);
  console.log("Result", formattedJson);
  return formattedJson;
}

function writeJsonToFile(json: string) {
  const jsonPath = path.resolve(__dirname, POPULATION_JSON);
  fs.writeFileSync(jsonPath, json, FILES_ENCODING);
}

(() => {
  readPopulationCsvToJson(function (result: string) {
    writeJsonToFile(formatJson(result));
  });
})();
