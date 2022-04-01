import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Btn } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  background?: string;
  textcolor?: string;
  border?: string;
  children: ReactNode;
};

export default function index({
  background = '#6e2fbd',
  textcolor = '#fff',
  border,
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
