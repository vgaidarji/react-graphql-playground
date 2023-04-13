`countries.json` - backup of countries exported from https://countries.trevorblades.com/graphql
`population.json` - population per countries data exported from https://data.worldbank.org/indicator/SP.POP.TOTL?end=2021&start=2021&view=map. Resulting `population.json` will be later served via `api` to be consumed by consumers (e.g. `frontend` react app).

Use `build` and `start` scripts to generate final `population.json`.

```
npm run build
npm run start
```
