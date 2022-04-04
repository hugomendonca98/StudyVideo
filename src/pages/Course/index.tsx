import NavBar from '@/components/NavBar';
import LinkButton from '@/components/CustomLink';

import { useEffect, useState } from 'react';
import api from '@/services/api';
import { useParams } from 'react-router-dom';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { MdOutlinePlayLesson } from 'react-icons/md';
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
              <CourseMenuLink to={`/editar-curso/${id}`}>
                <FiEdit />
                <CourseMenuLinkText>Editar</CourseMenuLinkText>
              </CourseMenuLink>
              <CourseMenuLink to="/">
                <FiTrash />
                <CourseMenuLinkText>Excluir</CourseMenuLinkText>
              </CourseMenuLink>
              <CourseMenuLink to="/">
                <MdOutlinePlayLesson />
                <CourseMenuLinkText>Criar aula</CourseMenuLinkText>
              </CourseMenuLink>
            </CourseMenu>
            <CourseLessons>
              <Title>Aulas Disponiveis</Title>
              {course.lessons.map(lesson => (
                <LessonCard to="/" key={lesson.id}>
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
