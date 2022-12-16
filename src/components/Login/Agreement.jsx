import React, { useState , useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Checked } from "../../assets/checked.svg";
import { ReactComponent as Icon } from "../../assets/checkinput.svg";
import { ReactComponent as ToggleDown } from "../../assets/toggledown.svg";
import { ReactComponent as ToggleUp } from "../../assets/toggleup.svg";
import ToggleDetail from "./ToggleDetail";



const AgreementBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 0;
  margin-top: 60px;
  padding-top: 60px;
  gap: 60px;

  background: #FFFFFF;

  @media only screen and (max-width: 728px) {

  }
  > form {
    max-width: 728px;
    width: 100%;
    background-color: #fff;

    @media only screen and (max-width: 728px) { 
      width: 100%;
  
    }
  }
`
const AgreementTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 648px;
  /* height: 60px; */
  padding: 0px;
  gap: 8px;
  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`
const AgreementText = styled.p`
  width: 648px;
  height: 32px;
  font-weight: 600;
  font-size: 24px;
  color: #212121;
`
const AgreementInfo = styled.p`
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* line-height: 20px; */
  color: #424242;
  @media only screen and (max-width: 728px) {
    width: 100%;
    font-size: 13px;
  }
  
`
const CheckboxForm = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  /* width: 648px; */
  /* height: 293px; */
  @media only screen and (max-width: 728px) { 
    width: 100%;
  }
`
const CheckboxInput = styled.form`
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  padding: 0px;
  gap: 8px;
  width: 648px;
  height: 24px;
`

const CheckboxButton = styled.button`
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #F5F5F5;
`
const CheckInput = styled.input`
    box-sizing: border-box;

    width: 20px;
    height: 20px;
    border: 1px solid  ${props => props.checked ? "#0B806F" :"#E0E0E0"};
    background:  ${props => props.checked ? "#0B806F" :"#FFFFFF"};
    border-radius: 2px;
    outline: none;
    appearance: none;
  
${Icon}
`
// const CheckboxButton = styled.button`
//   box-sizing: border-box;
//   width: 20px;
//   height: 20px;
//   background: #FFFFFF;
//   border: 1px solid #E0E0E0;
//   border-radius: 2px;
// `
const CheckboxText = styled.label`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  color: #212121;
`
const CheckboxToggle = styled.div`
  
  right: 0;
  display: flex;
  /* float: right; */
  /* clear: left; */
  /* align-items: flex-end; */
  padding-top: 7px;
`
const NextButton = styled.button`
  position: fixed;
  /* align-items: center; */
  /* justify-content: center; */
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  width: 728px;
  height: 56px;
  background: #0B806F;
  background: ${props => props.color ? "#0B806F" :"#E0E0E0"};
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  @media only screen and (max-width: 728px) { 
    width: 100%;
  }
`

// const NextText = styled.p`
//   position: absolute;
//   height: 26px;
//   left: calc(50% - 32px/2);
//   top: calc(50% - 26px/2);

//   font-weight: 700;
//   font-size: 18px;
//   line-height: 26px;
//   text-align: center;
//   color: #FFFFFF;
// `



function Agreement() {


  let [active, setActive] = useState(false);
  
  let [checkAll, setCheckAll] = useState(false);
  let [checkAge, setCheckAge] = useState(false);
  let [checkService, setCheckService] = useState(false);
  let [checkCollect, setCheckCollect] = useState(false);
  let [checkSns, setCheckSns] = useState(false);

  // const [disable, setDisable] = React.useState(false);
// console.log(checkAll);
// console.log(checkAge);
// console.log(checkService);
// console.log(checkCollect);
// console.log(checkSns);
// console.log(active);
// console.log(checkService);
// console.log(checkCollect);


// const ChangeCheckAll = (e) => {
//   if(checkAge === true  &&  checkService === true  &&  checkCollect === true &&  checkSns === true){
//       setCheckAll(true);
//   }else if(checkAge !== true || checkService !== true || checkCollect !== true || checkSns !== true){ 
//     return false
  // setCheckAll(!checkAll)
  // setCheckAge(!checkAge)
  // setCheckService(!checkService)
  // setCheckCollect(!checkCollect)
  // setCheckSns(!checkSns)
// }}
  // const handlecheckAll = () => {
  //   setCheckAll(!checkAll)
  // }
  // const handleCheckAge = () => {
  //   setCheckAge(!checkAge)
  // }
  // const handleCheckService = () => {
  //   setCheckService(!checkService)
  // }
  // const handleCheckCollect = () => {
  //   setCheckCollect(!checkCollect)
  // }
  // const handleCheckSns = () => {
  //   setCheckSns(!checkSns)
  // }

const ButtonActive = () => {
  if(checks([0]) && checks([1]) && checks([2])===true){
    setActive(true)
  }
}
// const ButtonActive = () => {
//   if(checkAge(true)){
//     console.log("true");
//     setActive(true)
//   }
// }



//Toggle

const [showAge, setShowAge] = useState()
const [showService, setShowService] = useState()
const [showCollect, setShowCollect] = useState()
const [showSns, setShowSns] = useState()

const [checks, setChecks] = useState([false, false, false, false]);
// const [checks, setChecks] = useState({
//   age: false,
//   service: false
//   collect: false
//   sns: false
// });

const onCheckClick = index => {
  setChecks(checks => checks.map((item, idx) => {
    if(idx === index) return !item;
    else return item;
  }))
};

// const onCheckClick2 = event => {
//   const target = event.currentTarget;
//   const id = target.id;
//   console.log({
//     target: target,
//     id: id
//   })
//   const prevChecked = checks;
//   prevChecked[id] = !prevChecked[id];
// };

useEffect(() => {

  setCheckAge(checkAll);
  setChecks(new Array(4).fill(checkAll));
  
}, [checkAll])

useEffect(() => {
  const isAllCheck = checks.filter(item => item).length === checks.length;
  setCheckAll(isAllCheck);
    
}, [checks]);


  return (
    <div>

      <AgreementBody>
        <AgreementTextStyle>
          <AgreementText>회원가입 약관 동의</AgreementText>
          <AgreementInfo>이용약관을 확인 후 필수/선택 항목을 동의 체크해 주세요.</AgreementInfo>
        </AgreementTextStyle>

        <CheckboxForm>
          <CheckboxInput>

           <CheckboxButton
              id="All"
              type="button"
              onClick={()=>setCheckAll((s)=>!s)}
              // onChange={ChangeCheckAll}
            >
            {checkAll ? <Checked/> : <Check/>}
            </CheckboxButton>





            {/* <CheckboxButton
              id="All"
              type="button"
              onClick={()=>setCheckAll((s)=>!s)}
            >
            {checkAll ? <Checked/> : <Check/>}
            </CheckboxButton> */}




            <CheckboxText 
              size="16px" 
              weight="600"
              for="all"
            >
              이용약관 전체동의
            </CheckboxText>
          </CheckboxInput>

          <Line />
          
          
          <CheckboxInput>
            <CheckboxButton
              id="Age"
              type="button"
              onClick={(e) => { 
                onCheckClick(0) 
                // onCheckClick2(e);
              }}
              // onClick={()=>setCheckAge((s)=>!s)}
              // onChange={ChangeCheckAll}
              onChange={ButtonActive}
            >
            {checks[0] ? <Checked/> : <Check/>}

            {/* {checkAge ? <Checked/> : <Check/>} */}
            </CheckboxButton>
            <CheckboxText 
              size="14px" 
              weight="400"
              for="age"
            >
              [필수] 14세 이상 입니다.
            </CheckboxText>
            <CheckboxToggle
              onClick={()=>setShowAge((s)=>!s)}
              >
              {showAge ? <ToggleUp /> : <ToggleDown/>}
            </CheckboxToggle>
          </CheckboxInput>
          {showAge && <ToggleDetail/>}




          <CheckboxInput>
            <CheckboxButton
              id="Service"
              type="button"
              onClick={() => { onCheckClick(1) }}
              // onClick={()=>setCheckService((s)=>!s)}
              // onChange={ChangeCheckAll}
              onChange={ButtonActive}

            >
            {checks[1] ? <Checked/> : <Check/>}
            {/* {checkService ? <Checked/> : <Check/>} */}
            </CheckboxButton>
            <CheckboxText 
              size="14px" 
              weight="400"
              for="service"
            >
              [필수] 서비스 이용약관 동의
            </CheckboxText>
            <CheckboxToggle
              onClick={()=>setShowService((s)=>!s)}
              >
              {showService ? <ToggleUp /> : <ToggleDown/>}
            </CheckboxToggle>
          </CheckboxInput>
          {showService && <ToggleDetail/>}



          <CheckboxInput>
            <CheckboxButton
              id="Collect"
              type="button"
              onClick={() => { onCheckClick(2) }}
              // onClick={()=>setCheckCollect((s)=>!s)}
              // onChange={ChangeCheckAll}
              onChange={ButtonActive}

            >
            {checks[2] ? <Checked/> : <Check/>}
            {/* {checkCollect ? <Checked/> : <Check/>} */}
            </CheckboxButton>
            <CheckboxText 
              size="14px" 
              weight="400"
              for="collect"
            >
              [필수] 개인정보 수집 이용 동의
            </CheckboxText>
            <CheckboxToggle
              onClick={()=>setShowCollect((s)=>!s)}
              >
              {showCollect ? <ToggleUp /> : <ToggleDown/>}
            </CheckboxToggle>
          </CheckboxInput>
          {showCollect && <ToggleDetail/>}



          <CheckboxInput>
            <CheckboxButton
              id="Sns"
              type="button"
              onClick={() => { onCheckClick(3) }}
              // onClick={()=>setCheckSns((s)=>!s)}
              // onChange={ChangeCheckAll}
            >
            {checks[3] ? <Checked/> : <Check/>}
            {/* {checkSns ? <Checked/> : <Check/>} */}
            </CheckboxButton>
            <CheckboxText 
              size="14px" 
              weight="400"
              for="sns"
            >
              [선택] 마케팅정보 메일, SMS 수신동의
            </CheckboxText>
            <CheckboxToggle
              onClick={()=>setShowSns((s)=>!s)}
              >
              {showSns ? <ToggleUp /> : <ToggleDown/>}
            </CheckboxToggle>
          </CheckboxInput>
          {showSns && <ToggleDetail/>}
        </CheckboxForm>



      </AgreementBody>
      <NextButton
        type="submit"
        // onClick={()=>{goToLogin(); errorCheck();}}
        color={active}
        disabled={active}
      >
        다음
      </NextButton> 
    </div>
  )
}

export default Agreement