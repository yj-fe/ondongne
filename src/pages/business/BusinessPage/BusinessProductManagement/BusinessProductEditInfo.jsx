import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function BusinessProductEditInfo() {


  const navigate = useNavigate();
  const [value, setValue] = useState('');



  return (
    <div>
      <Layout
          title="상품 수정"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >

        <L.Container _padding="0px" >
          <L.Contents _padding="0px" _height='100vh'>
            <ReactQuill 
              theme="snow" 
              value={value} 
              onChange={setValue} 
            />
            <B.FixedActionButton>저장</B.FixedActionButton>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default BusinessProductEditInfo