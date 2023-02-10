import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as C from 'components/commonUi/Coupon';
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout';
import { ImgPer } from 'components/layout/Img/ImgSizeLayout';
import ImageSample from 'assets/images/sample.png'
import { DownloadC, More } from 'components/commonUi/Icon';
import MoreLayout from 'components/layout/Layout/MoreLayout';
import LoadingBar from 'components/commonUi/LoadingBar';
import { CursorDiv } from 'components/Common/LayoutPageStyle';

function BusinessCoupon() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
// 사용가능 쿠폰
  const [newsData, setNewsData] = useState([true]);


  return (
    <CursorDiv>
      <Layout
        title="쿠폰소식 관리"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents _height='calc(100vh - 50px)' _cursor='default' >
            <L.Scroll _height='calc(100vh - 110px)'>
            {
              loading && <LoadingBar />
            }
            {/* =================== 쿠폰 없을 때 =================== */}
            {
              !loading && newsData.length === 0 && 
              <BusinessCouponEmpty/>
            }
            {/* =================== 쿠폰 있을 때 =================== */}
            {
              !loading && newsData && newsData.length > 0 &&
              <BusinessCouponContent/>
            }
            </L.Scroll>
          </L.Contents>
        </L.Container>
      </Layout>
    </CursorDiv>
  )
}



// {/* =================== 쿠폰 없을 때 =================== */}
function BusinessCouponEmpty() {
  return (
    <L.FlexCols _padding={0} _gap={0}>
      <T.Text _weight={400} _size={15} _color="gray900" >전체 0건</T.Text>
      <L.Line/>
      <L.Contents _padding="80px 20px" >
        <L.FlexCols _padding={0} _gap={4}>
          <T.Text _weight={300} _size={15} _color="gray600" _align='center'>작성된 리뷰글이 없습니다.</T.Text>
        </L.FlexCols>
      </L.Contents>
    </L.FlexCols>
  )
}

// {/* =================== 쿠폰 있을 때 =================== */}
function BusinessCouponContent() {

  const [modal, setModal] = useState(false);
  const ShowMoreModal = () => {
    setModal(!modal);
  }
  const PropsModal = () => {
    setModal(!modal);
  }

  return (
          <L.FlexCols _gap={16}>

            <L.FlexRows _align='center' _content='space-between'>
              <L.FlexCols _gap={1} >
                <T.Text _size={18} _weight={600} _color='gray900'>안녕하세요 아재의 과일입니다.</T.Text>
                <T.Text _size={13} _weight={400} _color='gray500'>1일 전</T.Text>
              </L.FlexCols>
              <button
                type='button'
                onClick={ShowMoreModal}
              >
                <More />
              </button>
            </L.FlexRows>

            <T.Text _size={15} _weight={400} _color='gray800'><p>오늘 아침은 비가 오는 아침입니다.</p><p>하지만 손님들을 위해 저희 아재의 과일은 새벽부터 인증을 올립니다.</p><p>오늘도 싱싱한 과일로 상큼한 아침을 열어보세요.</p></T.Text>

            <ImgPer _height='100%' src={ImageSample} />

            <C.Borderbox>
              <C.Contentbox >
                <L.FlexCols _gap={12}>
                  <L.FlexCols _gap={0}>
                    <T.Text _size={18} _weight={600} _color='gray900'>고객감사 할인 쿠폰</T.Text>
                  </L.FlexCols>
                  <L.FlexCols>
                    <T.Text ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                  </L.FlexCols>
                </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox _dir='column' _gap={4} >
                <DownloadC />
                쿠폰사용
              </C.CouponUsebox>
            </C.Borderbox>
            {modal && <MoreLayout PropsModal={PropsModal} />}
          </L.FlexCols>

  )
}


export default BusinessCoupon