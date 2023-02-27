import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as B from "components/commonUi/Button";
import "react-quill/dist/quill.snow.css";
import { CouponTitleInput } from "components/commonUi/Input";
import CouponAlert from "components/commonUi/CouponAlert";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { editorFileUpload } from "service/common";
import { couponSave, couponUpdate, getBizCoupon } from "service/coupon";
import Alert from "components/commonUi/Alert";

function BusinessCouponUpload() {
    const { id } = useParams();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [modal, setModal] = useState(false);
    const [alert, setAlert] = useState(null);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        storeId: auth.storeId,
        title: "",
        contents: "",
        type: "",
        coupon: "",
        endDate: "",
        limitStatus: false,
        maxCount: "",
        isCoupon: false,
    });

    // 파일업로드 이벤트
    const customUploadAdapter = (loader) => {
        return {
            upload() {
                return new Promise((resolve, reject) => {
                    loader.file.then(async (file) => {
                        await editorFileUpload(file)
                            .then((res) => {
                                resolve({
                                    default: res.data.data,
                                });
                            })
                            .catch((err) => reject(err));
                    });
                });
            },
        };
    };

    const isValid = () => {
        if (data.title.length === 0) {
            return "제목을 입력해주세요.";
        }
        if (data.contents.length === 0) {
            return "내용을 입력해주세요.";
        }
        if (!data.isCoupon) {
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
                    <L.Contents _padding="0px">
                        <CouponTitleInput
                            value={data.title}
                            placeholder="제목을 입력해 주세요."
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
                        <CKEditor
                            editor={ClassicEditor}
                            config={{
                                extraPlugins: [
                                    function (editor) {
                                        editor.plugins.get(
                                            "FileRepository"
                                        ).createUploadAdapter = (loader) => {
                                            return customUploadAdapter(loader);
                                        };
                                    },
                                ],
                            }}
                            data={data.contents}
                            onChange={(event, editor) => {
                                const editorData = editor.getData();
                                setData({
                                    ...data,
                                    contents: editorData,
                                });
                            }}
                            onReady={(editor) => {
                                editor.editing.view.change((writer) => {
                                    writer.setStyle(
                                        "height",
                                        "calc(100vh - 280px)",
                                        editor.editing.view.document.getRoot()
                                    );
                                });
                            }}
                        />
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
