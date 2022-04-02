import {
  DashboardSectionContainer,
  DashboardSectionLink,
  DashboardSectionTitle,
} from './styles';

interface DashboardSectionProps {
  title: string;
  btnText: string;
  link: string;
}

export default function DashboardSection({
  title,
  btnText,
  link,
}: DashboardSectionProps): JSX.Element {
  return (
    <DashboardSectionContainer>
      <DashboardSectionTitle>{title}</DashboardSectionTitle>
      <DashboardSectionLink to={link}>{btnText}</DashboardSectionLink>
    </DashboardSectionContainer>
  );
}
