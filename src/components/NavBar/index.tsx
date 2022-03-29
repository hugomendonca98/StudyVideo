import logo from '@/assets/logo.png';
import { ReactNode } from 'react';
import { Container, Menu, MenuLogo, Nav } from './styles';

interface NavBarProps {
  children: ReactNode;
}

export default function index({ children }: NavBarProps): JSX.Element {
  return (
    <Nav>
      <Container>
        <Menu>
          <MenuLogo src={logo} />
          {children}
        </Menu>
      </Container>
    </Nav>
  );
}
