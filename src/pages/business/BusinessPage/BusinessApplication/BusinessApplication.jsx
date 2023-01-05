import React, { useState } from 'react'
import { TabDiv, TabContent, ContentDiv, ContentTitle, TitleInfoDiv, TitleInfo, Input, RightStyle, BankToggleDiv, BankListDiv, TextCenter, FileForm, } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle'
import { Text } from 'components/commonUi/Text'
import { ReactComponent as Right } from "assets/main/right.svg";
import { ReactComponent as Down } from "assets/icons/arrow/Arrow-Down.svg";
import Alert from 'components/commonUi/Alert';
import { Final, Check, Delete, Close } from 'components/commonUi/Icon';

import { NextButton } from 'components/Login/Signup/agreement/AgreementStyle'
import { ConfirmButton, CenterDiv, FinalPageDiv } from './BusinessApplicationStyle'
import { Body, Container, Div } from 'components/Common/LayoutPageStyle';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { searchLocation } from 'service/common';
import AddressModel from 'components/AddressModel';
import { deliveryToString, businessNumberFormatter } from 'utils/utils';
import { bizSignup } from 'service/biz';
import Layout from 'components/layout/Layout/Layout';
import * as L from 'components/commonUi/Layout';

function BusinessApplication() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false)
  const [alert, setAlert] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // 보낼 데이터
  const [data, setData] = useState({
    storeName: '',
    category: '',
    delivery: '',
    businessNumber: '',
    files: []
  });

  // 카테고리 데이터
  const [categories, setCategories] = useState([
    { id: 0, name: '야채/과일', checked: false },
    { id: 1, name: '정육', checked: false },
    { id: 2, name: '수산/해산', checked: false },
    { id: 3, name: '쌀/잡곡', checked: false },
    { id: 4, name: '식품', checked: false },
    { id: 5, name: '생활용품', checked: false },
    { id: 6, name: '디저트', checked: false },
    { id: 7, name: '식음료', checked: false },
    { id: 8, name: '반려동물', checked: false },
    { id: 9, name: '기타', checked: false },
  ]);
  const [categoryErroMessage, setCategoryErrorMessage] = useState('');

  // 딜리버리 데이터
  const [deliveries, setDeliverise] = useState([]);

  // 딜리버리 모달창 오픈 여부
  const [addressModelIsOpen, setAddressModelIsOpen] = useState(false);

  // 파일
  const [files, setFiles] = useState([]);
  const [fileErrorMessage, setFileErrorMessage] = useState('');

  // 카테고리 핸들러
  const categoryHandler = (id, checked) => {

    setCategoryErrorMessage('')

    if (!checked) {
      const count = categories.filter(category => category.checked === true)
      if (count.length === 5) {
        return setCategoryErrorMessage('최대 5개까지 추가 가능합니다.');
      }
    }

    setCategories(
      categories.map(category =>
        category.id === id ? { ...category, checked: !category.checked } : category
      )
    )
  }

  // 데이터 핸들러
  const dataHandler = () => {
    // 카테고리
    const newCategory = [
      categories.filter(category => category.checked === true).map(category => category.name)
    ]

    setData({
      ...data,
      category: newCategory.join(', '),
      delivery: deliveries.join(','),
      files: files
    })
  }

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
    dataHandler();
  }, [categories, deliveries, files])

  useEffect(() => {
    if (data.businessNumber.length === 12
      && data.category.length > 0
      && data.delivery.length > 0
      && data.storeName.length > 0
      && data.files.length > 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [data])

  return (
    <div>
      {/* ============= 3. 비즈회원신청페이지 ============= */}
      <Layout
        title="비즈 정보 관리"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px 0px 8px">
          <L.Contents _padding="0" _height={'100vh'}>
            <L.FlexCols>
              {
                !isSuccess &&
                <TabContent>
                  <div>
                    <Text _weight={600} _size={24} _color={'gray900'}><p>나만의 상점을</p><p>직접 등록해 보세요.</p></Text>
                    <Text _weight={300} _size={15} _color={'gray800'}>관리자 승인 후 상점 활동이 가능합니다.</Text>
                  </div>
                  <ContentDiv>
                    <ContentTitle>상점명</ContentTitle>
                    <TitleInfoDiv>
                      <Input
                        maxLength={50}
                        placeholder='상점명 입력'
                        value={data.storeName}
                        onChange={e => {
                          setData({
                            ...data,
                            storeName: e.target.value
                          })
                        }}
                      />
                    </TitleInfoDiv>
                  </ContentDiv>
                  <ContentDiv style={{ position: "relative" }}>
                    <ContentTitle>카테고리</ContentTitle>
                    <TitleInfoDiv onClick={() => setSelect(!select)}>
                      <TitleInfo>
                        {data.category === '' ? '카테고리 선택' : data.category}
                      </TitleInfo>
                      <RightStyle

                      ><Down /></RightStyle>
                    </TitleInfoDiv>
                    {categoryErroMessage && <Text as="p" _size={13} _weight={400} style={{ color: '#D32F2F' }} >{categoryErroMessage}</Text>}
                    {
                      select &&
                      <CateToggle
                        close={() => setSelect(false)}
                        categories={categories}
                        categoryHandler={categoryHandler}
                      />
                    }
                  </ContentDiv>
                  <ContentDiv>
                    <ContentTitle>활동지역</ContentTitle>
                    <TitleInfoDiv onClick={() => setAddressModelIsOpen(true)}>
                      <TitleInfo>{data.delivery === '' ? '활동 지역 선택' : deliveryToString(data.delivery)}</TitleInfo>
                      <RightStyle><Right /></RightStyle>
                    </TitleInfoDiv>
                  </ContentDiv>
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
                  <ContentDiv>
                    <ContentTitle>첨부파일</ContentTitle>
                    <Text _size={14} _color={'gray600'} >사업자 관련 파일 첨부(파일은 pdf, jpg, png만 첨부 가능)</Text>
                    <TextCenter
                      for={"files"}
                    >
                      <TitleInfo >파일 첨부</TitleInfo>
                    </TextCenter>
                    {fileErrorMessage && <Text as="p" _size={13} _weight={400} style={{ color: '#D32F2F' }} >{fileErrorMessage}</Text>}
                    <input type="file" id="files" onChange={e => {
                      if (files.length === 5) {
                        return setFileErrorMessage('최대 5개까지 추가 가능합니다.')
                      }
                      setFiles([...files, e.target.files[0]])
                    }} />
                    {
                      files.length > 0 &&
                      <FileForm>
                        {files.map(file => (
                          <div>
                            <p>{file.name}</p>
                            <button
                              type='button'
                              onClick={() => setFiles(files.filter(item => item.name !== file.name))}
                            ><Close /></button>
                          </div>
                        ))}
                      </FileForm>
                    }
                  </ContentDiv>


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
                  desc={alert.desc}
                  buttonText={alert.buttonText}
                  onButtonClick={alert.onButtonClick}
                  onOverlayClick={alert.onOverlayClick}
                />
              }
              {
                addressModelIsOpen &&
                <AddressModel
                  setModelClose={() => setAddressModelIsOpen(false)}
                  setDeliverise={setDeliverise}
                />
              }
            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}


function CateToggle({ close, categories, categoryHandler }) {

  const onChecked = (id, checked) => {
    categoryHandler(id, checked);
    close();
  }

  return (
    <div>
      <BankToggleDiv>
        {
          categories.map(item => {
            return (
              <BankListDiv key={item.id} onClick={() => onChecked(item.id, item.checked)}>
                <TitleInfo
                  weight={item.checked && 600}
                  color={item.checked && '#0B806F'}
                >
                  {item.name}
                </TitleInfo>
              </BankListDiv>
            )
          })
        }
      </BankToggleDiv>
    </div>
  )
}

export default BusinessApplication