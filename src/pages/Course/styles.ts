import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;

export const CourseContainer = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-top: 20px;
  padding: 20px;
`;

export const CourseTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CourseTitle = styled.h1`
  color: #2d2d2d;
  padding: 10px;
`;

export const CourseLessons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LessonCard = styled(Link)`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-top: 20px;
  padding: 20px;
  text-decoration: none;
  background-color: #6e2fbd;
  border-radius: 10px;
`;

export const Title = styled.h2`
  color: #2d2d2d;
  font-size: 20px;
  margin-top: 50px;
`;

export const LessonTitle = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

export const CourseMenu = styled.div`
  text-align: center;
  margin: 20px;
`;

export const CourseMenuLink = styled(Link)`
  text-decoration: none;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  color: #2d2d2d;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const CourseMenuLinkText = styled.p`
  color: #2d2d2d;
  margin-left: 5px;
`;

export const CourseImage = styled.img`
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const CourseDeleteButton = styled.button`
  text-decoration: none;
  border: none;
  background-color: #fff;
  color: #2d2d2d;
  padding: 6px 10px;
  border-radius: 10px;
  transition: background 200ms;
  cursor: pointer;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  font-size: 16px;
`;
