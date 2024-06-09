//Обьединяющий файл маршрутов
const Router = require("express");
const userRouter = require("./userRouter.ts");

const router = Router();

//Расписываем маршруты

router.use("/user", userRouter);

module.exports = router;
