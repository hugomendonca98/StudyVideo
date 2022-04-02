import { useCallback } from 'react';

import NavBar from '@/components/NavBar';
import CustomButton from '@/components/CustomButton';
import CourseCard from '@/components/CourseCard';
import { useAuth } from '@/hooks/auth';
import NoExistData from '@/components/NoExistData';
import { Cards, Container } from './styles';

export default function Dashboard(): JSX.Element {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(async () => {
    signOut();
  }, [signOut]);

  return (
    <>
      <NavBar>
        <CustomButton onClick={handleSignOut}>Sair</CustomButton>
      </NavBar>
      <Container>
        <NoExistData
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
