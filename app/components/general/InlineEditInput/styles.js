import styled from 'styled-components';

export const Base = styled.div`
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${p =>
    p.isFocused ? p.theme.gray :
    p.isHovering ? p.theme.grayLighter1 :
    'transparent'
  }
  cursor: pointer;
  padding: 10px;
  transition: all ease-in-out 0.2s;
  flex: 1;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  borderWidth: 0px;
  height: auto;
  lineHeight: inherit;
  borderColor: none;
  font-size: inherit;
  font-family: inherit;
  margin: none;
  padding: none;
  color: inherit;
  boxShadow: none;
  width: 100%;
`;

export const labelStyle = ({ isFocused, isHovering, theme }) => ({
  marginBottom: 10,
  fontSize: '0.65em',
  color: isFocused || isHovering ? theme.text : theme.grayDarker2,
  transition: 'all ease-in-out 0.2s',
});
