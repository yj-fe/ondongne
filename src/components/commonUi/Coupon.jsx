import React from 'react'
import styled from "styled-components";

function Coupon() {
  return (
    <div>

    </div>
  )
}

export default Coupon


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

