import styled from "styled-components";
import Slider from "react-slick";
import { getAdaptiveSizePx } from "../../../globalStyled/mixins";
import {
  MediaSizePixselWidth,
  SizeNumberWidth,
} from "../../../globalStyled/variables";
// import { MediaSizePixselWidth } from "../../../globalStyled/variables";

import leftArror from "../../../assets/image/caret-left.svg";
import rightArror from "../../../assets/image/caret-right.svg";

export const MainStart = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100%;

  margin: 5% 7%;

  ${MediaSizePixselWidth.smDesktopWidth} {
    align-items: center;
  }

  ${MediaSizePixselWidth.phoneWidth} {
    margin: 5% 0px;
  }
`;

export const SliderBox = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 50vw;

  @media screen and (max-width: 900px) {
    width: 80vw;
  }

  ${MediaSizePixselWidth.phoneWidth} {
    width: 100vw;
  }
`;

export const SliderItem = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
`;

export const SliderItemWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 5px solid #000;
  border-radius: 10px;

  width: 100%;
  height: 60vh;

  background-color: ${(props) => props.color || "#000"};

  @media screen and (max-width: 900px) {
    width: 100%;
    /* height: 40vh; */
  }

  ${MediaSizePixselWidth.tableWidth} {
    justify-content: center;
  }
`;

export const SliderWrapperContent = styled.div`
  display: flex;

  margin-top: ${getAdaptiveSizePx(
    170,
    200,
    SizeNumberWidth.tableWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  flex-direction: column;
  font-family: "Open Sans", sans-serif;

  margin-left: ${getAdaptiveSizePx(
    30,
    150,
    SizeNumberWidth.smPhoneWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  margin-right: ${getAdaptiveSizePx(
    30,
    150,
    SizeNumberWidth.smPhoneWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  color: #fff;

  ${MediaSizePixselWidth.tableWidth} {
    margin-top: 0;
  }
`;

export const SliderTitle = styled.h3`
  text-align: center;

  margin-bottom: ${getAdaptiveSizePx(
    15,
    30,
    SizeNumberWidth.smPhoneWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  padding-bottom: ${getAdaptiveSizePx(
    5,
    13,
    SizeNumberWidth.smPhoneWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  font-size: ${getAdaptiveSizePx(
    18,
    30,
    SizeNumberWidth.smPhoneWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  font-weight: 800;
  line-height: ${getAdaptiveSizePx(
    20,
    32,
    SizeNumberWidth.smPhoneWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  text-transform: uppercase;

  border-bottom: 2px solid #fff;

  ${MediaSizePixselWidth.smTableWidth} {
    border-bottom: 1px solid #fff;
  }
`;

export const SliderText = styled.p`
  text-align: center;

  font-size: ${getAdaptiveSizePx(
    8,
    12,
    SizeNumberWidth.smPhoneWidth,
    SizeNumberWidth.maxDesktopWidth
  )};

  font-weight: 800;
  line-height: 20px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const SliderIcon = styled.i`
  position: absolute;
  top: 8%;

  align-self: center;

  font-size: 100px;
  color: #ffffff8f;

  ${MediaSizePixselWidth.tableWidth} {
    display: none;
  }
`;

export const SliderEdit = styled(Slider)`
  .slick-prev,
  .slick-next {
    background: inherit;
    width: 35px;
    height: 35px;

    &::before {
      content: "";
      top: 0;

      position: absolute;

      background-repeat: no-repeat;
      background-size: contain;
      width: 100%;
      height: 100%;
    }

    z-index: 10;
  }

  .slick-prev {
    left: 50px;
    &::before {
      background-image: url(${leftArror});
    }
  }

  .slick-next {
    right: 50px;
    &::before {
      background-image: url(${rightArror});
    }
  }

  ${MediaSizePixselWidth.tableWidth} {
    .slick-prev,
    .slick-next {
      width: 0;
      height: 0;
    }
  }
`;
