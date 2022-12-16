import React from "react";
import styled from "styled-components";
import LoginHeader from '../components/Login/LoginHeader'
import PwdRequest from "../components/Login/PwdRequest";
import PwdReset from "../components/Login/PwdReset";


let PwdBody = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 0;
  gap: 40px;
  /* position: absolute; */
  /* width: 728px; */
  /* left: 596px; */
  /* right: 596px; */
  /* top: 60px; */
  /* background: #ccc; */
  background: #FFFFFF;

  @media only screen and (max-width: 728px) {
    width: 100%;
    /* top: 104px;
    padding: 40px 20px;
    gap: 40px;
    left: 0px;
    right: 0px; */
  }
`;


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
