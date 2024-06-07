import styled, { css } from "styled-components";
import { ButtonColor, ButtonSize } from "../../../utils";

interface ButtonStyleProps {
  color: ButtonColor;
  size: ButtonSize;
  isBorder: boolean;
}

export const ButtonComponent = styled.button<ButtonStyleProps>`
  border: 1px solid white;
  display: inline-block;
  height: ${({ size }) =>
    size === ButtonSize.md ? "48px" : size === ButtonSize.sm && "40px"};
  border-radius: ${({ isBorder }) => isBorder && "30px"};
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.15rem;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  background-color: ${({ color }) =>
    color === ButtonColor.primary
      ? "#DECFFF"
      : color === ButtonColor.secondary
      ? "#8D7FC7"
      : '"#8D7FC7"'};

  z-index: 1;
  padding: 15px;

  color: ${({ color }) => color === ButtonColor.inherit && "black"};
  ${({ color }) => {
    switch (color !== undefined) {
      case color === ButtonColor.primary:
        return css`
          background-color: #decfff;
        `;
      case color === ButtonColor.secondary:
        return css`
          background-color: #8d7fc7;
        `;
      case color === ButtonColor.inherit:
        return css`
          background-color: #d8ecff;
        `;
    }
  }};
`;
