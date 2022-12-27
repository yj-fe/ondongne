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
  flex-direction: row;
  display: flex;
`;

export const Contentbox = styled.div`
  width: ${props => props._width || '100%'};
  height: ${props => props._height || 134}px;
  background: #FFFFFF;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  padding: 20px;
`;

export const CouponUsebox = styled.div`
  width: ${props => props._width || 102}px;
  height: ${props => props._height || 134}px;
  background-color: ${props => props._bg || '#E1F3F2'};
  color: ${props => props._color || '#0B806F'};
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

