import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';

import Layout from 'components/layout/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import { Down } from 'components/commonUi/Icon';
import { Line } from '../DetailsPage/DetailsPageStyle';
import maindata from 'assets/data/maindata';
import { MarketProductCard } from 'components/Main/MarketDetail/MarketDetailProduct';
import Swiper from 'swiper';
import { FilterLayout, SortLayout } from './../../../components/layout/Layout/MoreLayout';

// 메뉴슬라이드예정
const menu = new Swiper(".mySwiper",{
  spaceBetween: 24,
  slidesPerView : 'auto',
  autoplay: false,
  loop : false, 
})

function CategoryPage() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false);
  const [sort, setSort] = useState(false);
  const ShowFilterModal = () => {
    setModal(!modal);
  }
  const ShowSortModal = () => {
    setSort(!sort);
  }
  const PropsModal = () => {
    setModal(!modal);
  }
  const CloseModal = () => {
    setSort(!sort);
  }



  return (
    <div>
      <Layout
        title="야채, 과일"
        serch={true}
        bell={true}
        cart={true}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents _padding="0" _height='100vh'>
            <L.FlexCols _padding={0} _gap={0} >

{/* =================== 메뉴 =================== */}
              <L.FlexRows _height='48px' _gap={20} _items='center' _padding='0px 0px 0px 20px'>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>전체</T.Text>
                <T.Text  _size={16} _weight={600} _color='green700' _align='center'>야채/과일</T.Text>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>정육</T.Text>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>수산/해산</T.Text>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>쌀/잡곡</T.Text>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>식품</T.Text>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>생활용품</T.Text>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>디저트</T.Text>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>음료/주류</T.Text>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>반려동물</T.Text>
                <T.Text  _size={16} _weight={600} _color='gray400' _align='center'>기타</T.Text>
              </L.FlexRows>
              <Line/>
              <L.FlexCols _padding='24px 20px'>
{/* =================== 필터 =================== */}
                  <L.FlexRows _gap={12} _items='center' _width='186px'>
                    <B.FilterButton
                      type='button'
                      onClick={ShowFilterModal}
                    >
                      <T.Text _weight={400} _size={13} _color="gray900" _align='center'>상품 전체</T.Text>
                      <Down/>
                    </B.FilterButton>
                    <B.FilterButton
                      type='button'
                      onClick={ShowSortModal}
                    >
                      <T.Text _weight={400} _size={13} _color="gray900" _align='center'>기본 순</T.Text>
                      <Down/>
                    </B.FilterButton>
                  </L.FlexRows>

{/* =================== 없을때 =================== */}

                {/* <CategoryEmpty/> */}


{/* =================== 있을때 =================== */}
                <CategoryCard/>

              </L.FlexCols>
            </L.FlexCols>
          </L.Contents>
        </L.Container>
{modal && <FilterLayout PropsModal={PropsModal} />}
{sort && <SortLayout CloseModal={CloseModal} />}
      </Layout>
    </div>
  )
}



function CategoryEmpty() {
  return(
    <div>
        <L.FlexRows _content='center' _gap='0px' _padding='56px 0px 0px 0px'>
          <T.Text   _weight={300} _size={15} _color="gray600" _align='center' >
            <p>해당 카테고리에</p>
            <p>등록된 상품이 없습니다.</p>
          </T.Text>
        </L.FlexRows>
    </div>
  )
}


export function CategoryCard(props) {
  let [item] = useState(maindata)

  return(
    <div>
      {/* <L.Contents _padding="0px 20px 24px" _gap={20}> */}
        <L.FlexRows _gap={20} _padding={0} _height='382px'>
          <MarketProductCard item={item[0]}/>
          <MarketProductCard item={item[1]}/>
          <MarketProductCard item={item[2]}/>
        </L.FlexRows>
        {/* <L.FlexRows _gap={20} _padding={0} _height='382px'>
          <MarketProductCard item={item[3]}/>
          <MarketProductCard item={item[4]}/>
          <MarketProductCard item={item[5]}/>
        </L.FlexRows>
        <L.FlexRows _gap={20} _padding={0} _height='382px'>
          <MarketProductCard item={item[3]}/>
          <MarketProductCard item={item[4]}/>
          <MarketProductCard item={item[5]}/>
        </L.FlexRows> */}
      {/* </L.Contents> */}
    </div>
  )
}

export default CategoryPage