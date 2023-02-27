import React, { useState, useEffect, useCallback } from "react";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as C from "components/commonUi/Coupon";
import {
    ModalBody,
    ModalButton,
    ModalDiv1,
    ModalOutside,
} from "components/Main/More/ModalPageStyle";
import { useNavigate } from "react-router-dom";
import Layout from "components/layout/Layout/Layout";
import { DownloadC, More } from "components/commonUi/Icon";
import LoadingBar from "components/commonUi/LoadingBar";
import { CursorDiv } from "components/Common/LayoutPageStyle";
import { bizCouponList } from "../../../../service/coupon";
import { useSelector } from "react-redux";
import HTMLReactParser from "html-react-parser";
import Moment from "react-moment";
import "moment/locale/ko";
import { couponDelete } from "service/coupon";
import Alert from "../../../../components/commonUi/Alert";

function BusinessCoupon() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [alert, setAlert] = useState(null);

    const loadData = useCallback(async () => {
        const response = await bizCouponList(auth.storeId);
        if (response && response.data.data) {
            setList(response.data.data);
            setLoading(false);
        }
    }, [auth.storeId]);

    const deleteHandler = async (id) => {
        const response = await couponDelete(id);
        console.log(response);
        if (response && response.data) {
            loadData();
        }
    };

    useEffect(() => {
        setLoading(true);
        loadData();
    }, [loadData]);

    if (loading) return <></>;

    return (
        <CursorDiv>
            <Layout
                title="쿠폰소식 관리"
                cart={false}
                bell={false}
                onBackClick={() => navigate(-1)}
            >
                <L.Container>
                    <L.Contents _height="calc(100vh - 50px)" _cursor="default">
                        <L.Scroll _height="calc(100vh - 110px)">
                            {loading && <LoadingBar />}
                            {/* =================== 쿠폰 없을 때 =================== */}
                            {!loading && list.length === 0 && (
                                <BusinessCouponEmpty />
                            )}
                            {/* =================== 쿠폰 있을 때 =================== */}
                            {!loading && list && list.length > 0 && (
                                <BusinessCouponContent
                                    list={list}
                                    deleteHandler={deleteHandler}
                                />
                            )}
                        </L.Scroll>
                    </L.Contents>
                </L.Container>
            </Layout>
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
        </CursorDiv>
    );
}

// {/* =================== 쿠폰 없을 때 =================== */}
function BusinessCouponEmpty() {
    return (
        <L.FlexCols _padding={0} _gap={0}>
            <T.Text _weight={400} _size={15} _color="gray900">
                전체 0건
            </T.Text>
            <L.Line />
            <L.Contents _padding="80px 20px">
                <L.FlexCols _padding={0} _gap={4}>
                    <T.Text
                        _weight={300}
                        _size={15}
                        _color="gray600"
                        _align="center"
                    >
                        작성된 쿠폰소식이 없습니다.
                    </T.Text>
                </L.FlexCols>
            </L.Contents>
        </L.FlexCols>
    );
}

// {/* =================== 쿠폰 있을 때 =================== */}
function BusinessCouponContent({ list, deleteHandler }) {
    const [modal, setModal] = useState(false);

    return list.map((item) => (
        <L.FlexCols _gap={16} style={{ marginBottom: 32 }}>
            <L.FlexRows _align="center" _content="space-between">
                <L.FlexCols _gap={1}>
                    <T.Text _size={18} _weight={600} _color="gray900">
                        {item.title}
                    </T.Text>
                    <T.Text _size={13} _weight={400} _color="gray500">
                        <CreatedAt date={item.createDate} />
                    </T.Text>
                </L.FlexCols>
                <button type="button" onClick={() => setModal(true)}>
                    <More />
                </button>
            </L.FlexRows>

            {HTMLReactParser(item.contents)}

            <C.Borderbox>
                <C.Contentbox>
                    <L.FlexCols _gap={12}>
                        <L.FlexCols _gap={0}>
                            <T.Text _size={18} _weight={600} _color="gray900">
                                {item.coupon}
                            </T.Text>
                        </L.FlexCols>
                        <L.FlexCols>
                            <T.Text
                                ext
                                _size={13}
                                _weight={400}
                                _color="gray500"
                            >
                                <p>
                                    <Moment format="YY.MM.DD">
                                        {item.endDate}
                                    </Moment>{" "}
                                    까지
                                </p>
                                <p>방문결제 시 현장 할인</p>
                            </T.Text>
                        </L.FlexCols>
                    </L.FlexCols>
                </C.Contentbox>
                <C.CouponUsebox _dir="column" _gap={4}>
                    <DownloadC />
                    쿠폰
                </C.CouponUsebox>
            </C.Borderbox>
            {modal && (
                <MoreLayout
                    PropsModal={() => setModal(false)}
                    deleteHandler={deleteHandler}
                    id={item.storeCouponId}
                />
            )}
        </L.FlexCols>
    ));
}

const CreatedAt = ({ date }) => {
    let startTime = new Date(date);
    let nowTime = Date.now();

    // 방금전
    if (parseInt(startTime - nowTime) > -60000) {
        return <Moment format="방금 전">{startTime}</Moment>;
    }

    // 3일 후 날짜 표시
    if (parseInt(startTime - nowTime) < -86400000 * 3) {
        return <Moment format="YY.MM.DD">{startTime}</Moment>;
    }

    // 3일전 일, 시간, 분 표시
    if (parseInt(startTime - nowTime) > -86400000 * 3) {
        return <Moment fromNow>{startTime}</Moment>;
    }
};

const MoreLayout = ({ PropsModal, id, deleteHandler }) => {
    const navigate = useNavigate();

    return (
        <ModalOutside onClick={PropsModal}>
            <ModalBody>
                <ModalDiv1>더보기</ModalDiv1>
                <L.Contents _padding="16px 20px">
                    <L.FlexCols _gap={32}>
                        <T.Text
                            _weight={400}
                            _size={16}
                            _color="gray800"
                            onClick={() => navigate(`./update/${id}`)}
                        >
                            쿠폰 수정
                        </T.Text>
                        <T.Text
                            _weight={400}
                            _size={16}
                            _color="error"
                            onClick={() => deleteHandler(id)}
                        >
                            쿠폰 삭제
                        </T.Text>
                    </L.FlexCols>
                </L.Contents>
                <ModalButton type="button" onClick={PropsModal}>
                    닫기
                </ModalButton>
            </ModalBody>
        </ModalOutside>
    );
};

export default BusinessCoupon;
