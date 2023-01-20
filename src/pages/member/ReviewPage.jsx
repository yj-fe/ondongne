import React, { useState, useEffect } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import Layout from 'components/layout/Layout/Layout';
import Moment from 'react-moment';
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRightB, Floating, FloatingPush, ReviewLike0 } from 'components/commonUi/Icon';
import { MarketComments, ReviewLikeButton, ReviewDate, MarketCommentsStyle, MarketDate, MarketId, MarketIdDiv, MarketReviewDiv, Line, Comments, ReviewLikeStyle, ReviewLikeText, ReviewLikeFrame, ReviewProfileImg, } from 'pages/main/DetailsPage/DetailsPageStyle'
import { ReactComponent as ReviewLike0 } from "assets/main/reviewlikedisable.svg";
import { ReactComponent as Reviewstar } from "assets/main/reviewstar.svg";
import { ReactComponent as ReviewLike } from "assets/main/reviewlike.svg";
import Avatar from 'assets/common/avatar.png';
import ReviewImg from 'assets/main/reviewimg.png'
import { Badge } from 'components/commonUi/Button';
import { Imgauto, ImgPer } from 'components/layout/Img/ImgSizeLayout';
import ModalDelete from 'components/Main/Cart/ModalDelete/ModalDelete';
import Confirm from 'components/commonUi/Confirm';
import { Scroll } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import { useSelector } from 'react-redux';
import { deleteReview, reviewList } from 'service/review';
import StarRate from "components/commonUi/StarRate";
import LayoutNotFloat from 'components/layout/Layout/LayoutNotFloat';
import { FloatingDivSearch } from 'pages/business/BusinessPage/BusinessPageStyle';
import { FloatingToggle } from 'components/layout/Layout/LayoutMain';
const IMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/review/";

function ReviewPage() {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  //ui
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(null);

  // 리뷰 목록
  const loadData = async () => {
    const response = await reviewList();
    if (response && response.data.data) {
      setData(response.data.data);
    }
  }

  // 리뷰 삭제
  const reviewDelete = async (id) => {
    const response = await deleteReview(id);
    if (response && response.data.data) {
      setModal(false);
      loadData();
    }
  }

  console.log(data);


  const openConfirm = (item) => {
    console.log(item);
    return setConfirm({
      contents: "리뷰를 수정하시겠습니까?",
      confirmText: "리뷰 수정",
      cancelText: "취소",
      onConfirmClick: () => navigate("/member/review/upload", { state: { item } }),
      onCancelClick: () => setConfirm(null),
    })
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      loadData();
    }
  }, [auth])

  return (
    <div>
      <LayoutNotFloat
        title="내가 쓴 리뷰"
        bell={false}
        cart={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >


          {/* 리뷰 없을 때 */}
          {
            data.length === 0 &&
            <L.Contents _height={'100vh'}>
              <L.FlexCols _gap={80} >
                <L.FlexRows >
                  <T.Text _size={15} _weight={400} _color='gray900'>전체 0건</T.Text>
                </L.FlexRows>
                <L.FlexRows _content='center' _item='center'>
                  <T.Text _size={15} _weight={300} _color='gray600'>아직 작성하신 리뷰가 없습니다.</T.Text>
                </L.FlexRows>

              </L.FlexCols>
            </L.Contents>
          }


          {/* 리뷰 있을 때 */}
          {
            data.length > 0 &&
            <L.Contents _height='calc(100vh - 68px)'>
              <Scroll _height='calc(100vh - 120px)'>
                <L.FlexCols _gap={12}>
                  <L.FlexRows >
                    <T.Text _size={15} _weight={400} _color='gray900'>전체 {data.length}건</T.Text>
                  </L.FlexRows>
                  <Line />
                  {
                    data.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {/* =======Review1====== */}
                        <L.FlexCols _padding='20px 0px' _gap={16}>
                          <L.FlexRows _content='space-between' _items='center'>
                            <L.FlexCols _gap={4} _width='calc( 100% - 120px)'>
                              <L.FlexRows _gap='0px' _items='center' _content='left'>
                                <T.Text _size={16} _weight={600}>Bhc 치킨</T.Text>
                                <ArrowRightB />
                              </L.FlexRows>
                              <L.FlexRows _gap={8} _items='center' _content='left'>
                                <StarRate rate={item.rating} width={12} />
                                <ReviewDate>
                                  <CreatedAt date={item.createDate} />
                                </ReviewDate>
                              </L.FlexRows>
                            </L.FlexCols>

                            <L.FlexRows _width='118px'>
                              <div
                                type='button'
                                onClick={() => openConfirm(item)}
                              >
                                <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _size='13px'>수정</Badge>
                              </div>
                              <div
                                type='button'
                                onClick={() => setModal(true)}
                              >
                                <Badge _width='55px' _padding='6px 16px' _height='30px' _bdr='99px' _size='13px'>삭제</Badge>
                              </div>
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
                          <ReviewLikeStyle>
                            <ReviewLikeFrame color={false}>
                              <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                              <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                              <ReviewLikeText color={false}>1</ReviewLikeText>
                            </ReviewLikeFrame>
                          </ReviewLikeStyle>
                        </L.FlexCols>
                        {
                          item.comment &&
                          <MarketReviewDiv>
                            <ReviewProfileImg src={Avatar} />
                            <MarketCommentsStyle>
                              <MarketIdDiv>
                                <MarketId>사장님</MarketId>
                                <MarketDate>
                                  <CreatedAt date={item.commentDate} />
                                </MarketDate>
                              </MarketIdDiv>
                              <MarketComments>
                                {item.comment}
                              </MarketComments>
                            </MarketCommentsStyle>
                          </MarketReviewDiv>
                        }
                      </React.Fragment>
                    ))
                  }
                </L.FlexCols>
              </Scroll>
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
              PropsModal={() => setModal(false)}
              PropsWithdrwal={reviewDelete}
              closeText="취소"
              buttonText="삭제"
              titleText="리뷰를 삭제하시면 재작성이 불가합니다."
              titleText2="그래도 삭제하시겠습니까?" />}
        </L.Container>
      </LayoutNotFloat>

    </div>
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



export default ReviewPage