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

import {MainCategoryBody,MainCategoryItem,MainCategoryRow,MainCategoryText} from './MainCategoryStyle'


function MainCategory() {
  return (
    <div>
      <MainCategoryBody>

        <MainCategoryRow>
          <MainCategoryItem>
            <Vege/>
            <MainCategoryText>야채/과일</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <Meat/>
            <MainCategoryText>정육</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <Sea/>
            <MainCategoryText>수산/해산</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <Rice/>
            <MainCategoryText>쌀/잡곡</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <Food/>
            <MainCategoryText>식품</MainCategoryText>
          </MainCategoryItem>
        </MainCategoryRow>


        <MainCategoryRow>
          <MainCategoryItem>
            <Daily/>
            <MainCategoryText>생활용품</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <Dessert/>
            <MainCategoryText>디저트</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <Drink/>
            <MainCategoryText>음료/주류</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <Pet/>
            <MainCategoryText>반려동물</MainCategoryText>
          </MainCategoryItem>
          <MainCategoryItem>
            <Etc/>
            <MainCategoryText>기타</MainCategoryText>
          </MainCategoryItem>
        </MainCategoryRow>

      </MainCategoryBody>
    </div>
  )
}

export default MainCategory