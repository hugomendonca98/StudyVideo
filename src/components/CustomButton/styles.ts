import { darken } from 'polished';
import styled from 'styled-components';

interface LinkButtonProps {
  background: string;
  textcolor: string;
  border?: string;
}

export const Btn = styled.button<LinkButtonProps>`
  text-decoration: none;
  border: none;
  background-color: ${props => props.background};
  color: ${props => props.textcolor};
  ${props => props.border && `border: ${props.border}`};
  padding: 10px 20px;
  border-radius: 10px;
  transition: background 200ms;
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.background && darken(0.1, props.background)};
  }
`;
