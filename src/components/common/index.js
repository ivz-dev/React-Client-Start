import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans",sans-serif;
`;