import LinkButton from '@/components/CustomLink';
import NavBar from '@/components/NavBar';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomButtom from '@/components/CustomButton';
import api from '@/services/api';
import {
  Container,
  FormContainer,
  FormError,
  FormInput,
  FormTitle,
} from './styles';

export default function SignUp(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const sendData = useCallback(
    async data => {
      try {
        await api.post('/signup', {
          name: data.name,
          email: data.email,
          password: data.password,
        });

        history.push('/entrar');

        toast.success('Conta criada com sucesso.', {
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
        toast.error('Erro ao criar conta, tente novamente.', {
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
    [history],
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
          <FormTitle>Criar conta</FormTitle>
          <FormInput
            placeholder="name"
            {...register('name', {
              required: 'Nome obrigatório.',
            })}
          />
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
          {errors.name?.message && <FormError>{errors.name.message}</FormError>}
          {errors.email?.message && (
            <FormError>{errors.email.message}</FormError>
          )}
          {errors.password?.message && (
            <FormError>{errors.password.message}</FormError>
          )}
          <CustomButtom type="submit">Criar conta</CustomButtom>
        </FormContainer>
      </Container>
    </>
  );
}
