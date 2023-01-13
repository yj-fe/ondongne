import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { ArrowTop, Down } from 'components/commonUi/Icon';
import { Scroll, ToggleBody, ToggleDiv } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import { faqList } from 'service/border';

function FrequentlyAskedQuestion() {
  const navigate = useNavigate();
  const [faq, setFaq] = useState([])


  const requestData = {
    "page": 1
  }
  const getFaq = async () => {
    const response = await faqList(requestData);
    const { data } = response.data;
    setFaq(data);
    console.log(data);
  }
  useEffect(()=>{
    getFaq()
  }, [])

  return (
    <div>
       <Layout
          title="자주하는 질문"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >
        <L.Container _height='100vh'>
          <L.Contents _height='100vh'>
            <Scroll>
            <L.FlexCols _gap='0px' _padding="0px" _items="center">
              {
                faq.map(item=>(
                  <FaqList item={item} />
                ))
              }
            </L.FlexCols>
            </Scroll>
          </L.Contents>

        </L.Container>
      </Layout>
    </div>
  )
}

function FaqList ({item}) {

  const [show, setShow] = useState();

  return(
    <>
      <L.FlexRows  
        id={item.borderId} 
        key={item.borderId} 
        onClick={() => setShow((s) => !s)} 
        _height='56px' 
        _content="space-between" 
        _items="center" 
        _padding="0px "
      >
        <T.Text _weight={400} _size={16} _color="gray900">{item.title}</T.Text>
        {show ? <ArrowTop/> : <Down/> }
      </L.FlexRows>
        {show && <Toggle item={item}/>}
    </>
  )
}

function Toggle({item}) {

  return (
    <div>
      <ToggleBody>
        <ToggleDiv _padding='16px'>
          <T.Text>{item.contents}</T.Text>
        </ToggleDiv>
      </ToggleBody>
    </div>
  )
}

export default FrequentlyAskedQuestion