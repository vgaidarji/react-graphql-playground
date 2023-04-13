import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse/sync";

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

function readPopulationCsvToJson(csvFilePath: string): string {
  const csvPath = path.resolve(__dirname, csvFilePath);
  const fileContent = fs.readFileSync(csvPath, { encoding: FILES_ENCODING });
  return parse(fileContent, {
    delimiter: ",",
    skip_empty_lines: true,
    relax_quotes: true,
    columns: (header) => header.map((column: string) => transformColumnName(column)),
    fromLine: 5
  });
}

function formatJson(json: string): string {
  return JSON.stringify(json, null, 2);
}

export function writeJsonToFile(json: string, jsonFilePath: string) {
  const jsonPath = path.resolve(__dirname, jsonFilePath);
  fs.writeFileSync(jsonPath, json, FILES_ENCODING);
}

export function csvToJson(csvFilePath = POPULATION_CSV, jsonFilePath = POPULATION_JSON) {
  let parsedJson = readPopulationCsvToJson(csvFilePath);
  writeJsonToFile(formatJson(parsedJson), jsonFilePath);
}

csvToJson();
