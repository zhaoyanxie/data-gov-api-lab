const app = require("./app");
const PORT = process.env.PORT || 3000;
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger-sample.json");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`your app has started on port ${PORT}...`);
});
