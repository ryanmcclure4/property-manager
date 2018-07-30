import styled from 'styled-components';

export const Base = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  height: 40px;
  margin-left: ${p => p.isHovering ? 5 : 0}px;
  transition: all ease-in-out 0.2s;
`;
