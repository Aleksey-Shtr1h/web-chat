import styled from "styled-components";

export const ContainerPreload = styled.div`
  position: ${(props) => props.position};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: #f1f1f1;

  opacity: 1;
`;

export const PreloadTitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: 5px;

  padding-left: 4px;

  opacity: 0.5;
`;
