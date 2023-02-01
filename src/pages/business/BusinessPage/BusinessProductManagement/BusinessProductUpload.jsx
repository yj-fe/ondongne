import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import * as C from 'components/commonUi/CommonStyles';
import CheckBox from 'components/commonUi/CheckBox';
import { ContentDiv, Input, RightStyle, TitleInfo, TitleInfoDiv } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { Down, ArrowRightB, X_Icon, Delete, Calendar, Floating } from 'components/commonUi/Icon';
import { fileFormatter, imageValidation, numberFormat, numberFormatter, totalPrice } from 'utils/utils';
import CategorySelect from 'components/commonUi/CategorySelect';
import BusinessProductEditInfo from './BusinessProductEditInfo';
import { bizItemdeleteFile, createItem, getBizItem, updateItem } from 'service/bizItem';
import Alert from 'components/commonUi/Alert';
import CalendarModel from 'components/commonUi/CalendarModel';
import Confirm from 'components/commonUi/Confirm';
import { useSelector } from 'react-redux';
import Layout from 'components/layout/Layout/Layout';
import { CursorDiv } from 'components/Common/LayoutPageStyle';

function BusinessProductUpload() {

  const { id } = useParams();
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const [select, setSelect] = useState(false);
  const [editor, isEditor] = useState(false);
  const [alert, setAlert] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [calendar, setCalendar] = useState(false);
  const [categoryError, setCategoryError] = useState('');
  const [fileErrorMessage, setFileErrorMessage] = useState('');
  const [validtion, isValidtion] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    type: '',
    files: [],
    images: [],
    categories: '',
    // categories: [],
    name: '',
    price: '',
    salePercent: '',
    minCount: 0,
    maxCount: 0,
    endDate: '',
    description: '',
  })

  // 종료일 설정
  const endDateHandler = (date) => {
    setData({
      ...data,
      endDate: date,
    })
  }

  // 파일 삭제
  const fileDeleteHandler = async (file) => {

    if (data.images.length === 1) {
      return setAlert({
        contents: "업로드 된 사진이 한장 이상이어야\n삭제가 가능합니다.",
        buttonText: "확인",
        onButtonClick: () => setAlert(null),
        onOverlayClick: () => setAlert(null),
      })
    }

    const response = await bizItemdeleteFile(file);
    const { message } = response.data;

    if (message) {
      return setAlert({
        contents: message,
        buttonText: "확인",
        onButtonClick: () => {
          setAlert(null)
          setData({
            ...data,
            images: data.images.filter(item => item !== file)
          })
        },
        onOverlayClick: () => setAlert(null),
      })
    }

    setAlert({
      contents: "사진 삭제 중 오류가 발생하였습니다.",
      buttonText: "확인",
      onButtonClick: () => setAlert(null),
      onOverlayClick: () => setAlert(null),
    })
  }

  const onSubmit = async () => {
    setLoading(true);
    const response = id ? await updateItem(data) : await createItem(data);

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
      itemId: responseData.itemId,
      type: responseData.type,
      files: [],
      categories: responseData.categories,
      images: responseData.images,
      name: responseData.name,
      price: responseData.price,
      salePercent: responseData.salePercent,
      minCount: responseData.minCount,
      maxCount: responseData.maxCount,
      endDate: responseData.endDate ? responseData.endDate : '',
      description: responseData.description,
    })
  }


  useEffect(() => {
    setFileErrorMessage('');
    setCategoryError('');

    if (data.type === '') return isValidtion(false);
    if (!id && data.files.length == 0) return isValidtion(false);
    if (data.categories == '') return isValidtion(false);
    // if (data.categories.length == 0) return isValidtion(false);
    if (data.name === '') return isValidtion(false);
    if (data.price === 0) return isValidtion(false);
    if (data.description === '') return isValidtion(false);
    if (data.type === 'GROUP') {
      if (!data.minCount) {
        return isValidtion(false);
      }
    }
    return isValidtion(true);
  }, [data])

  useEffect(() => {
    if (auth.isAuthenticated && id) getItem();
  }, [auth, id])

  return (
    <CursorDiv>
      <Layout
        title={id ? '상품 수정' : '상품 등록'}
        cart={false}
        bell={false}
        floating={false}
        onBackClick={() => navigate(-1)}
      >

        <L.WhiteContainer _padding="0px 0px 60px" >
          <L.Contents _height='auto'>
            <L.FlexCols _gap={40} _padding="0px">
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
                  <TitleInfoDiv onClick={() => setSelect(!select)}>
                    <TitleInfo>
                      {data.categories === '' ? '카테고리 선택' : data.categories}
                      {/* {data.categories?.length > 0 ? data.categories.join(', ') : '카테고리 선택'} */}
                    </TitleInfo>
                    <RightStyle
                    ><Down /></RightStyle>
                  </TitleInfoDiv>

                </L.FlexRows>
                {
                  select &&
                  <CategorySelect
                    close={() => setSelect(false)}
                    isOpen={select}
                    data={data}
                    dataHanler={setData}
                    errorHandler={setCategoryError}
                  />
                }
                {categoryError && <T.Text as="p" _size={13} _weight={400} style={{ color: '#D32F2F' }} >{categoryError}</T.Text>}
              </L.FlexCols>

              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">상품명</T.Text>
                <TitleInfoDiv>
                  <Input
                    name='name'
                    placeholder='상품명을 입력해주세요.'
                    value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    maxLength={40}
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
                      type='number'
                      value={data.price}
                      // onChange={e => setData({ ...data, price: numberFormat(e.target.value) })}
                      onChange={e => setData({ ...data, price: (e.target.value) })}
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
                      onChange={e => setData({ ...data, salePercent: e.target.value })}
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
                data.type === 'GROUP'
                  ?
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
                          value={data.endDate ? data.endDate.split('T')[0] : ''}
                        />
                        <span><Calendar /></span>
                      </TitleInfoDiv>
                    </L.FlexCols>
                  </>
                  :
                  <L.FlexRows>
                  </L.FlexRows>
              }

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
              type='button'
              disabled={!validtion || loading}
              backgroundColor={validtion ? 'green700' : 'gray300'}
              onClick={() => {
                if (id) {
                  setConfirm({
                    warn: false,
                    contents: `수정하신 정보를 저장하시겠습니까?`,
                    confirmText: "네",
                    cancelText: "취소",
                    onConfirmClick: () => {
                      setConfirm(null)
                      onSubmit()
                    },
                    onCancelClick: () => setConfirm(null)
                  })
                } else {
                  onSubmit()
                }
              }}
            >
              {id ? '수정하기' : '등록하기'}
            </B.FixedActionButton>
          </L.Contents>
        </L.WhiteContainer>
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
        confirm &&
        <Confirm
          warn={confirm.warn}
          contents={confirm.contents}
          confirmText={confirm.confirmText}
          cancelText={confirm.cancelText}
          onConfirmClick={confirm.onConfirmClick}
          onCancelClick={confirm.onCancelClick}
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
    </CursorDiv>
  )
}

const FileListForm = ({ file, fileDeleteHandler }) => {

  const [confirm, setConfirm] = useState(null);
  const [alert, setAlert] = useState(null);
  const url = 'https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/item/'

  return (
    <>
      <C.ImageBox>
        <C.DeleteBtn onClick={() => {
          setConfirm({
            warn: true,
            contents: `사진을 삭제하시겠습니까?`,
            confirmText: "삭제",
            cancelText: "취소",
            onConfirmClick: () => {
              setConfirm(null);
              fileDeleteHandler(file);
            },
            onCancelClick: () => setConfirm(null)
          })
        }}>
          <Delete />
        </C.DeleteBtn>
        <img src={url + file.name} width={"100%"} height={"100%"} />
      </C.ImageBox>
      {
        confirm &&
        <Confirm
          warn={confirm.warn}
          contents={confirm.contents}
          confirmText={confirm.confirmText}
          cancelText={confirm.cancelText}
          onConfirmClick={confirm.onConfirmClick}
          onCancelClick={confirm.onCancelClick}
        />
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
    </>
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