import React, { useState } from 'react'
import BusinessManagementTab1 from '../../../components/Buisness/BusinessManagement/BusinessManagementTab1'
import BusinessManagementTab2 from '../../../components/Buisness/BusinessManagement/BusinessManagementTab2'
import BasicHeader from '../../../components/Main/Main/BasicHeader/BasicHeader'


import {MemberBody} from '../../login/member/MemberManagement/MemberManagementStyle'
import {DetailTabDiv,TabButtonStyle,DetailTabInfo,DetailTabReview,TabContentStyle} from '../../main/DetailsPage/DetailsPageStyle'
import {Container} from './BusinessManagementStyle'

function BusinessManagement() {

  const [detailTab, setDetailTab] = useState(0)



  return (
    <div>
      <BasicHeader title="비즈 정보 관리"/>
{/* ============  ============ */}


      <MemberBody>
        <Container>
          <DetailTabDiv>

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


          </DetailTabDiv>
        </Container>
      </MemberBody>
    </div>
  )
}
function TabContent(props) {
  return [

    //=====================상세정보=====================
    <div>
      <BusinessManagementTab1/>
    </div>,

    //=====================상품리뷰=====================
    <div>
      <BusinessManagementTab2/>
    </div>
  ][props.detailTab]
}
export default BusinessManagement