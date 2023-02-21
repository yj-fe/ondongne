import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as C from 'components/commonUi/Coupon';
import { DetailTabInfo, DetailTabReview, TabButtonStyle, TabContentStyle } from 'pages/main/DetailsPage/DetailsPageStyle';
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout';
import { ArrowRightC } from 'components/commonUi/Icon';
import Confirm from 'components/commonUi/Confirm';
import { CursorDiv } from 'components/Common/LayoutPageStyle';
import { useSelector } from 'react-redux';
import { getCouponList } from 'service/coupon';
import { CouponListCard } from './../../components/commonUi/Coupon';




function MyCoupon() {
  const navigate = useNavigate()
  const [detailTab, setDetailTab] = useState(0)

  return (
    <CursorDiv>
      <Layout
        title="받은 쿠폰함"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents _padding="0" _height='calc(100vh - 68px)'>
            <L.FlexCols _padding={0} _gap={0}>


{/* =================== Tab버튼 ( 사용 가능 / 기간 만료 ) =================== */}
            <TabButtonStyle>
              <DetailTabInfo
                onClick={() => { setDetailTab(0); }}
                width='50%'
                infocolor={detailTab === 0}
              >
                사용 가능
              </DetailTabInfo>
              <DetailTabReview
                onClick={() => { setDetailTab(1); }}
                width='50%'
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
    </CursorDiv>
  )
}





function TabCoupon(props) {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(null)
  const [useConfirm, setUseConfirm] = useState(null)
// 사용가능 쿠폰
  const [couponData, setCouponData] = useState([true]);
  // 지난쿠폰
  const [usedCouponData, setusedCouponData] = useState([true]);
  const auth = useSelector(state => state.auth);

  // 임시데이터
  let couponList = {
    "message": "success",
    "data": [
      { 
        "memberId": '',
        "storeId": "",
        "title": "아재의 과일",
        "couponName": "고객감사 할인 쿠폰",
        "date": "2023-01-04T21:08:35.000+00:00",
        "contents": "방문결제 시 현장 할인",
      },
      { 
        "memberId": '',
        "storeId": "",
        "title": "김포 정육",
        "couponName": "삼겹살 10% 할인",
        "date": "2023-01-04T21:08:35.000+00:00",
        "contents": "방문결제 시 현장 할인",
      },
      { 
        "memberId": '',
        "storeId": "",
        "title": "길동 마트",
        "couponName": "1+1 행사 이벤트",
        "date": "2023-01-04T21:08:35.000+00:00",
        "contents": "방문결제 시 현장 할인",
      },
    ]
  }
  const data = couponList.data;



  const openConfirm = () => {
    return setConfirm({
      contents: "쿠폰은 한번만 사용 가능합니다.\n사용하시겠습니까?",
      confirmText: "쿠폰 사용",
      cancelText: "취소",
      onConfirmClick: () => {
        setUseConfirm(true);
        // handleUse();
        setConfirm(null)
      },
      onCancelClick: () => setConfirm(null),
    })
  }

  // 쿠폰 사용 핸들러
    const handleUse = () => {
      // 지난쿠폰탭으로 이동
      // 사용 가능탭에서 삭제
    }
  const openUseConfirm = () => {
    return setUseConfirm({
      contents: "쿠폰 사용이 완료되었습니다.",
      confirmText: "확인",
      onConfirmClick: () => {
        setConfirm(null)
      },
    })
  }

  const loadData = async () => {
    const response = await getCouponList(auth.storeId);

    if (response && response.data.data) {
      setCouponData(response.data.data);
    } else {
      navigate("/", { replace: true, state: { error: "잘못된 접근입니다." } })
    }
  }


  return [

    //=====================1. Tab 1 사용 가능=====================
    <>

{/* =================== 쿠폰 없을 때 =================== */}
      {
        couponData.length === 0 &&
        <ListEmpty desc='보유하신 쿠폰이 없습니다.'/>
      }
{/* =================== 쿠폰 있을 때 =================== */}
      {
        couponData && couponData.length > 0 &&

        <L.Contents _padding="24px 20px" _gap={20}>
          <L.Scroll _height='calc(100vh - 166px)'>
            <L.FlexCols>
  {/* 쿠폰 */}
              {
                data.map((item, index) => (
                  <C.CouponListCard 
                    key={index}
                    couponData
                    openConfirm={openConfirm}
                    item={item}
                  />
                  ))
                }
            </L.FlexCols>
          </L.Scroll>
        </L.Contents>
      }
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
        {
          useConfirm &&
          <Confirm 
            contents={confirm.contents}
            confirmText={confirm.confirmText}
            onConfirmClick={confirm.onConfirmClick}
          />
        }
    </>,

    //=====================2. Tab 2 지난 쿠폰=====================
    <>
        {
          usedCouponData.length === 0 &&
          <ListEmpty desc='지난 쿠폰이 없습니다.'/>
        }

        {
          usedCouponData && usedCouponData.length > 0 &&
        <L.Contents _padding="24px 20px" _gap={20}>
          <L.Scroll _height='calc(100vh - 166px)'>
            <L.FlexCols>
{/* 쿠폰 */}
              {
                data.map((item, index) => (
                    <C.CouponListCard 
                      couponData={false}
                      item={item}
                    />
                  ))
                }
            </L.FlexCols>
          </L.Scroll>
        </L.Contents>
        }
    </>,
  ][props.detailTab]
}


// 쿠폰 없을 때
export const ListEmpty = ({desc}) => {
  return (
    <L.Contents _padding="80px 20px" >
    <L.FlexCols _padding={0} _gap={4}>
      <T.Text _weight={300} _size={15} _color="gray600" _align='center'>{desc}</T.Text>
    </L.FlexCols>
    </L.Contents>
  )
}


export default MyCoupon