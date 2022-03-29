import LinkButton from '@/components/LinkButton';
import NavBar from '@/components/NavBar';
import { Item, MenuItems } from './styles';

export default function Home(): JSX.Element {
  return (
    <NavBar>
      <MenuItems>
        <Item>
          <LinkButton
            linkTo="#a"
            background="#fff"
            textColor="#6e2fbd"
            border="1px solid #E0E0E0"
          >
            Entrar
          </LinkButton>
        </Item>
        <Item>
          <LinkButton linkTo="#a">Criar Conta</LinkButton>
        </Item>
      </MenuItems>
    </NavBar>
  );
}
