import React, { useState } from 'react'
import BusinessManagementTab1 from '../../../components/Buisness/BusinessManagement/BusinessManagementTab1'
import BusinessManagementTab2 from '../../../components/Buisness/BusinessManagement/BusinessManagementTab2'
import BasicHeader from '../../../components/Main/Main/BasicHeader/BasicHeader'

import {MoreNavBody,MoreContainer} from '../../../pages/main/MorePage/MorePageStyle'
// import {MemberBody} from '../../login/member/MemberManagement/MemberManagementStyle'
import {DetailTabDiv,TabButtonStyle,DetailTabInfo,DetailTabReview,TabContentStyle} from '../../main/DetailsPage/DetailsPageStyle'

function BusinessManagement() {

  const [detailTab, setDetailTab] = useState(0)



  return (
    <div>
      <BasicHeader title="비즈 정보 관리"/>
{/* ============  ============ */}


      <MoreNavBody>
        <MoreContainer>
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
        </MoreContainer>
      </MoreNavBody>
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