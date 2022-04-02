import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { LinkBtn } from './styles';

interface LinkButtonProps {
  linkTo: string;
  background?: string;
  textcolor?: string;
  border?: string;
  padding?: string;
  active?: boolean;
  children: ReactNode;
}

export default function CustomLink({
  linkTo,
  background = '#6e2fbd',
  textcolor = '#fff',
  border = 'none',
  padding = '10px 20px',
  children,
  active = false,
}: LinkButtonProps): JSX.Element {
  return (
    <LinkBtn
      to={linkTo}
      background={background}
      textcolor={textcolor}
      border={border}
      padding={padding}
      active={active}
    >
      {children}
    </LinkBtn>
  );
}

CustomLink.prototypes = {
  background: PropTypes.string,
  textcolor: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
  active: PropTypes.bool,
};

CustomLink.defaultProps = {
  background: '#6e2fbd',
  textcolor: '#fff',
  border: 'none',
  padding: '10px 20px',
  active: false,
};
