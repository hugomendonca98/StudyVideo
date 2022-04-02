import LinkButton from '@/components/CustomLink';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import {
  Header,
  HeaderText,
  HeaderTitle,
  Item,
  MenuItems,
  Container,
  CategoriesSection,
  CategoryCard,
  CategoryTitle,
  CategoryDescription,
  Categories,
} from './styles';

export default function Home(): JSX.Element {
  return (
    <>
      <NavBar>
        <MenuItems>
          <Item>
            <LinkButton
              linkTo="/entrar"
              background="#fff"
              textcolor="#6e2fbd"
              border="1px solid #E0E0E0"
            >
              Entrar
            </LinkButton>
          </Item>
          <Item>
            <LinkButton linkTo="/criar-conta">Criar Conta</LinkButton>
          </Item>
        </MenuItems>
      </NavBar>
      <Header>
        <Container>
          <HeaderText>
            <HeaderTitle>Estude onde quiser</HeaderTitle>
            <HeaderTitle>Forme grupos</HeaderTitle>
            <HeaderTitle>Totalmente online</HeaderTitle>
          </HeaderText>
        </Container>
      </Header>
      <Container>
        <CategoriesSection>
          <Categories>
            <CategoryCard>
              <CategoryTitle>Tecnologia</CategoryTitle>
              <CategoryDescription>
                Tecnologia é o conjunto de técnicas, habilidades, métodos e
                processos usados na produção de bens ou serviços, ou na
                realização de objetivos, como em investigações científicas.
              </CategoryDescription>
            </CategoryCard>
            <CategoryCard>
              <CategoryTitle>Administração</CategoryTitle>
              <CategoryDescription>
                A Administração ou Gestão é a ciência social que estuda e
                sistematiza as práticas usadas para administrar.
              </CategoryDescription>
            </CategoryCard>
            <CategoryCard>
              <CategoryTitle>Design</CategoryTitle>
              <CategoryDescription>
                O design, desenho industrial, projetismo ou projética é a
                idealização, criação, desenvolvimento, configuração, concepção,
                elaboração e especificação de produtos.
              </CategoryDescription>
            </CategoryCard>
            <CategoryCard>
              <CategoryTitle>Tecnologia</CategoryTitle>
              <CategoryDescription>
                Tecnologia é o conjunto de técnicas, habilidades, métodos e
                processos usados na produção de bens ou serviços, ou na
                realização de objetivos, como em investigações científicas.
              </CategoryDescription>
            </CategoryCard>
            <CategoryCard>
              <CategoryTitle>Administração</CategoryTitle>
              <CategoryDescription>
                A Administração ou Gestão é a ciência social que estuda e
                sistematiza as práticas usadas para administrar.
              </CategoryDescription>
            </CategoryCard>
            <CategoryCard>
              <CategoryTitle>Design</CategoryTitle>
              <CategoryDescription>
                O design, desenho industrial, projetismo ou projética é a
                idealização, criação, desenvolvimento, configuração, concepção,
                elaboração e especificação de produtos.
              </CategoryDescription>
            </CategoryCard>
          </Categories>
        </CategoriesSection>
      </Container>
      <Footer />
    </>
  );
}
