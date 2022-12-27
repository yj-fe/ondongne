import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { MarketTable } from 'components/commonUi/Table';

function MarketDetailInfo() {
  return (
    <div>
      {/* 상점 소개 */}
      <L.Container>
        <L.Contents>
          <L.FlexCols>
            <T.Text _weight={700} _size={16} _color="gray900">상점 소개</T.Text>
            <T.Text _weight={400} _size={15} _color="gray800"><p>수많은 과일집이 있습니다.</p><p>하지만 저희는 다릅니다.</p><p>언제나 좋은 과일을 전달 드리기 위해 직접 과일을 확인하고 포장 합니다.</p></T.Text>
          </L.FlexCols>
        </L.Contents>
      </L.Container>


      {/* 영업정보 */}
      <L.Container >
        <L.Contents _padding=" 24px 20px">
          <L.FlexCols>
            <T.Text _weight={700} _size={16} _color="gray900">영업정보</T.Text>
            <MarketTable>
              <tbody>
                <tr>
                  <th>상호명</th>
                  <td>인싸과일</td>
                </tr>
                <tr>
                  <th>운영시간</th>
                  <td>평일, 토요일 : 10:00 ~ 19:00</td>
                </tr>
                <tr>
                  <th></th>
                  <td>일요일 : 11:00 ~ 15:00</td>
                </tr>
                <tr>
                  <th></th>
                  <td>공휴일 휴무</td>
                </tr>
                <tr>
                  <th>전화번호</th>
                  <td>070-1234-5678</td>
                </tr>
                <tr>
                  <th>배달지역</th>
                  <td>김포시 풍무동</td>
                </tr>
              </tbody>
            </MarketTable>
          </L.FlexCols>
        </L.Contents>
      </L.Container>

      
      {/* 사업자 정보 */}
      <L.Container >
        <L.Contents _padding=" 24px 20px">
          <L.FlexCols>
            <T.Text _weight={700} _size={16} _color="gray900">사업자 정보</T.Text>
            <MarketTable>
              <tbody>
                <tr>
                  <th>대표자명</th>
                  <td>아이덴잇</td>
                </tr>
                <tr>
                  <th>상호명</th>
                  <td>아이덴잇</td>
                </tr>
                <tr>
                  <th>사업자주소</th>
                  <td>서울시 강서구 가양동 가양 데시앙플렉스센터</td>
                </tr>
              </tbody>
            </MarketTable>
          </L.FlexCols>
        </L.Contents>
      </L.Container>


    </div>
  )
}

export default MarketDetailInfo