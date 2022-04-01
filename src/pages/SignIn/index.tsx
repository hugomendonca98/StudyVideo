import LinkButton from '@/components/LinkButton';
import NavBar from '@/components/NavBar';
import { useAuth } from '@/hooks/auth';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Container, FormContainer, FormInput, FormTitle } from './styles';

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

        history.push('/dashboard');
      } catch (error) {
        console.log(error);
      }
    },
    [history, signIn],
  );

  return (
    <>
      <NavBar>
        <LinkButton background="#fff" textColor="gray" linkTo="/">
          Voltar
        </LinkButton>
      </NavBar>
      <Container>
        <FormContainer onSubmit={handleSubmit(sendData)}>
          <FormTitle>Entrar</FormTitle>
          <FormInput
            placeholder="E-mail"
            {...register('email', {
              required: 'O e-mail é obrigatório.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Endereço de email invalido',
              },
            })}
          />
          <FormInput
            placeholder="Senha"
            {...register('password', { required: 'A senha é obrigatória.' })}
          />
          {errors.email?.message && <span>{errors.email.message}</span>}
          {errors.password?.message && <span>{errors.password.message}</span>}

          <input type="submit" />
        </FormContainer>
      </Container>
    </>
  );
}
