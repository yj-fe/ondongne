import LoginHeader from 'components/Login/Common/LoginHeader/LoginHeader'
import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import * as B from 'components/commonUi/Button';
import CheckBox from 'components/commonUi/CheckBox';
import { EmailBody } from 'pages/login/email/FindEmailStyle';
import { LocationBody, LocationContainer } from 'pages/login/LocationSetting/LocationSettingStyle';
import Header from 'components/layout/Header/Header';
import { Line } from 'pages/main/DetailsPage/DetailsPageStyle';
import Img from 'assets/images/business/newsimg2.png'
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import { ArrowRightB } from 'components/commonUi/Icon';

function BusinessNews() {
  return (
    <div>
      <LoginHeader title="알림"/>
      <LocationBody>

        <LocationContainer>
{/* ============ 알림없을때 ============ */}
            {/* <L.Contents>
              <T.Text   _weight={300} _size={15} _color="gray600" _align='center' >
                <p>새로운 알림이 없습니다.</p>
                <p>동네활동이 시작되면 알려드릴게요!</p>
              </T.Text>
            </L.Contents> */}

{/* ============ 알림있을때 ============ */}
            <L.FlexCols _gap={24}>
              
            <L.FlexRows _gap={16}>
                <L.FlexCols _gap={4}>
                    <T.Text   _weight={600} _size={16} _color="gray900"  >
                      <p>idenit 님이 단골가게로 등록하셨습니다.</p>
                    </T.Text>
                  <L.FlexRows>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>2022년 10월 10일</p>
                    </T.Text>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>14:20</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>


            <Line/>

              <L.FlexRows _gap={16}>
                <ImgSizeLayout src={Img} _height={70} _weight={70} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text   _weight={600} _size={16} _color="gray900"  >
                      <p>새 주문이 접수되었습니다.</p>
                    </T.Text>
                  </L.FlexRows>
                  <T.Text   _weight={400} _size={15} _color="gray800"  >
                    <p>1+1 싱싱한 사과 한박스</p>
                  </T.Text>
                  <L.FlexRows>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>2022년 10월 10일</p>
                    </T.Text>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>14:20</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>

            <Line/>

              <L.FlexRows _gap={16}>
                <ImgSizeLayout src={Img} _height={70} _weight={70} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text   _weight={600} _size={16} _color="gray900"  >
                      <p>새 주문이 접수되었습니다.</p>
                    </T.Text>
                  </L.FlexRows>
                  <T.Text   _weight={400} _size={15} _color="gray800"  >
                    <p>1+1 싱싱한 사과 한박스</p>
                  </T.Text>
                  <L.FlexRows>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>2022년 10월 10일</p>
                    </T.Text>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>14:20</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>

            <Line/>

              <L.FlexRows _gap={16}>
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text   _weight={600} _size={16} _color="gray900"  >
                      <p>새로운 메시지 알림</p>
                    </T.Text>
                  </L.FlexRows>
                  <T.Text   _weight={400} _size={15} _color="gray800"  >
                    <p>“픽업하려는데 몇시까지 영업하시나요?”</p>
                  </T.Text>
                  <L.FlexRows>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>2022년 10월 10일</p>
                    </T.Text>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>14:20</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>

            <Line/>

              <L.FlexRows _gap={16}>
                <ImgSizeLayout src={Img} _height={70} _weight={70} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center'>
                    <T.Text   _weight={600} _size={16} _color="gray900"  >
                      <p>새 주문이 접수되었습니다.</p>
                    </T.Text>
                  </L.FlexRows>
                  <T.Text   _weight={400} _size={15} _color="gray800"  >
                    <p>1+1 싱싱한 사과 한박스</p>
                  </T.Text>
                  <L.FlexRows>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>2022년 10월 10일</p>
                    </T.Text>
                    <T.Text   _weight={300} _size={12} _color="gray500"  >
                      <p>14:20</p>
                    </T.Text>
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>

        </L.FlexCols>



        </LocationContainer>
      </LocationBody>
    </div>
  )
}

export default BusinessNews