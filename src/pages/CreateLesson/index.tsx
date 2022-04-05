import { useCallback } from 'react';

import CustomButton from '@/components/CustomButton';
import CustomLink from '@/components/CustomLink';
import NavBar from '@/components/NavBar';
import { useAuth } from '@/hooks/auth';

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

export default function CreateLesson(): JSX.Element {
  const { signOut } = useAuth();
  const { id } = useParams<{ id: string }>();
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
        await api.post(`/lesson/${id}`, {
          title: data.title,
          video_url: data.video_url,
        });
        toast.success('Aula Criada com Sucesso!', {
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
        toast.error('Erro ao criar aula.', {
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
    [id, reset],
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
            active="true"
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
          <CourseFormTitle>Criar aula</CourseFormTitle>
          <CourseForm onSubmit={handleSubmit(handleSendData)}>
            <CourseLabel htmlFor="name">Titulo da aula:</CourseLabel>
            <CourseInput
              placeholder="titulo da aula"
              {...register('title', {
                required: 'titulo da aula obrigatório.',
              })}
            />
            <CourseLabel htmlFor="video_url">Url do video:</CourseLabel>
            <CourseInput
              placeholder="Url do video"
              {...register('video_url', {
                required: 'Url do video obrigatório.',
              })}
            />

            <CustomButton type="submit">Criar</CustomButton>
            {errors.title?.message && (
              <FormError>{errors.title.message}</FormError>
            )}
            {errors.video_url?.message && (
              <FormError>{errors.video_url.message}</FormError>
            )}
          </CourseForm>
        </CourseFormContainer>
      </Container>
    </>
  );
}
