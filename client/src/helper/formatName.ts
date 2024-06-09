import { IUser } from "../models/IUser";

export const formatName = (user: IUser) => {
  const userName = user.email.split("@")[0].replace(/\d/g, "");
  return userName[0].toUpperCase() + userName.slice(1, userName.length);
};
