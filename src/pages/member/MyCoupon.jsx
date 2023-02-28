import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as C from "components/commonUi/Coupon";
import {
    DetailTabInfo,
    DetailTabReview,
    TabButtonStyle,
    TabContentStyle,
} from "pages/main/DetailsPage/DetailsPageStyle";
import Layout from "components/layout/Layout/Layout";
import Confirm from "components/commonUi/Confirm";
import { CursorDiv } from "components/Common/LayoutPageStyle";
import { useSelector } from "react-redux";
import { getMemberCouponList, couponUse } from "service/coupon";
import Alert from "components/commonUi/Alert";

function MyCoupon() {
    const navigate = useNavigate();
    const [detailTab, setDetailTab] = useState(0);
    const auth = useSelector((state) => state.auth);
    const [list, setList] = useState([]);

    const loadData = useCallback(async () => {
        const response = await getMemberCouponList(auth.id, detailTab === 0);

        if (response && response.data) {
            setList(response.data);
        }
    }, [auth, detailTab]);

    useEffect(() => {
        if (auth.isAuthenticated) loadData();
    }, [loadData, auth, detailTab]);

    return (
        <CursorDiv>
            <Layout
                title="받은 쿠폰함"
                cart={false}
                bell={false}
                onBackClick={() => navigate(-1)}
            >
                <L.Container>
                    <L.Contents _padding="0" _height="calc(100vh - 68px)">
                        <L.FlexCols _padding={0} _gap={0}>
                            <TabButtonStyle>
                                <DetailTabInfo
                                    onClick={() => {
                                        setList([]);
                                        setDetailTab(0);
                                    }}
                                    width="50%"
                                    infocolor={detailTab === 0}
                                >
                                    사용 가능
                                </DetailTabInfo>
                                <DetailTabReview
                                    onClick={() => {
                                        setList([]);
                                        setDetailTab(1);
                                    }}
                                    width="50%"
                                    reviewcolor={detailTab === 1}
                                >
                                    지난 쿠폰
                                </DetailTabReview>
                            </TabButtonStyle>

                            <TabContentStyle>
                                <TabCoupon
                                    list={list}
                                    detailTab={detailTab}
                                    nextHandler={() => setDetailTab(1)}
                                />
                            </TabContentStyle>
                        </L.FlexCols>
                    </L.Contents>
                </L.Container>
            </Layout>
        </CursorDiv>
    );
}

function TabCoupon({ list, detailTab, nextHandler }) {
    const [confirm, setConfirm] = useState(null);
    const [alert, setAlert] = useState(null);

    const openConfirm = (id) => {
        return setConfirm({
            contents: "쿠폰은 한번만 사용 가능합니다.\n사용하시겠습니까?",
            confirmText: "쿠폰 사용",
            cancelText: "취소",
            onConfirmClick: () => {
                setConfirm(null);
                couponUseHandler(id);
            },
            onCancelClick: () => setConfirm(null),
        });
    };

    const couponUseHandler = async (id) => {
        const response = await couponUse(id);

        if (response && response.data) {
            const { message } = response.data;
            return setAlert({
                contents: message,
                buttonText: "확인",
                onButtonClick: () => {
                    if (message === "쿠폰 사용을 완료하였습니다.") {
                        nextHandler();
                    }
                    setAlert(null);
                },
                onOverlayClick: () => setAlert(null),
            });
        }
    };

    if (list.length === 0) {
        return <ListEmpty desc="보유하신 쿠폰이 없습니다." />;
    }

    return [
        //=====================1. Tab 1 사용 가능=====================
        <>
            {/* =================== 쿠폰 있을 때 =================== */}
            {list && list.length > 0 && (
                <L.Contents _padding="24px 20px" _gap={20}>
                    <L.Scroll _height="calc(100vh - 166px)">
                        <L.FlexCols>
                            {/* 쿠폰 */}
                            {list.map((item, index) => (
                                <C.CouponListCard
                                    key={index}
                                    openConfirm={openConfirm}
                                    item={item}
                                    couponData={true}
                                />
                            ))}
                        </L.FlexCols>
                    </L.Scroll>
                </L.Contents>
            )}
            {confirm && (
                <Confirm
                    contents={confirm.contents}
                    confirmText={confirm.confirmText}
                    cancelText={confirm.cancelText}
                    onConfirmClick={confirm.onConfirmClick}
                    onCancelClick={confirm.onCancelClick}
                />
            )}

            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
        </>,

        //=====================2. Tab 2 지난 쿠폰=====================
        <>
            {list && list.length > 0 && (
                <L.Contents _padding="24px 20px" _gap={20}>
                    <L.Scroll _height="calc(100vh - 166px)">
                        <L.FlexCols>
                            {/* 쿠폰 */}
                            {list.map((item, index) => (
                                <C.CouponListCard
                                    key={index}
                                    item={item}
                                    couponData={false}
                                />
                            ))}
                        </L.FlexCols>
                    </L.Scroll>
                </L.Contents>
            )}
        </>,
    ][detailTab];
}

// 쿠폰 없을 때
export const ListEmpty = ({ desc }) => {
    return (
        <L.Contents _padding="80px 20px">
            <L.FlexCols _padding={0} _gap={4}>
                <T.Text
                    _weight={300}
                    _size={15}
                    _color="gray600"
                    _align="center"
                >
                    {desc}
                </T.Text>
            </L.FlexCols>
        </L.Contents>
    );
};

export default MyCoupon;
