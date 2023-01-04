import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import Layout from 'components/layout/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import { Delete, Down, OneEmptyBigStar } from 'components/commonUi/Icon';
import { ActionButton, LayerOptionButtonC } from 'components/commonUi/Button';
import { OneBigStar } from './../../components/commonUi/Icon';
import { ReviewLayout } from './../../components/layout/Layout/MoreLayout';
import { AbsoluteTopDiv, ImgSizeLayout, RelativDiv } from 'components/layout/Img/ImgSizeLayout';
import maindata from 'assets/data/maindata'
import { NameToggleInput, NameToggleInputForm } from './MemberManagement/MemberManagementStyle';


function ReviewUploadPage() {
  let [item] = useState(maindata)
  const navigate = useNavigate()
  const [color, setColor] = useState(false)
  const [modal, setModal] = useState(false)

  const ShowReviewModal = () => {
    setModal(!modal);
  }
  const CloseModal = () => {
    setModal(!modal);
  }
  // const ActiveBtn()=>{
  //   if(별체크 && 내용입력){
  //     setColor(true)
  //   }
  // }

  return (
    <div>
      <Layout
        title="리뷰 작성"
        bell={false}
        cart={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents  _height={'100vh'}>
            <L.FlexCols _gap={28}>
              <div>
                <T.Text _size={20} _weight={600} _color='gray900' _align='center' _line={2}>인싸 과일</T.Text>
                <T.Text _size={16} _weight={400} _color='gray800' _align='center'>샤인머스켓 500g</T.Text>
              </div>
              <L.FlexRows _content='center' _items='center' _gap={16}>
                {/* 색있는 별 */}
                {/* <OneBigStar/> */}
                <OneEmptyBigStar/>
                <OneEmptyBigStar/>
                <OneEmptyBigStar/>
                <OneEmptyBigStar/>
                <OneEmptyBigStar/>
              </L.FlexRows>



              <LayerOptionButtonC>
              사진 첨부하기
              </LayerOptionButtonC>


              <L.FlexRows _gap={20}>
                <RelativDiv>
                  <ImgSizeLayout _width={80} _height={80} _bdr={4} src={item[0].img}/>
                  <AbsoluteTopDiv>
                    <Delete/>
                  </AbsoluteTopDiv>
                </RelativDiv>
                <RelativDiv>
                  <ImgSizeLayout _width={80} _height={80} _bdr={4} src={item[1].img}/>
                  <AbsoluteTopDiv>
                    <Delete/>
                  </AbsoluteTopDiv>
                </RelativDiv>
              </L.FlexRows>



              <NameToggleInputForm _height='200px'>
                  <NameToggleInput
                    placeholder='내용을 작성해주세요.'
                    type='text'
                  />
                </NameToggleInputForm>


            </L.FlexCols>
           



            <ActionButton
              color={color}
              onClick={ShowReviewModal}
            >리뷰 등록</ActionButton>
          </L.Contents>
        </L.Container>
        {modal && <ReviewLayout CloseModal={CloseModal} />}
      </Layout>

    </div>
  )
}




export default ReviewUploadPage