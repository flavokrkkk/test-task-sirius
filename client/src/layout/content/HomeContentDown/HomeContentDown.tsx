import { FC } from "react";
import { HomeContainerDown } from "./styles";

interface HomeContainerDownProps {
  children: React.ReactNode;
}

const HomeContentDown: FC<HomeContainerDownProps> = ({ children }) => {
  return <HomeContainerDown>{children}</HomeContainerDown>;
};

export default HomeContentDown;
