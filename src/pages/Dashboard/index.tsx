import { useCallback, useEffect, useState } from 'react';

import NavBar from '@/components/NavBar';
import CustomButton from '@/components/CustomButton';
import CourseCard from '@/components/CourseCard';
import { useAuth } from '@/hooks/auth';
import DashboardSection from '@/components/DashboardSection';
import CustomLink from '@/components/CustomLink';
import api from '@/services/api';
import { Cards, Container } from './styles';

interface User {
  id: string;
  name: string;
}

interface Categories {
  id: string;
  title: string;
}

interface Courses {
  id: string;
  name: string;
  image_url: string;
  categories: Categories;
  user: User;
}

export default function Dashboard(): JSX.Element {
  const [courses, setCourse] = useState<Courses[]>([]);

  const { signOut } = useAuth();

  useEffect(() => {
    async function getCourses(): Promise<void> {
      const response = await api.get('/course');
      setCourse(response.data);
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
        {courses.length < 1 && (
          <DashboardSection
            title="Nenhum curso cadastrado."
            btnText="Criar Curso"
            link="/"
          />
        )}
        <Cards>
          {courses.map(course => (
            <CourseCard
              title={course.name}
              imageUrl={course.image_url}
              categoryTitle={course.categories.title}
              userName={course.user.name}
              courseRoute={`/course/${course.id}`}
            />
          ))}
        </Cards>
      </Container>
    </>
  );
}
