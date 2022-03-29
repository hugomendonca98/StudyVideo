import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;

export const MenuLogo = styled.img`
  width: 200px;
`;

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  list-style: none;
  font-family: Roboto;
  margin-right: 10px;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  color: #2d2d2d;
`;
