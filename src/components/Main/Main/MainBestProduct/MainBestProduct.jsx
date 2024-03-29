import React from "react";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { LastChanceDiv } from "./MainBestProductStyle";
import LoadingBar from "components/commonUi/LoadingBar";
import { useSelector } from "react-redux";
import { MyStoreBestItem } from "service/main";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "components/Main/productDetails/ProductCard";
import { useQuery } from "react-query";
import useDrag from "hooks/useDrag";

function MainBestProduct() {
    const navigate = useNavigate();
    const local = useSelector((state) => state.local);
    const { ref, isDrag, onDragStart, onDragEnd, onMove } = useDrag();
    const limit = 10;
    const page = 1;

    const loadData = async () => {
        const response = await MyStoreBestItem(local, limit, page);
        return response.data.data.items;
    };

    const { data, isLoading } = useQuery(["main-mystore-list"], loadData);

    return (
        <>
            {isLoading && <LoadingBar />}
            {!isLoading && data?.length > 0 && (
                <L.Inner>
                    <L.Contents _padding="20px 0px 20px 0px">
                        <L.FlexRows
                            _cursor="default"
                            _content="space-between"
                            _items="center"
                            _padding="0px 20px 0px 20px"
                        >
                            <T.Text _size={18} _weight={700} _color="black">
                                My단골 인기 상품
                            </T.Text>
                            <T.Text
                                _size={14}
                                _weight={500}
                                _color="blue"
                                onClick={() => navigate("/member/market")}
                            >
                                전체 보기
                            </T.Text>
                        </L.FlexRows>
                        <LastChanceDiv>
                            <L.FlexRowsCP
                                ref={ref}
                                onMouseDown={onDragStart}
                                onMouseMove={isDrag ? onMove : null}
                                onMouseUp={onDragEnd}
                                onMouseLeave={onDragEnd}
                            >
                                <L.GridContainer _count={data.length}>
                                    {data.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <ProductCard
                                                item={item}
                                                lastRef={null}
                                                width={150}
                                                isCart={false}
                                            />
                                        </React.Fragment>
                                    ))}
                                </L.GridContainer>
                            </L.FlexRowsCP>
                        </LastChanceDiv>
                    </L.Contents>
                </L.Inner>
            )}
        </>
    );
}

export default MainBestProduct;
