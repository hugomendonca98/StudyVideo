import { ReactNode } from 'react';
import { LinkBtn } from './styles';

interface LinkButtonProps {
  linkTo: string;
  background?: string;
  textColor?: string;
  border?: string;
  children: ReactNode;
}

export default function index({
  linkTo,
  background = '#6e2fbd',
  textColor = '#fff',
  border,
  children,
}: LinkButtonProps): JSX.Element {
  return (
    <LinkBtn
      href={linkTo}
      background={background}
      textColor={textColor}
      border={border}
    >
      {children}
    </LinkBtn>
  );
}
