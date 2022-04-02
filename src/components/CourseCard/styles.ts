import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardLink = styled(Link)`
  text-decoration: none;
  width: 250px;
  border-radius: 10px;
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

export const CardImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const CardTitle = styled.h2`
  color: #2d2d2d;
  padding: 10px;
`;

export const CardCategory = styled.p`
  color: #545454;
  padding: 10px;
`;

export const CardUserName = styled.p`
  color: #545454;
  padding: 10px;
`;
