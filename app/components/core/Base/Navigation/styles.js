import styled from 'styled-components';

export const Base = styled.div`
  width: 250px;
  max-width: 250px;
  min-width: 250px;
  height: 100%;
  background-color: #f8f8fb;
  padding-top: 20px;
`;

export const Categories = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-around;
`;

export const CategoryHeader = styled.div`
  font-size: 0.9em;
  letter-spacing: 0.06em;
  font-weight: 700;
  margin: 20px;
`;
