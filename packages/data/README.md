`countries.json` - backup of countries exported from https://countries.trevorblades.com/graphql
`population.json` - population per countries data exported from https://data.worldbank.org/indicator/SP.POP.TOTL?end=2021&start=2021&view=map. The exported CSV file with population for all countries is analyzed to filter out countries not in `countries.json` and final list of countries population data is saved. Resulting `population.json` will be later served via `api` to be consumed by consumers (e.g. `frontend` react app).

Depending on the future needs, source CSV population file and `countries.json` should be updated to produce newer version of `population.json`. This is pretty much manual process, but serves well for this sample project.
