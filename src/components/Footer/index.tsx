import React from 'react';
import { Container, FooterContainer, FooterText } from './styles';

export default function index(): JSX.Element {
  return (
    <FooterContainer>
      <Container>
        <FooterText>Todos Direitos Reservados.</FooterText>
      </Container>
    </FooterContainer>
  );
}
