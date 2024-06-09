import { FC, PropsWithChildren } from "react";
import { ButtonComponent } from "./styles";
import { ButtonColor, ButtonSize, ButtonVariant } from "../../../utils";

export interface ButtonProps {
  onClick?: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  isBorder?: boolean;
  variant?: ButtonVariant;
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  color = ButtonColor.secondary,
  size = ButtonSize.md,
  isBorder = true,
  variant = ButtonVariant.outlined,
}) => {
  return (
    <>
      <ButtonComponent
        variant={variant}
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
