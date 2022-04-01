import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkButtonProps {
  background: string;
  textColor: string;
  border?: string;
}

export const LinkBtn = styled(Link)<LinkButtonProps>`
  text-decoration: none;
  background-color: ${props => props.background};
  color: ${props => props.textColor};
  ${props => props.border && `border: ${props.border}`};
  padding: 10px 20px;
  border-radius: 10px;
  transition: background 200ms;

  &:hover {
    background-color: ${props =>
      props.background && darken(0.1, props.background)};
  }
`;
