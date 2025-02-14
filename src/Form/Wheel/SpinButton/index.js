import { StyledDiv, StyledSpinButton } from "./styled";

export const SpinButton = ({ onClick, isSpinning }) => {
  return (
    <StyledDiv>
      <StyledSpinButton onClick={onClick} disabled={isSpinning}>
        Spin
      </StyledSpinButton>
    </StyledDiv>
  );
};