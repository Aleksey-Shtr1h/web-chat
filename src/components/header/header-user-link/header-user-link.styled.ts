import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAdaptiveSizePx } from "../../../globalStyled/mixins";
import {
  MediaSizePixselWidth,
  SizeNumberWidth,
} from "../../../globalStyled/variables";

interface BooleanElementProps {
  active: number;
}

export const HeaderMenuLink = styled(Link) <BooleanElementProps>`
  font-family: $sansFont;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: center;

  margin-left: ${getAdaptiveSizePx(
  5,
  50,
  SizeNumberWidth.smPhoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};
  padding-top: ${getAdaptiveSizePx(
  7,
  10,
  SizeNumberWidth.tableWidth,
  SizeNumberWidth.maxDesktopWidth
)};
  padding-bottom: ${getAdaptiveSizePx(
  7,
  10,
  SizeNumberWidth.tableWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  width: ${getAdaptiveSizePx(
  80,
  100,
  SizeNumberWidth.tableWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  border-radius: 5px;
  border: ${({ active }) => (active ? "2px solid #fff" : "2px solid #25272a")};

  font-size: ${getAdaptiveSizePx(
  15,
  18,
  SizeNumberWidth.phoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  font-weight: 600;

  color: #fff;

  &:hover {
    border: none;
    background-color: #fff;
    color: #000;
  }

  ${MediaSizePixselWidth.tableWidth} {
    margin-left: 0;
    margin-bottom: 5%;
  }
`;
