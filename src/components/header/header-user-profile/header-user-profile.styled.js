import styled from "styled-components";
import { getAdaptiveSizePx } from "../../../globalStyled/mixins";
import {
  MediaSizePixselWidth,
  SizeNumberWidth,
} from "../../../globalStyled/variables";

export const UserHeaderMenuSection = styled.section`
  display: flex;
  flex-direction: row;

  padding-right: 2%;

  ${MediaSizePixselWidth.tableWidth} {
    position: relative;
    padding-right: 0;
    flex-direction: row-reverse;
  }
`;

export const UserHeaderMenuWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;

  ${MediaSizePixselWidth.tableWidth} {
    position: absolute;
    transform: ${({ isActiveMenu }) =>
      isActiveMenu ? "translateX(0%)" : "translateX(500%)"};
    transition: all 0.4s;

    width: ${({ isActiveMenu }) => (isActiveMenu ? "30vw" : "none")};
  }

  ${MediaSizePixselWidth.phoneWidth} {
    position: absolute;
    width: 100vw;
  }
`;

export const UserHeaderResponseMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${MediaSizePixselWidth.tableWidth} {
    flex-direction: column;

    width: 100%;
    height: 100vh;

    padding-top: 4vh;

    background-color: #25272a;

    z-index: 10;
  }
`;

export const BtnAddChanel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  align-self: center;

  width: ${getAdaptiveSizePx(
    80,
    100,
    SizeNumberWidth.tableWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  background-color: #000;

  border-radius: 5px;
  border: 2px solid #ffffff;

  font-size: ${getAdaptiveSizePx(
    15,
    30,
    SizeNumberWidth.phoneWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  font-weight: 600;

  color: #fff;
`;

export const IconMenuWrapper = styled.div`
  display: none;

  ${MediaSizePixselWidth.tableWidth} {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-right: 2vw;

    z-index: 20;
    transition: all 0.4s;

    position: ${({ isActiveMenu }) => (isActiveMenu ? "absolute" : 0)};
    transform: ${({ isActiveMenu }) =>
      isActiveMenu ? "translateX(-30vw)" : 0};
    top: 3vh;
  }

  ${MediaSizePixselWidth.phoneWidth} {
    transform: ${({ isActiveMenu }) => (isActiveMenu ? "translateX(0vw)" : 0)};
  }
`;
