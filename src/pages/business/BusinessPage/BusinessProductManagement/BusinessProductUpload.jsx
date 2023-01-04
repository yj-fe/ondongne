import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import * as C from 'components/commonUi/CommonStyles';
import CheckBox from 'components/commonUi/CheckBox';
import { ContentDiv, Input, RightStyle, TitleInfo, TitleInfoDiv } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { Down, ArrowRightB, X_Icon, Delete, Calendar } from 'components/commonUi/Icon';
import { fileFormatter, imageValidation, numberFormatter, totalPrice } from 'utils/utils';
import CategorySelect from 'components/commonUi/CategorySelect';
import BusinessProductEditInfo from './BusinessProductEditInfo';
import { createItem, getBizItem } from 'service/item';
import Alert from 'components/commonUi/Alert';
import CalendarModel from 'components/commonUi/CalendarModel';

function BusinessProductUpload() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [select, setSelect] = useState(false);
  const [editor, isEditor] = useState(false);
  const [alert, setAlert] = useState(null);
  const [calendar, setCalendar] = useState(false);
  const [categoryError, setCategoryError] = useState('');
  const [deleteFiles, setDeleteFiles] = useState([]);
  const [data, setData] = useState({
    type: '',
    name: '',
    description: '',
    price: '',
    salePercent: '',
    minCount: 0,
    maxCount: 0,
    endDate: '',
    recetiveType: [],
    categories: [],
    files: [],
    images: [],
  })

  // 종료일 설정
  const endDateHandler = (date) => {
    setData({
      ...data,
      endDate: date,
    })
  }

  const recetiveTypeHandler = (value) => {
    return setData({
      ...data,
      recetiveType: data.recetiveType.includes(value)
        ? data.recetiveType.filter(r => r !== value)
        : [...data.recetiveType, value]
    })
  }

  const onSubmit = async () => {
    const response = await createItem(data);
    console.log(response)

    if (response.data.data) {
      setAlert({
        contents: response.data.message,
        buttonText: "확인",
        onButtonClick: () => navigate(-1),
        onOverlayClick: () => navigate(-1),
      })
    }
  }

  const getItem = async () => {
    const response = await getBizItem(id);

    const responseData = response.data.data;

    setData({
      type: responseData.type,
      name: responseData.name,
      description: responseData.description,
      price: responseData.price,
      salePercent: responseData.salePercent,
      minCount: responseData.minCount,
      maxCount: responseData.maxCount,
      endDate: responseData.endDate,
      recetiveType: responseData.recetiveType,
      categories: responseData.categories,
      images: responseData.files,
      files: [],
    })
  }

  useEffect(() => {
    if (!id) return;
    getItem();
  }, [id])

  return (
    <div>
      <Layout
        title={id ? '상품 수정' : '상품 등록'}
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
                  <CheckBox
                    label="일반상품"
                    name="normal"
                    value="NORMAL"
                    checked={data.type === 'NORMAL'}
                    onChange={() => setData({ ...data, type: "NORMAL" })}
                  />
                  <CheckBox
                    label="공동구매 상품"
                    name="group"
                    value="GROUP"
                    checked={data.type === 'GROUP'}
                    onChange={() => setData({ ...data, type: "GROUP" })}
                  />
                </L.FlexRows>
              </L.FlexCols>

              <ContentDiv>
                <L.FlexCols>
                  <T.Text _weight={600} _size={16} _color="gray900">상품 이미지</T.Text>
                  <T.Text _weight={400} _size={14} _color="gray600">상세페이지 상단에 노출할 상품 이미지를 등록해주세요.</T.Text>
                </L.FlexCols>
                <B.LayerTextButton>
                  <B.Label htmlFor="files">
                    <T.Text _weight={400} _size={15} _color="gray900" _align='center' _content='center'>이미지 업로드</T.Text>
                  </B.Label>
                </B.LayerTextButton>
                {
                  data.files.length > 0 &&
                  <L.FlexRows _gap={20}>
                    {/* {
                      data.images.length > 0 &&
                      data.images.map((file, index) => (
                        <FileListForm
                          key={index}
                          file={file}
                          deleteFile={() => setDeleteFiles([...deleteFiles, file.itemImageId])}
                        />
                      ))
                    } */}
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
                      value={data.price}
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
              </L.FlexCols>

            </L.FlexCols>
            <B.FixedActionButton
              onClick={onSubmit}
            >등록하기</B.FixedActionButton>
          </L.Contents>
        </L.Container>
      </Layout>
      <BusinessProductEditInfo
        isOpen={editor}
        close={() => isEditor(false)}
        data={data}
        dataHanler={setData}
      />
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
      {
        calendar &&
        <CalendarModel
          modelClose={() => setCalendar(false)}
          onChange={endDateHandler}
          dateFormat={'yyyy-MM-dd HH:mm:ss'}
        />
      }
    </div>
  )
}

const FileListForm = ({ file, deleteFile }) => {

  const url = 'https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/item/'

  return (
    <C.ImageBox>
      <C.DeleteBtn onClick={deleteFile}>
        <Delete />
      </C.DeleteBtn>
      <img src={url + file.url} width={"100%"} height={"100%"} />
    </C.ImageBox>
  )
}

const FileList = ({ file, deleteFile }) => {

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!file) return;

    let reader = new FileReader();
    reader.onload = function () {
      setImage({ result: reader.result });
    };
    reader.readAsDataURL(file);
  }, [file])

  return (
    <C.ImageBox>
      <C.DeleteBtn onClick={deleteFile}>
        <Delete />
      </C.DeleteBtn>
      <img src={image?.result} width={"100%"} height={"100%"} />
    </C.ImageBox>
  )
}

export default BusinessProductUpload