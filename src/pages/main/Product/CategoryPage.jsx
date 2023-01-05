import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';

import Layout from 'components/layout/Layout/Layout';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Down } from 'components/commonUi/Icon';
import { Line } from '../DetailsPage/DetailsPageStyle';
import maindata from 'assets/data/maindata';
import { MarketProductCard } from 'components/Main/MarketDetail/MarketDetailProduct';
import Swiper from 'swiper';
import { FilterLayout, SortLayout } from './../../../components/layout/Layout/MoreLayout';
import { productFilterText, productSortText } from 'utils/utils';
import { useInView } from 'react-intersection-observer';
import { getItemList } from 'service/item';

// 메뉴슬라이드예정
const menu = new Swiper(".mySwiper", {
  spaceBetween: 24,
  slidesPerView: 'auto',
  autoplay: false,
  loop: false,
})

function CategoryPage() {
  const navigate = useNavigate()
  const [filter01, setFilter01] = useState(false);
  const [filter02, setFilter02] = useState(false);

  const { category } = useParams();
  const local = useSelector(state => state.local);
  const [items, setItems] = useState([])
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1)
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('create');

  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false)

  const getItems = async () => {
    setLoading(true);

    const response = await getItemList(category, local, page, type, sort);
  }

  useEffect(() => {
    getItems();
  }, [category, local, page, type, sort])

  useEffect(() => {
    if (items.length == totalCount) return;

    if (inView && !loading) {
      setPage(prevState => prevState + 1)
    }
  }, [inView, loading])



  return (
    <div>
      <Layout
        title={category.replace(',', '/')}
        serch={true}
        bell={true}
        cart={true}
        onBackClick={() => navigate('/')}
      >
        <L.Container >
          <L.Contents _padding="0" _height='100vh'>
            <L.FlexCols _padding={0} _gap={0} >

              {/* =================== 메뉴 =================== */}
              <L.FlexRows _height='48px' _gap={20} _items='center' _padding='0px 0px 0px 20px'>
                <Link to="/categories/전체">
                  <T.Text _size={16} _weight={600} _color={category == '전체' ? 'green700' : 'gray400'} _align='center'>전체</T.Text>
                </Link>
                <Link to="/categories/야채,과일">
                  <T.Text _size={16} _weight={600} _color={category == '야채,과일' ? 'green700' : 'gray400'} _align='center'>야채/과일</T.Text>
                </Link>
                <Link to="/categories/정육">
                  <T.Text _size={16} _weight={600} _color={category == '정육' ? 'green700' : 'gray400'} _align='center'>정육</T.Text>
                </Link>
                <Link to="/categories/수산,해산">
                  <T.Text _size={16} _weight={600} _color={category == '수산,해산' ? 'green700' : 'gray400'} _align='center'>수산/해산</T.Text>
                </Link>
                <Link to="/categories/쌀,잡곡">
                  <T.Text _size={16} _weight={600} _color={category == '쌀,잡곡' ? 'green700' : 'gray400'} _align='center'>쌀/잡곡</T.Text>
                </Link>
                <Link to="/categories/식품">
                  <T.Text _size={16} _weight={600} _color={category == '식품' ? 'green700' : 'gray400'} _align='center'>식품</T.Text>
                </Link>
                <Link to="/categories/생활용품">
                  <T.Text _size={16} _weight={600} _color={category == '생활용품' ? 'green700' : 'gray400'} _align='center'>생활용품</T.Text>
                </Link>
                <Link to="/categories/디저트">
                  <T.Text _size={16} _weight={600} _color={category == '디저트' ? 'green700' : 'gray400'} _align='center'>디저트</T.Text>
                </Link>
                <Link to="/categories/식음료">
                  <T.Text _size={16} _weight={600} _color={category == '식음료' ? 'green700' : 'gray400'} _align='center'>식음료</T.Text>
                </Link>
                <Link to="/categories/반려동물">
                  <T.Text _size={16} _weight={600} _color={category == '반려동물' ? 'green700' : 'gray400'} _align='center'>반려동물</T.Text>
                </Link>
                <Link to="/categories/기타">
                  <T.Text _size={16} _weight={600} _color={category == '기타' ? 'green700' : 'gray400'} _align='center'>기타</T.Text>
                </Link>
              </L.FlexRows>
              <Line />
              <L.FlexCols _padding='24px 20px'>
                {/* =================== 필터 =================== */}
                <L.FlexRows _gap={12} _items='center' _width='auto'>
                  <B.FilterButton
                    type='button'
                    onClick={() => setFilter01(true)}
                  >
                    <T.Text _weight={400} _size={13} _color="gray900" _align='center'>{productFilterText(type)}</T.Text>
                    <Down />
                  </B.FilterButton>
                  <B.FilterButton
                    type='button'
                    onClick={() => setFilter02(true)}
                  >
                    <T.Text _weight={400} _size={13} _color="gray900" _align='center'>{productSortText(sort)}</T.Text>
                    <Down />
                  </B.FilterButton>
                </L.FlexRows>

                {/* =================== 없을때 =================== */}

                {/* <CategoryEmpty/> */}


                {/* =================== 있을때 =================== */}
                <CategoryCard />

              </L.FlexCols>
            </L.FlexCols>
          </L.Contents>
        </L.Container>
        {filter01 && <FilterLayout PropsModal={() => setFilter01(false)} data={type} setData={setType} />}
        {filter02 && <SortLayout CloseModal={() => setFilter02(false)} data={sort} setData={setSort} />}
      </Layout>
    </div>
  )
}



function CategoryEmpty() {
  return (
    <div>
      <L.FlexRows _content='center' _gap='0px' _padding='56px 0px 0px 0px'>
        <T.Text _weight={300} _size={15} _color="gray600" _align='center' >
          <p>해당 카테고리에</p>
          <p>등록된 상품이 없습니다.</p>
        </T.Text>
      </L.FlexRows>
    </div>
  )
}


export function CategoryCard(props) {
  let [item] = useState(maindata)

  return (
    <div>
      {/* <L.Contents _padding="0px 20px 24px" _gap={20}> */}
      <L.FlexRows _gap={20} _padding={0} _height='382px'>
        <MarketProductCard item={item[0]} />
        <MarketProductCard item={item[1]} />
        <MarketProductCard item={item[2]} />
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