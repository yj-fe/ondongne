import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as B from "components/commonUi/Button";
import * as C from "components/commonUi/CommonStyles";
import CheckBox from "components/commonUi/CheckBox";
import {
    ContentDiv,
    Input,
    RightStyle,
    TitleInfo,
    TitleInfoDiv,
    FileListScroll,
} from "components/Buisness/BusinessManagement/BusinessManagementTabStyle";
import { ArrowRightB, Delete, Calendar } from "components/commonUi/Icon";
import { imageValidation, numberFormat, numberFormatter } from "utils/utils";
import BusinessProductEditInfo from "./BusinessProductEditInfo";
import {
    bizItemdeleteFile,
    createItem,
    getBizItem,
    updateItem,
} from "service/bizItem";
import Alert from "components/commonUi/Alert";
import CalendarModel from "components/commonUi/CalendarModel";
import Confirm from "components/commonUi/Confirm";
import { useSelector } from "react-redux";
import Layout from "components/layout/Layout/Layout";
import CategoryForm from "components/commonUi/Category/CategoryForm";

function BusinessProductUpload() {
    const { id } = useParams();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [editor, isEditor] = useState(false);
    const [alert, setAlert] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [calendar, setCalendar] = useState(false);
    const [fileErrorMessage, setFileErrorMessage] = useState("");
    const [validtion, isValidtion] = useState(false);
    const [salePriceError, setSalePriceError] = useState("");
    const [maxCountError, setMaxCountError] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        type: "",
        files: [],
        images: [],
        categories: id ? [] : [auth.category],
        name: "",
        price: 0,
        salePrice: 0,
        minCount: 0,
        maxCount: 0,
        endDate: "",
        description: "",
    });

    // ?????? ??????
    const fileDeleteHandler = async (file) => {
        if (data.images.length === 1) {
            return setAlert({
                contents:
                    "????????? ??? ????????? ?????? ???????????????\n????????? ???????????????.",
                buttonText: "??????",
                onButtonClick: () => setAlert(null),
                onOverlayClick: () => setAlert(null),
            });
        }

        const response = await bizItemdeleteFile(file);
        const { message } = response.data;

        if (message) {
            return setAlert({
                contents: message,
                buttonText: "??????",
                onButtonClick: () => {
                    setAlert(null);
                    setData({
                        ...data,
                        images: data.images.filter((item) => item !== file),
                    });
                },
                onOverlayClick: () => setAlert(null),
            });
        }

        setAlert({
            contents: "?????? ?????? ??? ????????? ?????????????????????.",
            buttonText: "??????",
            onButtonClick: () => setAlert(null),
            onOverlayClick: () => setAlert(null),
        });
    };

    const onSubmit = async () => {
        setLoading(true);

        if (Number(data.price.replaceAll(",", "")) < 1000) {
            return setAlert({
                contents: "?????? ????????? 1,000??? ??????????????? ?????????.",
                buttonText: "??????",
                onButtonClick: () => setAlert(null),
                onOverlayClick: () => setAlert(null),
            });
        }

        if (Number(data.salePrice.replaceAll(",", "")) < 1000) {
            return setAlert({
                contents: "?????? ??????????????? 1,000??? ??????????????? ?????????.",
                buttonText: "??????",
                onButtonClick: () => setAlert(null),
                onOverlayClick: () => setAlert(null),
            });
        }

        const response = id ? await updateItem(data) : await createItem(data);

        if (response.data.data) {
            setAlert({
                contents: response.data.message,
                buttonText: "??????",
                onButtonClick: () => navigate(-1),
                onOverlayClick: () => navigate(-1),
            });
        }
    };

    const getItem = async () => {
        const response = await getBizItem(id);
        const responseData = response.data.data;

        setData({
            itemId: responseData.itemId,
            type: responseData.type,
            files: [],
            categories: responseData.categories,
            images: responseData.images,
            name: responseData.name,
            price: numberFormat(responseData.price),
            salePrice: numberFormat(responseData.salePrice),
            minCount: responseData.maxCount
                ? numberFormat(responseData.minCount)
                : 0,
            maxCount: responseData.maxCount
                ? numberFormat(responseData.maxCount)
                : 0,
            endDate: responseData.endDate ? responseData.endDate : "",
            description: responseData.description,
        });
    };

    useEffect(() => {
        if (auth.isAuthenticated && id) getItem();
    }, [auth, id]);

    // ?????? ?????? ??????
    useEffect(() => {
        if (!data.salePrice) {
            return;
        }
        if (!data.price) {
            return setSalePriceError("?????? ????????? ??????????????????.");
        }
        const maxValue = data.salePrice.replaceAll(",", "");
        const price = data.price.replaceAll(",", "");

        if (Number(maxValue) > Number(price)) {
            return setSalePriceError(
                "?????? ????????? ?????? ???????????? ?????? ??? ????????????."
            );
        }

        setSalePriceError("");
    }, [data.salePrice, data.price]);

    // ?????? ?????? ??????
    useEffect(() => {
        if (!data.maxCount) {
            return;
        }

        if (!data.minCount) {
            return setMaxCountError("?????? ????????? ??????????????????.");
        }

        const maxValue = data.maxCount.replaceAll(",", "");
        const minCount = data.minCount.replaceAll(",", "");

        if (Number(maxValue) < Number(minCount)) {
            return setMaxCountError(
                "?????? ????????? ?????? ???????????? ?????? ??? ????????????."
            );
        }

        setMaxCountError("");
    }, [data.minCount, data.maxCount]);

    useEffect(() => {
        setFileErrorMessage("");
        if (data.type === "") return isValidtion(false);
        if (!id && data.files.length == 0) return isValidtion(false);
        if (data.categories.length == 0) return isValidtion(false);
        if (data.name === "") return isValidtion(false);
        if (data.price) return isValidtion(false);
        if (data.salePrice) return isValidtion(false);
        if (data.description === "") return isValidtion(false);
        if (data.type === "GROUP") {
            if (!data.minCount) return isValidtion(false);
            if (!data.endDate) return isValidtion(false);
        }
        if (salePriceError !== "") return isValidtion(false);
        if (maxCountError !== "") return isValidtion(false);
        return isValidtion(true);
    }, [data, salePriceError, maxCountError]);

    if (id && !data.itemId) return <></>;

    return (
        <>
            <Layout
                title={id ? "?????? ??????" : "?????? ??????"}
                cart={false}
                bell={false}
                floating={false}
                onBackClick={() => navigate(-1)}
            >
                <L.Container _padding="0">
                    <L.Contents _padding="0" _height={"calc(100vh - 70px)"}>
                        <L.Scroll>
                            <L.FlexCols _gap={40} _padding="20px 16px 60px">
                                <L.FlexCols _gap={16}>
                                    <T.Text
                                        _weight={600}
                                        _size={16}
                                        _color="gray900"
                                    >
                                        ?????? ??????
                                    </T.Text>
                                    <L.FlexRows _gap={16}>
                                        <CheckBox
                                            label="????????????"
                                            name="normal"
                                            value="NORMAL"
                                            checked={data.type === "NORMAL"}
                                            onChange={() =>
                                                setData({
                                                    ...data,
                                                    type: "NORMAL",
                                                })
                                            }
                                        />
                                        <CheckBox
                                            label="???????????? ??????"
                                            name="group"
                                            value="GROUP"
                                            checked={data.type === "GROUP"}
                                            onChange={() =>
                                                setData({
                                                    ...data,
                                                    type: "GROUP",
                                                })
                                            }
                                        />
                                    </L.FlexRows>
                                </L.FlexCols>

                                <ContentDiv>
                                    <L.FlexCols>
                                        <T.Text
                                            _weight={600}
                                            _size={16}
                                            _color="gray900"
                                        >
                                            ?????? ?????????
                                        </T.Text>
                                        <T.Text
                                            _weight={400}
                                            _size={14}
                                            _color="gray600"
                                        >
                                            ??????????????? ????????? ????????? ??????
                                            ???????????? ??????????????????.
                                        </T.Text>
                                    </L.FlexCols>
                                    <B.LayerTextButton>
                                        <B.Label htmlFor="files">
                                            <T.Text
                                                _weight={400}
                                                _size={15}
                                                _color="gray900"
                                                _align="center"
                                                _content="center"
                                            >
                                                ????????? ?????????
                                            </T.Text>
                                        </B.Label>
                                    </B.LayerTextButton>
                                    {fileErrorMessage && (
                                        <T.Text
                                            as="p"
                                            _size={13}
                                            _weight={400}
                                            style={{ color: "#D32F2F" }}
                                        >
                                            {fileErrorMessage}
                                        </T.Text>
                                    )}
                                    {(data.files.length > 0 ||
                                        data.images.length > 0) && (
                                        <FileListScroll>
                                            <L.FlexRows
                                                _gap={20}
                                                _width="auto"
                                                _overflow="unset"
                                            >
                                                {data.files.length > 0 &&
                                                    data.files.map(
                                                        (file, index) => (
                                                            <FileList
                                                                key={index}
                                                                file={file}
                                                                deleteFile={() =>
                                                                    setData({
                                                                        ...data,
                                                                        files: data.files.filter(
                                                                            (
                                                                                item
                                                                            ) =>
                                                                                item !==
                                                                                file
                                                                        ),
                                                                    })
                                                                }
                                                            />
                                                        )
                                                    )}
                                                {data.images.length > 0 &&
                                                    data.images.map(
                                                        (file, index) => (
                                                            <FileListForm
                                                                key={index}
                                                                file={file}
                                                                fileDeleteHandler={
                                                                    fileDeleteHandler
                                                                }
                                                            />
                                                        )
                                                    )}
                                            </L.FlexRows>
                                        </FileListScroll>
                                    )}
                                    <input
                                        type="file"
                                        id="files"
                                        accept="image/*"
                                        onChange={(e) => {
                                            if (!e.target.files[0]) return;
                                            const valid = imageValidation(
                                                e.target.files[0]
                                            );
                                            if (valid)
                                                return setFileErrorMessage(
                                                    valid
                                                );

                                            if (
                                                data.images.length +
                                                    data.files.length ===
                                                7
                                            ) {
                                                return setFileErrorMessage(
                                                    "?????? 7????????? ?????? ???????????????."
                                                );
                                            }

                                            setData({
                                                ...data,
                                                files: [
                                                    ...data.files,
                                                    e.target.files[0],
                                                ],
                                            });
                                        }}
                                    />
                                </ContentDiv>

                                {/* ============????????????============= */}
                                <CategoryForm data={data} setData={setData} />

                                {/* ============?????????============= */}
                                <L.FlexCols _gap={16}>
                                    <T.Text
                                        _weight={600}
                                        _size={16}
                                        _color="gray900"
                                    >
                                        ?????????
                                    </T.Text>
                                    <TitleInfoDiv>
                                        <Input
                                            name="name"
                                            placeholder="???????????? ??????????????????."
                                            value={data.name}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    name: e.target.value,
                                                })
                                            }
                                            maxLength={40}
                                        />
                                    </TitleInfoDiv>
                                </L.FlexCols>

                                {/* ============????????????============= */}
                                <L.FlexCols>
                                    <L.FlexRows>
                                        <L.FlexCols _gap={16}>
                                            <T.Text
                                                _weight={600}
                                                _size={16}
                                                _color="gray900"
                                            >
                                                ?????? ??????(???)
                                            </T.Text>
                                            <TitleInfoDiv>
                                                <Input
                                                    placeholder="0"
                                                    value={numberFormat(
                                                        data.price
                                                    )}
                                                    maxLength={15}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            price: numberFormatter(
                                                                e.target.value
                                                            ),
                                                        })
                                                    }
                                                />
                                                <span>???</span>
                                            </TitleInfoDiv>
                                        </L.FlexCols>

                                        <L.FlexCols _gap={16}>
                                            <T.Text
                                                _weight={600}
                                                _size={16}
                                                _color="gray900"
                                            >
                                                ?????? ??????(???)
                                            </T.Text>
                                            <TitleInfoDiv>
                                                <Input
                                                    placeholder="0"
                                                    style={{
                                                        background: "#fff",
                                                    }}
                                                    value={numberFormat(
                                                        data.salePrice
                                                    )}
                                                    maxLength={15}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            salePrice:
                                                                numberFormatter(
                                                                    e.target
                                                                        .value
                                                                ),
                                                        })
                                                    }
                                                />
                                                <span>???</span>
                                            </TitleInfoDiv>
                                        </L.FlexCols>
                                    </L.FlexRows>
                                    {salePriceError && (
                                        <T.Text
                                            as="p"
                                            _size={13}
                                            _weight={400}
                                            style={{ color: "#D32F2F" }}
                                        >
                                            {salePriceError}
                                        </T.Text>
                                    )}
                                </L.FlexCols>

                                {data.type === "GROUP" && (
                                    <>
                                        <L.FlexCols>
                                            <L.FlexRows>
                                                <L.FlexCols _gap={16}>
                                                    <T.Text
                                                        _weight={600}
                                                        _size={16}
                                                        _color="gray900"
                                                    >
                                                        ?????? ??????
                                                    </T.Text>
                                                    <TitleInfoDiv>
                                                        <Input
                                                            name="minCount"
                                                            placeholder="0"
                                                            value={
                                                                data.minCount
                                                            }
                                                            onChange={(e) =>
                                                                setData({
                                                                    ...data,
                                                                    minCount:
                                                                        numberFormatter(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        ),
                                                                })
                                                            }
                                                            maxLength={10}
                                                        />
                                                        <span>???</span>
                                                    </TitleInfoDiv>
                                                </L.FlexCols>

                                                <L.FlexCols _gap={16}>
                                                    <T.Text
                                                        _weight={600}
                                                        _size={16}
                                                        _color="gray900"
                                                    >
                                                        ?????? ??????
                                                    </T.Text>
                                                    <TitleInfoDiv>
                                                        <Input
                                                            name="maxCount"
                                                            placeholder="0"
                                                            value={
                                                                data.maxCount
                                                            }
                                                            onChange={(e) =>
                                                                setData({
                                                                    ...data,
                                                                    maxCount:
                                                                        numberFormatter(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        ),
                                                                })
                                                            }
                                                            maxLength={10}
                                                        />
                                                        <span>???</span>
                                                    </TitleInfoDiv>
                                                </L.FlexCols>
                                            </L.FlexRows>
                                            {maxCountError && (
                                                <T.Text
                                                    as="p"
                                                    _size={13}
                                                    _weight={400}
                                                    style={{ color: "#D32F2F" }}
                                                >
                                                    {maxCountError}
                                                </T.Text>
                                            )}
                                        </L.FlexCols>
                                        <L.FlexCols _gap={16}>
                                            <T.Text
                                                _weight={600}
                                                _size={16}
                                                _color="gray900"
                                            >
                                                ?????? ?????????
                                            </T.Text>
                                            <TitleInfoDiv
                                                onClick={() =>
                                                    setCalendar(true)
                                                }
                                            >
                                                <Input
                                                    disabled
                                                    name="endDate"
                                                    placeholder="?????? ????????? ??????"
                                                    style={{
                                                        background: "#fff",
                                                    }}
                                                    value={
                                                        data.endDate
                                                            ? data.endDate
                                                            : ""
                                                    }
                                                />
                                                <span>
                                                    <Calendar />
                                                </span>
                                            </TitleInfoDiv>
                                        </L.FlexCols>
                                    </>
                                )}

                                <L.FlexCols _gap={16}>
                                    <T.Text
                                        _weight={600}
                                        _size={16}
                                        _color="gray900"
                                    >
                                        ?????? ??????
                                    </T.Text>
                                    <TitleInfoDiv
                                        onClick={() => isEditor(true)}
                                    >
                                        <TitleInfo>????????????</TitleInfo>
                                        <RightStyle>
                                            <ArrowRightB />
                                        </RightStyle>
                                    </TitleInfoDiv>
                                </L.FlexCols>
                            </L.FlexCols>
                            <B.FixedActionButton
                                type="button"
                                disabled={!validtion || loading}
                                backgroundColor={
                                    validtion ? "green700" : "gray300"
                                }
                                onClick={() => {
                                    if (id) {
                                        setConfirm({
                                            warn: false,
                                            contents: `???????????? ????????? ?????????????????????????`,
                                            confirmText: "???",
                                            cancelText: "??????",
                                            onConfirmClick: () => {
                                                setConfirm(null);
                                                onSubmit();
                                            },
                                            onCancelClick: () =>
                                                setConfirm(null),
                                        });
                                    } else {
                                        onSubmit();
                                    }
                                }}
                            >
                                {id ? "????????????" : "????????????"}
                            </B.FixedActionButton>
                        </L.Scroll>
                    </L.Contents>
                </L.Container>
            </Layout>
            <BusinessProductEditInfo
                isOpen={editor}
                close={() => isEditor(false)}
                data={data}
                dataHanler={setData}
            />
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
            {confirm && (
                <Confirm
                    warn={confirm.warn}
                    contents={confirm.contents}
                    confirmText={confirm.confirmText}
                    cancelText={confirm.cancelText}
                    onConfirmClick={confirm.onConfirmClick}
                    onCancelClick={confirm.onCancelClick}
                />
            )}
            {calendar && (
                <CalendarModel
                    modelClose={() => setCalendar(false)}
                    onChange={(date) => setData({ ...data, endDate: date })}
                    dateFormat={"yyyy-MM-dd"}
                    maxDay={7}
                />
            )}
        </>
    );
}

const FileListForm = ({ file, fileDeleteHandler }) => {
    const [confirm, setConfirm] = useState(null);
    const url = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/item/";

    return (
        <>
            <C.ImageBox>
                <C.DeleteBtn
                    onClick={() => {
                        setConfirm({
                            warn: true,
                            contents: `????????? ?????????????????????????`,
                            confirmText: "??????",
                            cancelText: "??????",
                            onConfirmClick: () => {
                                setConfirm(null);
                                fileDeleteHandler(file);
                            },
                            onCancelClick: () => setConfirm(null),
                        });
                    }}
                >
                    <Delete />
                </C.DeleteBtn>
                <img
                    src={url + file.name}
                    width={"100%"}
                    height={"100%"}
                    alt=""
                />
            </C.ImageBox>
            {confirm && (
                <Confirm
                    warn={confirm.warn}
                    contents={confirm.contents}
                    confirmText={confirm.confirmText}
                    cancelText={confirm.cancelText}
                    onConfirmClick={confirm.onConfirmClick}
                    onCancelClick={confirm.onCancelClick}
                />
            )}
        </>
    );
};

const FileList = ({ file, deleteFile }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (!file) return;

        let reader = new FileReader();
        reader.onload = function () {
            setImage({ result: reader.result });
        };
        reader.readAsDataURL(file);
    }, [file]);

    return (
        <C.ImageBox>
            <C.DeleteBtn onClick={deleteFile}>
                <Delete />
            </C.DeleteBtn>
            <img src={image?.result} width={"100%"} height={"100%"} alt="" />
        </C.ImageBox>
    );
};

export default BusinessProductUpload;
