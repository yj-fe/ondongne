
import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import Layout from 'components/layout/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import {  ArrowRightB } from 'components/commonUi/Icon';
import { MarketComments, ReviewLikeButton, ReviewDate, MarketCommentsStyle, MarketDate, MarketId, MarketIdDiv,  MarketReviewDiv, Line, Comments, ReviewLikeStyle, ReviewLikeText, ReviewLikeFrame, ReviewProfileImg, } from 'pages/main/DetailsPage/DetailsPageStyle'
import { ReactComponent as ReviewLike0 } from "assets/main/reviewlikedisable.svg";
import { ReactComponent as Reviewstar } from "assets/main/reviewstar.svg";
import { ReactComponent as ReviewLike } from "assets/main/reviewlike.svg";
import Avatar from 'assets/common/avatar.png';
import ReviewImg from 'assets/main/reviewimg.png'
import { Badge } from 'components/commonUi/Button';
import { ImgPer, ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import ModalDelete from 'components/Main/Cart/ModalDelete/ModalDelete';
import Confirm from 'components/commonUi/Confirm';
import {  NameToggleInput, NameToggleInputForm } from 'pages/member/MemberManagement/MemberManagementStyle';
import LayoutBiz from './../../components/layout/Layout/LayoutBiz';

function BusinessReview() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false);
  const ShowDeleteModal = () => {
    setModal(!modal);
  }
  const PropsModal = () => {
    setModal(!modal);
  }

  const [confirm, setConfirm] = useState(null)

  const openConfirm = () => {
    return setConfirm({
      contents: "리뷰를 수정하시겠습니까?",
      confirmText: "리뷰 수정",
      cancelText: "취소",
      onConfirmClick: () => setConfirm(null),
      onCancelClick: () => setConfirm(null),
    })
  }

  return (
    <div>
      <LayoutBiz
        title="리뷰 관리"
        bell={false}
        cart={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >


            {/* 리뷰 없을 때 */}
          {/* <L.Contents  _height={'100vh'}>
            <L.FlexCols _gap={80} >
              <L.FlexRows >
                  <T.Text _size={15} _weight={400} _color='gray900'>전체 0건</T.Text>
              </L.FlexRows>
              <L.FlexRows  _content='center' _item='center'>
                <T.Text _size={15} _weight={300} _color='gray600'>작성된 리뷰글이 없습니다.</T.Text>
              </L.FlexRows>

            </L.FlexCols>
          </L.Contents> */}


            {/* 리뷰 있을 때 */}
            <L.Contents >

            <L.FlexCols _gap={20}>
              <L.FlexRows >
                  <T.Text _size={15} _weight={400} _color='gray900'>전체 3건</T.Text>
              </L.FlexRows>
              <Line/>


 {/* =======Review1====== */}
            <L.FlexCols _padding='20px 0px' _gap={16}>
                  <L.FlexRows _content='space-between' _items='center'>
                    <L.FlexRows>
                      <ReviewProfileImg src={Avatar} />
                      <L.FlexCols _gap={4}>
                        <L.FlexRows _gap='0px'  _items='center' _content='left'>
                          <T.Text _size={16} _weight={600}>아재의 과일</T.Text>
                          <ArrowRightB/>
                        </L.FlexRows>
                        <L.FlexRows _gap={8}  _items='center' _content='left'>
                          <Reviewstar />
                          <ReviewDate>2일 전</ReviewDate>
                        </L.FlexRows>
                      </L.FlexCols>
                    </L.FlexRows>
                    <L.FlexRows _width='50px'>
                      {/* <T.Text _size={12} _color='gray400'>신고하기</T.Text> */}
                    </L.FlexRows>
                  </L.FlexRows>

              {/* <ImgPer src={ReviewImg}/> */}
              <Comments>맛있습니다~</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                  <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={false}>1</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>

              <L.FlexRows _gap={16}>
                <ImgSizeLayout _width={40} _height={40} _bdr={50} src={Avatar} />
                <NameToggleInputForm _height='58px'>
                  <NameToggleInput
                    _size='15px'
                    placeholder='리뷰 답변을 남겨보세요.'
                    type='text'
                  />
                  <Badge _padding='8px 12px' _width='47px' _height='34px' _bg='green700' _bdr='4px' _color='white' _weight='600' _size='13px'>등록</Badge>
                </NameToggleInputForm>
              </L.FlexRows>

            </L.FlexCols>

            
            {/* =======Review2====== */}
            <L.FlexCols _padding='20px 0px' _gap={16}>
              <L.FlexRows _content='space-between' _items='center'>
                    <L.FlexRows>
                      <ReviewProfileImg src={Avatar} />
                      <L.FlexCols _gap={4}>
                        <L.FlexRows _gap='0px'  _items='center' _content='left'>
                          <T.Text _size={16} _weight={600}>아재의 과일</T.Text>
                          <ArrowRightB/>
                        </L.FlexRows>
                        <L.FlexRows _gap={8}  _items='center' _content='left'>
                          <Reviewstar />
                          <ReviewDate>2일 전</ReviewDate>
                        </L.FlexRows>
                      </L.FlexCols>
                    </L.FlexRows>
                    <L.FlexRows _width='50px'>
                    {/* <T.Text _size={12} _color='gray400'>신고하기</T.Text> */}
                    </L.FlexRows>
                  </L.FlexRows>
              <Comments>담에 또 먹을래요~~~~~~~~</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                  <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={false}>0</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </L.FlexCols>

            {/* =======MarketReview====== */}
            <MarketReviewDiv>
              <ReviewProfileImg src={Avatar} />
              <MarketCommentsStyle>
                <L.FlexCols _gap={16}>
                  <L.FlexRows _content='space-between'>
                    <MarketIdDiv>
                      <MarketId>사장님</MarketId>
                      <MarketDate>2일 전</MarketDate>
                    </MarketIdDiv>
                    <L.FlexRows _width='118px'>
                      <div
                        type='button'
                        onClick={openConfirm} 
                        >
                      <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _bg='white' _size='13px'>수정</Badge>
                      </div>
                      <div
                        type='button'
                        onClick={ShowDeleteModal} 
                        >
                      <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _bg='white' _size='13px'>삭제</Badge>
                      </div>
                    </L.FlexRows>
                  </L.FlexRows>
                    <MarketComments>
                      <p>주문해주셔서 감사합니다 우리동네님!</p><br />
                      <p>더 좋은 상품으로 보답하겠습니다.</p>
                      <p>감사합니다 ^^</p><br />
                    </MarketComments>
                </L.FlexCols>
              </MarketCommentsStyle>
            </MarketReviewDiv>


            {/* =======Review3====== */}
            <L.FlexCols _padding='20px 0px' _gap={16}>

                <L.FlexRows _content='space-between' _items='center'>
                    <L.FlexRows>
                      <ReviewProfileImg src={Avatar} />
                      <L.FlexCols _gap={4}>
                        <L.FlexRows _gap='0px'  _items='center' _content='left'>
                          <T.Text _size={16} _weight={600}>아재의 과일</T.Text>
                          <ArrowRightB/>
                        </L.FlexRows>
                        <L.FlexRows _gap={8}  _items='center' _content='left'>
                          <Reviewstar />
                          <ReviewDate>2일 전</ReviewDate>
                        </L.FlexRows>
                      </L.FlexCols>
                    </L.FlexRows>
                    <L.FlexRows _width='50px'>
                    {/* <T.Text _size={12} _color='gray400'>신고하기</T.Text> */}
                    </L.FlexRows>
                  </L.FlexRows>

              <Comments>싱싱하고 맛있어요</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                  <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={false}>0</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </L.FlexCols>

            <L.FlexRows _gap={16}>
                <ImgSizeLayout _width={40} _height={40} _bdr={50} src={Avatar} />
                <NameToggleInputForm _height='58px'>
                  <NameToggleInput
                    _size='15px'
                    placeholder='리뷰 답변을 남겨보세요.'
                    type='text'
                  />
                  <Badge _width='47px' _height='34px' _bg='green700' _bdr='4px' _color='white' _weight='600' _size='13px'>등록</Badge>
                </NameToggleInputForm>
              </L.FlexRows>

            </L.FlexCols>

            </L.Contents>

      {
        confirm &&
        <Confirm 
          contents={confirm.contents}
          confirmText={confirm.confirmText}
          cancelText={confirm.cancelText}
          onConfirmClick={confirm.onConfirmClick}
          onCancelClick={confirm.onCancelClick}
        />
      }
      {modal && <ModalDelete PropsModal={PropsModal} closeText="취소" buttonText="삭제" titleText="리뷰를 삭제하시면 재작성이 불가합니다." titleText2="그래도 삭제하시겠습니까?"/>}
        </L.Container>
      </LayoutBiz>

    </div>
  )
}




export default BusinessReview




