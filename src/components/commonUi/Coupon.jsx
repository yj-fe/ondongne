import React from 'react'
import styled from "styled-components";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { ArrowRightC } from './Icon';

export const CouponListCard = ({openConfirm, item, couponData}) => {
  return (
    <Borderbox>
      <Contentbox >
          <L.FlexCols _gap={12}>
            <L.FlexCols _gap={0}>
              {/* <T.Text _size={15} _weight={500} _color='gray600'>{item.title}</T.Text> */}
              {/* <T.Text _size={18} _weight={600} _color='gray900'>{item.couponName}</T.Text> */}
            </L.FlexCols>
            <L.FlexCols>
              <T.Text  ext _size={13} _weight={400} _color='gray500'>
                {/* <p>{item.date} 까지</p> */}
                {/* <p>{item.contents}</p> */}
              </T.Text>
            </L.FlexCols>
          </L.FlexCols>
      </Contentbox>

  { couponData ?
      <CouponUsebox
        _pdleft='5px'
        onClick={openConfirm}
      >
        쿠폰사용
      <ArrowRightC/>
    </CouponUsebox>
    :
    <CouponUsebox _color='#9E9E9E' _bg='#F5F5F5'>
      사용 완료
    </CouponUsebox>
  }
  </Borderbox>
  )
}


export const Borderbox = styled.div`
  width: ${props => props._width || '100%'};
  height: ${props => props._height || 134}px;
  border-radius: ${props => props._radius || 8}px;
  padding: ${props => props._padding ||0}px;
  align-items: center;
  border: 1px solid #EEEEEE;
  background: #FFFFFF;
  flex-direction: row;
  display: flex;
`;
export const Contentbox = styled.div`
  width: ${props => props._width || '100%'};
  height: ${props => props._height || 134}px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  padding: 20px;
`;
export const CouponUsebox = styled.div`
  width: ${props => props._width || 102}px;
  height: ${props => props._height || 134}px;
  background-color: ${props => props._bg || '#E1F3F2'};
  border-radius: 0 8px 8px 0;
  color: ${props => props._color || '#0B806F'};
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  flex-direction: ${props => props._dir || 'row'};
  align-items: center;
  gap: ${props => props._gap || 0}px;
  padding-left: ${props => props._pdleft};
  @media screen and (max-width:354px) {
    font-size: 13px;
  }
`;

