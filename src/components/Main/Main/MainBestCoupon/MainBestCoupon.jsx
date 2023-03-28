import React from "react";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { getStoreCouponList } from "service/main";
import {
    ContentCouponDiv,
    ContentImg,
    ContentMarket,
    ContentProduct,
} from "./MainBestCouponStyle";
import LoadingBar from "components/commonUi/LoadingBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "components/commonUi/Button";
import { useQuery } from "react-query";
import useDrag from "hooks/useDrag";

function MainBestCoupon() {
    const navigate = useNavigate();
    const { ref, isDrag, onDragStart, onDragEnd, onMove } = useDrag();
    const local = useSelector((state) => state.local);
    const limit = 5;
    const page = 1;

    const getItem = async () => {
        const response = await getStoreCouponList(local, limit, page);
        return response.data.data.stores;
    };

    const { data, isLoading } = useQuery(["main-best-coupon-list"], getItem, {
        staleTime: 30000,
        refetchOnWindowFocus: false,
    });

    const router = () => {
        navigate("/collections", {
            state: {
                type: 0,
                title: "우리동네 인기 쿠폰",
                list: data,
            },
        });
    };

    return (
        <div>
            <L.FlexRows
                _content="space-between"
                _items="center"
                _padding="0px 20px 0px 20px"
            >
                <T.Text _size={18} _weight={700} _color="black">
                    우리동네 인기 쿠폰
                </T.Text>
                <T.Text _size={14} _weight={500} _color="blue" onClick={router}>
                    전체 보기
                </T.Text>
            </L.FlexRows>

            <L.FlexRowsCP
                ref={ref}
                onMouseDown={onDragStart}
                onMouseMove={isDrag ? onMove : null}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
            >
                {isLoading && <LoadingBar />}
                {!isLoading && data?.length > 0 && (
                    <L.GridContainer _count={data.length}>
                        {data.map((d, i) => (
                            <React.Fragment key={i}>
                                <BestCouponCard item={d} i={i} />
                            </React.Fragment>
                        ))}
                    </L.GridContainer>
                )}
            </L.FlexRowsCP>
        </div>
    );
}

function BestCouponCard({ item, i }) {
    const navigate = useNavigate();
    return (
        <ContentProduct
            key={i}
            onClick={() =>
                navigate(`/market/detail/${item.storeId}`, {
                    state: { type: 2 },
                })
            }
        >
            <ContentImg src={`${item.banner}?w=150&h=150`} />
            <ContentMarket>{item.name}</ContentMarket>
            <ContentCouponDiv>
                <Badge _bg="green50" _color="green600">
                    쿠폰
                </Badge>
                {item.recetiveType.split(",").map((recetiveType, i) => (
                    <Badge key={i}>{recetiveType}</Badge>
                ))}
            </ContentCouponDiv>
        </ContentProduct>
    );
}

export default MainBestCoupon;
