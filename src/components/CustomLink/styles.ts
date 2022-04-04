import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkButtonProps {
  background: string;
  textcolor: string;
  border: string;
  padding: string;
  active: string;
}

export const LinkBtn = styled(Link)<LinkButtonProps>`
  text-decoration: none;
  background-color: ${props => props.background};
  color: ${props => props.textcolor};
  ${props => props.border && `border: ${props.border}`};
  border-radius: 10px;
  transition: background 200ms;
  padding: ${props => props.padding};
  margin: 5px;

  background-color: ${props =>
    props.active === 'true' && darken(0.1, props.background)};

  &:hover {
    background-color: ${props =>
      props.background && darken(0.1, props.background)};
  }
`;
