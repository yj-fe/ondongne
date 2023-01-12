import React from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { MarketTable } from 'components/commonUi/Table';
import { phoneFormatter } from 'utils/utils';

function MarketDetailInfo({ item }) {

  const dayweekToText = (day) => {
    const sales = item.sales.filter(s => s.dayWeek === day);

    if (sales[0].dayOffStatus) {
      return "휴무";
    }

    return `${sales[0].openTime} ~ ${sales[0].closeTime}`
  }

  return (
    <div>
      {/* 상점 소개 */}
      <L.Container>
        <L.Contents>
          <L.FlexCols>
            <T.Text _weight={700} _size={16} _color="gray900">상점 소개</T.Text>
            <T.Text _weight={400} _size={15} _color="gray800">{item.description}</T.Text>
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
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <th>운영시간</th>
                  <td>월요일 : {dayweekToText("월요일")}</td>
                </tr>
                <tr>
                  <th></th>
                  <td>화요일 : {dayweekToText("월요일")}</td>
                </tr>
                <tr>
                  <th></th>
                  <td>수요일 : {dayweekToText("월요일")}</td>
                </tr>
                <tr>
                  <th></th>
                  <td>목요일 : {dayweekToText("월요일")}</td>
                </tr>
                <tr>
                  <th></th>
                  <td>금요일 : {dayweekToText("월요일")}</td>
                </tr>
                <tr>
                  <th></th>
                  <td>토요일 : {dayweekToText("월요일")}</td>
                </tr>
                <tr>
                  <th></th>
                  <td>일요일 : {dayweekToText("월요일")}</td>
                </tr>
                <tr>
                  <th>전화번호</th>
                  <td>{phoneFormatter(item.phone)}</td>
                </tr>
                <tr>
                  <th>배달지역</th>
                  <td>{item.deliveryAddress}</td>
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
                  <td>{item.ceo}</td>
                </tr>
                <tr>
                  <th>상호명</th>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <th>사업자주소</th>
                  <td>{item.address} {item.addressDetails}</td>
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