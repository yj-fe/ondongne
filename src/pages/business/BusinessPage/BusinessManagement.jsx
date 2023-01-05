import React, { useState } from 'react'
import BusinessManagementTab1 from 'components/Buisness/BusinessManagement/BusinessManagementTab1'
import BusinessManagementTab2 from 'components/Buisness/BusinessManagement/BusinessManagementTab2'
import { MarginBDiv } from 'components/Common/LayoutPageStyle'
import { MoreNavBody, MoreContainer } from 'pages/main/MorePage/MorePageStyle'
// import {MemberBody} from '../../login/member/MemberManagement/MemberManagementStyle'
import { DetailTabDiv, TabButtonStyle, DetailTabInfo, DetailTabReview, TabContentStyle } from 'pages/main/DetailsPage/DetailsPageStyle'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import { useNavigate } from 'react-router-dom';


function BusinessManagement() {
  const navigate = useNavigate();
  const [detailTab, setDetailTab] = useState(0)



  return (
    <div>
      <Layout
        title="비즈 정보 관리"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px" _gap='0px'>
          <L.Contents _padding="0">
            <L.FlexCols  _gap='0px'>
      {/* ============  ============ */}



            <TabButtonStyle>
              <DetailTabInfo
                onClick={() => { setDetailTab(0); }}
                infocolor={detailTab === 0}
              >
                상점 정보
              </DetailTabInfo>
              <DetailTabReview
                onClick={() => { setDetailTab(1); }}
                reviewcolor={detailTab === 1}
              >
                사업자 정보
              </DetailTabReview>
            </TabButtonStyle>

            <TabContentStyle>
              <TabContent detailTab={detailTab} />
            </TabContentStyle>
            <MarginBDiv />



            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}
function TabContent(props) {
  return [

    //=====================상점 정보=====================
    <div>
      <BusinessManagementTab1 />
    </div>,

    //=====================사업자 정보=====================
    <div>
      <BusinessManagementTab2 />
    </div>
  ][props.detailTab]
}
export default BusinessManagement