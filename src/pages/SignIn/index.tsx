import LinkButton from '@/components/LinkButton';
import NavBar from '@/components/NavBar';
import { Container, FormContainer, FormInput, FormTitle } from './styles';

export default function index(): JSX.Element {
  return (
    <>
      <NavBar>
        <LinkButton background="#fff" textColor="gray" linkTo="/">
          Voltar
        </LinkButton>
      </NavBar>
      <Container>
        <FormContainer>
          <FormTitle>Entrar</FormTitle>
          <FormInput placeholder="E-mail" />
          <FormInput placeholder="Senha" />
          <LinkButton linkTo="#a">Entrar</LinkButton>
        </FormContainer>
      </Container>
    </>
  );
}
