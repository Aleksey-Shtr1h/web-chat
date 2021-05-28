import styled from "styled-components";
import {
  BtnMainForm,
  FormMain,
  FormMainInput,
  FormMainItem,
  FormMainLabel,
} from "../../../../globalStyled/form.styled";
import { getAdaptiveSizePx } from "../../../../globalStyled/mixins";
import {
  MediaSizePixselWidth,
  SizeNumberWidth,
} from "../../../../globalStyled/variables";

interface BooleanElementProps {
  isValid: boolean;
}

export const MainRegistartion = styled.main`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  z-index: 1;
`;

export const RegistartionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const FormRegstration = styled(FormMain)`
  width: ${getAdaptiveSizePx(
  400,
  600,
  SizeNumberWidth.phoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  ${MediaSizePixselWidth.phoneWidth} {
    width: 100%;
  }
`;

export const FormRegistrationItem = styled(FormMainItem) <BooleanElementProps>`
  ${({ isValid }) =>
    isValid
      ? 0
      : "&::after {content: 'x'; position: absolute; top: 0; right: 0; width: 20px; height: 20px; text-align: center; color: red; cursor: pointer;}"};
`;

export const FormRegistrationLabel = styled(FormMainLabel)`
  font-size: ${getAdaptiveSizePx(
  12,
  20,
  SizeNumberWidth.smPhoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};
  line-height: ${getAdaptiveSizePx(
  12,
  20,
  SizeNumberWidth.smPhoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};
`;

export const FormRegistrationInput = styled(FormMainInput) <BooleanElementProps>`
  font-size: ${getAdaptiveSizePx(
  12,
  18,
  SizeNumberWidth.smPhoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  &::placeholder {
    font-size: ${getAdaptiveSizePx(
  12,
  18,
  SizeNumberWidth.smPhoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};

    ${MediaSizePixselWidth.phoneWidth} {
      padding-top: 0.8%;
      padding-bottom: 0.8%;
      padding-left: 1%;
    }
  }

  border: 3px solid red;

  border: ${({ isValid }) => (isValid ? "3px solid #fff;" : "3px solid red")};
`;

export const BtnFormReagistration = styled(BtnMainForm)`
  font-size: ${getAdaptiveSizePx(
  16,
  25,
  SizeNumberWidth.phoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  line-height: ${getAdaptiveSizePx(
  16,
  25,
  SizeNumberWidth.phoneWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  padding-top: 3%;
  padding-bottom: 3%;

  margin-bottom: 5%;
`;
