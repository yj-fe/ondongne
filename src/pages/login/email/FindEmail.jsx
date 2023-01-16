import React from 'react'
import EmailRequest from 'components/Login/Email/EmailRequest/EmailRequest'
import FindResult from 'components/Login/Email/FindResult/FindResult'
import LoginHeader from 'components/Login/Common/LoginHeader/LoginHeader'
import { useState } from 'react';
import * as L from 'components/commonUi/Layout';
import { S } from 'components/layout/Layout/LayoutStyle'


function FindEmail() {

  const [data, setData] = useState({
    email: '',
    date: '',
  });
  const [findEmailSuccess, setFindEmailSuccess] = useState(false);


  return (
    <div>
      <S.Wrapper>
        <LoginHeader title="이메일 찾기" to={"/login"} />
        <S.Main>
          <L.Contents _padding='0px' _height='calc(100vh - 68px)'>
            <L.FlexCols _gap={40}>
              {
                !findEmailSuccess &&
                <EmailRequest setData={setData} setFindEmailSuccess={setFindEmailSuccess} />
              }
              {
                findEmailSuccess &&
                <FindResult data={data} />
              }
            </L.FlexCols>
          </L.Contents>
        </S.Main>
      </S.Wrapper>
    </div>
  )
}

export default FindEmail