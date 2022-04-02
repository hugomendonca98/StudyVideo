import {
  NoExistDataContainer,
  NoExistDataLink,
  NoExistDataTitle,
} from './styles';

interface NoExistDataProps {
  title: string;
  btnText: string;
  link: string;
}

export default function NoExistData({
  title,
  btnText,
  link,
}: NoExistDataProps): JSX.Element {
  return (
    <NoExistDataContainer>
      <NoExistDataTitle>{title}</NoExistDataTitle>
      <NoExistDataLink to={link}>{btnText}</NoExistDataLink>
    </NoExistDataContainer>
  );
}
