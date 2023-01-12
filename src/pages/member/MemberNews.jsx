import LoginHeader from 'components/Login/Common/LoginHeader/LoginHeader'
import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { S } from 'components/layout/Layout/LayoutStyle'
import { Line } from 'pages/main/DetailsPage/DetailsPageStyle';
import Img from 'assets/images/newsimg.png'
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import { ArrowRightB } from 'components/commonUi/Icon';
import dayjs from 'dayjs';

function MemberNews() {
  const [date, setDate]= useState([{
      Date: '2022년 10월 10일 14:20'
    }
  ])

  return (
    <div>
      <S.Wrapper>
        <LoginHeader title="알림"/>
          <S.Main>

          <L.Contents _padding='24px 20px ' _height='calc(100vh - 68px)'>

{/* ============ 알림없을때 ============ */}
            {/* <L.Contents _padding='56px 0px 0px 0px'>
              <T.Text   _weight={300} _size={15} _color="gray600" _align='center' >
                <p>새로운 알림이 없습니다.</p>
                <p>동네활동이 시작되면 알려드릴게요!</p>
              </T.Text>
            </L.Contents> */}

{/* ============ 알림있을때 ============ */}
            <L.FlexCols _gap={24}>
              <L.FlexRows _gap={16}>
                <ImgSizeLayout src={Img} _height={48} _weight={48} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text   _weight={600} _size={16} _color="gray900"  >
                      <p>이마트 트레이더스</p>
                    </T.Text>
                    <ArrowRightB/>
                  </L.FlexRows>
                  <T.Text   _weight={400} _size={15} _color="gray800"  >
                    <p>단골가게의 새로운 쿠폰소식이 올라왔어요!</p>
                  </T.Text>
                  <L.FlexRows _items='center'>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>{dayjs(date.Date).format('YYYY년 MM월 DD일 HH:mm')}</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
            </L.FlexRows>

            <Line/>
              <L.FlexRows _gap={16}>
                <ImgSizeLayout src={Img} _height={48} _weight={48} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text   _weight={600} _size={16} _color="gray900"  >
                      <p>이마트 트레이더스</p>
                    </T.Text>
                    <ArrowRightB/>
                  </L.FlexRows>
                  <T.Text   _weight={400} _size={15} _color="gray800"  >
                    <p>단골가게의 새로운 쿠폰소식이 올라왔어요!</p>
                  </T.Text>
                  <L.FlexRows>
                  <T.Text   _weight={300} _size={12} _color="gray500"  >
                    <p>2022년 10월 10일</p>
                  </T.Text>
                  <T.Text   _weight={300} _size={12} _color="gray500"  >
                    <p>14:00</p>
                  </T.Text>
              </L.FlexRows>
                </L.FlexCols>
            </L.FlexRows>

            <Line/>
              <L.FlexRows _gap={16}>
                <ImgSizeLayout src={Img} _height={48} _weight={48} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text   _weight={600} _size={16} _color="gray900"  >
                      <p>이마트 트레이더스</p>
                    </T.Text>
                    <ArrowRightB/>
                  </L.FlexRows>
                  <T.Text   _weight={400} _size={15} _color="gray800"  >
                    <p>단골가게의 새로운 쿠폰소식이 올라왔어요!</p>
                  </T.Text>
                  <L.FlexRows>
                  <T.Text   _weight={300} _size={12} _color="gray500"  >
                    <p>2022년 10월 10일</p>
                  </T.Text>
                  <T.Text   _weight={300} _size={12} _color="gray500"  >
                    <p>14:00</p>
                  </T.Text>
              </L.FlexRows>
                </L.FlexCols>
            </L.FlexRows>

            <Line/>

            <L.FlexCols>
              <T.Text   _weight={400} _size={15} _color="gray800"  >
                <p>회원가입을 환영합니다. 온동네에서 다양한 거래를 시작해보세요!</p>
              </T.Text>
          <L.FlexRows>
              <T.Text   _weight={300} _size={12} _color="gray500"  >
                <p>2022년 10월 10일</p>
              </T.Text>
              <T.Text   _weight={300} _size={12} _color="gray500"  >
                <p>14:00</p>
              </T.Text>
          </L.FlexRows>
            </L.FlexCols>
        </L.FlexCols>



        </L.Contents>
        </S.Main>
      </S.Wrapper>
    </div>
  )
}

export default MemberNews