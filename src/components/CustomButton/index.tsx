import { ReactNode, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  background?: string;
  textcolor?: string;
  border?: string;
  children: ReactNode;
};

export default function CustomButton({
  background = '#6e2fbd',
  textcolor = '#fff',
  border = 'none',
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Btn
      {...rest}
      background={background}
      textcolor={textcolor}
      border={border}
    >
      {children}
    </Btn>
  );
}

CustomButton.prototypes = {
  background: PropTypes.string,
  textcolor: PropTypes.string,
  border: PropTypes.string,
};

CustomButton.defaultProps = {
  background: '#6e2fbd',
  textcolor: '#fff',
  border: 'none',
};
