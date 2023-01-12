import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Line } from 'components/Login/Signup/agreement/AgreementStyle';
import { detailsList } from 'service/border';
import dayjs from 'dayjs';

function NoticeDetailsPage(props) {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);

  // borderId 가져오기
  const {
    state: { item },
  } = useLocation();

  // 포스트맨 body
  const requestDetails = {
    borderId: `${item.borderId}`
  }
  // 공지사항 상세 불러오기
  const getDetails = async () => {
    const response = await detailsList(requestDetails);
    const { data } = response.data;
    setDetails(data);
  }

  useEffect(() => {
    getDetails()
  }, [])


  
  return (
    <div>
      <Layout
        title="공지사항"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container
         _padding="0px 0px 8px" 
        >
          <L.Contents   _height='calc(100vh - 60px)' _padding="0px">
            <L.FlexCols _gap={20} _padding="0px">
              <L.FlexCols _gap={4} _padding="8px 20px">
                <T.Text _weight={500} _size={16} _color="gray900">{details.title}</T.Text>
                <T.Text _weight={400} _size={13} _color="gray500">{dayjs(details.createDate).format('YYYY/MM/DD')}</T.Text>
             </L.FlexCols>
             <Line/>
              <L.FlexCols _gap={4} _padding="8px 20px">
                <T.Text _weight={400} _size={15} _color="gray800">{details.contents}</T.Text>
             </L.FlexCols>
             </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default NoticeDetailsPage