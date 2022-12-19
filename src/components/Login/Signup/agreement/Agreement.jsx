import React, { useState, useEffect } from "react";


import ToggleDetail from './../../Password/ToggleDetail/ToggleDetail';
import { ReactComponent as Check } from "../../../../assets/login/check.svg";
import { ReactComponent as Checked } from "../../../../assets/login/checked.svg";
import { ReactComponent as ToggleDown } from "../../../../assets/login/toggledown.svg";
import { ReactComponent as ToggleUp } from "../../../../assets/login/toggleup.svg";

import { AgreementBody, AgreementInfo, AgreementText, AgreementTextStyle, CheckboxButton, CheckboxForm, CheckboxInput, CheckboxText, CheckboxToggle, Line, NextButton } from "./AgreementStyle";

function Agreement({setData, depthHandler}) {

  const [active, setActive] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  //Toggle
  const [showAge, setShowAge] = useState()
  const [showService, setShowService] = useState()
  const [showCollect, setShowCollect] = useState()
  const [showSns, setShowSns] = useState()

  const [checks, setChecks] = useState([false, false, false, false]);

  const ButtonActive = () => {
    if (checks([0]) && checks([1]) && checks([2]) === true) {
      setActive(true)
    }
  }

  const onCheckClick = index => {
    setChecks(checks => checks.map((item, idx) => {
      if (idx === index) return !item;
      else return item;
    }))
  };

  const nextHandler = (event) => {
    event.preventDefault();

    setData((prevState) => {
      return { 
        ...prevState,
        policy01: checks[0],
        policy02: checks[1],
        policy03: checks[2],
        policy04: checks[3]
      }
    });

    depthHandler(2)
  }

  useEffect(() => {
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
              onClick={() => setCheckAll((s) => !s)}
            >
              {checkAll ? <Checked /> : <Check />}
            </CheckboxButton>
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
              }}
              onChange={ButtonActive}
            >
              {checks[0] ? <Checked /> : <Check />}
            </CheckboxButton>
            <CheckboxText
              size="14px"
              weight="400"
              for="age"
            >
              [필수] 14세 이상 입니다.
            </CheckboxText>
            <CheckboxToggle
              onClick={() => setShowAge((s) => !s)}
            >
              {showAge ? <ToggleUp /> : <ToggleDown />}
            </CheckboxToggle>
          </CheckboxInput>
          {showAge && <ToggleDetail />}




          <CheckboxInput>
            <CheckboxButton
              id="Service"
              type="button"
              onClick={() => { onCheckClick(1) }}
              onChange={ButtonActive}

            >
              {checks[1] ? <Checked /> : <Check />}
            </CheckboxButton>
            <CheckboxText
              size="14px"
              weight="400"
              for="service"
            >
              [필수] 서비스 이용약관 동의
            </CheckboxText>
            <CheckboxToggle
              onClick={() => setShowService((s) => !s)}
            >
              {showService ? <ToggleUp /> : <ToggleDown />}
            </CheckboxToggle>
          </CheckboxInput>
          {showService && <ToggleDetail />}



          <CheckboxInput>
            <CheckboxButton
              id="Collect"
              type="button"
              onClick={() => { onCheckClick(2) }}
              onChange={ButtonActive}

            >
              {checks[2] ? <Checked /> : <Check />}
            </CheckboxButton>
            <CheckboxText
              size="14px"
              weight="400"
              for="collect"
            >
              [필수] 개인정보 수집 이용 동의
            </CheckboxText>
            <CheckboxToggle
              onClick={() => setShowCollect((s) => !s)}
            >
              {showCollect ? <ToggleUp /> : <ToggleDown />}
            </CheckboxToggle>
          </CheckboxInput>
          {showCollect && <ToggleDetail />}



          <CheckboxInput>
            <CheckboxButton
              id="Sns"
              type="button"
              onClick={() => { onCheckClick(3) }}
            >
              {checks[3] ? <Checked /> : <Check />}
            </CheckboxButton>
            <CheckboxText
              size="14px"
              weight="400"
              for="sns"
            >
              [선택] 마케팅정보 메일, SMS 수신동의
            </CheckboxText>
            <CheckboxToggle
              onClick={() => setShowSns((s) => !s)}
            >
              {showSns ? <ToggleUp /> : <ToggleDown />}
            </CheckboxToggle>
          </CheckboxInput>
          {showSns && <ToggleDetail />}
        </CheckboxForm>

      </AgreementBody>
      <NextButton
        type="button"
        color={checks[0] && checks[1] &&  checks[2]}
        disabled={!checks[0] && !checks[1] &&  !checks[2]}
        onClick={nextHandler}
      >
        다음
      </NextButton>
    </div>
  )
}

export default Agreement