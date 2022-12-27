import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as C from 'components/commonUi/Coupon';
import { DetailTabInfo, DetailTabReview, TabButtonStyle, TabContentStyle } from 'pages/main/DetailsPage/DetailsPageStyle';
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout';
import { ArrowRightC } from 'components/commonUi/Icon';
import Confirm from 'components/commonUi/Confirm';

function MyCoupon() {
  const navigate = useNavigate()
  const [detailTab, setDetailTab] = useState(0)

  return (
    <div>
      <Layout
        title="받은 쿠폰함"
        cart={false}
        bell={false}
        onBackClick={() => navigate('/')}
      >
        <L.Container >
          <L.Contents _padding="0" _height={'100vh'}>
            <L.FlexCols _padding={0} _gap={0}>


{/* =================== Tab버튼 ( 사용 가능 / 기간 만료 ) =================== */}
            <TabButtonStyle>
              <DetailTabInfo
                onClick={() => { setDetailTab(0); }}
                infocolor={detailTab === 0}
              >
                사용 가능
              </DetailTabInfo>
              <DetailTabReview
                onClick={() => { setDetailTab(1); }}
                reviewcolor={detailTab === 1}
              >
                지난 쿠폰
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
  const [confirm, setConfirm] = useState(null)

  const openConfirm = () => {
    return setConfirm({
      contents: "쿠폰은 한번만 사용 가능합니다.\n사용하시겠습니까?",
      confirmText: "쿠폰 사용",
      cancelText: "취소",
      onConfirmClick: () => setConfirm(null),
      onCancelClick: () => setConfirm(null),
    })
  }
  return [

    //=====================사용 가능=====================
    <div>

{/* =================== 쿠폰 없을 때 =================== */}
        {/* <L.Contents _padding="80px 20px" >
          <L.FlexCols _padding={0} _gap={4}>
            <T.Text _weight={300} _size={15} _color="gray600" _align='center'>보유하신 쿠폰이 없습니다.</T.Text>
          </L.FlexCols>
        </L.Contents> */}
{/* =================== 쿠폰 있을 때 =================== */}
        <L.Contents _padding="24px 20px" _gap={20}>
          <L.FlexCols>
{/* 쿠폰 1 */}
            <C.Borderbox>
              <C.Contentbox >
                  <L.FlexCols _gap={12}>
                    <L.FlexCols _gap={0}>
                      <T.Text _size={15} _weight={500} _color='gray600'>아재의 과일</T.Text>
                      <T.Text _size={18} _weight={600} _color='gray900'>고객감사 할인 쿠폰</T.Text>
                    </L.FlexCols>
                    <L.FlexCols>
                      <T.Text  ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                    </L.FlexCols>
                  </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox
              onClick={openConfirm}
              >
                쿠폰사용
                <ArrowRightC/>
              </C.CouponUsebox>
            </C.Borderbox>
{/* 쿠폰 2 */}
            <C.Borderbox>
              <C.Contentbox >
                  <L.FlexCols _gap={12}>
                    <L.FlexCols _gap={0}>
                      <T.Text _size={15} _weight={500} _color='gray600'>김포 정육</T.Text>
                      <T.Text _size={18} _weight={600} _color='gray900'>삼겹살 10% 할인</T.Text>
                    </L.FlexCols>
                    <L.FlexCols>
                      <T.Text  ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                    </L.FlexCols>
                  </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox
                onClick={openConfirm}
              >
                쿠폰사용
                <ArrowRightC/>
              </C.CouponUsebox>
            </C.Borderbox>
{/* 쿠폰 3 */}
            <C.Borderbox>
              <C.Contentbox >
                  <L.FlexCols _gap={12}>
                    <L.FlexCols _gap={0}>
                      <T.Text _size={15} _weight={500} _color='gray600'>길동 마트</T.Text>
                      <T.Text _size={18} _weight={600} _color='gray900'>1+1 행사 이벤트</T.Text>
                    </L.FlexCols>
                    <L.FlexCols>
                      <T.Text  ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                    </L.FlexCols>
                  </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox
                onClick={openConfirm}
              >
                쿠폰사용
                <ArrowRightC/>
              </C.CouponUsebox>
            </C.Borderbox>
          </L.FlexCols>
        </L.Contents>

        {
          confirm &&
          <Confirm 
            contents={confirm.contents}
            confirmText={confirm.confirmText}
            cancelText={confirm.cancelText}
            onConfirmClick={confirm.onConfirmClick}
            onCancelClick={confirm.onCancelClick}
          />
        }
    </div>,

    //=====================지난 쿠폰=====================
    <div>
        <L.Contents _padding="24px 20px" _gap={20}>
          <L.FlexCols>
{/* 쿠폰 1 */}
            <C.Borderbox>
              <C.Contentbox >
                  <L.FlexCols _gap={12}>
                    <L.FlexCols _gap={0}>
                      <T.Text _size={15} _weight={500} _color='gray600'>아재의 과일</T.Text>
                      <T.Text _size={18} _weight={600} _color='gray900'>고객감사 할인 쿠폰</T.Text>
                    </L.FlexCols>
                    <L.FlexCols>
                      <T.Text  ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                    </L.FlexCols>
                  </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox _color='#9E9E9E' _bg='#F5F5F5'>
              사용 완료
              </C.CouponUsebox>
            </C.Borderbox>
{/* 쿠폰 2 */}
            <C.Borderbox>
              <C.Contentbox >
                  <L.FlexCols _gap={12}>
                    <L.FlexCols _gap={0}>
                      <T.Text _size={15} _weight={500} _color='gray600'>김포 정육</T.Text>
                      <T.Text _size={18} _weight={600} _color='gray900'>삼겹살 10% 할인</T.Text>
                    </L.FlexCols>
                    <L.FlexCols>
                      <T.Text  ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                    </L.FlexCols>
                  </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox _color='#9E9E9E' _bg='#F5F5F5'>
              기간 만료
              </C.CouponUsebox>
            </C.Borderbox>
{/* 쿠폰 3 */}
            <C.Borderbox>
              <C.Contentbox >
                  <L.FlexCols _gap={12}>
                    <L.FlexCols _gap={0}>
                      <T.Text _size={15} _weight={500} _color='gray600'>길동 마트</T.Text>
                      <T.Text _size={18} _weight={600} _color='gray900'>1+1 행사 이벤트</T.Text>
                    </L.FlexCols>
                    <L.FlexCols>
                      <T.Text  ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                    </L.FlexCols>
                  </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox _color='#9E9E9E' _bg='#F5F5F5'>
              기간 만료
              </C.CouponUsebox>
            </C.Borderbox>
          </L.FlexCols>
        </L.Contents>
    </div>,
  ][props.detailTab]
}


export default MyCoupon