import { csvToJson } from "./csv-to-json";
import { readFileSync, writeFileSync } from "fs";

jest.mock("fs");
const mockedReadFileSync = readFileSync as jest.MockedFunction<typeof readFileSync>;
const mockedWriteFileSync = writeFileSync as jest.MockedFunction<typeof writeFileSync>;

const inputCsv = `"Data Source","World Development Indicators",

"Last Updated Date","2023-03-01",

"Country Name","Country Code","Indicator Name","Indicator Code","1960","2021",
"Moldova","MDA","Population, total","SP.POP.TOTL","2074015","2615199",`;

const outJson = `[
  {
    "1960": "2074015",
    "2021": "2615199",
    "countryName": "Moldova",
    "countryCode": "MDA",
    "indicatorName": "Population, total",
    "indicatorCode": "SP.POP.TOTL",
    "": ""
  }
]`;

describe("csv-to-json", () => {
  it("reads csv to json successfully", () => {
    mockedReadFileSync.mockReturnValueOnce(inputCsv);

    csvToJson();

    expect(mockedWriteFileSync).toBeCalledWith(expect.anything(), outJson, expect.anything());
  });
});
