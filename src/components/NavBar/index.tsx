import logo from '@/assets/logo.png';
import { ReactNode } from 'react';
import { Container, Menu, MenuLogo, MenuLogoLink, Nav } from './styles';

interface NavBarProps {
  children: ReactNode;
}

export default function index({ children }: NavBarProps): JSX.Element {
  return (
    <Nav>
      <Container>
        <Menu>
          <MenuLogoLink to="/">
            <MenuLogo src={logo} />
          </MenuLogoLink>
          {children}
        </Menu>
      </Container>
    </Nav>
  );
}
