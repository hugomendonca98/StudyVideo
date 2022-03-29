import React from 'react';
import logo from '@/assets/logo.png';
import {
  Container,
  Item,
  ItemLink,
  Menu,
  MenuItems,
  MenuLogo,
  Nav,
} from './styles';

export default function index(): JSX.Element {
  return (
    <Nav>
      <Container>
        <Menu>
          <MenuLogo src={logo} />
          <MenuItems>
            <Item>
              <ItemLink href="#a">Home</ItemLink>
            </Item>
            <Item>
              <ItemLink href="#a">Cursos</ItemLink>
            </Item>
            <Item>
              <ItemLink href="#a">Criar conta</ItemLink>
            </Item>
            <Item>
              <ItemLink href="#a">Entrar</ItemLink>
            </Item>
          </MenuItems>
        </Menu>
      </Container>
    </Nav>
  );
}
