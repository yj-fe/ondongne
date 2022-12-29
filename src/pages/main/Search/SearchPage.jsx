import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import { Down, Flag, Map, OneStar } from 'components/commonUi/Icon';
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import { Line } from 'components/Login/Signup/agreement/AgreementStyle';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import Img from 'assets/images/marketdetail.png'
import { SortLayout } from 'components/layout/Layout/MoreLayout';

function SearchPage() {
  const [sort, setSort] = useState(false);


    const navigate = useNavigate();
    const ShowSortModal = () => {
      setSort(!sort);
    }
    const CloseModal = () => {
      setSort(!sort);
    }
  return (
    <div>
      <Layout
          title="검색"
          cart={true}
          bell={true}
          search={true}
          onBackClick={() => navigate(-1)}
      >

      <L.Container >
        <L.Contents  _height={'100vh'}>
          <L.FlexCols _padding={0} _gap={0}>


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
          </L.FlexRows>
          <Line/>
          <L.FlexCols _gap={32} >
            <L.FlexRows _gap={16} _content='space-between'>
              <div>
                <T.Text _size={16} _weight={600} _color='gray900'>전체 0</T.Text>
              </div>
              <L.FlexRows _gap={4} _content='flex-end' _width='100px'>
                <T.Text _size={13} _weight={400} _color='gray900'>주문 많은 순</T.Text>
                <button
                  type='button'
                  onClick={ShowSortModal}
                >
                  <Down/>
                </button>
              </L.FlexRows>
            </L.FlexRows>

{/* 없을 때 */}
            {/* <ListEmpty/> */}
{/* 있을 때 */}
              <L.FlexCols>
                <ListCard/>
              </L.FlexCols>
            </L.FlexCols>
          </L.FlexCols>
          
        {  !sort && <B.MapListButton
          >
            <Map/>
            지도 보기
          </B.MapListButton>}
        </L.Contents>
      </L.Container>

{sort && <SortLayout CloseModal={CloseModal} />}
      </Layout>
    </div>
  )
}

const ListEmpty=()=>{
  return(
    <div>
      <L.FlexCols >
        <L.FlexRows _content='center' _padding='80px 20px'>
          <T.Text _weight={300} _size={15} _color="gray600" _align='center'><p>해당 지역에 등록된 업체가 없습니다.</p><p>다른 지역으로 검색해주세요!</p></T.Text>

      </L.FlexRows>
    </L.FlexCols>
    </div>
  )
}
export const ListCard=()=>{
  return(
    <div>
      <L.FlexCols _gap={20}>
        <L.FlexRows _content='space-between'>
          <L.FlexRows _content='row'>
            <ImgSizeLayout _bdr={4} src={Img} _width={98} _height={98}></ImgSizeLayout>
            <L.FlexCols _gap={2}>
              <T.Text _weight={600} _size={18} _color="gray900">bhc 치킨</T.Text>
              <L.FlexRows _content='flex-start' _items='center' _gap={2}>
                <OneStar/>
                <T.Text _weight={500} _size={14} _color="gray900" _align='center'>4.5</T.Text>
              </L.FlexRows>
              <L.FlexRows>
                <T.Text _weight={400} _size={14} _color="gray800" _align='center'>최소주문 20,000원,</T.Text>
                <T.Text _weight={400} _size={14} _color="gray800" _align='center'>배달 2,000원</T.Text>
              </L.FlexRows>
              <L.FlexRows>
                <B.Badge _color='white' _bg='green500'>신규 입점</B.Badge>
                <B.Badge>픽업가능</B.Badge>
                <B.Badge>배달가능</B.Badge>
              </L.FlexRows>
            </L.FlexCols>              
          </L.FlexRows>
          <Flag/>
        </L.FlexRows>
        <L.FlexRows _content='space-between'>
          <L.FlexRows _content='row'>
            <ImgSizeLayout _bdr={4} src={Img} _width={98} _height={98}></ImgSizeLayout>
            <L.FlexCols _gap={2}>
              <T.Text _weight={600} _size={18} _color="gray900">Satterfield, Ward and Feil</T.Text>
              <L.FlexRows _content='flex-start' _items='center' _gap={2}>
                <OneStar/>
                <T.Text _weight={500} _size={14} _color="gray900" _align='center'>4.5</T.Text>
              </L.FlexRows>
              <L.FlexRows>
                <T.Text _weight={400} _size={14} _color="gray800" _align='center'>최소주문 20,000원,</T.Text>
                <T.Text _weight={400} _size={14} _color="gray800" _align='center'>배달 2,000원</T.Text>
              </L.FlexRows>
              <L.FlexRows>
                <B.Badge _color='green600' _bg='green50'>쿠폰</B.Badge>
                <B.Badge>픽업가능</B.Badge>
                <B.Badge>배달가능</B.Badge>
              </L.FlexRows>
            </L.FlexCols>              
          </L.FlexRows>
          <Flag/>
        </L.FlexRows>
        <L.FlexRows _content='space-between'>
          <L.FlexRows _content='row'>
            <ImgSizeLayout _bdr={4} src={Img} _width={98} _height={98}></ImgSizeLayout>
            <L.FlexCols _gap={2}>
              <T.Text _weight={600} _size={18} _color="gray900">Corkery - Hammes</T.Text>
              <L.FlexRows _content='flex-start' _items='center' _gap={2}>
                <OneStar/>
                <T.Text _weight={500} _size={14} _color="gray900" _align='center'>4.5</T.Text>
              </L.FlexRows>
              <L.FlexRows>
                <T.Text _weight={400} _size={14} _color="gray800" _align='center'>최소주문 20,000원,</T.Text>
                <T.Text _weight={400} _size={14} _color="gray800" _align='center'>배달 2,000원</T.Text>
              </L.FlexRows>
              <L.FlexRows>
                <B.Badge>픽업가능</B.Badge>
                <B.Badge>배달가능</B.Badge>
              </L.FlexRows>
            </L.FlexCols>              
          </L.FlexRows>
        <Flag/>
      </L.FlexRows>
    </L.FlexCols>
    </div>
  )
}


export default SearchPage