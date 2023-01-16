import LoginHeader from 'components/Login/Common/LoginHeader/LoginHeader'
import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { S } from 'components/layout/Layout/LayoutStyle'
import { Line } from 'pages/main/DetailsPage/DetailsPageStyle';
import Img from 'assets/images/business/newsimg2.png'
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import dayjs from 'dayjs';

function BusinessNews() {
  const [date, setDate] = useState([{
    Date: '2023-01-04T21:08:35.000+00:00'
  }
  ])
  return (
    <div>
      <S.Wrapper>
        <LoginHeader title="알림" to={-1} />
        <S.Main>
          <L.Contents _padding='24px 20px ' _height='100vh'>
            {/* ============ 알림없을때 ============ */}
            {/* <L.Contents  _padding='56px 0px 0px 0px'>
                <T.Text   _weight={300} _size={15} _color="gray600" _align='center' >
                  <p>새로운 알림이 없습니다.</p>
                  <p>동네활동이 시작되면 알려드릴게요!</p>
                </T.Text>
              </L.Contents> */}

            {/* ============ 알림있을때 ============ */}
            <L.FlexCols _gap='0px'>

              <L.FlexRows _gap={16} _height='auto' _padding='16px 0px'>
                <L.FlexCols _gap={4}>
                  <T.Text _weight={600} _size={16} _color="gray900"  >
                    <p>idenit 님이 단골가게로 등록하셨습니다.</p>
                  </T.Text>
                  <L.FlexRows>
                    <T.Text _weight={300} _size={12} _color="gray500"  >
                      <p>{dayjs(date[0].Date).format('YYYY년 MM월 DD일 HH:mm')}</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>


              <Line />
              <L.FlexRows _gap={16} _height='auto' _padding='16px 0px'>
                <ImgSizeLayout src={Img} _height={70} _weight={70} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text _weight={600} _size={16} _color="gray900"  >
                      <p>새 주문이 접수되었습니다.</p>
                    </T.Text>
                  </L.FlexRows>
                  <T.Text _weight={400} _size={15} _color="gray800"  >
                    <p>1+1 싱싱한 사과 한박스</p>
                  </T.Text>
                  <L.FlexRows>
                    <T.Text _weight={300} _size={12} _color="gray500"  >
                      <p>{dayjs(date[0].Date).format('YYYY년 MM월 DD일 HH:mm')}</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>

              <Line />

              <L.FlexRows _gap={16} _height='auto' _padding='16px 0px'>
                <ImgSizeLayout src={Img} _height={70} _weight={70} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text _weight={600} _size={16} _color="gray900"  >
                      <p>새 주문이 접수되었습니다.</p>
                    </T.Text>
                  </L.FlexRows>
                  <T.Text _weight={400} _size={15} _color="gray800"  >
                    <p>1+1 싱싱한 사과 한박스</p>
                  </T.Text>
                  <L.FlexRows>
                    <T.Text _weight={300} _size={12} _color="gray500"  >
                      <p>{dayjs(date[0].Date).format('YYYY년 MM월 DD일 HH:mm')}</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>

              <Line />

              <L.FlexRows _gap={16} _height='auto' _padding='16px 0px'>
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text _weight={600} _size={16} _color="gray900"  >
                      <p>새로운 메시지 알림</p>
                    </T.Text>
                  </L.FlexRows>
                  <T.Text _weight={400} _size={15} _color="gray800"  >
                    <p>“픽업하려는데 몇시까지 영업하시나요?”</p>
                  </T.Text>
                  <L.FlexRows>
                    <T.Text _weight={300} _size={12} _color="gray500"  >
                      <p>{dayjs(date[0].Date).format('YYYY년 MM월 DD일 HH:mm')}</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>

              <Line />

              <L.FlexRows _gap={16} _height='auto' _padding='16px 0px'>
                <ImgSizeLayout src={Img} _height={70} _weight={70} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text _weight={600} _size={16} _color="gray900"  >
                      <p>새 주문이 접수되었습니다.</p>
                    </T.Text>
                  </L.FlexRows>
                  <T.Text _weight={400} _size={15} _color="gray800"  >
                    <p>1+1 싱싱한 사과 한박스</p>
                  </T.Text>
                  <L.FlexRows>
                    <T.Text _weight={300} _size={12} _color="gray500"  >
                      <p>{dayjs(date[0].Date).format('YYYY년 MM월 DD일 HH:mm')}</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>

            </L.FlexCols>

          </L.Contents>
        </S.Main>
      </S.Wrapper>
    </div>
  )
}

export default BusinessNews
