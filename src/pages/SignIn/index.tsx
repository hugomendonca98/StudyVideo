import LinkButton from '@/components/CustomLink';
import NavBar from '@/components/NavBar';
import { useAuth } from '@/hooks/auth';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomButtom from '@/components/CustomButton';
import {
  Container,
  FormContainer,
  FormError,
  FormInput,
  FormTitle,
} from './styles';

export default function SignIn(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const history = useHistory();

  const sendData = useCallback(
    async data => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/painel');

        toast.success('Bem Vindo(a)', {
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
        toast.error(
          'Erro ao fazer login, verique as informações e tente novamente.',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          },
        );
      }
    },
    [history, signIn],
  );

  return (
    <>
      <NavBar>
        <LinkButton background="#fff" textcolor="gray" linkTo="/">
          Voltar
        </LinkButton>
      </NavBar>
      <Container>
        <FormContainer onSubmit={handleSubmit(sendData)}>
          <FormTitle>Entrar</FormTitle>
          <FormInput
            placeholder="E-mail"
            {...register('email', {
              required: 'Endereço de email obrigatório.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Endereço de email invalido',
              },
            })}
          />
          <FormInput
            placeholder="Senha"
            type="password"
            {...register('password', { required: 'Senha obrigatória.' })}
          />
          {errors.email?.message && (
            <FormError>{errors.email.message}</FormError>
          )}
          {errors.password?.message && (
            <FormError>{errors.password.message}</FormError>
          )}
          <CustomButtom type="submit">Entrar</CustomButtom>
        </FormContainer>
      </Container>
    </>
  );
}
