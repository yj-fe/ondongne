import React from "react";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import {
    ContentDiv,
    ContentImg,
    ContentImgBadge,
    ContentImgDiv,
    ContentInfo,
    ContentMarket,
    ContentMarketImg,
    ContentProduct,
    ContentStyle,
    ContentTextStyle,
} from "./MainNewMarketStyle";
import { useSelector } from "react-redux";
import { newStoreList } from "service/main";
import LoadingBar from "components/commonUi/LoadingBar";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import useDrag from "hooks/useDrag";

function MainNewMarket() {
    const navigate = useNavigate();
    const local = useSelector((state) => state.local);
    const { ref, isDrag, onDragStart, onDragEnd, onMove } = useDrag();
    const limit = 10;
    const page = 1;

    const loadData = async () => {
        const response = await newStoreList(local, limit, page);
        return response.data.data.stores;
    };

    const { data, isLoading } = useQuery(["main-new-store-list"], loadData, {
        staleTime: 30000,
        refetchOnWindowFocus: false,
    });

    const router = () => {
        navigate("/collections", {
            state: {
                type: 0,
                title: "우리동네 신규 입점",
                list: data,
            },
        });
    };

    return (
        <div>
            <L.FlexRows _content="space-between" _items="center" _padding="0px 20px 0px 20px">
                <T.Text _size={18} _weight={700} _color="black">
                    우리동네 신규 입점
                </T.Text>
                <T.Text _size={14} _weight={500} _color="blue" onClick={router}>
                    전체 보기
                </T.Text>
            </L.FlexRows>
            <L.FlexRowsCP ref={ref} onMouseDown={onDragStart} onMouseMove={isDrag ? onMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd}>
                {isLoading && <LoadingBar />}
                {!isLoading && data?.length > 0 && (
                    <L.GridContainer _count={data.length}>
                        {data.map((item, index) => (
                            <div key={index} onClick={() => navigate(`/market/detail/${item.storeId}`)}>
                                <NewMarketCard item={item} />
                            </div>
                        ))}
                    </L.GridContainer>
                )}
            </L.FlexRowsCP>
        </div>
    );
}

function NewMarketCard({ item }) {
    return (
        <ContentProduct>
            <ContentImgDiv>
                <ContentImgBadge>신규 입점</ContentImgBadge>
                <ContentImg src={`${item.banner}?w=280&h=160`} onError={(e) => (e.target.src = item.banner)} />
            </ContentImgDiv>
            <ContentStyle>
                <ContentDiv>
                    <ContentMarketImg src={`${item.profile}?w=38&h=38`} onError={(e) => (e.target.src = item.profile)} />
                    <ContentTextStyle>
                        <ContentMarket>{item.name}</ContentMarket>
                        {item.description && <ContentInfo>{item.description}</ContentInfo>}
                    </ContentTextStyle>
                </ContentDiv>
            </ContentStyle>
        </ContentProduct>
    );
}

export default MainNewMarket;
