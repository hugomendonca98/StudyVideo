import React from 'react';
import {
  Container,
  Item,
  Menu,
  MenuItems,
  MenuLogo,
  MenuMobile,
  Nav,
} from './styles';

export default function index() {
  const handleTeste = () => {
    console.log('kkkk');
  };

  return (
    <Nav>
      <Container>
        <Menu>
          <MenuMobile>
            {/** logo e icone */}
            <MenuLogo />
          </MenuMobile>
          <MenuItems>
            {/** items do menu */}
            <Item>
              <a href="#">Teste</a>
            </Item>
          </MenuItems>
        </Menu>
      </Container>
    </Nav>
  );
}
