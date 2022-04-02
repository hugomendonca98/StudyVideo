import React from 'react';
import {
  CardCategory,
  CardContainer,
  CardImage,
  CardLink,
  CardTitle,
  CardUserName,
} from './styles';

interface CourseCardProps {
  courseRoute: string;
  imageUrl: string;
  title: string;
  categoryTitle: string;
  userName: string;
}

export default function CourseCard({
  title,
  imageUrl,
  courseRoute,
  categoryTitle,
  userName,
}: CourseCardProps): JSX.Element {
  return (
    <CardContainer>
      <CardLink to={courseRoute}>
        <CardImage src={imageUrl} />
        <CardTitle>{title}</CardTitle>
        <CardCategory>{categoryTitle}</CardCategory>
        <CardUserName>{userName}</CardUserName>
      </CardLink>
    </CardContainer>
  );
}
