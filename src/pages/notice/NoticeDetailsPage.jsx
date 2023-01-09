import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Line } from 'components/Login/Signup/agreement/AgreementStyle';
import { detailsList } from 'service/border';

function NoticeDetailsPage() {
  const navigate = useNavigate();

  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  // }
  // let {id} = useParams();

  // const requestDetails = {
  //   "borderId": 3
  // }
  // const [details, setDetails] = useState([]);

  // const getDetails = async () => {
  //   const response = await detailsList(requestDetails);
  //   const { data } = response.data;
  //   console.log(data);
  //   setDetails(data);
  // }


  // useEffect(() => {
  //   getDetails()
  // }, [])


  
  return (
    <div>
      <Layout
        title="공지사항"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container
          // onSubmit={handleSubmit}
         _padding="0px 0px 8px" 
        >

          <Link to='/notice/details/:id'>
          <L.Contents  _height='100vh' _padding="0px">
            <L.FlexCols _gap={20} _padding="0px">
              <L.FlexCols _gap={4} _padding="8px 20px">
                <T.Text _weight={500} _size={16} _color="gray900">title</T.Text>
                <T.Text _weight={400} _size={13} _color="gray500">createDate</T.Text>
                {/* <T.Text _weight={500} _size={16} _color="gray900">{title}</T.Text> */}
                {/* <T.Text _weight={400} _size={13} _color="gray500">{createDate}</T.Text> */}
             </L.FlexCols>
             <Line/>
              <L.FlexCols _gap={4} _padding="8px 20px">
                <T.Text _weight={400} _size={15} _color="gray800">
                  contents

                </T.Text>
             </L.FlexCols>
             </L.FlexCols>

          </L.Contents>
        </Link>
        </L.Container>
        {/* <L.Container _padding="0px 0px 8px" 
        >
          <Link to='/notice/details/:id'>
          <L.Contents  _height='100vh' _padding="0px">
            <L.FlexCols _gap={20} _padding="0px">
              <L.FlexCols _gap={4} _padding="8px 20px">
                <T.Text _weight={500} _size={16} _color="gray900">사기를 주의하세요.</T.Text>
                <T.Text _weight={400} _size={13} _color="gray500">2022/10/10</T.Text>
             </L.FlexCols>
             <Line/>
              <L.FlexCols _gap={4} _padding="8px 20px">
                <T.Text _weight={400} _size={15} _color="gray800">
                  <p>안녕하세요.</p>
                  <p>맘스노트 관리자 입니다.</p>
                  <p>맘스노트 11월 4주차 공지사항을 알려드립니다.</p>
                  <p>저희...</p>
                </T.Text>
             </L.FlexCols>
             </L.FlexCols>

          </L.Contents>
        </Link>
        </L.Container> */}
      </Layout>
    </div>
  )
}

export default NoticeDetailsPage