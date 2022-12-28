import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import Layout from 'components/layout/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { DetailTabInfo, DetailTabReview, TabButtonStyle, TabContentStyle } from 'pages/main/DetailsPage/DetailsPageStyle';
import { Down, FlagC, OneStar } from 'components/commonUi/Icon';
import { MarketProductCard, ModalFilter } from 'components/Main/MarketDetail/MarketDetailProduct';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import Img from 'assets/images/marketdetail.png'
import maindata from 'assets/data/maindata'

function MyMarket() {

  const [detailTab, setDetailTab] = useState(0)
  const navigate = useNavigate()

  return (
    <div>
       <Layout
        title="My 단골"
        cart={true}
        bell={true}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents _padding="0" _height={'100vh'}>
            <L.FlexCols _padding={0} _gap={0}>


{/* =================== Tab버튼 ( 상품 / 상점 ) =================== */}
            <TabButtonStyle>
              <DetailTabInfo
                onClick={() => { setDetailTab(0); }}
                infocolor={detailTab === 0}
              >
                상품
              </DetailTabInfo>
              <DetailTabReview
                onClick={() => { setDetailTab(1); }}
                reviewcolor={detailTab === 1}
              >
                상점
              </DetailTabReview>
            </TabButtonStyle>

            <TabContentStyle>
              <TabCoupon detailTab={detailTab} />
            </TabContentStyle>


          </L.FlexCols>
          </L.Contents>
        </L.Container>



      </Layout>

    </div>
  )
}


function TabCoupon(props) {
  let [item] = useState(maindata)
  const [modal, setModal] = useState(false);
  const ShowMoreModal = () => {
    setModal(!modal);
  }
  const PropsModal = () => {
    setModal(!modal);
  }



  return [

    //=====================1. Tab 1 상품=====================
    <div>
{/* =================== 필터 =================== */}
        <L.Contents>
          <L.FlexRows _gap={12} _items='center' _width='186px'>
            <B.FilterButton>
              <T.Text _weight={400} _size={13} _color="gray900" _align='center'>상품 전체</T.Text>
              <Down/>
            </B.FilterButton>
            <B.FilterButton>
              <T.Text _weight={400} _size={13} _color="gray900" _align='center'>기본 순</T.Text>
              <Down/>
            </B.FilterButton>
          </L.FlexRows>
        </L.Contents>



{/* =================== 없을 때 =================== */}
        {/* <L.Contents _padding="80px 20px" >
          <L.FlexCols _padding={0} _gap={4}>
            <T.Text _weight={300} _size={15} _color="gray600" _align='center'><p>아직 단골가게가 없습니다.<p></p>주변 단골가게를 추가해보세요!</p></T.Text>
          </L.FlexCols>
        </L.Contents> */}



{/* =================== 있을 때 =================== */}
        <L.Contents _padding="24px 20px" _gap={20}>
          <L.FlexRows _gap={20} _padding={0} _height='382px'>
            <MarketProductCard item={item[0]}/>
            <MarketProductCard item={item[1]}/>
            <MarketProductCard item={item[2]}/>
          </L.FlexRows>
          <L.FlexRows _gap={20} _padding={0}>
            <MarketProductCard item={item[3]}/>
            <MarketProductCard item={item[4]}/>
            <MarketProductCard item={item[5]}/>
          </L.FlexRows>
        </L.Contents>

    </div>,





    //=====================2. Tab 2 상점=====================
    <div>

    
    {/* =================== 없을 때 =================== */}
            {/* <L.Contents _padding="80px 20px" >
              <L.FlexCols _padding={0} _gap={4}>
                <T.Text _weight={300} _size={15} _color="gray600" _align='center'><p>아직 단골가게가 없습니다.<p></p>주변 단골가게를 추가해보세요!</p></T.Text>
              </L.FlexCols>
            </L.Contents> */}
    
    
    
    {/* =================== 있을 때 =================== */}
        <L.Contents>
          <L.FlexCols _gap={16}>
            <L.FlexRows _gap={16} _content='space-between'>
              <div>
                <T.Text _size={16} _weight={600} _color='gray900'>전체 150</T.Text>
              </div>
              <L.FlexRows _gap={4} _content='flex-end' _width='100px'>
                <T.Text _size={13} _weight={400} _color='gray900'>주문 많은 순</T.Text>
                <button
                    type='button'
                    onClick={ShowMoreModal}
                  >
                  <Down/>
                </button>
              </L.FlexRows>
            </L.FlexRows>


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
              <FlagC/>
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
                <FlagC/>
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
                <FlagC/>
              </L.FlexRows>
          </L.FlexCols>
        </L.Contents>
            
        {modal && <ModalFilter PropsModal={PropsModal} />}
        </div>,
  ][props.detailTab]
}




export default MyMarket