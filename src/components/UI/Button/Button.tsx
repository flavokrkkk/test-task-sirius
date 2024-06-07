import { FC, PropsWithChildren } from "react";
import { ButtonComponent } from "./styles";
import { ButtonColor, ButtonSize } from "../../../utils";

export interface ButtonProps {
  onClick?: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  isBorder?: boolean;
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  color = ButtonColor.secondary,
  size = ButtonSize.md,
  isBorder = true,
}) => {
  return (
    <>
      <ButtonComponent
        isBorder={isBorder}
        color={color}
        size={size}
        onClick={onClick}
      >
        {children}
      </ButtonComponent>
    </>
  );
};

export default Button;
