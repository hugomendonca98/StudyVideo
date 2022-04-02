import { useCallback } from 'react';

import NavBar from '@/components/NavBar';
import CustomButton from '@/components/CustomButton';
import CourseCard from '@/components/CourseCard';
import { useAuth } from '@/hooks/auth';
import DashboardSection from '@/components/DashboardSection';
import CustomLink from '@/components/CustomLink';
import { Cards, Container } from './styles';

export default function Dashboard(): JSX.Element {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(async () => {
    signOut();
  }, [signOut]);

  return (
    <>
      <NavBar>
        <div>
          <CustomLink
            background="#fff"
            textcolor="#2d2d2d"
            linkTo="/painel"
            padding="5px 10px"
            active
          >
            Cursos
          </CustomLink>
          <CustomLink
            background="#fff"
            textcolor="#2d2d2d"
            linkTo="/criar-curso"
            padding="5px 10px"
          >
            Criar curso
          </CustomLink>
          <CustomLink
            background="#fff"
            textcolor="#2d2d2d"
            linkTo="/categorias"
            padding="5px 10px"
          >
            Categorias
          </CustomLink>
          <CustomLink
            background="#fff"
            textcolor="#2d2d2d"
            linkTo="/criar-categoria"
            padding="5px 10px"
          >
            Criar categoria
          </CustomLink>
          <CustomButton
            background="#fff"
            textcolor="#2d2d2d"
            onClick={handleSignOut}
          >
            Sair
          </CustomButton>
        </div>
      </NavBar>
      <Container>
        <DashboardSection
          title="Nenhum curso cadastrado."
          btnText="Criar Curso"
          link="/"
        />
        <Cards>
          <CourseCard
            title="Typescript"
            imageUrl="https://sempreupdate.com.br/wp-content/uploads/2020/09/typescriptfeature.jpg"
            categoryTitle="Programação"
            userName="Hugo Mendonça"
            courseRoute="#"
          />
          <CourseCard
            title="Typescript"
            imageUrl="https://sempreupdate.com.br/wp-content/uploads/2020/09/typescriptfeature.jpg"
            categoryTitle="Programação"
            userName="Hugo Mendonça"
            courseRoute="#"
          />
          <CourseCard
            title="Typescript"
            imageUrl="https://sempreupdate.com.br/wp-content/uploads/2020/09/typescriptfeature.jpg"
            categoryTitle="Programação"
            userName="Hugo Mendonça"
            courseRoute="#"
          />
          <CourseCard
            title="Typescript"
            imageUrl="https://sempreupdate.com.br/wp-content/uploads/2020/09/typescriptfeature.jpg"
            categoryTitle="Programação"
            userName="Hugo Mendonça"
            courseRoute="#"
          />
        </Cards>
      </Container>
    </>
  );
}
