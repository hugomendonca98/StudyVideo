import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardSectionContainer = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
  width: 100%;
`;

export const DashboardSectionTitle = styled.h2`
  color: #2d2d2d;
  margin-bottom: 10px;
`;

export const DashboardSectionLink = styled(Link)`
  text-decoration: none;
  background-color: #6e2fbd;
  color: #fff;
  text-align: center;
  padding: 10px 20px;
  border-radius: 10px;
  transition: background 200ms;
  width: 150px;
  margin: auto;

  &:hover {
    background-color: ${darken(0.1, '#6e2fbd')};
  }
`;
