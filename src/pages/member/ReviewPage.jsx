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
import { ImgPer } from 'components/layout/Img/ImgSizeLayout';
import ModalDelete from 'components/Main/Cart/ModalDelete/ModalDelete';
import Confirm from 'components/commonUi/Confirm';


function ReviewPage() {
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
      <Layout
        title="내가 쓴 리뷰"
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
                <T.Text _size={15} _weight={300} _color='gray600'>아직 작성하신 리뷰가 없습니다.</T.Text>
              </L.FlexRows>

            </L.FlexCols>
          </L.Contents> */}


            {/* 리뷰 있을 때 */}
            <L.Contents>
              <L.FlexCols _gap={12}>
                <L.FlexRows >
                    <T.Text _size={15} _weight={400} _color='gray900'>전체 3건</T.Text>
                </L.FlexRows>
                <Line/>


 {/* =======Review1====== */}
                <L.FlexCols _padding='20px 0px' _gap={16}>
                  <L.FlexRows _content='space-between' _items='center'>
                    <L.FlexCols _gap={4}>
                      <L.FlexRows _gap='0px'  _items='center' _content='left'>
                        <T.Text _size={16} _weight={600}>Bhc 치킨</T.Text>
                        <ArrowRightB/>
                      </L.FlexRows>
                      <L.FlexRows _gap={8}  _items='center' _content='left'>
                        <Reviewstar />
                        <ReviewDate>2일 전</ReviewDate>
                      </L.FlexRows>
                    </L.FlexCols>

                    <L.FlexRows _width='118px'>
                      <div
                        type='button'
                        onClick={openConfirm} 
                      >
                      <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _size='13px'>수정</Badge>
                      </div>
                      <div
                        type='button'
                        onClick={ShowDeleteModal} 
                      >
                      <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _size='13px'>삭제</Badge>
                      </div>
                    </L.FlexRows>
                  </L.FlexRows>

              <ImgPer _bdr={4}  src={ReviewImg}/>
              <Comments>맛있습니다~</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                  <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={false}>1</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </L.FlexCols>
            {/* =======Review2====== */}
            <L.FlexCols _padding='20px 0px' _gap={16}>
              <L.FlexRows _content='space-between' _items='center'>
                <L.FlexCols _gap={4}>
                  <L.FlexRows _gap='0px'  _items='center' _content='left'>
                    <T.Text _size={16} _weight={600}>교촌 치킨</T.Text>
                    <ArrowRightB/>
                  </L.FlexRows>
                  <L.FlexRows _gap={8}  _items='center' _content='left'>
                    <Reviewstar />
                    <ReviewDate>2일 전</ReviewDate>
                  </L.FlexRows>
                </L.FlexCols>

                <L.FlexRows _width='118px'>
                  <div
                    type='button'
                    onClick={openConfirm} 
                  >
                  <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _size='13px'>수정</Badge>
                  </div>
                  <div
                    type='button'
                    onClick={ShowDeleteModal} 
                  >
                  <Badge 
                    _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _size='13px'
                    >삭제</Badge>
                  </div>
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
                <MarketIdDiv>
                  <MarketId>사장님</MarketId>
                  <MarketDate>2일 전</MarketDate>
                </MarketIdDiv>
                <MarketComments>
                  <p>주문해주셔서 감사합니다 우리동네님!</p><br />
                  <p>더 좋은 상품으로 보답하겠습니다.</p>
                  <p>감사합니다 ^^</p><br />
                </MarketComments>
              </MarketCommentsStyle>
            </MarketReviewDiv>
            {/* =======Review3====== */}
            <L.FlexCols _padding='20px 0px' _gap={16}>
              <L.FlexRows _content='space-between' _items='center'>
                <L.FlexCols _gap={4}>
                  <L.FlexRows _gap='0px'  _items='center' _content='left'>
                    <T.Text _size={16} _weight={600}>BBQ 치킨</T.Text>
                    <ArrowRightB/>
                  </L.FlexRows>
                  <L.FlexRows _gap={8}  _items='center' _content='left'>
                    <Reviewstar />
                    <ReviewDate>2일 전</ReviewDate>
                  </L.FlexRows>
                </L.FlexCols>

                <L.FlexRows _width='118px'>
                  <div
                    type='button'
                    onClick={openConfirm} 
                  >
                  <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _size='13px'>수정</Badge>
                  </div>
                  <div
                    type='button'
                    onClick={ShowDeleteModal} 
                  >
                  <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _size='13px'>삭제</Badge>
                  </div>                </L.FlexRows>
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
      </Layout>

    </div>
  )
}




export default ReviewPage