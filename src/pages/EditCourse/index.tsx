import { useCallback, useEffect, useState } from 'react';

import CustomButton from '@/components/CustomButton';
import LinkButton from '@/components/CustomLink';
import NavBar from '@/components/NavBar';

import { useForm } from 'react-hook-form';
import api from '@/services/api';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import {
  CourseForm,
  CourseFormContainer,
  CourseFormTitle,
  CourseInput,
  Container,
  FormError,
  CourseLabel,
} from './styles';

interface User {
  id: string;
  name: string;
}

interface Categories {
  id: string;
  title: string;
}

interface Course {
  id: string;
  name: string;
  image_url: string;
  categories: Categories;
  user: User;
}

export default function EditCourse(): JSX.Element {
  const [course, setCourse] = useState<Course>();

  const { id } = useParams<{ id: string }>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: course?.name,
      image_url: course?.image_url,
      category_title: course?.categories.title,
    },
  });

  useEffect(() => {
    async function getCourse(): Promise<void> {
      const response = await api.get(`/course/${id}`);
      setCourse(response.data);
      reset(response.data);
    }
    getCourse();
  }, [id, reset]);

  const handleSendData = useCallback(
    async data => {
      try {
        await api.put(`/course/${id}`, {
          name: data.name,
          image_url: data.image_url,
          category_title: data.category_title,
        });
        toast.success('Curso Editado com Sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      } catch (error) {
        toast.error('Erro ao editar o curso.', {
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
    [id],
  );

  return (
    <>
      <NavBar>
        <LinkButton background="#fff" textcolor="gray" linkTo={`/curso/${id}`}>
          Voltar
        </LinkButton>
      </NavBar>
      <Container>
        <CourseFormContainer>
          <CourseFormTitle>Editar curso</CourseFormTitle>
          <CourseForm onSubmit={handleSubmit(handleSendData)}>
            <CourseLabel htmlFor="name">Nome do curso:</CourseLabel>
            <CourseInput
              placeholder="Nome do curso"
              {...register('name', {
                required: 'Nome do curso obrigatório.',
              })}
            />
            <CourseLabel htmlFor="image_url">Url da imagem:</CourseLabel>
            <CourseInput
              placeholder="Url da imagem"
              {...register('image_url', {
                required: 'Url da imagem do curso obrigatória.',
              })}
            />
            <CourseLabel htmlFor="category_title">
              Titulo da categoria existente:
            </CourseLabel>
            <CourseInput
              defaultValue={course?.categories.title}
              placeholder="Titulo da categoria existente"
              {...register('category_title', {
                required: 'Titulo da categoria obrigatória.',
              })}
            />
            <CustomButton type="submit">Editar</CustomButton>
            {errors.name?.message && (
              <FormError>{errors.name.message}</FormError>
            )}
            {errors.image_url?.message && (
              <FormError>{errors.image_url.message}</FormError>
            )}
            {errors.category_title?.message && (
              <FormError>{errors.category_title.message}</FormError>
            )}
          </CourseForm>
        </CourseFormContainer>
      </Container>
    </>
  );
}
