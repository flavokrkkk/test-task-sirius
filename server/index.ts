//Главный файл с запуском сервера и всеми зависимостями
const express = require("express");
const dotenv = require("dotenv").config();
const sequelize = require("./db.ts");
const models = require("./models/models.ts");
const cors = require("cors");
const router = require("./routes/index.ts");
const errorHandler = require("./middleware/ErrorHandlingMiddleware.ts");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

//Обработка ошибок - Миддлвейер
app.use(errorHandler);

const started = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

started();
