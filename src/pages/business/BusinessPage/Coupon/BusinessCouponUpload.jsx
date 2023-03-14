import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as B from "components/commonUi/Button";
import { CouponTitleInput } from "components/commonUi/Input";
import CouponAlert from "components/commonUi/CouponAlert";
import { couponSave, couponUpdate, getBizCoupon } from "service/coupon";
import Alert from "components/commonUi/Alert";
import TextEditor from "components/TextEditor/TextEditor";
import CheckBox from "components/commonUi/CheckBox";

function BusinessCouponUpload() {
    const { id } = useParams();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const { state } = useLocation();
    const [modal, setModal] = useState(false);
    const [alert, setAlert] = useState(null);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        storeId: auth.storeId,
        eventType: state ? state.type : "normal",
        title: "",
        contents: "",
        type: null,
        coupon: null,
        endDate: null,
        limitStatus: false,
        maxCount: 0,
        isCoupon: false,
    });

    const isValid = () => {
        if (data.title.length === 0) {
            return "제목을 입력해주세요.";
        }
        if (data.contents.length === 0) {
            return "내용을 입력해주세요.";
        }
        if (data.eventType === "coupon" && !data.isCoupon) {
            return "쿠폰을 등록해주세요.";
        }
        return "";
    };

    const onsubmit = async () => {
        const valid = isValid();
        if (valid) {
            return setAlert({
                contents: valid,
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        setLoading(true);
        const response = id ? await couponUpdate(data) : await couponSave(data);
        if (response && response.data.data > 0) {
            setAlert({
                contents: id
                    ? "쿠폰소식을 수정하였습니다."
                    : "쿠폰소식을 등록하였습니다.",
                buttonText: "확인",
                onButtonClick: () => navigate(-1),
                onOverlayClick: null,
            });
        } else {
            setAlert({
                contents: "쿠폰소식을 등록을 실패하였습니다.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }
        setLoading(false);
    };

    const loadData = useCallback(async () => {
        const response = await getBizCoupon(id);
        if (response && response.data.data) {
            setData({
                ...response.data.data,
                isCoupon: true,
            });
        }
    }, [id]);

    useEffect(() => {
        if (id) loadData();
    }, [loadData, id]);

    if (id && !data.title) return <></>;

    return (
        <>
            <Layout
                title={id ? "쿠폰소식 수정" : "쿠폰소식 등록"}
                cart={false}
                bell={false}
                completed={true}
                floating={false}
                bottom={"1px solid #EEEEEE"}
                onBackClick={() => navigate(-1)}
            >
                <L.Container>
                    <L.Contents _padding="20px">
                        <L.FlexCols _gap={16}>
                            <L.FlexRows _gap={16}>
                                <CheckBox
                                    label="일반 소식"
                                    name="normal"
                                    value="normal"
                                    checked={data.eventType === "normal"}
                                    onChange={() =>
                                        setData({
                                            ...data,
                                            eventType: "normal",
                                        })
                                    }
                                />
                                <CheckBox
                                    label="쿠폰 소식"
                                    name="coupon"
                                    value="coupon"
                                    checked={data.eventType === "coupon"}
                                    onChange={() =>
                                        setData({
                                            ...data,
                                            eventType: "coupon",
                                        })
                                    }
                                />
                            </L.FlexRows>
                        </L.FlexCols>
                    </L.Contents>
                </L.Container>
                <L.Container>
                    <L.Contents _padding="0px">
                        <CouponTitleInput
                            value={data.title}
                            placeholder="소식 제목을 입력해 주세요."
                            onChange={(e) =>
                                setData({ ...data, title: e.target.value })
                            }
                        />
                    </L.Contents>
                </L.Container>
                <L.Container
                    _gap="8"
                    _height="calc(100vh - 124px)"
                    style={{ background: "#F5F5F5" }}
                >
                    <L.Contents _padding="0px" _height="100%" _bg="#F5F5F5">
                        <TextEditor
                            initData={data.contents}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    contents: e,
                                })
                            }
                            height={
                                data.eventType === "coupon"
                                    ? "calc(100vh - 350px)"
                                    : "calc(100vh - 300px)"
                            }
                        />

                        {data.eventType === "coupon" && (
                            <B.CouponButton
                                _buttommedia="0px"
                                onClick={() =>
                                    setModal({
                                        onButtonClick: () => setModal(null),
                                        onOverlayClick: () => setModal(null),
                                    })
                                }
                            >
                                {id ? "쿠폰 수정하기" : "쿠폰 등록하기"}
                            </B.CouponButton>
                        )}
                    </L.Contents>
                    {modal && (
                        <CouponAlert
                            onButtonClick={modal.onButtonClick}
                            onOverlayClick={modal.onOverlayClick}
                            data={data}
                            setData={setData}
                        />
                    )}
                    <B.FixedActionButton
                        type="button"
                        _displaymedia="none"
                        onClick={onsubmit}
                        disabled={loading}
                    >
                        완료
                    </B.FixedActionButton>
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
        </>
    );
}

export default BusinessCouponUpload;
