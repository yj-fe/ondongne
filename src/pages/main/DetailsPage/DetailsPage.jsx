import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
    DetailButtonDiv,
    DetailButtonStyle,
    DetailTabInfo,
    DetailTabReview,
    TabInfoContentText,
    TabInfoContentTitle,
    OrderToggleBox,
    CountButton,
    SwiperWapper,
    ButtonStyle,
    ReactiveWrap,
} from "./DetailsPageStyle";
import ModalMorePage from "components/Main/More/ModalMorePage";
import Layout from "components/layout/Layout/Layout";
import { useSelector } from "react-redux";
import Confirm from "components/commonUi/Confirm";
import { ArrowBottom, MinusB, PlusB } from "components/commonUi/Icon";
import { MarketTable } from "components/commonUi/Table";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { ImgSizeLayout } from "components/layout/Img/ImgSizeLayout";
import { Badge, LayerTextButton } from "components/commonUi/Button";
import { getItemDetails } from "service/item";
import StoreLike from "components/commonUi/StoreLike";
import { disRate, numberFormat } from "utils/utils";
import ProductTimer from "components/commonUi/ProductTimer";
import StarRate from "components/commonUi/StarRate";
import HTMLReactParser from "html-react-parser";
import ProductCart from "components/Main/Cart/ProductCart";
import ProductComments from "components/Main/productDetails/ProductComments";
import { useDispatch } from "react-redux";
import { orderActions } from "store/slices/order";
import { ImgBanner } from "components/Buisness/BusinessManagement/BusinessManagementTabStyle";
import ProductReview from "components/Main/productDetails/ProductReview";
import Alert from "components/commonUi/Alert";
import * as B from "components/commonUi/Button";
import { AbsoluteTopDiv } from "components/layout/Img/ImgSizeLayout";
const IMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/item/";
const STOREURL =
    "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/";

function DetailsPage(props) {
    const location = useLocation();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [item, setItem] = useState({
        address: "",
        deliveryPrice: "",
        description: "",
        endDate: "",
        itemId: "",
        itemImages: "",
        itemName: "",
        itemRating: "",
        category: "",
        likeStatus: "",
        maxCount: "",
        minCount: "",
        orderMinPrice: "",
        price: "",
        recetiveType: "",
        salePercent: "",
        soldoutStatus: "",
        storeId: "",
        storeName: "",
        storeProfile: "",
        type: "",
    });

    const [count, setCount] = useState(1);
    const [detailTab, setDetailTab] = useState(0);

    const [modal, setModal] = useState(false);
    const [orderToggle, setOrderToggle] = useState(false);
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [confirm, setConfirm] = useState(false);
    const [alert, setAlert] = useState(false);
    const [btn, setBtn] = useState(true);

    const PropsModal = () => {
        setModal(!modal);
    };

    const paymentsOrder = (type) => {
        const account = item.salePrice;

        if (!auth.isAuthenticated) {
            return setConfirm(true);
        }

        if (!orderToggle) return setOrderToggle(true);

        if (orderToggle && type === 0) return;

        if (orderToggle && type === 1) {
            // 최소금액 체크
            if (Number(account) * count < Number(item.orderMinPrice)) {
                return setAlert({
                    contents: `상점 최소주문 금액은 ${numberFormat(
                        item.orderMinPrice
                    )}입니다.`,
                    buttonText: "확인",
                    onButtonClick: () => setAlert(false),
                    onOverlayClick: () => setAlert(false),
                });
            }

            const data = {
                items: [
                    {
                        ...item,
                        count,
                        cartId: 0,
                        timeSaleStatus: item.timeSaleStatus,
                    },
                ],
                to: location.pathname,
            };
            dispatch(orderActions.save(data));
            return navigate("/order/new");
        }
    };

    const getItem = async () => {
        const response = await getItemDetails(id);

        if (response.status !== 200) {
            navigate("/");
        }

        if (response && response.data.data) {
            const resData = response.data.data;
            setItem({
                ...resData,
                salePercent: disRate(
                    resData.price,
                    resData.timeSaleStatus
                        ? resData.timeSale.price
                        : resData.salePrice
                ),
            });
        }
    };

    useEffect(() => {
        if (id) {
            getItem();
        }
    }, [id]);

    if (!item.itemId) return <></>;

    return (
        <div>
            <Layout
                title={item.storeName}
                description={item.storeName}
                img={IMGURL + item.itemImages[0]}
                bell={false}
                cart={true}
                share={true}
                floating={false}
                more={true}
                onBackClick={() => navigate(-1)}
            >
                <L.Container>
                    <L.Contents _cursor="default" _padding="0px 0px 60px 0px">
                        <L.FlexCols style={{ position: "relative" }}>
                            {item.timeSaleStatus && (
                                <AbsoluteTopDiv _top={"10px"} _left={"10px"}>
                                    <B.Badge _color="white" _bg="blue">
                                        타임 세일
                                    </B.Badge>
                                </AbsoluteTopDiv>
                            )}
                            {item.itemImages && (
                                <SwiperWapper spaceBetween={0}>
                                    {item.itemImages.map((image, i) => (
                                        <SwiperSlide key={i}>
                                            <ImgBanner
                                                _height="390px"
                                                _bdr={0}
                                                src={IMGURL + image}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </SwiperWapper>
                            )}
                            <L.FlexCols>
                                <L.FlexRows
                                    _content="space-between"
                                    _items="center"
                                    _padding=" 16px 20px"
                                >
                                    <L.FlexRows
                                        _width="calc(100% - 50px)"
                                        _content="left"
                                        onClick={() =>
                                            navigate(
                                                `/market/detail/${item.storeId}`
                                            )
                                        }
                                    >
                                        <ImgSizeLayout
                                            _object="cover"
                                            _bdr={99}
                                            _width={40}
                                            _height={40}
                                            src={
                                                item.storeProfile &&
                                                STOREURL + item.storeProfile
                                            }
                                        />
                                        <L.FlexCols
                                            _gap={1}
                                            _width="calc(100% - 50px)"
                                        >
                                            <T.Text
                                                _size={16}
                                                _weight={500}
                                                _color="gray900"
                                            >
                                                {item.storeName}
                                            </T.Text>
                                            {item.address &&
                                                item.address.split(" ")
                                                    .length >= 3 && (
                                                    <T.Text
                                                        _size={13}
                                                        _weight={400}
                                                        _color="gray600"
                                                    >
                                                        {
                                                            item.address.split(
                                                                " "
                                                            )[0]
                                                        }{" "}
                                                        {
                                                            item.address.split(
                                                                " "
                                                            )[1]
                                                        }{" "}
                                                        {
                                                            item.address.split(
                                                                " "
                                                            )[2]
                                                        }
                                                    </T.Text>
                                                )}
                                        </L.FlexCols>
                                    </L.FlexRows>
                                    <L.FlexRows
                                        _width="50px"
                                        _content="right"
                                        _gap="0px"
                                    >
                                        {auth.isAuthenticated && (
                                            <StoreLike
                                                id={item.storeId}
                                                checked={item.likeStatus}
                                                onChange={(id) => {
                                                    setItem({
                                                        ...item,
                                                        likeStatus:
                                                            !item.likeStatus,
                                                    });
                                                }}
                                            />
                                        )}
                                    </L.FlexRows>
                                </L.FlexRows>

                                <L.Line />
                                <L.Contents _padding="16px 20px">
                                    <L.FlexCols _gap={16}>
                                        <L.FlexCols _gap={4}>
                                            {item.timeSaleStatus ? (
                                                <ProductTimer
                                                    startDate={
                                                        item.timeSale
                                                            .startDateTime
                                                    }
                                                    endDate={
                                                        item.timeSale
                                                            .endDateTime
                                                    }
                                                    type={true}
                                                />
                                            ) : (
                                                item.type === "GROUP" &&
                                                !item.soldoutStatus && (
                                                    <ProductTimer
                                                        endDate={item.endDate}
                                                    />
                                                )
                                            )}
                                            <T.Text
                                                _width="100%"
                                                _size={18}
                                                _weight={500}
                                                _color="gray900"
                                            >
                                                {item.itemName}
                                            </T.Text>
                                            <L.FlexRows
                                                _items="center"
                                                width="16"
                                            >
                                                {item.itemRating !== "" && (
                                                    <StarRate
                                                        rate={item.itemRating}
                                                    />
                                                )}
                                                <T.Text
                                                    _size={11}
                                                    _weight={400}
                                                    _color="gray800"
                                                >
                                                    ({item.itemRating})
                                                </T.Text>
                                            </L.FlexRows>
                                        </L.FlexCols>

                                        <ReactiveWrap
                                            _gap={12}
                                            _items="flex-start"
                                        >
                                            <L.FlexCols _gap={4}>
                                                {item.salePercent !== 0 && (
                                                    <L.FlexRows
                                                        _gap={4}
                                                        _padding={0}
                                                        _items="center"
                                                    >
                                                        <T.Text
                                                            _size={16}
                                                            _weight={600}
                                                            _color="red"
                                                        >
                                                            {item.salePercent}%
                                                        </T.Text>
                                                        <T.Text
                                                            _size={16}
                                                            _weight={400}
                                                            _color="gray500"
                                                            _decoration={
                                                                "line-through"
                                                            }
                                                        >
                                                            {numberFormat(
                                                                item.price
                                                            )}
                                                            원
                                                        </T.Text>
                                                    </L.FlexRows>
                                                )}

                                                <T.Text
                                                    _size={20}
                                                    _weight={600}
                                                    _color="gray900"
                                                >
                                                    {numberFormat(
                                                        item.timeSaleStatus
                                                            ? item.timeSale
                                                                  .price
                                                            : item.salePrice
                                                    )}{" "}
                                                    원
                                                </T.Text>
                                            </L.FlexCols>
                                            {!item.timeSaleStatus &&
                                                item.type === "GROUP" && (
                                                    <L.FlexRows
                                                        _items="center"
                                                        _content="flex-start"
                                                    >
                                                        <Badge
                                                            _fdir="column"
                                                            _bg="gray100"
                                                            _padding="8px 16px"
                                                            _width={
                                                                "max-content"
                                                            }
                                                            _height="auto"
                                                            _bdr="8px"
                                                        >
                                                            <T.Text
                                                                _align="center"
                                                                _size={12}
                                                                _color="gray600"
                                                            >
                                                                최소 주문량
                                                            </T.Text>
                                                            <T.Text
                                                                _width="76px"
                                                                _align="center"
                                                                _size={16}
                                                                _weight={600}
                                                                _color="gray800"
                                                            >
                                                                {item.minCount}
                                                                개
                                                            </T.Text>
                                                        </Badge>
                                                        <Badge
                                                            _fdir="column"
                                                            _bg="gray100"
                                                            _padding="8px 16px"
                                                            _width={
                                                                "max-content"
                                                            }
                                                            _height="auto"
                                                            _bdr="8px"
                                                        >
                                                            <T.Text
                                                                _align="center"
                                                                _size={12}
                                                                _color="gray600"
                                                            >
                                                                누적 주문량
                                                            </T.Text>
                                                            <T.Text
                                                                _width="76px"
                                                                _align="center"
                                                                _size={16}
                                                                _weight={600}
                                                                _color="gray800"
                                                            >
                                                                {
                                                                    item.orderCount
                                                                }
                                                                개
                                                            </T.Text>
                                                        </Badge>
                                                        <Badge
                                                            _fdir="column"
                                                            _bg="gray100"
                                                            _padding="8px 16px"
                                                            _width={
                                                                "max-content"
                                                            }
                                                            _height="auto"
                                                            _bdr="8px"
                                                        >
                                                            <T.Text
                                                                _align="center"
                                                                _size={12}
                                                                _color="gray600"
                                                            >
                                                                판매 수량
                                                            </T.Text>
                                                            <T.Text
                                                                _width="76px"
                                                                _align="center"
                                                                _size={16}
                                                                _weight={600}
                                                                _color="gray800"
                                                            >
                                                                {item.maxCount}
                                                                개
                                                            </T.Text>
                                                        </Badge>
                                                    </L.FlexRows>
                                                )}
                                            {item.timeSaleStatus &&
                                                item.timeSale && (
                                                    <L.FlexRows
                                                        _items="center"
                                                        _content="flex-end"
                                                    >
                                                        <Badge
                                                            _fdir="column"
                                                            _bg="gray100"
                                                            _padding="8px 16px"
                                                            _width={
                                                                "max-content"
                                                            }
                                                            _height="auto"
                                                            _bdr="8px"
                                                        >
                                                            <T.Text
                                                                _align="center"
                                                                _size={12}
                                                                _color="gray600"
                                                            >
                                                                남은 수량
                                                            </T.Text>
                                                            <T.Text
                                                                _width="76px"
                                                                _align="center"
                                                                _size={16}
                                                                _weight={600}
                                                                _color="gray800"
                                                            >
                                                                {
                                                                    item
                                                                        .timeSale
                                                                        .count
                                                                }
                                                                개
                                                            </T.Text>
                                                        </Badge>
                                                    </L.FlexRows>
                                                )}
                                        </ReactiveWrap>
                                    </L.FlexCols>
                                </L.Contents>
                            </L.FlexCols>

                            <L.FlexRows
                                _content="center"
                                _items="center"
                                _gap="0px"
                                _height="40px"
                            >
                                <DetailTabInfo
                                    onClick={() => {
                                        setDetailTab(0);
                                        setBtn(true);
                                    }}
                                    infocolor={detailTab === 0}
                                    _bottomsize="7px"
                                >
                                    상세정보
                                </DetailTabInfo>
                                <DetailTabReview
                                    onClick={() => {
                                        setDetailTab(1);
                                        setBtn(true);
                                    }}
                                    reviewcolor={detailTab === 1}
                                    _bottomsize="7px"
                                >
                                    상품리뷰
                                </DetailTabReview>
                                <DetailTabReview
                                    onClick={() => {
                                        setDetailTab(2);
                                        setBtn(false);
                                    }}
                                    reviewcolor={detailTab === 2}
                                    _bottomsize="7px"
                                >
                                    댓글문의
                                </DetailTabReview>
                            </L.FlexRows>

                            <L.Contents
                                _content="center"
                                _items="center"
                                _gap="0px"
                                _padding="16px 20px"
                            >
                                <TabContent detailTab={detailTab} item={item} />
                            </L.Contents>

                            {btn && (
                                <ButtonStyle>
                                    {orderToggle && (
                                        <OrderToggle
                                            closeOrderToggle={() =>
                                                setOrderToggle(false)
                                            }
                                            salePrice={
                                                item.timeSaleStatus &&
                                                item.timeSale
                                                    ? item.timeSale.price
                                                    : item.salePrice
                                            }
                                            type={item.type}
                                            count={count}
                                            maxCount={
                                                item.timeSaleStatus &&
                                                item.timeSale
                                                    ? item.timeSale.count
                                                    : item.maxCount
                                            }
                                            orderCount={item.orderCount}
                                            setCount={setCount}
                                            timeSale={
                                                item.timeSale &&
                                                item.timeSaleStatus
                                            }
                                        />
                                    )}
                                    {item.storeId === auth.storeId ? (
                                        <DetailButtonDiv>
                                            <DetailButtonStyle
                                                color={true}
                                                onClick={() =>
                                                    navigate(
                                                        `/business/edit/${id}`
                                                    )
                                                }
                                            >
                                                수정하기
                                            </DetailButtonStyle>
                                        </DetailButtonDiv>
                                    ) : (
                                        <DetailButtonDiv>
                                            {item.type === "NORMAL" &&
                                                !item.timeSaleStatus && (
                                                    <LayerTextButton
                                                        type="button"
                                                        onClick={() =>
                                                            paymentsOrder(0)
                                                        }
                                                        color={true}
                                                        _padding="0px"
                                                        _width="48px"
                                                    >
                                                        <ProductCart
                                                            id={item.itemId}
                                                            count={count}
                                                            type={"details"}
                                                            disabled={
                                                                !orderToggle
                                                            }
                                                        />
                                                    </LayerTextButton>
                                                )}
                                            {item.type === "NORMAL" ? (
                                                <DetailButtonStyle
                                                    color={true}
                                                    onClick={() =>
                                                        paymentsOrder(1)
                                                    }
                                                >
                                                    구매하기
                                                </DetailButtonStyle>
                                            ) : (
                                                <DetailButtonStyle
                                                    disabled={
                                                        item.orderCount >=
                                                        item.maxCount
                                                    }
                                                    color={
                                                        item.orderCount <
                                                        item.maxCount
                                                    }
                                                    onClick={() =>
                                                        paymentsOrder(1)
                                                    }
                                                >
                                                    {item.orderCount >=
                                                    item.maxCount
                                                        ? "판매종료"
                                                        : "구매하기"}
                                                </DetailButtonStyle>
                                            )}
                                        </DetailButtonDiv>
                                    )}
                                </ButtonStyle>
                            )}
                        </L.FlexCols>
                    </L.Contents>
                </L.Container>
            </Layout>
            {modal && <ModalMorePage PropsModal={PropsModal} />}
            {confirm && (
                <Confirm
                    contents={
                        "로그인 후 이용가능합니다.\n로그인 페이지로 이동하시겠습니까?"
                    }
                    confirmText="네"
                    cancelText="아니오"
                    onConfirmClick={() => {
                        navigate("/login");
                    }}
                    onCancelClick={() => {
                        setConfirm(false);
                    }}
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
        </div>
    );
}

function TabContent(props) {
    return [
        //=====================상세정보=====================
        <>
            <MarketTable>
                <tbody>
                    <tr>
                        <th>구매 형태</th>
                        <td>
                            {props.item.type === "GROUP"
                                ? "공동구매 상품"
                                : "일반 상품"}
                        </td>
                    </tr>
                    <tr>
                        <th>카테고리</th>
                        <td>{props.item.category}</td>
                    </tr>
                    <tr>
                        <th>배달/택배/픽업</th>
                        <td>{props.item.recetiveType} 가능</td>
                    </tr>
                    <tr>
                        <th>주문금액</th>
                        <td>
                            최소주문 {numberFormat(props.item.orderMinPrice)}원
                            {props.item.deliveryPrice
                                ? `, 배달비 ${numberFormat(
                                      props.item.deliveryPrice
                                  )}원`
                                : ""}
                            {props.item.parcelPrice
                                ? `, 택배비 ${numberFormat(
                                      props.item.parcelPrice
                                  )}원`
                                : ""}
                        </td>
                    </tr>
                    {props.item.couponStatus ? (
                        <>
                            <tr>
                                <th></th>
                                <td>해당 상점에 쿠폰이 있습니다.</td>
                            </tr>
                            <tr>
                                <th>쿠폰</th>
                                <td>
                                    상점(스토어) {">"} 소식을 확인해 주세요.
                                </td>
                            </tr>
                        </>
                    ) : (
                        <tr>
                            <th>쿠폰</th>
                            <td>해당 상점에 쿠폰이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </MarketTable>

            <L.Line />

            <L.FlexCols _padding={"16px 0 0 0"}>
                <TabInfoContentTitle>상품 정보</TabInfoContentTitle>
                <TabInfoContentText>
                    {HTMLReactParser(props.item.description)}
                </TabInfoContentText>
            </L.FlexCols>
        </>,

        //=====================상품리뷰=====================
        <div>
            <ProductReview id={props.item.itemId} />
        </div>,
        //====================댓글=====================
        <div>
            <ProductComments id={props.item.itemId} />
        </div>,
    ][props.detailTab];
}

function OrderToggle({
    closeOrderToggle,
    count,
    setCount,
    salePrice,
    maxCount,
    orderCount,
    type,
    timeSale,
}) {
    const counterHandler = (value) => {
        if (value == -1 && count == 1) {
            return;
        }

        if (
            !timeSale &&
            value === 1 &&
            type === "GROUP" &&
            maxCount - orderCount == count
        ) {
            return;
        }

        if (timeSale && maxCount === count) {
            return;
        }

        setCount((count) => count + value);
    };

    return (
        <OrderToggleBox>
            <L.FlexCols _gap="0px" _padding="16px 20px">
                <button type="button" onClick={closeOrderToggle}>
                    <L.FlexRows _content="center" _gap="0px" _items="center">
                        <ArrowBottom />
                    </L.FlexRows>
                </button>
                <L.FlexRows
                    _height="56px"
                    _content="space-between"
                    _gap={16}
                    _items="center"
                    _padding="12px 0px"
                >
                    <T.Text _size={16} _weight={500} _color="gray800">
                        수량 선택
                    </T.Text>
                    <L.FlexRows
                        _content="right"
                        _gap="0px"
                        _items="center"
                        _width="114px"
                    >
                        <CountButton
                            type="button"
                            onClick={() => counterHandler(-1)}
                        >
                            <MinusB />
                        </CountButton>
                        <T.Text _align="center" _width="50px" _weight={500}>
                            {numberFormat(count)}
                        </T.Text>
                        <CountButton
                            type="button"
                            onClick={() => counterHandler(1)}
                        >
                            <PlusB />
                        </CountButton>
                    </L.FlexRows>
                </L.FlexRows>
                <L.FlexRows
                    _height="56px"
                    _content="space-between"
                    _gap={16}
                    _items="center"
                    _padding="12px 0px"
                >
                    <T.Text _size={16} _weight={500} _color="gray800">
                        상품 금액
                    </T.Text>
                    <T.Text _size={16} _weight={600} _color="gray800">
                        {numberFormat(salePrice * count)} 원
                    </T.Text>
                </L.FlexRows>
            </L.FlexCols>
        </OrderToggleBox>
    );
}

export default DetailsPage;
