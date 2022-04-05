import { useCallback, useEffect, useState } from 'react';

import NavBar from '@/components/NavBar';
import CustomButton from '@/components/CustomButton';
import { useAuth } from '@/hooks/auth';
import DashboardSection from '@/components/DashboardSection';
import CustomLink from '@/components/CustomLink';
import api from '@/services/api';
import { toast } from 'react-toastify';
import { CardContainer, Cards, CardTitle, Container } from './styles';

interface Categories {
  id: string;
  title: string;
}

export default function Categories(): JSX.Element {
  const [categories, setCategory] = useState<Categories[]>([]);

  const { signOut } = useAuth();

  useEffect(() => {
    async function getCourses(): Promise<void> {
      try {
        const response = await api.get('/category');
        setCategory(response.data);
      } catch (error) {
        toast.error('Erro ao carregar as categorias.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    }
    getCourses();
  }, []);

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
            active="true"
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
        <Cards>
          {categories.length >= 1 ? (
            categories.map(category => (
              <CardContainer key={category.id}>
                <CardTitle>{category.title}</CardTitle>
              </CardContainer>
            ))
          ) : (
            <DashboardSection
              title="Nenhuma categoria cadastrada."
              btnText="Criar Categoria"
              link="/criar-categoria"
            />
          )}
        </Cards>
      </Container>
    </>
  );
}
