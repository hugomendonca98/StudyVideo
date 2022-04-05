import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  width: 250px;
  margin: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  overflow: hidden;
  border-radius: 10px;
`;

export const CardTitle = styled.h2`
  color: #2d2d2d;
  padding: 20px;
`;
