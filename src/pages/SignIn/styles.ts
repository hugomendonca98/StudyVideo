import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;

export const FormContainer = styled.form`
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  margin: auto;
  margin-top: 100px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  //border: 1px solid #d4d4d4;
`;

export const FormTitle = styled.h1`
  color: #2d2d2d;
`;

export const FormInput = styled.input`
  background-color: #ededed;
  margin: 10px;
  padding: 10px 5px;
  width: 300px;
  border: 1px solid #d4d4d4;
  outline: none;
`;
