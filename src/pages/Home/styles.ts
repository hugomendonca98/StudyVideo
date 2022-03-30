import styled from 'styled-components';

import banner from '@/assets/banner.png';

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  list-style: none;
  margin-right: 10px;
`;

export const Header = styled.header`
  background: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
  background-color: #6e2fbd;
  color: #fff;
  font-size: 30px;
`;

export const HeaderText = styled.div`
  padding-top: 220px;
`;

export const HeaderTitle = styled.h2`
  background: #2d2d2d;
  color: #fff;
  width: 400px;
  margin: 10px;
  padding: 5px;
  font-size: 40px;
  font-weight: 500;
  border-radius: 10px;
  text-align: center;
`;

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;

export const CategoriesSection = styled.section`
  margin-top: 100px;
  font-size: 26px;
`;

export const Title = styled.h2`
  color: #2d2d2d;
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CategoryCard = styled.div`
  box-shadow: rgb(110 47 189 / 40%) -5px 5px, rgb(110 47 189 / 30%) -10px 10px,
    rgb(110 47 189 / 20%) -15px 15px, rgb(110 47 189 / 10%) -20px 20px,
    rgb(110 47 189 / 5%) -25px 25px;
  margin: 20px 20px;
  width: 300px;
  height: 220px;
  padding: 20px;
`;

export const CategoryTitle = styled.h2`
  color: #2d2d2d;
  font-size: 26px;
`;

export const CategoryDescription = styled.p`
  color: #2d2d2d;
  font-size: 17px;
  margin-top: 10px;
`;
