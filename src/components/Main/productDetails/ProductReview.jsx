import React, { memo, useEffect, useState } from "react";
import { ReactComponent as ReviewLike } from "assets/main/reviewlike.svg";
import { ReactComponent as Filter } from "assets/main/filter.svg";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as D from 'pages/main/DetailsPage/DetailsPageStyle';
import Avatar from 'assets/common/avatar.png'
import { itemReviewList, likeReview } from "service/review";
import Moment from "react-moment";
import { ReviewLike0 } from "components/commonUi/Icon";
import { useSelector } from "react-redux";
import StarRate from "components/commonUi/StarRate";
import SortFilter from "components/commonUi/SortFilter";
import { sortFormatter } from 'utils/utils';

const MEMBERIMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/member/";
const IMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/review/";
const STOREIMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/";

const ProductReview = ({ id }) => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(false);
    const [sort, setSort] = useState("create");
    const auth = useSelector(state => state.auth);
    

    // 리뷰 목록
    const loadData = async () => {
        const response = await itemReviewList(id, sort);
        if (response && response.data.data) {
            setData(response.data.data);
        }
    };

    //리뷰 좋아요
    const reviewLike = async (id) => {
        if (!auth.isAuthenticated) {
            return;
        }
        const response = await likeReview(id);
        if (response && response.data.data) {
            loadData();
        }
    };

    // 리뷰 총 점수
    const reviewAvgRating = () => {
        let avgRating = 0;
        if(data.length > 0) {
            data.map(d => avgRating = Number(avgRating) + Number(d.rating));
        }
        return Number(avgRating);
    };


    useEffect(() => {
        loadData();
    }, [sort]);

    return (
        <>
            {
                data.length == 0 &&
                <L.FlexRows _items='center' _content='center' _height='150px'>
                    <T.Text _size={14} _weight={400} _color={'gray600'}>등록된 리뷰정보가 없습니다.</T.Text>
                </L.FlexRows>
            }
            {
                data.length > 0 &&
                <L.FlexCols _gap='0px'>
                    <L.FlexCols _gap={4} _padding='20px 0px'>
                        <L.FlexRows _gap={4} _content='center' _items='center'>
                            <StarRate rate={reviewAvgRating()} width={24} />
                        </L.FlexRows>
                        <L.FlexRows _gap={4} _content='center' _items='center'>
                            <T.Text _size={20} _weight={500} _color='gray900' >{reviewAvgRating().toString()}</T.Text>
                            <T.Text _size={20} _weight={500} _color='gray400' >/ 5</T.Text>
                        </L.FlexRows>
                    </L.FlexCols>

                    <L.FlexCols _gap={12} _padding='0px'>
                        <L.FlexRows _content='space-between' _items='center'>
                            <L.FlexRows _content='left' _items='center' _gap={4}>
                                <T.Text _size={15} _weight={400} _color='gray900' >총 리뷰</T.Text>
                                <T.Text _size={15} _weight={400} _color='gray900' >{data.length}</T.Text>
                                <T.Text _size={15} _weight={400} _color='gray900' >건</T.Text>
                            </L.FlexRows>
                            <L.FlexRows _content='right' _items='center' _gap={4}
                                onClick={() => setFilter(true)}
                            >
                                <T.Text _size={13} _weight={400} _color='gray900' >{sortFormatter(sort)}</T.Text>
                                <Filter />
                            </L.FlexRows>
                        </L.FlexRows>

                        <L.Line />

                        {data.map((item, index) => (
                            <React.Fragment key={index} >
                                {/* =======Review1====== */}
                                <L.FlexRows _content='space-between' _items='center'>
                                    <L.FlexRows>
                                        <D.ReviewProfileImg src={item.memberProfile ? MEMBERIMGURL + item.memberProfile : Avatar} />
                                        <L.FlexCols _gap={4}>
                                            <L.FlexRows _items='center' _content='left'>
                                                <T.Text _size={16} _weight={600}>{item.memberNickname}</T.Text>
                                                <D.ReviewDate>
                                                    <CreatedAt date={item.createDate} />
                                                </D.ReviewDate>
                                            </L.FlexRows>
                                            <L.FlexRows _gap={8} _items='center' _content='left'>
                                                <StarRate rate={Number(item.rating)} width={12} />
                                            </L.FlexRows>
                                        </L.FlexCols>
                                    </L.FlexRows>
                                    {/* <L.FlexRows _width='50px'>
                                        <T.Text _size={12} _color='gray400'>신고하기</T.Text>
                                    </L.FlexRows> */}
                                </L.FlexRows>
                                {
                                    item.images.length > 0 &&
                                    item.images.map((image, idx) => (
                                        <React.Fragment key={idx}>
                                            <D.UploadImg _bdr={4} src={IMGURL + image.name} />
                                        </React.Fragment>
                                    ))
                                }
                                <D.Comments>{item.contents}</D.Comments>

                                <D.ReviewLikeStyle
                                    onClick={() => reviewLike(item.reviewId)}
                                >
                                    <D.ReviewLikeFrame color={item.likeStatus}>
                                        <D.ReviewLikeButton>{item.likeStatus ? <ReviewLike /> : <ReviewLike0 />}</D.ReviewLikeButton>
                                        <D.ReviewLikeText color={item.likeStatus}>도움돼요!</D.ReviewLikeText>
                                        <D.ReviewLikeText color={item.likeStatus}>{item.likeCount}</D.ReviewLikeText>
                                    </D.ReviewLikeFrame>
                                </D.ReviewLikeStyle>

                                {/* =======MarketReview====== */}
                                {
                                    item.comment &&
                                    <D.MarketReviewDiv>
                                        <D.ReviewProfileImg src={item.storeProfile ? STOREIMGURL + item.storeProfile : Avatar} />
                                        <D.MarketCommentsStyle>
                                            <D.MarketIdDiv>
                                                <D.MarketId>{item.storeName}</D.MarketId>
                                                <D.MarketDate>
                                                    <CreatedAt date={item.commentDate} />
                                                </D.MarketDate>
                                            </D.MarketIdDiv>
                                            <D.MarketComments>{item.comment}</D.MarketComments>
                                        </D.MarketCommentsStyle>
                                    </D.MarketReviewDiv>
                                }

                            </React.Fragment>
                        ))}
                    </L.FlexCols>
                </L.FlexCols>
            }
            {filter && 
                <SortFilter
                    sorts={["create", "review", "reviewLike"]} 
                    close={() => setFilter(false)} 
                    selectedData={sort} 
                    setSelectedData={setSort} />}
        </>
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

export default memo(ProductReview);