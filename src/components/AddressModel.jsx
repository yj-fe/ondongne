import React, { useEffect, useState } from "react";
import Overlay from "./layout/Overlay/Overlay";
import styled from "styled-components";
import { searchLocation } from "service/common";
import { FlexCols } from "./commonUi/BuisinessLayout";
import { GreenSearch, Search } from "./commonUi/Icon";
import { TextInput } from "./commonUi/Input";
import { Text } from "./commonUi/Text";

const AddressModel = ({ modelClose, currentData, dataHandler }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [address, setAddress] = useState("");
    const [list, setList] = useState([]);

    // 위치 검색
    const searchHandler = async () => {
        if (!address) {
            return false;
        }

        setList([]);
        setErrorMessage("");

        const response = await searchLocation(address);
        const { data, message } = response.data;
        if (message) setErrorMessage(message);
        if (data) {
            setList(
                data.map((item) => ({
                    name: item,
                    checked: currentData.includes(item),
                }))
            );
        }
    };

    // 체크 핸들러
    const checkHanler = (name) => {
        setErrorMessage("");

        setList(
            list.map((item) =>
                item.name === name ? { ...item, checked: !item.checked } : item
            )
        );
    };

    // 적용
    const onSubmit = () => {
        dataHandler(
            list
                .filter((item) => item.checked === true)
                .map((item) => item.name)
        );
        modelClose();
    };

    useEffect(() => {
        if (address) {
            setErrorMessage("");
        }
    }, [address]);

    return (
        <Overlay onOverlayClick={modelClose}>
            <S.AlertBox>
                <S.Body>
                    {/* ============ 검색창 ============ */}
                    <FlexCols _gap={12}>
                        <Text
                            as="span"
                            _size={18}
                            _weight={600}
                            _align="center"
                        >
                            배달 지역 검색
                        </Text>

                        <S.SearchBox>
                            <TextInput
                                _borcolor={"#fff"}
                                _boccolor={"#fff"}
                                maxLength={50}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder={"도/시/구, 동 이름으로 검색"}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") searchHandler();
                                }}
                            />
                            <button type="button" onClick={searchHandler}>
                                <Search />
                            </button>
                        </S.SearchBox>
                        {errorMessage ? (
                            <Text
                                as="p"
                                _size={13}
                                _weight={400}
                                style={{ color: "#D32F2F" }}
                            >
                                {errorMessage}
                            </Text>
                        ) : (
                            <FlexCols _gap={24}>
                                <FlexCols>
                                    <Text
                                        as="p"
                                        _size={14}
                                        _weight={600}
                                        _color={"black"}
                                    >
                                        활동지역이란?
                                    </Text>
                                    <Text
                                        as="p"
                                        _size={13}
                                        _weight={400}
                                        _color={"gray800"}
                                    >
                                        활동지역 주소를 추가하시면 해당 지역에서
                                        내 업체가 노출되며, 최대 7개까지 등록
                                        가능합니다.
                                    </Text>
                                </FlexCols>
                                <FlexCols>
                                    <Text
                                        as="p"
                                        _size={14}
                                        _weight={600}
                                        _color={"black"}
                                    >
                                        주소 검색 Tip
                                    </Text>
                                    <FlexCols _gap={4}>
                                        <Text
                                            as="p"
                                            _size={13}
                                            _weight={400}
                                            _color={"gray800"}
                                        >
                                            시/구 검색
                                        </Text>
                                        <Text
                                            as="p"
                                            _size={13}
                                            _weight={400}
                                            _color={"blue400"}
                                        >
                                            {
                                                "예) 김포시 -> 김포 모든 지역 검색"
                                            }
                                        </Text>
                                    </FlexCols>
                                    <FlexCols _gap={4}>
                                        <Text
                                            as="p"
                                            _size={13}
                                            _weight={400}
                                            _color={"gray800"}
                                        >
                                            동/면/읍 검색
                                        </Text>
                                        <Text
                                            as="p"
                                            _size={13}
                                            _weight={400}
                                            _color={"blue400"}
                                        >
                                            {
                                                "예) 사우동 -> 해당 동/면/읍 개별 주소만 검색"
                                            }
                                        </Text>
                                    </FlexCols>
                                </FlexCols>
                            </FlexCols>
                        )}
                    </FlexCols>
                    {/* ============ 검색리스트 ============ */}
                    {list.length > 0 && (
                        <S.List>
                            {list.map((item, i) => (
                                <S.Item
                                    key={i}
                                    checked={item.checked}
                                    onClick={() =>
                                        checkHanler(item.name, item.checked)
                                    }
                                >
                                    {item.checked ? (
                                        <GreenSearch />
                                    ) : (
                                        <Search />
                                    )}
                                    <S.ItemText
                                        _size={15}
                                        _weight={item.checked && 600}
                                        _color={
                                            item.checked ? "#0B806F" : "gray500"
                                        }
                                    >
                                        {item.name}
                                    </S.ItemText>
                                </S.Item>
                            ))}
                        </S.List>
                    )}
                </S.Body>
                <S.Button onClick={onSubmit}>적용</S.Button>
            </S.AlertBox>
        </Overlay>
    );
};

const S = {
    AlertBox: styled.div`
        width: 342px;
        height: auto;
        max-width: calc(100vw - 40px);
        max-height: calc(100vh - 40px);
        border-radius: 12px;
        overflow: hidden;
    `,
    Body: styled.div`
        padding: 24px 24px 32px;
        text-align: center;
        background-color: #fff;
    `,
    Button: styled.button`
        width: 100%;
        text-align: center;
        height: 48px;
        line-height: 48px;
        color: #fff;
        background-color: ${(props) => props.theme.color.green600};
    `,
    SearchBox: styled.div`
        width: 100%;
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eeeeee;
        color: #9e9e9e;
        &:focus {
            color: #212121;
        }
    `,
    List: styled.div`
        width: 100%;
        height: 200px;
        overflow-y: scroll;
        margin-top: 15px;
        &::-webkit-scrollbar-thumb {
            background-color: #bdbdbd;
            border-radius: 99px;
        }
        &::-webkit-scrollbar {
            width: 4px;
        }
    `,
    Item: styled.div`
        height: 48px;
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;
        background-color: ${(props) =>
            props.checked ? "#E1F3F2;" : "#ffffff"};
        padding-left: 8px;
    `,
    ItemText: styled.p`
        font-size: 15px;
        font-weight: ${(props) => props._weight || 400};
        color: ${(props) => props._color || "#9E9E9E"};
        line-height: 1.5;
        white-space: pre-wrap;
        text-align: left;
    `,
};

export default AddressModel;
