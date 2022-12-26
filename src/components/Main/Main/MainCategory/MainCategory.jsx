import React from 'react'
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

import {MainCategoryBody,MainCategoryIcon,MainCategoryItem,MainCategoryRow,MainCategoryText} from './MainCategoryStyle'


function MainCategory() {
  return (
    <div>
      <MainCategoryBody>


        <MainCategoryRow>

          <MainCategoryItem>
            <MainCategoryIcon><Vege/></MainCategoryIcon>
            <MainCategoryText>야채/과일</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <MainCategoryIcon><Meat/></MainCategoryIcon>
            <MainCategoryText>정육</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <MainCategoryIcon><Sea/></MainCategoryIcon>
            <MainCategoryText>수산/해산</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <MainCategoryIcon><Rice/></MainCategoryIcon>
            <MainCategoryText>쌀/잡곡</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <MainCategoryIcon><Food/></MainCategoryIcon>
            <MainCategoryText>식품</MainCategoryText>
          </MainCategoryItem>

        </MainCategoryRow>


        <MainCategoryRow>

          <MainCategoryItem>
            <MainCategoryIcon><Daily/></MainCategoryIcon>
            <MainCategoryText>생활용품</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <MainCategoryIcon><Dessert/></MainCategoryIcon>
            <MainCategoryText>디저트</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <MainCategoryIcon><Drink/></MainCategoryIcon>
            <MainCategoryText>음료/주류</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <MainCategoryIcon><Pet/></MainCategoryIcon>
            <MainCategoryText>반려동물</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <MainCategoryIcon><Etc/></MainCategoryIcon>
            <MainCategoryText>기타</MainCategoryText>
          </MainCategoryItem>

        </MainCategoryRow>





      </MainCategoryBody>
    </div>
  )
}

export default MainCategory