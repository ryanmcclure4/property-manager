import styled from 'styled-components';

export const Base = styled.div`
  display: flex;
  position: relative;
  height: 50px;
  margin: 0px 20px;
  background-color: ${p => p.theme.grayLighter1};
  border-radius: 40px;
`;

export const Item = styled.button`
  flex: 1;
  font-weight: ${p => p.isActive ? 800 : 600};
  font-size: 0.8em;
  letter-spacing: ${p => p.isActive ? '0.08em' : '0.06em'};
  text-transform: uppercase;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  transform: ${p => p.isActive ? 'scale(1)' : 'scale(1.01)'};
  z-index: 2;
`;

export const ActiveBarWrapper = styled.div`
  width: ${p => (100 / Number(p.totalItems))}%;
  left: ${p => ((100 / Number(p.totalItems)) * p.selectedIndex)}%;
  height: 100%;
  padding: 5px;
  position: absolute;
  transition: all ease-in-out 0.2s;
  box-sizing: border-box;
`;

export const ActiveBar = styled.div`
  height: 40px;
  border-radius: 40px;
  background-color: #fff;
`;
