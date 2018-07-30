import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  border-radius: 40;
  cursor: pointer;
  color: ${p => p.theme.grayDarker1};
  transition: all ease 0.15s;
  &:hover {
    transform: scale(1.05);
    color: ${p => p.theme.grayDarker2};
  }
`;
