import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import { InfoBoxDiv, TitleInfo } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { ButtonDiv, CheckStyle, CheckTitle, CheckTitleDiv } from 'pages/member/MemberWithdrawal/MemberWithdrawalStyle';
import { ReactComponent as Check } from 'assets/login/checkgray.svg'
import { ReactComponent as Checked } from 'assets/login/checked.svg'
import { ArrowTop, Down } from 'components/commonUi/Icon';
import { ToggleS } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import SimpleConfirm from './../../../components/commonUi/SimpleConfirm';
import { postVoc } from 'service/border';
import { useSelector } from 'react-redux';


function VocPage() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [btn, setBtn] = useState(false)
  const [show, setShow] = useState()
  const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)

  //포스트맨 body
  const [data, setData] = useState({
    category: "VOC",
    type: "UI/UX",
    title: "",
    contents: "",
    check: false
  })

  //분류type 확인
  const dataChecked = type => {
    setData({...data, type: type})
  }
  
  // input 확인
  const handleChange = (e) => {
    const {name, value} = e.target;
    setData(item => ({...item, [name]: value}))
  }

  // 체크 박스 핸들러
  const checkHandler = (e) => {
    e.preventDefault();
    setData(item => ({...item, check: !data.check}))
  }

  // 데이터 넘기기
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!isAuthenticated) {
      return setConfirm({
        contents: "로그인해주세요.",
        buttonText: "확인",
        onConfirmClick: () => setConfirm(null),
        onOverlayClick: () => setConfirm(null),
      })
    }

    const response = await postVoc(data);
    console.log(response)

    if(response && response.data.data) {
      return setConfirm({
        contents: "고객님의 문의가 정상적으로 접수되었습니다.\n빠른 시간내에 답변 드리도록 하겠습니다.",
        buttonText: "확인",
        onConfirmClick: () => setConfirm(null),
        onOverlayClick: () => setConfirm(null),
      })
    }
  }
  
  //조건 충족하면 버튼 active
  useEffect(() => {
    if(data.check && data.contents && data.title) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  }, [data])

  return (
    <div>
       <Layout
          title="Voc 의견"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px 0px 8px" >
          <L.Contents  _height='100vh'>
            <L.FlexCols _gap={24} _padding="0px">
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">분류</T.Text>
                <InfoBoxDiv onClick={() => setShow((s) => !s)}>
                  <TitleInfo>{data.type}</TitleInfo>
                  {show ? <ArrowTop/> : <Down/> }
                </InfoBoxDiv>
                {show && <Toggle type={data.type} handler={dataChecked} closeSelector={() => setShow(false)}/>}
             </L.FlexCols>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">제목</T.Text>
                  <I.TextInput
                    _boccolor={'#FFFFFF'}
                    type='text'
                    name='title'
                    value={data.title}
                    required
                    onChange={handleChange}
                  />
             </L.FlexCols>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">의견내용</T.Text>
                <I.Textarea 
                  type='text'
                  name='contents'
                  value={data.contents}
                  required
                  onChange={handleChange}
                  _boccolor={'#FFFFFF'}
                  _height={140}
                />
              </L.FlexCols>
              <L.FlexRows _content="flex-start" _items="center" >
                <CheckTitleDiv onClick={checkHandler}>
                  <CheckStyle
                    id="confirm"
                    type="button"
                  >
                    {data.check ? <Checked /> : <Check />}
                  </CheckStyle>
                  <CheckTitle>개인정보 수집, 이용에 동의합니다.(필수)</CheckTitle>
                </CheckTitleDiv>
            
              </L.FlexRows>

            </L.FlexCols>

            <L.BottomCols>
              <ButtonDiv
                type="button"
                btn={btn}
                disabled={!btn}
                onClick={handleSubmit}
              >의견 보내기
              </ButtonDiv>
            </L.BottomCols>

          </L.Contents>
        </L.Container>
      </Layout>
      {
          confirm &&
          <SimpleConfirm 
              warn={confirm.warn}
              contents={confirm.contents}
              confirmText={confirm.confirmText}
              onConfirmClick={confirm.onConfirmClick}
          />
      }
    </div>
  )
}


//분류 토글
function Toggle({ type, handler, closeSelector }) {

  const [data, setData] = useState([
    {
      id: 0,
      name: "UI/UX",
      checked: false
    },
    {
      id: 1,
      name: "기능/개발",
      checked: false
    },
    {
      id: 2,
      name: "상점 신고",
      checked: false
    },
    {
      id: 3,
      name: "기타 불편사항",
      checked: false
    }
  ])

  const clickHandler = name => {
    setData(
      data.map(item => 
          item.name === name 
            ? {...item, checked: !item.checked} 
            : {...item, checked: false} 
      )
    )
    handler(name);
    closeSelector();
  }

  useEffect(() => {
    setData(
      data.map(item => 
          item.name === type 
            ? {...item, checked: !item.checked} 
            : item
      )
    )
  }, []);

  return (
    <div>
      <ToggleS>
        <L.FlexCols _gap='0px'>
          {
            data.map(item => (
              <L.FlexRows 
                key={item.id}
                 _padding='12px 16px' 
                 _height='48px' 
                 _items='center'
                 onClick={() => clickHandler(item.name)}>
                <T.Text 
                  _weight={item.checked ? 600 : 400} 
                  _size={15} 
                  _color={item.checked ? "green700" : "gray900"}
                >
                  {item.name}
                </T.Text>
              </L.FlexRows>
            ))
          }
        </L.FlexCols>
      </ToggleS>
    </div>
  )
}
export default VocPage