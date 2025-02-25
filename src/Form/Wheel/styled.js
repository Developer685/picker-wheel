import styled, { css } from 'styled-components';

export const WheelContainer = styled.div`
  text-align: center;
  position: relative;
`;

export const Button = styled.button`
  ${({ spin }) => spin && css`
    margin-top: 2px;
    background-color: ${({ theme }) => theme.color.lightTheme.fieryCoral};
    `}

  ${({ reset }) => reset && css`
    background: red;

    `}
`;

export const Pointer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid red;
  z-index: 1;
`;

export const ButtonsContainer = styled.div`

`;

export const StyledWheel = styled.div`
  position: relative; 
  display: inline-block;
`;


