
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  border-radius: 40px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  color: ${p =>
    p.isActive ? p.theme.text : p.theme.textLighter1
  };
  transition: all ease 0.15s;
  background-color: ${p =>
    p.isActive ? p.theme.gray : 'transparent'
  };
  &:hover {
    background-color: ${p => p.theme.gray};
    transform: scale(1.05);
  }
`;
