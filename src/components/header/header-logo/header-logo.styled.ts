import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SizeNumberWidth } from '../../../globalStyled/variables';
import { getAdaptiveSizePx } from '../../../globalStyled/mixins';

export const LogoSection = styled.section`
  align-self: center;
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoH1 = styled.h1`
  /* font-family: $sansFont; */
  font-size: ${getAdaptiveSizePx(
  20,
  24,
  SizeNumberWidth.tableWidth,
  SizeNumberWidth.maxDesktopWidth
)};

  color: #fff;

  padding-bottom: 7px;
`;

export const LogoText = styled.p`
  display: flex;
  justify-content: center;
`;
