import { useCallback } from 'react';

import CustomButton from '@/components/CustomButton';
import CustomLink from '@/components/CustomLink';
import NavBar from '@/components/NavBar';
import { useAuth } from '@/hooks/auth';

import { useForm } from 'react-hook-form';
import api from '@/services/api';
import { toast } from 'react-toastify';
import {
  CourseForm,
  CourseFormContainer,
  CourseFormTitle,
  CourseInput,
  Container,
  FormError,
} from './styles';

export default function CreateCourse(): JSX.Element {
  const { signOut } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignOut = useCallback(async () => {
    signOut();
  }, [signOut]);

  const handleSendData = useCallback(
    async data => {
      try {
        await api.post('/course', data);
        toast.success('Curso Criada com Sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        reset();
      } catch (error) {
        toast.error('Erro ao criar curso.', {
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
    [reset],
  );

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
            active
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
        <CourseFormContainer>
          <CourseFormTitle>Criar curso</CourseFormTitle>
          <CourseForm onSubmit={handleSubmit(handleSendData)}>
            <CourseInput
              placeholder="Nome do curso"
              {...register('name', {
                required: 'Nome do curso obrigatório.',
              })}
            />
            <CourseInput
              placeholder="Url da imagem"
              {...register('image_url', {
                required: 'Url da imagem do curso obrigatória.',
              })}
            />
            <CourseInput
              placeholder="Titulo da categoria existente"
              {...register('category_title', {
                required: 'Titulo da categoria obrigatória.',
              })}
            />
            <CustomButton type="submit">Criar</CustomButton>
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
