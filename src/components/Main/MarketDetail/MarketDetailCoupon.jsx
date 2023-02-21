import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as C from 'components/commonUi/Coupon';
import { DownloadC, DownloadD } from 'components/commonUi/Icon';
import ImageSample from 'assets/images/sample.png'
import { ImgPer, ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';

function MarketDetailCoupon() {
  return (
    <div>
{/* 1 */}
      <L.Container>
       <L.Contents _padding="24px 20px" _gap={20}>
          <L.FlexCols>
            <C.Borderbox>
              <C.Contentbox >
                  <L.FlexCols _gap={12}>
                    <L.FlexCols _gap={0}>
                      <T.Text _size={18} _weight={600} _color='gray900'>고객감사 할인 쿠폰</T.Text>
                    </L.FlexCols>
                    <L.FlexCols>
                      <T.Text  ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                    </L.FlexCols>
                  </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox
                _dir='column' _gap={4}
              >
                <DownloadC/>
                쿠폰사용
              </C.CouponUsebox>
            </C.Borderbox>

          </L.FlexCols>
        </L.Contents>
      </L.Container>




{/* 2 */}
      <L.Container>
        <L.Contents _padding="20px" _gap={16}>
          <L.FlexCols _gap={16}>
          <L.FlexRows _align='center' _content='space-between'>
            <T.Text _size={18} _weight={600} _color='gray900'>신선한 아침</T.Text>
            <T.Text _size={13} _weight={400} _color='gray500'>1일 전</T.Text>
          </L.FlexRows>
            <T.Text _size={15} _weight={400} _color='gray800'><p>오늘 아침은 비가 오는 아침입니다.</p><p>하지만 손님들을 위해 저희 아재의 과일은 새벽부터 인증을 올립니다.</p><p>오늘도 싱싱한 과일로 상큼한 아침을 열어보세요.</p></T.Text>
           
            <ImgPer src={ImageSample}/>
          
            <C.Borderbox>
              <C.Contentbox >
                  <L.FlexCols _gap={12}>
                    <L.FlexCols _gap={0}>
                      <T.Text _size={18} _weight={600} _color='gray900'>고객감사 할인 쿠폰</T.Text>
                    </L.FlexCols>
                    <L.FlexCols>
                      <T.Text  ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                    </L.FlexCols>
                  </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox
              _dir='column' _gap={4}
              >
                <DownloadC/>
                쿠폰사용
              </C.CouponUsebox>
            </C.Borderbox>
          </L.FlexCols>


        </L.Contents>
      </L.Container>
      
    
      
      
{/* 3 */}    
      <L.Container>
        <L.Contents _padding="20px" _gap={16}>
          <L.FlexCols>
          <L.FlexRows _align='center' _content='space-between'>
            <T.Text _size={18} _weight={600} _color='gray900'>신선한 아침</T.Text>
            <T.Text _size={13} _weight={400} _color='gray500'>2일 전</T.Text>
          </L.FlexRows>
            <T.Text _size={15} _weight={400} _color='gray800'><p>오늘 아침은 비가 오는 아침입니다.</p><p>하지만 손님들을 위해 저희 아재의 과일은 새벽부터 인증을 올립니다.</p><p>오늘도 싱싱한 과일로 상큼한 아침을 열어보세요.</p></T.Text>
          
            <C.Borderbox>
              <C.Contentbox >
                  <L.FlexCols _gap={12}>
                    <L.FlexCols _gap={0}>
                      <T.Text _size={18} _weight={600} _color='gray900'>고객감사 할인 쿠폰</T.Text>
                    </L.FlexCols>
                    <L.FlexCols>
                      <T.Text  ext _size={13} _weight={400} _color='gray500'><p>22.01.16 까지</p><p>방문결제 시 현장 할인</p></T.Text>
                    </L.FlexCols>
                  </L.FlexCols>
              </C.Contentbox>

              <C.CouponUsebox _color='#9E9E9E' _bg='#F5F5F5' _dir='column' _gap={4}>
                <DownloadD/>
              기간 만료
              </C.CouponUsebox>
            </C.Borderbox>
          </L.FlexCols>


        </L.Contents>
      </L.Container>
    </div>
  )
}

export default MarketDetailCoupon