import React from "react";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import LoadingBar from "components/commonUi/LoadingBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "components/Main/productDetails/ProductCard";
import { useQuery } from "react-query";
import { getMainCategoryList } from "service/item";
import useDrag from "hooks/useDrag";

const CategoryCollection = ({ category }) => {
    const navigate = useNavigate();
    const local = useSelector((state) => state.local);
    const { ref, isDrag, onDragStart, onDragEnd, onMove } = useDrag();

    const loadData = async () => {
        const response = await getMainCategoryList(category, local, 1);
        return response.data.data.items;
    };

    const { data, isLoading } = useQuery([`main-${category}`], loadData, {
        staleTime: 30000,
        refetchOnWindowFocus: false,
    });

    const router = () => {
        navigate("/categories", { state: { category } });
    };

    return (
        <div>
            <L.FlexRows
                _content="space-between"
                _items="center"
                _padding="0px 20px 0px 20px"
            >
                <T.Text _size={18} _weight={700} _color="black">
                    {category}
                </T.Text>
                <T.Text _size={14} _weight={500} _color="blue" onClick={router}>
                    전체 보기
                </T.Text>
            </L.FlexRows>
            <L.FlexCols _gap={32}>
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
                    )}
                </L.FlexRowsCP>
            </L.FlexCols>
        </div>
    );
};

export default CategoryCollection;
