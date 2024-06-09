import ApiError from "../error/ApiError";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/models.ts");

const generateJwt = (id: number, email: string, role: string) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req: any, res: any, next: any) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Неккоректный email или password!"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует!"),
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req: any, res: any, next: any) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Пользователь не найден!"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Пользователь не найден!"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req: any, res: any, next: any) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.status(200).json({ token });
  }
}

module.exports = new UserController();
