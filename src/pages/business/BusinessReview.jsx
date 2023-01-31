
import React, { useEffect, useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import { useNavigate } from 'react-router-dom'
import { ArrowRightB, Cancel } from 'components/commonUi/Icon';
import { MarketComments, ReviewLikeButton, ReviewDate, MarketCommentsStyle, MarketDate, MarketId, MarketIdDiv, MarketReviewDiv, Line, Comments, ReviewLikeStyle, ReviewLikeText, ReviewLikeFrame, ReviewProfileImg, ReplyBox, } from 'pages/main/DetailsPage/DetailsPageStyle'
import { ReactComponent as ReviewLike0 } from "assets/main/reviewlikedisable.svg";
import { ReactComponent as ReviewLike } from "assets/main/reviewlike.svg";
import Avatar from 'assets/common/avatar.png';
import { Badge } from 'components/commonUi/Button';
import { Imgauto, ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import ModalDelete from 'components/Main/Cart/ModalDelete/ModalDelete';
import Confirm from 'components/commonUi/Confirm';
import { useSelector } from 'react-redux';
import { bizReviewList, updateReviewComment } from 'service/bizReview';
import Moment from 'react-moment';
import StarRate from 'components/commonUi/StarRate';
import { likeReview } from 'service/review';
import Layout from 'components/layout/Layout/Layout';
import { CursorDiv } from 'components/Common/LayoutPageStyle';
const MEMBERIMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/member/";
const IMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/review/";
const STOREIMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/";

function BusinessReview() {
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth);

  // ui
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [comment, setComment] = useState("");
  const [deleteId, setDeleteId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [commentItem, setCommentItem] = useState(null);

  // 리뷰 목록
  const loadData = async () => {
    const response = await bizReviewList(auth.storeId);
    if (response && response.data.data) {
      setData(response.data.data);
    }
  }

  //리뷰 댓글
  const commentProcess = async (id, contents, orderId = 0) => {
    const response = await updateReviewComment(id, contents, orderId);
    if (response && response.data.data) {
      setModal(false);
      setCommentItem(null);
      setIsUpdate(false);
      loadData();
    }
  }

  //리뷰 좋아요
  const reviewLike = async (id) => {
    const response = await likeReview(id);
    if (response && response.data.data) {
      loadData();
    }
  }

  const openDeleteConfirm = (item) => {
    setDeleteId(item.reviewId);
    setModal(true);
  }

  const openConfirm = (item) => {
    return setConfirm({
      contents: "리뷰 댓글를 수정하시겠습니까?",
      confirmText: "리뷰 수정",
      cancelText: "취소",
      onConfirmClick: () => {
        setComment(item.comment);
        setConfirm(null);
        setIsUpdate(true);
        setCommentItem(item);
      },
      onCancelClick: () => setConfirm(null),
    })
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      loadData();
    }
  }, [auth])

  return (
    <CursorDiv>
      <Layout
        title="리뷰 관리"
        bell={false}
        cart={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container>


          {/* 리뷰 없을 때 */}
          {
            data.length === 0 &&
            <L.Contents _height={'100vh'}>
              <L.FlexCols _gap={80} >
                <L.FlexRows >
                  <T.Text _size={15} _weight={400} _color='gray900'>전체 0건</T.Text>
                </L.FlexRows>
                <L.FlexRows _content='center' _item='center'>
                  <T.Text _size={15} _weight={300} _color='gray600'>작성된 리뷰글이 없습니다.</T.Text>
                </L.FlexRows>

              </L.FlexCols>
            </L.Contents>
          }


          {/* 리뷰 있을 때 */}
          {
            data.length > 0 &&

            <L.Contents >

              <L.FlexCols _gap={20}>
                <L.FlexRows >
                  <T.Text _size={15} _weight={400} _color='gray900'>전체 {data.length}건</T.Text>
                </L.FlexRows>
                <Line />

                {/* =======Review2====== */}
                {
                  data.map((item, index) => (
                    <React.Fragment key={index}>
                      <L.FlexCols _padding='20px 0px' _gap={16}>
                        <L.FlexRows _content='space-between' _items='center'>
                          <L.FlexRows>
                            <ReviewProfileImg src={item.memberProfile ? MEMBERIMGURL + item.memberProfile : Avatar} />
                            <L.FlexCols _gap={4}>
                              <L.FlexRows _gap='0px' _items='center' _content='left'>
                                <T.Text _size={16} _weight={600}>{item.memberNickname}</T.Text>
                                <ArrowRightB />
                              </L.FlexRows>
                              <L.FlexRows _gap={8} _items='center' _content='left'>
                                <StarRate rate={Number(item.rating)} width={12} />
                                <ReviewDate>
                                  <CreatedAt date={item.createDate} />
                                </ReviewDate>
                              </L.FlexRows>
                            </L.FlexCols>
                          </L.FlexRows>
                          <L.FlexRows _width='50px'>
                            {/* <T.Text _size={12} _color='gray400'>신고하기</T.Text> */}
                          </L.FlexRows>
                        </L.FlexRows>
                        {
                          item.images.length > 0 &&
                          item.images.map((image, idx) => (
                            <React.Fragment key={idx}>
                              <Imgauto _bdr={4} src={IMGURL + image.name} />
                            </React.Fragment>
                          ))
                        }
                        <Comments>{item.contents}</Comments>
                        <L.FlexRows>
                          <ReviewLikeStyle
                            onClick={() => reviewLike(item.reviewId)}
                          >
                            <ReviewLikeFrame color={item.likeStatus}>
                              <ReviewLikeButton>{item.likeStatus ? <ReviewLike /> : <ReviewLike0 />}</ReviewLikeButton>
                              <ReviewLikeText color={item.likeStatus}>도움돼요!</ReviewLikeText>
                              <ReviewLikeText color={item.likeStatus}>{item.likeCount}</ReviewLikeText>
                            </ReviewLikeFrame>
                          </ReviewLikeStyle>
                          {
                            !item.comment &&
                            <ReviewLikeStyle
                              onClick={() => setCommentItem(commentItem == null ? item : null)}
                            >
                              <ReviewLikeFrame color={true}>
                                <ReviewLikeText color={true}>사장님 답변 달기</ReviewLikeText>
                              </ReviewLikeFrame>
                            </ReviewLikeStyle>
                          }
                        </L.FlexRows>
                      </L.FlexCols>

                      {
                        (item.comment && item.commentDate) &&
                        <MarketReviewDiv>
                          <ReviewProfileImg src={item.storeProfile ? STOREIMGURL + item.storeProfile : Avatar} />
                          <MarketCommentsStyle>
                            <L.FlexCols _gap={16}>
                              <L.FlexRows _content='space-between'>
                                <MarketIdDiv _width='calc(100% - 118px)'>
                                  <MarketId>{item.storeName}</MarketId>
                                  <MarketDate>
                                    <CreatedAt date={item.commentDate} />
                                  </MarketDate>
                                </MarketIdDiv>
                                <L.FlexRows _width='118px'>
                                  <div
                                    type='button'
                                    onClick={() => openConfirm(item)}
                                  >
                                    <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _bg='white' _size='13px'>수정</Badge>
                                  </div>
                                  <div
                                    type='button'
                                    onClick={() => openDeleteConfirm(item)}
                                  >
                                    <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _bg='white' _size='13px'>삭제</Badge>
                                  </div>
                                </L.FlexRows>
                              </L.FlexRows>
                              <MarketComments>
                                {item.comment}
                              </MarketComments>
                            </L.FlexCols>
                          </MarketCommentsStyle>
                        </MarketReviewDiv>
                      }
                    </React.Fragment>
                  ))
                }

                {
                  commentItem &&
                  <L.FlexCols>

                    <ReplyBox>
                      <L.FlexRows _content='flex-start' _gap={4}>
                        <T.Text _size={14} _weight={600} _color='white'>@{commentItem.memberNickname}</T.Text>
                        <T.Text _size={14} _weight={400} _color='white'>님에게 리뷰 답변 {isUpdate ? "수정하기" : "남기기"}</T.Text>
                      </L.FlexRows>
                      <button
                        type="button"
                        onClick={() => setCommentItem(null)}
                      >
                        <Cancel />
                      </button>
                    </ReplyBox>

                    <L.FlexRows _gap={16}>
                      <ImgSizeLayout _width={40} _height={40} _bdr={50} src={data[0].storeProfile ? STOREIMGURL + data[0].storeProfile : Avatar} />
                      <I.Textarea
                        _height={150}
                        placeholder='리뷰 답변을 남겨보세요.'
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                      />
                      <div
                        onClick={() => commentProcess(commentItem.reviewId, comment, commentItem.orderId)}
                      >
                        <Badge _width='47px' _height='34px' _bg='green700' _bdr='4px' _color='white' _weight='600' _size='13px'>
                          {isUpdate ? "수정" : "등록"}
                        </Badge>
                      </div>
                    </L.FlexRows>
                  </L.FlexCols>
                }

              </L.FlexCols>

            </L.Contents>
          }

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
          {modal &&
            <ModalDelete
              PropsModal={() => {
                setModal(false);
                setDeleteId(0);
              }}
              PropsWithdrwal={() => commentProcess(deleteId, "")}
              closeText="취소"
              buttonText="삭제"
              titleText="리뷰 답변을 삭제하시겠습니까?" />}
        </L.Container>
      </Layout>

    </CursorDiv>
  )
}


const CreatedAt = ({ date }) => {
  let startTime = new Date(date);
  let nowTime = Date.now();

  // 방금전
  if (parseInt(startTime - nowTime) > -60000) {
    return <Moment format="방금 전">{startTime}</Moment>;
  }

  // 3일 후 날짜 표시
  if (parseInt(startTime - nowTime) < (-86400000 * 3)) {
    return <Moment format="YY.MM.DD">{startTime}</Moment>;
  }

  // 3일전 일, 시간, 분 표시
  if (parseInt(startTime - nowTime) > (-86400000 * 3)) {
    return <Moment fromNow>{startTime}</Moment>;
  }
};

export default BusinessReview




