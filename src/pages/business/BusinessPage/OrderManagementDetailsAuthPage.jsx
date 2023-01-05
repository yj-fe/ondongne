import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import * as C from 'components/commonUi/CommonStyles';
import { Down, X_Icon, Delete, Camera, } from 'components/commonUi/Icon';
import { CameraImg } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';


function OrderManagementDetailsAuthPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Layout
        title='사진 등록'
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >

        <L.Container _padding="0px 0px 60px" >
          <L.Contents _height='auto'>
            <L.FlexCols _gap={40} _padding="8px 20px">
              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">판매 종류</T.Text>
                <L.FlexRows _gap={16}>
                  <B.LayerTextButton _width='100px' _height='100px'>
                    <L.FlexCols>
                      <L.FlexRows _content='center'>
                      <Camera/>
                      </L.FlexRows>
                      <T.Text _align='center' _size={14}>파일 첨부</T.Text>
                    </L.FlexCols>
                  </B.LayerTextButton>
                </L.FlexRows>
              </L.FlexCols>

              {/* <ContentDiv>
                <L.FlexCols>
                  <T.Text _weight={600} _size={16} _color="gray900">상품 이미지</T.Text>
                  <T.Text _weight={400} _size={14} _color="gray600">상세페이지 상단에 노출할 상품 이미지를 등록해주세요.</T.Text>
                </L.FlexCols>
                <B.LayerTextButton>
                  <B.Label htmlFor="files">
                    <T.Text _weight={400} _size={15} _color="gray900" _align='center' _content='center'>이미지 업로드</T.Text>
                  </B.Label>
                </B.LayerTextButton>
                {fileErrorMessage && <T.Text as="p" _size={13} _weight={400} style={{ color: '#D32F2F' }} >{fileErrorMessage}</T.Text>}
                {
                  (data.files.length > 0 || data.images.length > 0) &&
                  <L.FlexRows _gap={20}>
                    {
                      data.images.length > 0 &&
                      data.images.map((file, index) => (
                        <FileListForm
                          key={index}
                          file={file}
                          fileDeleteHandler={fileDeleteHandler}
                        />
                      ))
                    }
                    {
                      data.files.length > 0 &&
                      data.files.map((file, index) => (
                        <FileList
                          key={index}
                          file={file}
                          deleteFile={() =>
                            setData({
                              ...data,
                              files: data.files.filter(item => item !== file)
                            })
                          } />
                      ))
                    }
                  </L.FlexRows>
                }
                <input
                  type="file"
                  id="files"
                  accept='image/*'
                  onChange={e => {
                    if (!e.target.files[0]) return;
                    const valid = imageValidation(e.target.files[0]);
                    if (valid) return

                    if (data.files.length === 7) {
                      return setFileErrorMessage('최대 7개까지 추가 가능합니다.')
                    }

                    setData({
                      ...data,
                      files: [...data.files, e.target.files[0]]
                    })
                  }}
                />
              </ContentDiv>

              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">카테고리</T.Text>
                <L.FlexRows _gap={16}>
                  <TitleInfoDiv>
                    <TitleInfo>
                      {data.categories?.length > 0 ? data.categories.join(', ') : '카테고리 선택'}
                    </TitleInfo>
                    <RightStyle
                      onClick={() => setSelect(!select)}
                    ><Down /></RightStyle>
                  </TitleInfoDiv>
                </L.FlexRows>
                {categoryError && <T.Text as="p" _size={13} _weight={400} style={{ color: '#D32F2F' }} >{categoryError}</T.Text>}
                {
                  select &&
                  <CategorySelect
                    isOpen={select}
                    data={data}
                    dataHanler={setData}
                    errorHandler={setCategoryError}
                  />
                }
              </L.FlexCols>

              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">상품명</T.Text>
                <TitleInfoDiv>
                  <Input
                    name='name'
                    placeholder='상품명을 입력해주세요.'
                    value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    maxLength={255}
                  />
                </TitleInfoDiv>
              </L.FlexCols>


              <L.FlexRows>
                <L.FlexCols _gap={16}>
                  <T.Text _weight={600} _size={16} _color="gray900">상품 가격(원)</T.Text>
                  <TitleInfoDiv>
                    <Input
                      name='price'
                      placeholder='0'
                      value={numberFormat(data.price)}
                      onChange={e => setData({ ...data, price: numberFormatter(e.target.value) })}
                      maxLength={12}
                    />
                    <span>￦</span>
                  </TitleInfoDiv>
                </L.FlexCols>

                <L.FlexCols _gap={16}>
                  <T.Text _weight={600} _size={16} _color="gray900">할인율(%)</T.Text>
                  <TitleInfoDiv>
                    <Input
                      name='salePercent'
                      placeholder='0'
                      value={data.salePercent}
                      onChange={e => setData({ ...data, salePercent: numberFormatter(e.target.value) })}
                      maxLength={3}
                    />
                    <span>%</span>
                  </TitleInfoDiv>
                </L.FlexCols>

                <L.FlexCols _gap={16}>
                  <T.Text _weight={600} _size={16} _color="gray900">할인 가격</T.Text>
                  <TitleInfoDiv>
                    <Input
                      disabled
                      style={{ background: '#fff' }}
                      value={totalPrice(data.price, data.salePercent)}
                    />
                    <span>￦</span>
                  </TitleInfoDiv>
                </L.FlexCols>
              </L.FlexRows>

              {
                data.type === 'GROUP' &&
                <>
                  <L.FlexRows>
                    <L.FlexCols _gap={16}>
                      <T.Text _weight={600} _size={16} _color="gray900">최소 수량</T.Text>
                      <TitleInfoDiv>
                        <Input
                          name='minCount'
                          placeholder='0'
                          value={data.minCount}
                          onChange={e => setData({ ...data, minCount: numberFormatter(e.target.value) })}
                          maxLength={10}
                        />
                        <span>개</span>
                      </TitleInfoDiv>
                    </L.FlexCols>

                    <L.FlexCols _gap={16}>
                      <T.Text _weight={600} _size={16} _color="gray900">최대 수량</T.Text>
                      <TitleInfoDiv>
                        <Input
                          name='maxCount'
                          placeholder='0'
                          value={data.maxCount}
                          onChange={e => setData({ ...data, maxCount: numberFormatter(e.target.value) })}
                          maxLength={10}
                        />
                        <span>개</span>
                      </TitleInfoDiv>
                    </L.FlexCols>
                  </L.FlexRows>

                  <L.FlexCols _gap={16}>
                    <T.Text _weight={600} _size={16} _color="gray900">판매 종료일</T.Text>
                    <TitleInfoDiv
                      onClick={() => setCalendar(true)}
                    >
                      <Input
                        disabled
                        name='endDate'
                        placeholder='판매 종료일 선택'
                        style={{ background: '#fff' }}
                        value={data.endDate ? data.endDate.split(' ')[0] : ''}
                      />
                      <span><Calendar /></span>
                    </TitleInfoDiv>
                  </L.FlexCols>
                </>
              }


              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">배달/픽업 여부</T.Text>
                <L.FlexRows _gap={16}>
                  <CheckBox
                    label="배달 가능"
                    name="delivery"
                    checked={data.recetiveType.includes('배달')}
                    onChange={() => recetiveTypeHandler('배달')}
                  />
                  <CheckBox
                    label="픽업 가능"
                    name="pickup"
                    checked={data.recetiveType.includes('픽업')}
                    onChange={() => recetiveTypeHandler('픽업')}
                  />
                  <CheckBox
                    label="택배 가능"
                    name="parcel"
                    checked={data.recetiveType.includes('택배')}
                    onChange={() => recetiveTypeHandler('택배')}
                  />
                </L.FlexRows>
              </L.FlexCols>

              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">상품 정보</T.Text>
                <TitleInfoDiv
                  onClick={() => isEditor(true)}
                >
                  <TitleInfo>작성하기</TitleInfo>
                  <RightStyle
                  ><ArrowRightB /></RightStyle>
                </TitleInfoDiv>
              </L.FlexCols> */}

            </L.FlexCols>
            <B.FixedActionButton
              type='button'
            >
              배달/픽업 완료
            </B.FixedActionButton>
          </L.Contents>
        </L.Container>
      </Layout>


    </div>
  )
}

export default OrderManagementDetailsAuthPage