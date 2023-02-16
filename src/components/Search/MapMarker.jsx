import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, TextCut } from '../commonUi/Text';
import * as L from 'components/commonUi/Layout';
import { Dessert, Drink, Meat, New, Rice, Vege } from '../commonUi/Icon';
import { AbsoluteDiv } from 'components/layout/Img/ImgSizeLayout';

const StyledMapMarker = styled.div`
  position: relative;
  max-width: 150px;
  height: auto;
  justify-content: center;
  align-content: center;
  gap: 0px;
`;
const Marker = styled.div`
  position: relative;
  display: flex;
  width: auto;
  height: 36px;
  background: white;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.06);
  border-radius: 99px;
  align-content: center;
  justify-content: center;
  z-index: 28;
`
const Div = styled.div`
  width: 0;
  height: 0;
  margin-left: 30px;
  border-bottom: 10px solid transparent;
  border-top: 10px solid white;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  z-index: 29;
`


function MapMarker(props) {

  const categoryIcon = (type) => {
    if (type === "야채/과일") return <Vege />
    if (type === "정육") return <Meat />
    if (type === "수산/해산") return
    if (type === "쌀/잡곡") return <Rice />
    if (type === "식품") return
    if (type === "생활용품") return
    if (type === "디저트") return <Dessert />
    if (type === "식음료") return <Drink />
    if (type === "반려동물") return
    if (type === "기타") return
  };

  return (
    <StyledMapMarker>
      { // 신규입점이면 N 띄워주기
        props.newMarket &&
        <AbsoluteDiv
          _top='-25%' _z='30' _right='none' _bottom='none'
        >
          <New />
        </AbsoluteDiv>
      }
      <L.FlexCols _gap='0px'>
        <Marker
          onClick={props.list}
        >
          <L.FlexRows _content='center' _height='36px' _items='center' _padding='8px 13px'>
            {/* 아이콘 */}
            {categoryIcon(props.category)}
            <L.FlexRows _gap='0px' _width='auto'>
              {/* 상점이름 */}
              <TextCut _wspace='nowrap' _over='hidden' _width='70px' _minWidth='60px' _align='center' _line='18px' _size={13} _weight={500} _color='gray900'>{(props.name)}</TextCut>
              { //상점이 겹치면 '외2건'
                props.marketnum &&
                <Text _width='20px' _ _align='center' _line='18px' _size={13} _weight={500} _color='gray900'>외2</Text>
              }
            </L.FlexRows>
          </L.FlexRows>
        </Marker>
        <Div />
      </L.FlexCols>
    </StyledMapMarker>
  )
}

MapMarker.propTypes = {
  name: PropTypes.string,
  category: PropTypes.func,
  list: PropTypes.bool,
  marketnum: PropTypes.bool,
  newMarket: PropTypes.bool,
}



export default MapMarker
