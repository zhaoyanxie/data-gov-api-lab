# Lab: Create Web APIs to serve data in CSV files

In this lab, 

### Getting started
- Fork and clone repo
- Install dependencies: `npm install`
- cd into project directory
- Start application: `npx nodemon server.js`

### Tasks:

- Find and download an interesting CSV file from [data.gov.sg](https://data.gov.sg/dataset?groups=society)
- Move the csv file to `./utils` and rename it to `utils/data.csv` (you can replace the existing file)
- Convert csv file to JSON: `node utils/convertCSVToJSON.js` (you can replace the existing file)
- Load JSON data as a javascript object. You can find a code sample for doing this in `./demo.js`. Execute demo.js by running: `node demo.js`
- Serve data via CRUD endpoints!
  - `GET /data`
  - `GET /data/:someParameter`
  - filter data use query params
    - `GET /data?someAttribute=something`
    - `GET /data?someAttribute=something&otherAttribute=anything`
  - Implement remaing CRUD handlers
    - `POST /data`
    - `PUT /data/:someParameter`
    - `DELETE /data/:someParameter`
    - (note: your handlers would only change the data in memory, meaning that once you restart your server, it will revert to the original data loaded from the JSON file. Nonetheless, for practice purposes, we'll implement handlers for these CRUD routes)

