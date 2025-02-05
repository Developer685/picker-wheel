import styled from 'styled-components';

export const StyledWheel = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #f5f5f5;
  background: conic-gradient(
    #ff0000 0% 25%, 
    #00ff00 25% 50%, 
    #0000ff 50% 75%, 
    #ffff00 75% 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #333;
  border: 1px solid #333;
  margin: auto;
`;