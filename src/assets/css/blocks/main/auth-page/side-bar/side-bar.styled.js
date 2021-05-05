import styled from "styled-components";
import { MediaSizePixselWidth } from "../../../../../../globalStyled/variables";

export const SideBarSection = styled.section`
  position: relative;
  flex: 0 1 20%;

  background-color: #25272a;

  overflow: auto;

  ${MediaSizePixselWidth.smDesktopWidth} {
    flex: 0 1 25%;
  }

  ${MediaSizePixselWidth.smTableWidth} {
    flex: 0 1 20%;
  }

  ${MediaSizePixselWidth.phoneWidth} {
    flex: 0 1 100%;
    display: ${({ showSideBar }) => (showSideBar ? "flex" : "none")};
    flex-direction: column;
  }
`;

export const SideBarBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 2vh;
  padding-left: 2vw;
  padding-right: 2vw;

  ${MediaSizePixselWidth.phoneWidth} {
    padding: 2vh 15vw 2vh 15vw;
  }
`;
