import React, { FC } from "react";
import { ContainerComponent } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerComponent>{children}</ContainerComponent>;
};

export default Container;
