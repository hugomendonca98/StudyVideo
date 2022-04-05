import NavBar from '@/components/NavBar';
import LinkButton from '@/components/CustomLink';

import { useCallback, useEffect, useState } from 'react';
import api from '@/services/api';
import { useHistory, useParams } from 'react-router-dom';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { toast } from 'react-toastify';
import {
  Container,
  CourseContainer,
  CourseTitle,
  CourseTextContainer,
  CourseLessons,
  LessonCard,
  LessonTitle,
  CourseMenu,
  CourseMenuLink,
  Title,
  CourseMenuLinkText,
  CourseImage,
  CourseDeleteButton,
} from './styles';

interface User {
  id: string;
  name: string;
}

interface Categories {
  id: string;
  title: string;
}

interface Lesson {
  id: string;
  title: string;
  video_url: string;
}

interface Courses {
  id: string;
  name: string;
  image_url: string;
  categories: Categories;
  user: User;
  lessons: Lesson[];
}

export default function Course(): JSX.Element {
  const [course, setCourse] = useState<Courses>();

  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleDeleteCourse = useCallback(
    async e => {
      e.preventDefault();
      try {
        await api.delete(`/course/${id}`);
        toast.success('Curso deletado com Sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        history.push('/');
      } catch (error) {
        toast.error('Erro ao deletar o curso.', {
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
    },
    [history, id],
  );

  useEffect(() => {
    async function getCourse(): Promise<void> {
      const response = await api.get(`/course/${id}`);
      setCourse(response.data);
    }

    getCourse();
  }, [id]);

  return (
    <>
      <NavBar>
        <LinkButton background="#fff" textcolor="gray" linkTo="/">
          Voltar
        </LinkButton>
      </NavBar>
      <Container>
        {course && (
          <CourseContainer>
            <CourseTextContainer>
              <CourseTitle>{course.name}</CourseTitle>
            </CourseTextContainer>
            <CourseImage src={course.image_url} />
            <CourseMenu>
              <CourseMenuLink to={`/editar-curso/${course.id}`}>
                <FiEdit />
                <CourseMenuLinkText>Editar</CourseMenuLinkText>
              </CourseMenuLink>
              <CourseDeleteButton onClick={handleDeleteCourse}>
                <FiTrash color="#2d2d2d" />
                <CourseMenuLinkText>Excluir</CourseMenuLinkText>
              </CourseDeleteButton>
              <CourseMenuLink to={`/criar-aula/${course.id}`}>
                <MdOutlinePlayLesson />
                <CourseMenuLinkText>Criar aula</CourseMenuLinkText>
              </CourseMenuLink>
            </CourseMenu>
            <CourseLessons>
              <Title>Aulas Disponiveis</Title>
              {course.lessons.map(lesson => (
                <LessonCard
                  to={{ pathname: lesson.video_url }}
                  key={lesson.id}
                  target="_blank"
                >
                  <LessonTitle>{lesson.title}</LessonTitle>
                </LessonCard>
              ))}
            </CourseLessons>
          </CourseContainer>
        )}
      </Container>
    </>
  );
}
