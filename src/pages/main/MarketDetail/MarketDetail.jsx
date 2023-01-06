import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { DetailMarketInfo, DetailTabDiv, DetailTabInfo, DetailTabReview, FlagStyle, FlagText, IconStyle, Line, MarketIcon, MarketLocation, MarketName, MarketProfile, MoreStyle, TabButtonStyle, TabContentStyle } from 'pages/main/DetailsPage/DetailsPageStyle';
import Image from 'assets/main/shine.png'

import { ImgPer, ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import { ArrowRightB, Flag, More } from 'components/commonUi/Icon';
import FooterLayout from 'components/layout/Footer/Footer';
import Layout from 'components/layout/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import MarketImg from 'assets/images/marketdetail.png'
import MarketDetailInfo from 'components/Main/MarketDetail/MarketDetailInfo';
import MarketDetailProduct from 'components/Main/MarketDetail/MarketDetailProduct';
import MarketDetailCoupon from 'components/Main/MarketDetail/MarketDetailCoupon';
import ModalMorePage from 'components/Main/More/ModalMorePage'


function MarketDetail() {
  const navigate = useNavigate()
  const [detailTab, setDetailTab] = useState(0)
  const [modal, setModal] = useState(false);


  const ShowMoreModal = () => {
    setModal(!modal);
  }
  const PropsModal = () => {
    setModal(!modal);
  }


  return (
    <div>
      <Layout
        title="아재의 과일"
        cart={true}
        bell={false}
        onBackClick={() => navigate('/')}
      >
        <L.Container >
          <L.Contents _padding="0">
            <ImgPer src={MarketImg}/>
            <L.FlexCols _padding={0} _gap={0}>


              <L.Contents _padding="16px 20px">
                <L.FlexRows _content="space-between" _items="center" _gap={12}>
                  <L.FlexRows >
                    <ImgSizeLayout _width={40} _height={40} _bdr={50} src={Image} />
                    <L.FlexCols _padding={0} _gap={4}>
                      <T.Text _weight={600} _size={18} _color="gray900">아재의 과일</T.Text>
                      <T.Text _weight={400} _size={14} _color="gray800">배달비 2,000원, 최소주문 10,000원</T.Text>
                    </L.FlexCols>
                  </L.FlexRows>

                  <L.FlexRows _padding={0} _gap={16} _items="center" _width={64}>
                    <Flag/>
                    <button
                      type='button'
                      onClick={ShowMoreModal}
                    >
                      <More/>
                    </button>
                  </L.FlexRows>
                </L.FlexRows>
              </L.Contents>


            <TabButtonStyle>
              <DetailTabInfo
                onClick={() => { setDetailTab(0); }}
                infocolor={detailTab === 0}
              >
                상점정보
              </DetailTabInfo>
              <DetailTabReview
                onClick={() => { setDetailTab(1); }}
                reviewcolor={detailTab === 1}
              >
                상품
              </DetailTabReview>
              <DetailTabReview
                onClick={() => { setDetailTab(2); }}
                reviewcolor={detailTab === 2}
              >
                쿠폰 소식
              </DetailTabReview>
            </TabButtonStyle>

          </L.FlexCols>
          </L.Contents>
        </L.Container>

            <TabContentStyle>
              <TabContent detailTab={detailTab} />
            </TabContentStyle>


        {modal && <ModalMorePage PropsModal={PropsModal} />}


        <FooterLayout/>

      </Layout>

    </div>
  )
}


function TabContent(props) {
  return [

    //=====================상점정보=====================
    <div>
      <MarketDetailInfo/>
    </div>,

    //=====================상품=====================
    <div>
      <MarketDetailProduct/>
    </div>,

    //=====================쿠폰 소식=====================
    <div>
      <MarketDetailCoupon/>
    </div>
  ][props.detailTab]
}
export default MarketDetail