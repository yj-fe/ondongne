import React, { useEffect, useState } from "react";
import Camera from "assets/common/Camera.png";
import CheckBox from "components/commonUi/CheckBox";
import ProfileAvatar from "components/commonUi/ProfileAvatar";
import { Text } from "components/commonUi/Text";
import {
    TimeBox,
    TimeDiv,
    DayDiv,
    DayBox,
    RowTitle,
    InputText,
    TabDiv,
    TabProfileDiv,
    ProfileBtnDiv,
    Img,
    AvatarDiv2,
    TabContent,
    RowDiv,
    ContentDiv,
    ContentTitle,
    TitleInfoDiv,
    TabBtn,
    InputBox,
    Input,
    Textarea,
    Size,
    ImgBanner,
} from "./BusinessManagementTabStyle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    getBizStore,
    storeImageBannerUpdate,
    storeImageProfileUpdate,
    storeUpdate,
} from "service/bizStore";
import { numberFormat, numberFormatter } from "utils/utils";
import Alert from "components/commonUi/Alert";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { AbsoluteDiv } from "components/layout/Img/ImgSizeLayout";
import CategoryForm from "components/commonUi/Category/CategoryForm";
import DeliveryForm from "components/commonUi/Delivery/DeliveryForm";
const IMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/";

// 상점정보
function BusinessManagementTab1() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [alert, setAlert] = useState(null);
    const [active, setActive] = useState(false);
    const [loading, isLoading] = useState(true);
    const [store, setStore] = useState({});

    // input 체인지 핸들러
    const onChange = (e) => {
        const { name, value } = e.target;
        setStore({
            ...store,
            [name]: value,
        });
    };

    // 배너 이미지 변경
    const bannerUpdate = async (e) => {
        const file = e.target.files[0];
        const response = await storeImageBannerUpdate(file, store.storeId);
        const { data } = response.data;

        if (data) {
            setStore({
                ...store,
                banner: IMGURL + data.name,
            });
        }
    };

    // 프로필 이미지 변경
    const profileUpdate = async (e) => {
        const file = e.target.files[0];
        const response = await storeImageProfileUpdate(file, store.storeId);
        const { data } = response.data;

        if (data) {
            setStore({
                ...store,
                profile: IMGURL + data.name,
            });
        }
    };

    // 휴무일 변경
    const dayOffHandler = (dayWeek) => {
        setStore({
            ...store,
            sales: store.sales.map((item) =>
                item.dayWeek === dayWeek
                    ? { ...item, dayOffStatus: !item.dayOffStatus }
                    : item
            ),
        });
    };

    // 운영시간 변경
    const salesOpenTimeHandler = (dayWeek, time) => {
        setStore({
            ...store,
            sales: store.sales.map((item) =>
                item.dayWeek === dayWeek ? { ...item, openTime: time } : item
            ),
        });
    };

    // 운영시간 변경
    const salesCloseTimeHandler = (dayWeek, time) => {
        setStore({
            ...store,
            sales: store.sales.map((item) =>
                item.dayWeek === dayWeek ? { ...item, closeTime: time } : item
            ),
        });
    };

    // 수령 방법 데이터 핸들러
    const recetiveTypeHandler = (value) => {
        return setStore({
            ...store,
            recetiveType: store.recetiveType.includes(value)
                ? store.recetiveType.filter((r) => r !== value)
                : [...store.recetiveType, value],
        });
    };

    // 상점 수정
    const onSubmit = async () => {
        const response = await storeUpdate({
            ...store,
            recetiveType: store.recetiveType.join(","),
        });

        if (response && response.data.data) {
            return setAlert({
                contents: "상점 정보를 수정하였습니다.",
                buttonText: "확인",
                onButtonClick: () => {
                    setAlert(false);
                    navigate("/business");
                },
                onOverlayClick: () => setAlert(false),
            });
        } else {
            return setAlert({
                contents: "상점 정보 수정을 실패하였습니다.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }
    };

    // 상점 조회
    const loadData = async () => {
        const response = await getBizStore();
        const { data } = response.data;
        if (!data) {
            return navigate("/");
        }
        setStore({
            ...data,
            recetiveType: data.recetiveType ? data.recetiveType.split(",") : [],
        });
        isLoading(false);
    };

    // 필수 데이터 체크
    useEffect(() => {
        if (
            store.categories?.length > 0 &&
            store.deliveries?.length > 0 &&
            store.name
        ) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [store]);

    // 상점 조회
    useEffect(() => {
        if (auth.isAuthenticated) loadData();
    }, [auth]);

    if (loading) return <></>;

    return (
        <>
            <TabDiv>
                {/* 배너 */}
                <TabProfileDiv>
                    <AbsoluteDiv
                        __width="93"
                        _height="30"
                        _right="16px"
                        _top="120px"
                    >
                        <ProfileBtnDiv htmlFor="bannerFile">
                            <Img src={Camera} />
                            이미지 변경
                        </ProfileBtnDiv>
                    </AbsoluteDiv>
                    <input
                        type="file"
                        id="bannerFile"
                        onChange={bannerUpdate}
                    />
                    <ImgBanner src={store.banner} />
                </TabProfileDiv>
                {/* 프로필 */}
                <AvatarDiv2>
                    <ProfileAvatar
                        profile={store.profile}
                        onChange={profileUpdate}
                    />
                </AvatarDiv2>

                <TabContent>
                    {/* ============== 상점명 ============== */}
                    <ContentDiv>
                        <ContentTitle>상점명</ContentTitle>
                        <TitleInfoDiv>
                            <Input
                                _width="90%"
                                name="name"
                                value={store.name}
                                onChange={onChange}
                                maxLength={"50"}
                            />
                        </TitleInfoDiv>
                    </ContentDiv>

                    {/* ============== 카테고리 ==============  */}
                    <CategoryForm data={store} setData={setStore} />

                    {/* ============== 활동지역 ============== */}
                    <DeliveryForm data={store} setData={setStore} />

                    {/* ============== 배달/픽업 여부 ============== */}
                    <L.FlexCols _gap={16}>
                        <T.Text _weight={600} _size={16} _color="gray900">
                            배달/픽업 여부
                        </T.Text>
                        <L.FlexRows _gap={16}>
                            <CheckBox
                                label="배달 가능"
                                name="delivery"
                                checked={store.recetiveType.includes("배달")}
                                onChange={() => recetiveTypeHandler("배달")}
                            />
                            <CheckBox
                                label="픽업 가능"
                                name="pickup"
                                checked={store.recetiveType.includes("픽업")}
                                onChange={() => recetiveTypeHandler("픽업")}
                            />
                            <CheckBox
                                label="택배 가능"
                                name="parcel"
                                checked={store.recetiveType.includes("택배")}
                                onChange={() => recetiveTypeHandler("택배")}
                            />
                        </L.FlexRows>
                    </L.FlexCols>

                    {/* ============== 상점 소개 ============== */}
                    <ContentDiv>
                        <ContentTitle>상점 소개</ContentTitle>
                        <InputBox height={200}>
                            <L.Parents>
                                <Textarea
                                    name="description"
                                    value={store.description}
                                    onChange={onChange}
                                    placeholder="어떤 상점인지 소개해 주세요!"
                                    maxLength={500}
                                />
                                <L.Child _bottom="10px" _right="10px">
                                    <Text _color="gray600" _size="12">
                                        {store.description?.length ?? 0}/500
                                    </Text>
                                </L.Child>
                            </L.Parents>
                        </InputBox>
                    </ContentDiv>

                    {/* ============== 배달비/최소 주문 ============== */}
                    <RowDiv>
                        <ContentDiv>
                            <ContentTitle>배달비(원)</ContentTitle>
                            <TitleInfoDiv>
                                <InputText>￦ </InputText>
                                <Input
                                    name="deliveryPrice"
                                    value={numberFormat(store.deliveryPrice)}
                                    onChange={(e) => {
                                        setStore({
                                            ...store,
                                            deliveryPrice: numberFormatter(
                                                e.target.value
                                            ),
                                        });
                                    }}
                                    placeholder="0"
                                    maxLength={12}
                                />
                            </TitleInfoDiv>
                        </ContentDiv>
                        <ContentDiv>
                            <ContentTitle>택배비(원)</ContentTitle>
                            <TitleInfoDiv>
                                <InputText>￦ </InputText>
                                <Input
                                    name="parcelPrice"
                                    value={numberFormat(store.parcelPrice)}
                                    onChange={(e) => {
                                        setStore({
                                            ...store,
                                            parcelPrice: numberFormatter(
                                                e.target.value
                                            ),
                                        });
                                    }}
                                    placeholder="0"
                                    maxLength={12}
                                />
                            </TitleInfoDiv>
                        </ContentDiv>
                        <ContentDiv>
                            <ContentTitle>최소 주문 금액(원)</ContentTitle>
                            <TitleInfoDiv>
                                <InputText>￦ </InputText>
                                <Input
                                    name="orderMinPrice"
                                    value={numberFormat(store.orderMinPrice)}
                                    onChange={(e) => {
                                        setStore({
                                            ...store,
                                            orderMinPrice: numberFormatter(
                                                e.target.value
                                            ),
                                        });
                                    }}
                                    placeholder="0"
                                    maxLength={12}
                                />
                            </TitleInfoDiv>
                        </ContentDiv>
                    </RowDiv>

                    {/* ============== 휴무일 ============== */}
                    <RowDiv>
                        <ContentDiv>
                            <L.FlexRows _content="space-between">
                                <ContentTitle>휴무일</ContentTitle>
                                <CheckBox
                                    label="공휴일 휴무"
                                    name="holidayStatus"
                                    checked={store.holidayStatus}
                                    onChange={(e) => {
                                        setStore({
                                            ...store,
                                            holidayStatus:
                                                e.currentTarget.checked,
                                        });
                                    }}
                                />
                            </L.FlexRows>
                            <DayDiv>
                                {store.sales &&
                                    store.sales.length > 0 &&
                                    store.sales.map((item) => (
                                        <DayOffForm
                                            sales={item}
                                            dayOffHandler={dayOffHandler}
                                        />
                                    ))}
                            </DayDiv>
                        </ContentDiv>
                    </RowDiv>

                    {/* ============== 운영 시간 ============== */}
                    <ContentDiv>
                        <ContentTitle>운영 시간</ContentTitle>
                        {store.sales &&
                            store.sales.length > 0 &&
                            store.sales.map((item) => (
                                <SalesForm
                                    sales={item}
                                    salesOpenTimeHandler={salesOpenTimeHandler}
                                    salesCloseTimeHandler={
                                        salesCloseTimeHandler
                                    }
                                />
                            ))}
                    </ContentDiv>
                </TabContent>

                <TabBtn
                    type="button"
                    disabled={!active}
                    _active={active}
                    onClick={onSubmit}
                >
                    확인
                </TabBtn>
            </TabDiv>
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

const DayOffForm = ({ sales, dayOffHandler }) => {
    const { dayWeek, dayOffStatus } = sales;

    return (
        <DayBox onClick={() => dayOffHandler(dayWeek)} color={dayOffStatus}>
            {dayWeek.charAt(0)}
        </DayBox>
    );
};

const SalesForm = ({ sales, salesOpenTimeHandler, salesCloseTimeHandler }) => {
    const { dayWeek, dayOffStatus, openTime, closeTime } = sales;
    const [openHour, setOpenHour] = useState(openTime.split(":")[0]);
    const [openMin, setOpenMin] = useState(openTime.split(":")[1]);
    const [closeHour, setCloseHour] = useState(closeTime.split(":")[0]);
    const [closeMin, setCloseMin] = useState(closeTime.split(":")[1]);

    const timeValid = (value, handler, maxNumber) => {
        const num = Number(value);
        if (num === NaN) return handler(``);

        if (num < 0 || num > maxNumber) {
            return handler(``);
        }

        return handler(`${num}`);
    };

    useEffect(() => {
        salesOpenTimeHandler(dayWeek, `${openHour}:${openMin}:00`);
    }, [openHour, openMin]);

    useEffect(() => {
        salesCloseTimeHandler(dayWeek, `${closeHour}:${closeMin}:00`);
    }, [closeHour, closeMin]);

    return (
        <RowTitle align={"center"}>
            <Size _width="40px">
                <Text _size={15}>{dayWeek}</Text>
            </Size>
            <Size>
                <L.FlexRows _height="44px" _items="center">
                    <TimeDiv color={dayOffStatus}>
                        <TimeBox>
                            <Input
                                color={dayOffStatus}
                                align={"center"}
                                placeholder="00"
                                disabled={dayOffStatus}
                                value={openHour}
                                maxLength={2}
                                onChange={(e) =>
                                    timeValid(e.target.value, setOpenHour, 23)
                                }
                            />
                        </TimeBox>
                        :
                        <TimeBox>
                            <Input
                                color={dayOffStatus}
                                align={"center"}
                                placeholder="00"
                                disabled={dayOffStatus}
                                value={openMin}
                                maxLength={2}
                                onChange={(e) =>
                                    timeValid(e.target.value, setOpenMin, 59)
                                }
                            />
                        </TimeBox>
                    </TimeDiv>
                    ~
                    <TimeDiv color={dayOffStatus}>
                        <TimeBox>
                            <Input
                                maxLength={2}
                                color={dayOffStatus}
                                align={"center"}
                                placeholder="00"
                                disabled={dayOffStatus}
                                value={closeHour}
                                onChange={(e) =>
                                    timeValid(e.target.value, setCloseHour, 23)
                                }
                            />
                        </TimeBox>
                        :
                        <TimeBox>
                            <Input
                                maxLength={2}
                                color={dayOffStatus}
                                align={"center"}
                                placeholder="00"
                                disabled={dayOffStatus}
                                value={closeMin}
                                onChange={(e) =>
                                    timeValid(e.target.value, setCloseMin, 59)
                                }
                            />
                        </TimeBox>
                    </TimeDiv>
                </L.FlexRows>
            </Size>
        </RowTitle>
    );
};

export default BusinessManagementTab1;
