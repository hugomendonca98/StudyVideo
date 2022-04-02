import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;

export const CourseFormContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  width: 500px;
  height: 350px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  margin-top: 50px;
`;

export const CourseFormTitle = styled.h2``;

export const CourseForm = styled.form``;

export const CourseInput = styled.input`
  background-color: #ededed;
  margin: 10px;
  padding: 10px 5px;
  width: 300px;
  border: 1px solid #d4d4d4;
  outline: none;
  display: block;
`;

export const FormError = styled.span`
  color: #c23232;
  margin: 5px;
  font-weight: bold;
  display: block;
`;
