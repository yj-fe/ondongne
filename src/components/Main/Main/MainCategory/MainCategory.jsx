import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as Vege } from "assets/main/category/Vegetable.svg";
import { ReactComponent as Meat } from "assets/main/category/Meat.svg";
import { ReactComponent as Sea } from "assets/main/category/Seafood.svg";
import { ReactComponent as Rice } from "assets/main/category/Rice.svg";
import { ReactComponent as Food } from "assets/main/category/Food.svg";
import { ReactComponent as Daily } from "assets/main/category/Dailysupplies.svg";
import { ReactComponent as Dessert } from "assets/main/category/Dessert.svg";
import { ReactComponent as Drink } from "assets/main/category/drink.svg";
import { ReactComponent as Pet } from "assets/main/category/Pet.svg";
import { ReactComponent as Etc } from "assets/main/category/Etc.svg";

import { MainCategoryBody, MainCategoryItem, MainCategoryRow, MainCategoryText } from './MainCategoryStyle'


function MainCategory() {
  const navigate = useNavigate();

  const router = category => {
    navigate('/categories', { state: { category } })
  }

  return (
    <>
      <MainCategoryBody>

        <MainCategoryRow>
          <MainCategoryItem onClick={() => router('야채,과일')}>
            <Vege />
            <MainCategoryText >야채/과일</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem onClick={() => router('정육')}>
            <Meat />
            <MainCategoryText>정육</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem onClick={() => router('수산,해산')}>
            <Sea />
            <MainCategoryText>수산/해산</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem onClick={() => router('쌀,잡곡')}>
            <Rice />
            <MainCategoryText>쌀/잡곡</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem onClick={() => router('식품')}>
            <Food />
            <MainCategoryText>식품</MainCategoryText>
          </MainCategoryItem>
        </MainCategoryRow>


        <MainCategoryRow>
          <MainCategoryItem onClick={() => router('생활용품')}>
            <Daily />
            <MainCategoryText>생활용품</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem onClick={() => router('디저트')}>
            <Dessert />
            <MainCategoryText>디저트</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem onClick={() => router('식음료')}>
            <Drink />
            <MainCategoryText>식음료</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem onClick={() => router('반려동물')}>
            <Pet />
            <MainCategoryText>반려동물</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem onClick={() => router('기타')}>
            <Etc />
            <MainCategoryText>기타</MainCategoryText>
          </MainCategoryItem>
        </MainCategoryRow>

      </MainCategoryBody>
    </>
  )
}

export default MainCategory