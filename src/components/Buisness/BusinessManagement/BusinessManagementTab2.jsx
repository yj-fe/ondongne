import React, { useState, useEffect } from 'react'
import { TabDiv, ContentDiv, ContentTitle, TitleInfoDiv, TabBtn, Input } from './BusinessManagementTabStyle'
import { useSelector } from 'react-redux';
import { bizUpdate, getBiz } from 'service/biz';
import { useNavigate } from 'react-router-dom';
import { businessNumberFormatter } from 'utils/utils';
import Alert from 'components/commonUi/Alert';
import * as L from 'components/commonUi/Layout';
import BankBookForm from 'components/commonUi/BankBook/BankBookForm';
import AddressForm from 'components/commonUi/Address/AddressForm';
import BusinessFileForm from 'components/commonUi/BusinessFile/BusinessFileForm';

function BusinessManagementTab2() {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  const [active, setActive] = useState(false);
  const [alert, setAlert] = useState(null);
  const [biz, setBiz] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setBiz({ ...biz, [name]: value });
  }

  // 비즈 수정 완료
  const onSubmit = async () => {
    const response = await bizUpdate(biz);

    if (response && response.data) {
      return setAlert({
        contents: "사업자 정보를 수정하였습니다.",
        buttonText: "확인",
        onButtonClick: () => { setAlert(false); navigate('/business'); },
        onOverlayClick: () => setAlert(false),
      })
    } else {
      return setAlert({
        contents: "사업자 정보 수정을 실패하였습니다.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    }
  }

  // 비즈 회원 조회
  const bizMember = async () => {
    const response = await getBiz();
    const { data } = response.data;
    if (!data) {
      navigate("/");
    }
    setBiz({
      ...data,
      deleteFiles: []
    });
  }

  useEffect(() => {
    if (auth.isAuthenticated) bizMember()
  }, [auth])

  useEffect(() => {
    if (!biz) return;
    if (biz.address && biz.addressDetails
      && biz.ceo && biz.phone && biz.bank
      && biz.accountNumber && biz.bizFiles.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [biz])

  if (!biz) return <></>;

  return (
    <>
      <TabDiv>

        <L.Contents >
          <L.FlexCols _gap={40}>

            <ContentDiv>
              <ContentTitle>대표자 명</ContentTitle>
              <TitleInfoDiv>
                <Input
                  name='ceo'
                  value={biz.ceo}
                  onChange={onChange}
                  placeholder="대표자 명 입력"
                />
              </TitleInfoDiv>
            </ContentDiv>

            <ContentDiv>
              <ContentTitle>전화번호</ContentTitle>
              <TitleInfoDiv>
                <Input
                  name='phone'
                  value={biz.phone}
                  onChange={onChange}
                  placeholder="전화번호 입력"
                />
              </TitleInfoDiv>
            </ContentDiv>

            {/* =========상점 주소========= */}
            <AddressForm data={biz} setData={setBiz} />

            <ContentDiv>
              <ContentTitle>사업자등록번호</ContentTitle>
              <TitleInfoDiv>
                <Input
                  name='businessNumber'
                  value={biz.businessNumber}
                  maxLength={12}
                  placeholder="사업자 등록 번호 입력"
                  onChange={e => {
                    setBiz({
                      ...biz,
                      businessNumber: businessNumberFormatter(e.target.value)
                    })
                  }}
                />
              </TitleInfoDiv>
            </ContentDiv>

            {/* =========통장 정보========= */}
            <BankBookForm data={biz} setData={setBiz} />

            {/* =========사업자 등록증 첨부========= */}
            <BusinessFileForm data={biz} setData={setBiz} />

          </L.FlexCols>
        </L.Contents>


        <TabBtn
          disabled={!active}
          _active={active}
          onClick={onSubmit}
        >확인</TabBtn>

      </TabDiv>
      {
        alert &&
        <Alert
          title={alert.title}
          contents={alert.contents}
          buttonText={alert.buttonText}
          onButtonClick={alert.onButtonClick}
          onOverlayClick={alert.onOverlayClick}
        />
      }
    </>
  )
}

export default BusinessManagementTab2