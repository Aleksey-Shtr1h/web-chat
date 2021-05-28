import styled from 'styled-components';
import { getAdaptiveSizePx } from './mixins';
import { MediaSizePixselWidth, SizeNumberWidth } from './variables';

interface BooleanElementProps {
  isModalClick: boolean;
}

export const FormMain = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;
  background-color: #383b3f;
`;

export const WrapperFormMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  width: 80%;
`;

export const FormMainList = styled.ul`
  padding-top: 10%;
`;

export const FormMainItem = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;

  padding-bottom: 6%;
`;

export const FormMainLabel = styled.label`
  position: relative;

  align-self: flex-start;

  padding-left: 3%;
  padding-bottom: 3%;

  font-weight: 500;

  color: #fff;
`;

export const FormMainInput = styled.input`
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 2%;

  border: 3px solid #fff;

  border-radius: 5px;

  background-color: #f4f5f4;

  outline: none;

  &:focus {
    border: 3px solid blue;
  }

  &::placeholder {
    font-weight: 400;
  }
`;

export const BtnMainForm = styled.button`
  font-weight: 600;

  background-color: #03a9f4;

  color: #000000ab;

  border: none;
  border-radius: 5px;
  outline: none;

  &:hover {
    background-color: #00bcd4;
    color: #fffffff0;

    cursor: pointer;
  }
`;

export const ModalSection = styled.section<BooleanElementProps>`
  position: absolute;

  width: 100%;
  height: 100%;

  background: #00000021;

  z-index: 100;

  transition: all 0.5s;

  transform: ${({ isModalClick }) =>
    isModalClick ? 'translateY(0%)' : 'translateY(-300%)'};

  ${MediaSizePixselWidth.smDesktopWidth} {
    background: #0000008a;
  }

  ${MediaSizePixselWidth.phoneWidth} {
    background: #000000ba;
  }
`;

export const FormMainTextArea = styled.textarea`
  flex: 0 1 80%;

  padding: 1% 1%;
  margin: 0 1%;

  border-radius: 5px;
  border: 1px solid #000;

  background-color: #f4f5f4;

  outline: none;

  font-size: ${getAdaptiveSizePx(
  10,
  16,
  SizeNumberWidth.smPhoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};
  line-height: ${getAdaptiveSizePx(
  10,
  16,
  SizeNumberWidth.smPhoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  font-weight: bold;

  &:focus {
    max-height: 300px;
    border: 1px solid #ff000070;
  }

  &:focus::placeholder {
    font-size: 0;
  }

  &::placeholder {
    font-weight: 400;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;

  margin-left: -15%;
  margin-top: -10%;

  width: 36%;

  border-radius: 10px;
  border: 2px solid #fff;

  box-shadow: 0 30px 50px #8a7b7bb3;

  ${MediaSizePixselWidth.smDesktopWidth} {
    left: 55%;
    box-shadow: 0px 0px 100px 20px #aeadad;
  }

  ${MediaSizePixselWidth.tableWidth} {
    width: 44%;
  }

  ${MediaSizePixselWidth.phoneWidth} {
    width: 70%;
    left: 30%;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BtnForm = styled(BtnMainForm)`
  margin: 0 2% 5% 2%;

  padding: 2% 5%;

  font-size: ${getAdaptiveSizePx(
  10,
  18,
  SizeNumberWidth.smPhoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};
  line-height: ${getAdaptiveSizePx(
  10,
  18,
  SizeNumberWidth.smPhoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  ${MediaSizePixselWidth.smDesktopWidth} {
    margin: 0 2% 5% 2%;

    padding: 3% 4%;
  }
`;
