import styled from 'styled-components';

import banner from '@/assets/banner.png';

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  list-style: none;
  font-family: Roboto;
  margin-right: 10px;
`;

export const Header = styled.header`
  background: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
  background-color: #6e2fbd;
  color: #fff;
  font-size: 30px;
`;

export const HeaderText = styled.div`
  padding-top: 220px;
`;

export const HeaderTitle = styled.div`
  background: #2d2d2d;
  width: 400px;
  margin: 10px;
  padding: 5px;
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-weight: 500;
`;

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;
