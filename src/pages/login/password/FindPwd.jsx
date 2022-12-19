import React, { useState } from "react";
import LoginHeader from '../../../components/Login/Common/LoginHeader/LoginHeader'
import PwdRequest from "../../../components/Login/Password/PwdRequest/PwdRequest";
import PwdReset from "../../../components/Login/Password/PwdReset/PwdReset";
import {PwdBody} from './FindPwdStyle'


function FindPwd() {

  const [id, setId] = useState(null);
  const [findSuccess, setFindSuccess] = useState(false);

  return (
    <div>
      <LoginHeader title="비밀번호 찾기"/>
      <PwdBody>
        {
          !findSuccess && 
          <PwdRequest setFindSuccess={setFindSuccess} setId={setId}/>
        }
        {
          findSuccess && 
          <PwdReset id={id}/>
        }
      </PwdBody>
    </div>
  );
}

export default FindPwd;
