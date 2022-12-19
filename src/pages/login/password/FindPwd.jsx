import React from "react";
import LoginHeader from '../../../components/Login/Common/LoginHeader/LoginHeader'
import PwdRequest from "../../../components/Login/Password/PwdRequest/PwdRequest";
import PwdReset from "../../../components/Login/Password/PwdReset/PwdReset";
import {PwdBody} from './FindPwdStyle'


function FindPwd() {

  return (
    <div>
      <LoginHeader title="비밀번호 찾기"/>
      <PwdBody>
        {/* <PwdRequest /> */}
        <PwdReset />
      </PwdBody>
    </div>
  );
}

export default FindPwd;
