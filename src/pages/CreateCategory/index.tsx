import { useCallback } from 'react';

import CustomButton from '@/components/CustomButton';
import CustomLink from '@/components/CustomLink';
import NavBar from '@/components/NavBar';
import { useAuth } from '@/hooks/auth';

import { useForm } from 'react-hook-form';
import api from '@/services/api';
import { toast } from 'react-toastify';
import {
  CategoryForm,
  CategoryFormContainer,
  CategoryFormTitle,
  CategoryInput,
  Container,
  FormError,
} from './styles';

export default function CreateCategory(): JSX.Element {
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
        await api.post('/category', data);
        toast.success('Categoria Criada com Sucesso!', {
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
        toast.error('Erro ao criar a categoria.', {
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
            active="true"
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
        <CategoryFormContainer>
          <CategoryFormTitle>Criar categoria</CategoryFormTitle>
          <CategoryForm onSubmit={handleSubmit(handleSendData)}>
            <CategoryInput
              placeholder="Titulo da categoria"
              {...register('title', {
                required: 'Titulo da categoria obrigatório.',
              })}
            />
            <CustomButton type="submit">Criar</CustomButton>
            {errors.title?.message && (
              <FormError>{errors.title.message}</FormError>
            )}
          </CategoryForm>
        </CategoryFormContainer>
      </Container>
    </>
  );
}
