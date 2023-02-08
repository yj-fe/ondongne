import React, { useState } from 'react'
import { TabContent, ContentDiv, ContentTitle, TitleInfoDiv, Input, Textarea, InputBox } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle'
import { Text } from 'components/commonUi/Text'
import Alert from 'components/commonUi/Alert';
import { Final } from 'components/commonUi/Icon';
import CategoryForm from 'components/commonUi/Category/CategoryForm';
import { NextButton } from 'components/Login/Signup/agreement/AgreementStyle'
import { ConfirmButton, CenterDiv, FinalPageDiv } from './BusinessApplicationStyle'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { businessNumberFormatter } from 'utils/utils';
import { bizSignup } from 'service/biz';
import Layout from 'components/layout/Layout/Layout';
import * as L from 'components/commonUi/Layout';
import DeliveryForm from 'components/commonUi/Delivery/DeliveryForm';
import BankBookForm from 'components/commonUi/BankBook/BankBookForm';
import AddressForm from 'components/commonUi/Address/AddressForm';
import BusinessFileForm from 'components/commonUi/BusinessFile/BusinessFileForm';

function BusinessApplication() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // 보낼 데이터
  const [data, setData] = useState({
    storeName: '',
    categories: [],
    address: '',
    addressDetails: '',
    delivery: [],
    description: '',
    ceo: '',
    businessNumber: '',
    bank: '',
    accountNumber: '',
    files: []
  });

  // 비즈 신청
  const onSubmit = async () => {
    const response = await bizSignup(data);
    const result = response.data;

    if (result.data) {
      setIsSuccess(true);
    } else {
      return setAlert({
        contents: "서버 오류",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    }
  }

  useEffect(() => {
    console.log(data);
    if (
      data.storeName.length > 0
      && data.categories.length > 0
      && data.address.length > 0
      && data.addressDetails.length > 0
      && data.delivery.length > 0
      && data.ceo.length > 0
      && data.businessNumber.length === 12
      && data.bank.length > 0
      && data.accountNumber.length > 0
      && data.files.length > 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [data])

  return (

    <Layout
      title="비즈 정보 관리"
      cart={false}
      bell={false}
      floating={false}
      onBackClick={() => navigate(-1)}
    >
      <L.Container _padding="0px 0px 8px">
        <L.Contents _padding="0" _height={"calc(100vh - 70px)"}>
          <L.Scroll>
            <L.FlexCols>
              {
                !isSuccess &&
                <TabContent>
                  <div>
                    <Text _weight={600} _size={24} _color={'gray900'}><p>나만의 상점을</p><p>직접 등록해 보세요.</p></Text>
                    <Text _weight={300} _size={15} _color={'gray800'}>관리자 승인 후 상점 활동이 가능합니다.</Text>
                  </div>
                  {/* =========상점명========= */}
                  <ContentDiv>
                    <ContentTitle>상점명</ContentTitle>
                    <TitleInfoDiv>
                      <Input
                        maxLength={50}
                        placeholder='상점명 입력'
                        value={data.storeName}
                        onChange={e => setData({ ...data, storeName: e.target.value })}
                      />
                    </TitleInfoDiv>
                  </ContentDiv>

                  {/* =========카테고리========= */}
                  <CategoryForm data={data} setData={setData} />

                  {/* =========상점 주소========= */}
                  <AddressForm data={data} setData={setData} />

                  {/* =========활동지역========= */}
                  <DeliveryForm data={data} setData={setData} />

                  {/* =========사업자등록번호========= */}
                  <ContentDiv>
                    <ContentTitle>대표자</ContentTitle>
                    <TitleInfoDiv>
                      <Input
                        placeholder="대표자 명 입력"
                        value={data.ceo}
                        maxLength={30}
                        onChange={e => setData({ ...data, ceo: e.target.value })}
                      />
                    </TitleInfoDiv>
                  </ContentDiv>

                  {/* =========사업자등록번호========= */}
                  <ContentDiv>
                    <ContentTitle>사업자등록번호</ContentTitle>
                    <TitleInfoDiv>
                      <Input
                        placeholder="'-' 없이 번호만 입력"
                        value={data.businessNumber}
                        maxLength={12}
                        onChange={e => {
                          setData({
                            ...data,
                            businessNumber: businessNumberFormatter(e.target.value)
                          })
                        }}
                      />
                    </TitleInfoDiv>
                  </ContentDiv>

                  {/* =========통장 정보========= */}
                  <BankBookForm data={data} setData={setData} />

                  {/* =========사업자 등록증 첨부========= */}
                  <BusinessFileForm data={data} setData={setData} />

                  <NextButton
                    type="button"
                    disabled={!disabled}
                    color={disabled}
                    onClick={onSubmit}
                  >
                    비즈 신청하기
                  </NextButton>
                </TabContent>
              }

              {/* ============= 4. 비즈회원신청 완료페이지 ============= */}
              {
                isSuccess &&
                <FinalPageDiv>
                  <CenterDiv>
                    <Final />
                    <Text _size={22} _weight={700} _color={'gray900'}>비즈 신청이 완료되었습니다.</Text>
                    <Text _size={15} _weight={400} _color={'gray800'} _align={'center'}><p>관리자 검토 후 2영업일 이내로 승인 처리 예정입니다.</p><p>승인이 완료되면 알림으로 알려드립니다.</p></Text>
                  </CenterDiv>
                  <ConfirmButton
                    type="button"
                    onClick={() => { navigate('/more') }}
                  >
                    확인
                  </ConfirmButton>
                </FinalPageDiv>
              }
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
            </L.FlexCols>
          </L.Scroll>
        </L.Contents>
      </L.Container>
    </Layout>
  )
}

export default BusinessApplication