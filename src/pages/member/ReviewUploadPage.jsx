import React, { useEffect, useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import * as C from 'components/commonUi/CommonStyles';
import * as I from 'components/commonUi/Input';
import Layout from 'components/layout/Layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom'
import { Delete, OneEmptyBigStar } from 'components/commonUi/Icon';
import { OneBigStar } from './../../components/commonUi/Icon';
import { ReviewLayout } from './../../components/layout/Layout/MoreLayout';
import { imageValidation, orderName } from 'utils/utils';
import { insertReview, updateReview } from 'service/review';
import Alert from 'components/commonUi/Alert';
import Confirm from 'components/commonUi/Confirm';


function ReviewUploadPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [fileError, setFileError] = useState('');
  const [active, setActive] = useState(false);
  const [alert, setAlert] = useState(null);
  const [data, setData] = useState({
    reviewId: location.state.item.reviewId ?? 0,
    orderId: location.state.item.orderId,
    storeId: location.state.item.storeId,
    storeName: location.state.item.storeName,
    items: location.state.item.orderItems ?? location.state.item.items,
    rating: location.state.item.rating ?? 0,
    contents: location.state.item.contents ?? "",
    images: location.state.item.images ?? [],
    files: [],
    deleteFileId: [],
  });

  console.log('location.state : ',location.state)
  console.log(data);

  // 리뷰 작성
  const onSubmit = async () => {
    const response = data.reviewId ? await updateReview(data) : await insertReview(data);

    if (response && response.data.data) {
      if (data.reviewId) {
        setAlert({
          contents: "수정되었습니다.",
          buttonText: "확인",
          onButtonClick: () => navigate(-1),
          onOverlayClick: () => navigate(-1),
        })
      } else {
        setModal(true);
      }
    } else {
      setAlert({
        contents: "실패하였습니다.",
        buttonText: "확인",
        onButtonClick: () => navigate(-1),
        onOverlayClick: () => navigate(-1),
      })
    }
  }

  useEffect(() => {
    if (data.rating > 0 && data.contents) {
      setActive(true);
    } else {
      setActive(false);
    }

  }, [data]);


  return (
    <div>
      <Layout
        title="리뷰 작성"
        bell={false}
        cart={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents _height='calc(100vh - 68px)'>
            <L.FlexCols _gap={28}>
              <div>
                <T.Text _size={20} _weight={600} _color='gray900' _align='center' _line={2}>{data.storeName}</T.Text>
                <T.Text _size={16} _weight={400} _color='gray800' _align='center'>{orderName(data.items)}</T.Text>
              </div>
              <L.FlexRows _content='center' _items='center' _gap={16}>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    data.rating >= index + 1 ? (
                      <div key={index} onClick={() => setData({ ...data, rating: index + 1 })}>
                        <OneBigStar />
                      </div>
                    ) : (
                      <div key={index} onClick={() => setData({ ...data, rating: index + 1 })}>
                        <OneEmptyBigStar />
                      </div>
                    )
                  ))}
                {/* 별점 */}
                {/* {handleStar()} */}
              </L.FlexRows>

              <L.FlexCols _gap={16}>
                <B.LabelCols htmlFor="files">
                  <B.FileLebelForm>사진 첨부하기</B.FileLebelForm>
                </B.LabelCols>
                <L.FlexRows>
                  {
                    data.images.length > 0 &&
                    data.images.map((file, index) => (
                      <FileListForm
                        key={index}
                        file={file}
                        fileDeleteHandler={() => {
                          console.log(file);
                          setData({
                            ...data,
                            images: data.images.filter(item => item !== file),
                            deleteFileId: [...data.deleteFileId, file.reviewImageId]
                          })
                        }}
                      />
                    ))
                  }

                  {
                    data.files.length > 0 &&
                    data.files.map((file, idx) => (
                      <React.Fragment key={idx}>
                        <FileList
                          file={file}
                          deleteFile={() => {
                            setFileError('')
                            setData({
                              ...data,
                              files: data.files.filter(item => item !== file)
                            })
                          }} />
                      </React.Fragment>
                    ))
                  }
                </L.FlexRows>
                <input
                  type="file"
                  id="files"
                  accept='image/*'
                  style={{ display: 'none' }}
                  onChange={e => {
                    if (!e.target.files[0]) return;
                    const valid = imageValidation(e.target.files[0]);
                    if (valid) return

                    if (data.files.length === 5) {
                      return setFileError('최대 5개까지 추가 가능합니다.')
                    }

                    setData({
                      ...data,
                      files: [...data.files, e.target.files[0]]
                    })
                  }}
                />
                {fileError && <T.Text as="p" _size={13} _weight={400} style={{ color: '#D32F2F' }} >{fileError}</T.Text>}
              </L.FlexCols>

              <I.Textarea
                placeholder='내용를 입력해 주세요.'
                value={data.contents}
                onChange={e => setData({ ...data, contents: e.target.value })}
              />
            </L.FlexCols>

            <B.ActionButton
              type='button'
              color={active}
              onClick={onSubmit}
              disabled={!active}
            >{data.reviewId ? "리뷰 수정" : "리뷰 등록"}</B.ActionButton>
          </L.Contents>
        </L.Container>
        {modal && <ReviewLayout CloseModal={() => navigate(-1, { replace: true })} />}
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
      </Layout>

    </div>
  )
}

const FileListForm = ({ file, fileDeleteHandler }) => {

  const [confirm, setConfirm] = useState(null);
  const [alert, setAlert] = useState(null);
  const url = 'https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/review/'

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


export default ReviewUploadPage