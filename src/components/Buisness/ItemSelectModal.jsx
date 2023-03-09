import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FlexCols } from "components/commonUi/BuisinessLayout";
import { Search } from "components/commonUi/Icon";
import { TextInput } from "components/commonUi/Input";
import { Text } from "components/commonUi/Text";
import Overlay from "components/layout/Overlay/Overlay";
import { bizItemList, findByItemName } from "service/bizItem";
import { useNavigate } from "react-router-dom";

const ItemSelectModal = ({ modelClose, storeId, selected, dataHandler }) => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [keyword, setKeyword] = useState("");

    const loadData = useCallback(async () => {
        const response = await bizItemList(0, "create", "normal");

        if (response && response.data) {
            const { data } = response.data;
            setList(
                data.items.map((item) => ({
                    itemId: item.itemId,
                    name: item.name,
                    image: item.images[0],
                    checked: selected ? selected === item.itemId : false,
                }))
            );
        }
    }, [storeId]);

    // 위치 검색
    const searchHandler = async () => {
        if (!keyword) {
            return loadData();
        }

        setList([]);
        setErrorMessage("");

        const response = await findByItemName({
            search: keyword,
            storeId,
            type: "normal",
        });
        const { data, message } = response.data;
        if (message) setErrorMessage(message);
        if (data) {
            setList(
                data.items.map((item) => ({
                    itemId: item.itemId,
                    name: item.name,
                    image: item.images[0],
                    checked: selected ? selected.includes(item.itemId) : false,
                }))
            );
        }
    };

    // 체크 핸들러
    const checkHanler = (id) => {
        setErrorMessage("");

        setList(
            list.map((item) =>
                item.itemId === id
                    ? { ...item, checked: true }
                    : { ...item, checked: false }
            )
        );
    };

    // 적용
    const onSubmit = () => {
        dataHandler((d) => ({
            ...d,
            item: list
                .filter((item) => item.checked === true)
                .map((item) => item),
        }));
        modelClose();
    };

    useEffect(() => {
        if (storeId) loadData();
    }, [loadData, storeId]);

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
                            상품 검색
                        </Text>

                        <S.SearchBox>
                            <TextInput
                                _borcolor={"#fff"}
                                _boccolor={"#fff"}
                                maxLength={50}
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder={"내 상품을 이름으로 검색"}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") searchHandler();
                                }}
                            />
                            <button type="button" onClick={searchHandler}>
                                <Search />
                            </button>
                        </S.SearchBox>
                        {errorMessage && (
                            <Text
                                as="p"
                                _size={13}
                                _weight={400}
                                style={{ color: "#D32F2F" }}
                            >
                                {errorMessage}
                            </Text>
                        )}
                    </FlexCols>

                    {/* ============ 검색리스트 ============ */}
                    {list.length === 0 && (
                        <S.EmptyList>
                            <div>
                                <p>타임세일에 등록할 상품이 없습니다.</p>
                                <p>상품을 등록해보세요!</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => navigate("/business/upload")}
                            >
                                상품 등록
                            </button>
                        </S.EmptyList>
                    )}
                    {/* ============ 검색리스트 ============ */}
                    {list.length > 0 && (
                        <S.List>
                            {list.map((item, i) => (
                                <S.Item
                                    key={i}
                                    checked={item.checked}
                                    onClick={() => checkHanler(item.itemId)}
                                >
                                    <S.ItemImage src={item.image} />
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
        width: 500px;
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
        height: 60px;
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
        width: 80%;
    `,
    ItemImage: styled.img`
        width: 48px;
        height: 48px;
        border-radius: 4px;
    `,
    EmptyList: styled.div`
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        & p {
            color: #333333;
        }

        & button {
            width: max-content;
            background: #f5f5f5;
            font-size: 15px;
            border-radius: 99px;
            padding: 8px 12px;
        }
    `,
};

export default ItemSelectModal;
