import React, { useEffect, useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { DetailTabInfo, DetailTabReview, TabButtonStyle, TabContentStyle } from 'pages/main/DetailsPage/DetailsPageStyle';
import Image from 'assets/main/shine.png'
import { ImgPer, ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import FooterLayout from 'components/layout/Footer/Footer';
import Layout from 'components/layout/Layout/Layout';
import { useNavigate, useParams } from 'react-router-dom'
import MarketImg from 'assets/images/marketdetail.png'
import MarketDetailInfo from 'components/Main/MarketDetail/MarketDetailInfo';
import MarketDetailProduct from 'components/Main/MarketDetail/MarketDetailProduct';
import MarketDetailCoupon from 'components/Main/MarketDetail/MarketDetailCoupon';
import ModalMorePage from 'components/Main/More/ModalMorePage'
import { getStoreDetails } from 'service/store';
import { numberFormat, isEmptyObj } from 'utils/utils';
import StoreLike from 'components/commonUi/StoreLike';
import { ImgSize } from 'assets/images/business/imgsize.png';
import { ImgBanner } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import ImgSizee from 'assets/images/business/imgsize.png'

const STOREURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/";

function MarketDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [detailTab, setDetailTab] = useState(0)
  const [modal, setModal] = useState(false);

  const getItem = async () => {
    const response = await getStoreDetails(id);

    if (response && response.data.data) {
      setItem(response.data.data);
      setLoading(false);
    }
  }


  useEffect(() => {
    if (id) {
      getItem(id);
      setLoading(true);
    }
  }, [id])


  return (
    <div>
      <Layout
        title={item.name}
        bell={false}
        cart={true}
        share={true}
        // more={true}
        onBackClick={() => navigate('/')}
      >
        <L.Container >
          <L.Contents _padding="0">

            {/* <ImgPer src={item.banner ? STOREURL + item.banner : MarketImg} /> */}
            <ImgBanner _height='390px' src={item.banner ? STOREURL + item.banner : MarketImg}/>
            {/* <ImgBanner _height='390px' src={ImgSizee}/> */}
            <L.FlexCols _padding={0} _gap={0}>

              <L.Contents _padding="16px 20px">
                <L.FlexRows _content="space-between" _items="center" _gap={12}>
                  <L.FlexRows >
                    <ImgSizeLayout _width={40} _height={40} _bdr={50} src={item.profile ? STOREURL + item.profile : Image} />
                    <L.FlexCols _padding={0} _gap={4}>
                      <T.Text _weight={600} _size={18} _color="gray900">{item.name}</T.Text>
                      <T.Text _weight={400} _size={14} _color="gray800">배달비 {numberFormat(item.deliveryPrice)}원, 최소주문 {numberFormat(item.orderMinPrice)}원</T.Text>
                    </L.FlexCols>
                  </L.FlexRows>

                  <L.FlexRows _padding={0} _gap={16} _items="center" _width={64}>
                    <StoreLike id={item.storeId} checked={item.likeStatus} onChange={(id) => {
                      setItem({ ...item, likeStatus: !item.likeStatus })
                    }} />
                  </L.FlexRows>
                </L.FlexRows>
              </L.Contents>


              <TabButtonStyle>
                <DetailTabInfo
                  width={'50%'}
                  onClick={() => { setDetailTab(0); }}
                  infocolor={detailTab === 0}
                >
                  상점정보
                </DetailTabInfo>
                <DetailTabReview
                  width={'50%'}
                  onClick={() => { setDetailTab(1); }}
                  reviewcolor={detailTab === 1}
                >
                  상품
                </DetailTabReview>
                {/* <DetailTabReview
                  onClick={() => { setDetailTab(2); }}
                  reviewcolor={detailTab === 2}
                >
                  쿠폰 소식
                </DetailTabReview> */}
              </TabButtonStyle>

            </L.FlexCols>
          </L.Contents>
        </L.Container>
        {
          !isEmptyObj(item) &&
          <TabContentStyle>
            <TabContent detailTab={detailTab} item={item} />
          </TabContentStyle>
        }
        {modal && <ModalMorePage PropsModal={() => setModal(false)} />}

          <FooterLayout />

      </Layout>

    </div>
  )
}


function TabContent({ detailTab, item }) {
  return [

    //=====================상점정보=====================
    <div>
      <MarketDetailInfo item={item} />
    </div>,

    //=====================상품=====================
    <div>
      <MarketDetailProduct id={item.storeId} />
    </div>,

    //=====================쿠폰 소식=====================
    <div>
      {/* <MarketDetailCoupon /> */}
    </div>
  ][detailTab]
}
export default MarketDetail