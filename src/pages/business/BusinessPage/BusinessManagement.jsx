import React, { useState } from 'react'
import BusinessManagementTab1 from 'components/Buisness/BusinessManagement/BusinessManagementTab1'
import BusinessManagementTab2 from 'components/Buisness/BusinessManagement/BusinessManagementTab2'
import { CursorDiv, MarginBDiv } from 'components/Common/LayoutPageStyle'
import { TabButtonStyle, DetailTabInfo, DetailTabReview, TabContentStyle } from 'pages/main/DetailsPage/DetailsPageStyle'
import * as L from 'components/commonUi/Layout';
import { useNavigate } from 'react-router-dom';
import Layout from 'components/layout/Layout/Layout'


function BusinessManagement() {
  const navigate = useNavigate();
  const [detailTab, setDetailTab] = useState(0);

  const tabHandler = (tab) => {
    setDetailTab(tab);
  }

  return (
    <CursorDiv>
      <Layout
        title="비즈 정보 관리"
        cart={false}
        bell={false}
        floating={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px" _gap='0px'>
          <L.Contents _padding="0">
            <L.FlexCols _gap='0px'>
              {/* ============  ============ */}

              <TabButtonStyle>
                <DetailTabInfo
                  width='50%'
                  onClick={() => setDetailTab(0)}
                  infocolor={detailTab === 0}
                >
                  상점 정보
                </DetailTabInfo>
                <DetailTabReview
                  width='50%'
                  onClick={() => setDetailTab(1)}
                  reviewcolor={detailTab === 1}
                >
                  사업자 정보
                </DetailTabReview>
              </TabButtonStyle>

              <TabContentStyle>
                <TabContent detailTab={detailTab} tabHandler={tabHandler} />
              </TabContentStyle>
              <MarginBDiv />



            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </CursorDiv>
  )
}
function TabContent(props) {
  return [

    //=====================상점 정보=====================
    <BusinessManagementTab1 tabHandler={props.tabHandler} />,

    //=====================사업자 정보=====================
    <BusinessManagementTab2 tabHandler={props.tabHandler} />
  ][props.detailTab]
}
export default BusinessManagement