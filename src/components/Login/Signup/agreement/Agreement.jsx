import React, { useState, useEffect } from "react";
import ToggleDetail from 'components/Login/Password/ToggleDetail/ToggleDetail';
import { ReactComponent as Checked } from "assets/login/checked.svg";
import { ReactComponent as ToggleDown } from "assets/login/toggledown.svg";
import { ReactComponent as ToggleUp } from "assets/login/toggleup.svg";
import { UnCheck } from "components/commonUi/Icon";

import { CheckboxButton, CheckboxForm, CheckboxText, CheckboxToggle, Line, NextButton } from "./AgreementStyle";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { locationPolicy } from 'service/policy';


function Agreement({ setData, depthHandler }) {

  const [policy, setPolicy] = useState();

  const [active, setActive] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  //Toggle
  const [showAge, setShowAge] = useState()
  const [showService, setShowService] = useState()
  const [showCollect, setShowCollect] = useState()
  const [showSns, setShowSns] = useState()

  const [checks, setChecks] = useState([false, false, false, false]);

  // 정책 데이터
  const getPolicy = async (type) => {
    const response = await locationPolicy({ policyType: type });
    console.log(response);
    const { data } = response.data;
    setPolicy(data);
    if (type === "USE") setShowService((s) => !s);
    if (type === "PRIVACY") setShowCollect((s) => !s);
    if (type === "MARKETING") setShowSns((s) => !s);
  }

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
      <L.Contents _padding='32px 40px'>
        <L.FlexCols _gap={60}>
          <L.FlexCols>
            <T.Text _size={24} _weight={600} >회원가입 약관 동의</T.Text>
            <T.Text _size={15} _color='gray800'>이용약관을 확인 후 필수/선택 항목을 동의 체크해 주세요.</T.Text>
          </L.FlexCols>
          <CheckboxForm>
            <L.FlexRows
              _content='left' _items='center'
              onClick={() => setCheckAll((s) => !s)}
            >
              <CheckboxButton
                id="All"
                type="button"
              >
                {checkAll ? <Checked /> : <UnCheck />}
              </CheckboxButton>
              <CheckboxText
                size="16px"
                weight="600"
                for="all"
              >
                이용약관 전체동의
              </CheckboxText>
            </L.FlexRows>

            <Line />

            <L.FlexRows _gap='0px' _content='space-between' _items='center'>
              <L.FlexRows
                _content='left' _items='center'
                onClick={(e) => {
                  onCheckClick(0)
                }}
              >
                <CheckboxButton
                  id="Age"
                  type="button"
                  onChange={ButtonActive}
                >
                  {checks[0] ? <Checked /> : <UnCheck />}
                </CheckboxButton>
                <CheckboxText
                  size="14px"
                  weight="400"
                  for="age"
                >
                  [필수] 14세 이상 입니다.
                </CheckboxText>
              </L.FlexRows>
            </L.FlexRows>

            <L.FlexRows _content='space-between' _items='center'>
              <L.FlexRows
                _content='left' _items='center'
                onClick={() => { onCheckClick(1) }}
              >
                <CheckboxButton
                  id="Service"
                  type="button"
                  onChange={ButtonActive}
                >
                  {checks[1] ? <Checked /> : <UnCheck />}
                </CheckboxButton>
                <CheckboxText
                  size="14px"
                  weight="400"
                  for="service"
                >
                  [필수] 서비스 이용약관 동의
                </CheckboxText>
              </L.FlexRows>
              <CheckboxToggle
                onClick={() => getPolicy("USE")}
              >
                {showService ? <ToggleUp /> : <ToggleDown />}
              </CheckboxToggle>
            </L.FlexRows>
            {showService && <ToggleDetail contents={policy} />}



            <L.FlexRows _content='space-between' _items='center'>
              <L.FlexRows
                _content='left' _items='center'
                onClick={() => { onCheckClick(2) }}
              >
                <CheckboxButton
                  id="Collect"
                  type="button"
                  onChange={ButtonActive}
                >
                  {checks[2] ? <Checked /> : <UnCheck />}
                </CheckboxButton>
                <CheckboxText
                  size="14px"
                  weight="400"
                  for="collect"
                >
                  [필수] 개인정보 수집 이용 동의
                </CheckboxText>
              </L.FlexRows>
              <CheckboxToggle
                onClick={() => getPolicy("PRIVACY")}
              >
                {showCollect ? <ToggleUp /> : <ToggleDown />}
              </CheckboxToggle>
            </L.FlexRows>
            {showCollect && <ToggleDetail contents={policy} />}



            <L.FlexRows _content='space-between' _items='center'>
              <L.FlexRows
                _content='left' _items='center'
                onClick={() => { onCheckClick(3) }}
              >
                <CheckboxButton
                  id="Sns"
                  type="button"
                >
                  {checks[3] ? <Checked /> : <UnCheck />}
                </CheckboxButton>
                <CheckboxText
                  size="14px"
                  weight="400"
                  for="sns"
                >
                  [선택] 마케팅정보 메일, SMS 수신동의
                </CheckboxText>
              </L.FlexRows>
              <CheckboxToggle
                onClick={() => getPolicy("MARKETING")}
              >
                {showSns ? <ToggleUp /> : <ToggleDown />}
              </CheckboxToggle>
            </L.FlexRows>
            {showSns && <ToggleDetail contents={policy} />}
          </CheckboxForm>

        </L.FlexCols>
      </L.Contents>
      <NextButton
        type="button"
        color={checks[0] && checks[1] && checks[2]}
        disabled={!checks[0] && !checks[1] && !checks[2]}
        onClick={nextHandler}
      >
        다음
      </NextButton>
    </div>
  )
}

export default Agreement