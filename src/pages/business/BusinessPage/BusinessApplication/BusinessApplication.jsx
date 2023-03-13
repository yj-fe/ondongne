import React, { useState } from "react";
import {
    TabContent,
    ContentDiv,
    ContentTitle,
    TitleInfoDiv,
    Input,
    ProfileBtnDiv,
    ImgBanner,
    Img,
    AvatarDiv,
} from "components/Buisness/BusinessManagement/BusinessManagementTabStyle";
import { Text } from "components/commonUi/Text";
import Alert from "components/commonUi/Alert";
import { Final } from "components/commonUi/Icon";
import CategoryForm from "components/commonUi/Category/CategoryForm";
import { NextButton } from "components/Login/Signup/agreement/AgreementStyle";
import {
    ConfirmButton,
    CenterDiv,
    FinalPageDiv,
    TabProfileDiv,
    ProfileDiv,
    ImgStyle,
    CameraStyle,
    FileInput,
} from "./BusinessApplicationStyle";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { businessNumberFormatter, imageValidation } from "utils/utils";
import { bizSignup } from "service/biz";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import DeliveryForm from "components/commonUi/Delivery/DeliveryForm";
import AddressForm from "components/commonUi/Address/AddressForm";
import BusinessFileForm from "components/commonUi/BusinessFile/BusinessFileForm";
import { AbsoluteDiv } from "components/layout/Img/ImgSizeLayout";
import defaultProfile from "assets/common/Profile.png";
import Camera from "assets/common/Camera.png";
import CheckBox from "components/commonUi/CheckBox";

function BusinessApplication() {
    const navigate = useNavigate();
    const [alert, setAlert] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    // 보낼 데이터
    const [data, setData] = useState({
        storeName: "",
        categories: [],
        address: "",
        addressDetails: "",
        delivery: [],
        description: "",
        ceo: "",
        businessNumber: "",
        files: [],
        banner: null,
        profile: null,
        bannerImage: null,
        profileImage: null,
        recetiveType: [],
    });

    // 수령 방법 데이터 핸들러
    const recetiveTypeHandler = (value) => {
        return setData({
            ...data,
            recetiveType: data.recetiveType.includes(value)
                ? data.recetiveType.filter((r) => r !== value)
                : [...data.recetiveType, value],
        });
    };

    const fileUpload = (e, key) => {
        if (!e.target.files[0]) {
            return false;
        }
        const uploadFile = e.target.files[0];
        const valid = imageValidation(uploadFile);

        if (valid) {
            return setAlert({
                contents: valid,
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        const reader = new FileReader();
        reader.onload = function () {
            setData({
                ...data,
                [key]: reader.result,
                [key + "Image"]: uploadFile,
            });
        };
        reader.readAsDataURL(uploadFile);
    };

    // 비즈 신청
    const onSubmit = async () => {
        setLoading(true);
        const response = await bizSignup(data);
        const result = response.data;

        if (result.data) {
            setLoading(false);
            setIsSuccess(true);
        } else {
            setLoading(false);
            return setAlert({
                contents: "서버 오류",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }
    };

    useEffect(() => {
        if (
            data.storeName?.length > 0 &&
            data.categories?.length > 0 &&
            data.address?.length > 0 &&
            data.addressDetails?.length > 0 &&
            data.delivery?.length > 0 &&
            data.ceo?.length > 0 &&
            data.businessNumber?.length === 12 &&
            data.files?.length > 0 &&
            data.banner?.length > 0 &&
            data.profile?.length > 0 &&
            data.recetiveType?.length > 0
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [data]);

    return (
        <Layout
            title="비즈 정보 관리"
            cart={false}
            bell={false}
            floating={false}
            onBackClick={() => navigate(-1)}
        >
            <L.Container _padding="0px 0px 8px">
                <L.Contents _padding="0" _height={"calc(100vh - 70px)"}>
                    <L.Scroll>
                        <L.FlexCols _gap="16">
                            {!isSuccess && (
                                <>
                                    {/* 배너 */}
                                    <TabProfileDiv>
                                        <AbsoluteDiv
                                            __width="93"
                                            _height="30"
                                            _right="16px"
                                            _top="16px"
                                        >
                                            <ProfileBtnDiv htmlFor="bannerFile">
                                                <Img
                                                    src={Camera}
                                                    alt="카메라"
                                                />
                                                이미지 변경
                                            </ProfileBtnDiv>
                                        </AbsoluteDiv>
                                        <input
                                            type="file"
                                            id="bannerFile"
                                            onChange={(e) =>
                                                fileUpload(e, "banner")
                                            }
                                        />
                                        {data.banner && (
                                            <ImgBanner
                                                src={data.banner}
                                                alt="배너"
                                            />
                                        )}
                                        {/* 프로필 */}
                                        <AvatarDiv>
                                            <>
                                                <ProfileDiv htmlFor="profile">
                                                    <ImgStyle
                                                        _hidden="hidden"
                                                        _object="cover"
                                                        src={
                                                            data.profile ??
                                                            defaultProfile
                                                        }
                                                    />
                                                    <CameraStyle src={Camera} />
                                                </ProfileDiv>
                                                <FileInput
                                                    type="file"
                                                    id="profile"
                                                    onChange={(e) =>
                                                        fileUpload(e, "profile")
                                                    }
                                                />
                                            </>
                                        </AvatarDiv>
                                    </TabProfileDiv>
                                    <TabContent>
                                        {/* =========상점명========= */}
                                        <ContentDiv>
                                            <ContentTitle>상점명</ContentTitle>
                                            <TitleInfoDiv>
                                                <Input
                                                    maxLength={50}
                                                    placeholder="상점명 입력"
                                                    value={data.storeName}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            storeName:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </TitleInfoDiv>
                                        </ContentDiv>

                                        {/* =========카테고리========= */}
                                        <CategoryForm
                                            data={data}
                                            setData={setData}
                                        />

                                        {/* =========상점 주소========= */}
                                        <AddressForm
                                            data={data}
                                            setData={setData}
                                        />

                                        {/* =========활동지역========= */}
                                        <DeliveryForm
                                            data={data}
                                            setData={setData}
                                        />

                                        {/* ============== 배달/픽업 여부 ============== */}
                                        <L.FlexCols _gap={28}>
                                            <ContentTitle>
                                                배달/픽업 여부
                                            </ContentTitle>
                                            <L.FlexRows _gap={16}>
                                                <CheckBox
                                                    label="배달 가능"
                                                    name="delivery"
                                                    checked={data.recetiveType.includes(
                                                        "배달"
                                                    )}
                                                    onChange={() =>
                                                        recetiveTypeHandler(
                                                            "배달"
                                                        )
                                                    }
                                                />
                                                <CheckBox
                                                    label="픽업 가능"
                                                    name="pickup"
                                                    checked={data.recetiveType.includes(
                                                        "픽업"
                                                    )}
                                                    onChange={() =>
                                                        recetiveTypeHandler(
                                                            "픽업"
                                                        )
                                                    }
                                                />
                                                <CheckBox
                                                    label="택배 가능"
                                                    name="parcel"
                                                    checked={data.recetiveType.includes(
                                                        "택배"
                                                    )}
                                                    onChange={() =>
                                                        recetiveTypeHandler(
                                                            "택배"
                                                        )
                                                    }
                                                />
                                            </L.FlexRows>
                                        </L.FlexCols>

                                        {/* =========사업자등록번호========= */}
                                        <ContentDiv>
                                            <ContentTitle>대표자</ContentTitle>
                                            <TitleInfoDiv>
                                                <Input
                                                    placeholder="대표자 명 입력"
                                                    value={data.ceo}
                                                    maxLength={30}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            ceo: e.target.value,
                                                        })
                                                    }
                                                />
                                            </TitleInfoDiv>
                                        </ContentDiv>

                                        {/* =========사업자등록번호========= */}
                                        <ContentDiv>
                                            <ContentTitle>
                                                사업자등록번호
                                            </ContentTitle>
                                            <TitleInfoDiv>
                                                <Input
                                                    placeholder="'-' 없이 번호만 입력"
                                                    value={data.businessNumber}
                                                    maxLength={12}
                                                    onChange={(e) => {
                                                        setData({
                                                            ...data,
                                                            businessNumber:
                                                                businessNumberFormatter(
                                                                    e.target
                                                                        .value
                                                                ),
                                                        });
                                                    }}
                                                />
                                            </TitleInfoDiv>
                                        </ContentDiv>

                                        {/* =========사업자 등록증 첨부========= */}
                                        <BusinessFileForm
                                            data={data}
                                            setData={setData}
                                        />

                                        <NextButton
                                            type="button"
                                            disabled={!disabled || loading}
                                            color={disabled}
                                            onClick={onSubmit}
                                        >
                                            비즈 신청하기
                                        </NextButton>
                                    </TabContent>
                                </>
                            )}

                            {/* ============= 4. 비즈회원신청 완료페이지 ============= */}
                            {isSuccess && (
                                <FinalPageDiv>
                                    <CenterDiv>
                                        <Final />
                                        <Text
                                            _size={22}
                                            _weight={700}
                                            _color={"gray900"}
                                        >
                                            비즈 신청이 완료되었습니다.
                                        </Text>
                                        <Text
                                            _size={15}
                                            _weight={400}
                                            _color={"gray800"}
                                            _align={"center"}
                                        >
                                            <p>
                                                관리자 검토 후 2영업일 이내로
                                                승인 처리 예정입니다.
                                            </p>
                                            <p>
                                                승인이 완료되면 알림으로
                                                알려드립니다.
                                            </p>
                                        </Text>
                                    </CenterDiv>
                                    <ConfirmButton
                                        type="button"
                                        onClick={() => {
                                            navigate("/more");
                                        }}
                                    >
                                        확인
                                    </ConfirmButton>
                                </FinalPageDiv>
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
                        </L.FlexCols>
                    </L.Scroll>
                </L.Contents>
            </L.Container>
        </Layout>
    );
}

export default BusinessApplication;
