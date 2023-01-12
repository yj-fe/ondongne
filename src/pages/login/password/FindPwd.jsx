import React, { useState } from "react";
import LoginHeader from 'components/Login/Common/LoginHeader/LoginHeader'
import PwdRequest from "components/Login/Password/PwdRequest/PwdRequest";
import PwdReset from "components/Login/Password/PwdReset/PwdReset";
import * as L from 'components/commonUi/Layout';
import { S } from 'components/layout/Layout/LayoutStyle'


function FindPwd() {

  const [id, setId] = useState(null);
  const [findSuccess, setFindSuccess] = useState(false);

  return (
    <div>
      <S.Wrapper>
        <LoginHeader title="비밀번호 찾기"/>
          <S.Main>
            <L.Contents _padding='0px' _height='calc(100vh - 68px)'>
              <L.FlexCols _gap={40}>
              {
                !findSuccess && 
                <PwdRequest setFindSuccess={setFindSuccess} setId={setId}/>
              }
              {
                findSuccess && 
                <PwdReset id={id}/>
              }
            </L.FlexCols>
          </L.Contents>
        </S.Main>
      </S.Wrapper>
    </div>
  );
}

export default FindPwd;
