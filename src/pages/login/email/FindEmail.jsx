import React from 'react'
import EmailRequest from 'components/Login/Email/EmailRequest/EmailRequest'
import FindResult from 'components/Login/Email/FindResult/FindResult'
import LoginHeader from 'components/Login/Common/LoginHeader/LoginHeader'
import {EmailBody} from './FindEmailStyle'
import { useState } from 'react';



function FindEmail() {

  const [data, setData] = useState({
    email: '',
    date: '',
  });
  const [findEmailSuccess, setFindEmailSuccess] = useState(false);


  return (
    <div>
      <LoginHeader title="이메일 찾기"/>
      <EmailBody>
        {
          !findEmailSuccess &&
          <EmailRequest setData={setData} setFindEmailSuccess={setFindEmailSuccess}/>
        }
        {
          findEmailSuccess &&
            <FindResult data={data}/>
        }
      </EmailBody>
    </div>
  )
}

export default FindEmail