import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import Layout from 'components/layout/Layout/Layout';

function MarketDetailInfo() {
  return (
    <div>
      {/* <L.Container _padding=" 24px 20px"> */}
      <L.Container>
        <L.Contents>
          <L.FlexCols>
            <T.Text _weight={700} _size={16} _color="gray900">상점 소개</T.Text>
            <T.Text _weight={400} _size={15} _color="gray800"><p>수많은 과일집이 있습니다.</p><p>하지만 저희는 다릅니다.</p><p>언제나 좋은 과일을 전달 드리기 위해 직접 과일을 확인하고 포장 합니다.</p></T.Text>
          </L.FlexCols>
        </L.Contents>
      </L.Container>
      <L.Container _padding=" 24px 20px">
          <L.FlexCols>
            <T.Text _weight={700} _size={16} _color="gray900">영업정보</T.Text>
          </L.FlexCols>
          </L.Container>
    </div>
  )
}

export default MarketDetailInfo