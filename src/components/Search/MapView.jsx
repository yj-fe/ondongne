import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import {
    Container as MapDiv,
    NaverMap,
    Marker,
    useNavermaps,
} from "react-naver-maps";
import { storeMapList } from "service/store";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { ModalBody, ModalDiv1 } from "components/Main/More/ModalPageStyle";
import { Close } from "components/commonUi/Icon";
import Daily from "assets/icons/category/Daily.svg";
import Dessert from "assets/icons/category/Dessert.svg";
import drink from "assets/icons/category/drink.svg";
import Etc from "assets/icons/category/Etc.svg";
import Food from "assets/icons/category/Food.svg";
import Meat from "assets/icons/category/Meat.svg";
import Pet from "assets/icons/category/Pet.svg";
import Rice from "assets/icons/category/Rice.svg";
import Seafood from "assets/icons/category/Seafood.svg";
import vegetables from "assets/icons/category/vegetables.svg";
import { groupBy, isEmptyObj } from "utils/utils";
import "./style.css";
import { StoreListCard } from "components/commonUi/StoreListCard";

const MapView = ({ category }) => {
    const local = useSelector((state) => state.local);
    const [list, setList] = useState([]);

    const loadData = useCallback(async () => {
        setList([]);
        const response = await storeMapList(local, category.replace(",", "/"));

        if (response?.data) {
            setList(groupBy(response.data.data, "addressX"));
        }
    }, [local, category]);

    useEffect(() => {
        loadData();
    }, [loadData, category]);

    return (
        <MapDiv
            style={{
                width: "100%",
                height: "calc(100vh - 118px)",
            }}
        >
            <MyMap list={list} local={local} />
        </MapDiv>
    );
};

function MyMap({ list, local }) {
    const navermaps = useNavermaps();
    const [item, setItem] = useState(null);

    const categoryIcon = (type) => {
        if (type === "야채/과일") return `<img src="${vegetables}" />`;
        if (type === "정육") return `<img src="${Meat}"/>`;
        if (type === "수산/해산") return `<img src="${Seafood}"/>`;
        if (type === "쌀/잡곡") return `<img src="${Rice}"/>`;
        if (type === "식품") return `<img src="${Food}"/>`;
        if (type === "생활용품") return `<img src="${Daily}"/>`;
        if (type === "디저트") return `<img src="${Dessert}"/>`;
        if (type === "식음료") return `<img src="${drink}"/>`;
        if (type === "반려동물") return `<img src="${Pet}"/>`;
        if (type === "기타") return `<img src="${Etc}"/>`;
    };

    function markerOnClick(data, key) {
        const markers = document.querySelectorAll(".markerContainer");
        markers.forEach((m, i) => {
            if (i === key) {
                m.classList.add("on");
            } else {
                m.classList.remove("on");
            }
        });
        setItem(data);
    }

    return (
        <NaverMap
            defaultCenter={new navermaps.LatLng(local.x, local.y)}
            defaultZoom={15}
            minZoom={15}
        >
            {!isEmptyObj(list) &&
                Object.values(list).map((newList, i) => (
                    <Marker
                        key={i}
                        defaultPosition={
                            new navermaps.LatLng(
                                newList[0].addressX,
                                newList[0].addressY
                            )
                        }
                        onClick={() => markerOnClick(newList, i)}
                        icon={{
                            content: `
                                <div class='markerContainer'>
                                    ${
                                        newList[0].newStatus
                                            ? `<div class="newBegie"> 
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="24" height="24" rx="12" fill="#E54E2B" />
                                                        <path d="M16.0674 7.10156H14.3037V13.8691H14.208L9.5459 7.10156H7.93262V17H9.70996V10.2324H9.79199L14.4814 17H16.0674V7.10156Z" fill="white" />
                                                    </svg>
                                                </div>`
                                            : ""
                                    }
                                    <div class="marker">
                                        ${categoryIcon(newList[0].category)}
                                        <p class="text">${
                                            newList.length > 1
                                                ? newList[0].name +
                                                  `외 ${newList.length}개`
                                                : newList[0].name
                                        }</p>
                                    </div>
                                    <div class="arrow" /> 
                                </div>
                            `,
                        }}
                    />
                ))}
            {item && <Modal close={() => setItem(null)} item={item} />}
        </NaverMap>
    );
}

// 업체정보 모달
function Modal({ close, item }) {
    return (
        <ModalBody>
            <ModalDiv1
                _shadow="0px 0px 16px  rgba(0, 0, 0, 0.06)"
                _pd="0px 20px"
                _height="56px"
            >
                <L.FlexRows _padding="0px 20px" _content="space-between">
                    <L.FlexRows _content="center" _transform="translateX(10px)">
                        <T.Text _size={16} _weight={600}>
                            업체 정보
                        </T.Text>
                    </L.FlexRows>
                    <L.FlexRows _width="auto" _content="right" onClick={close}>
                        <Close />
                    </L.FlexRows>
                </L.FlexRows>
            </ModalDiv1>
            <L.Contents _padding="8px 20px 16px 20px">
                <StoreListCard
                    list={item}
                    setData={() => {}}
                    lastRef={null}
                    isLike={false}
                />
            </L.Contents>
        </ModalBody>
    );
}

export default MapView;
