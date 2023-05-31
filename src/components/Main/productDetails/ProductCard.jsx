import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as B from "components/commonUi/Button";
import ProductCart from "../Cart/ProductCart";
import {
    AbsoluteTopDiv,
    AbsoluteDiv,
    ImgSizeLayout,
    RelativDiv,
} from "components/layout/Img/ImgSizeLayout";
import ProductTimer from "components/commonUi/ProductTimer";
import { disRate, numberFormat, overNaming } from "utils/utils";
import StarRate from "components/commonUi/StarRate";
import { historyActions } from "store/slices/history";
import { useDispatch } from "react-redux";

export function ProductCard({ item, lastRef, width = 216, isCart = true }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const salePercent = disRate(
        item.price,
        item.timeSaleStatus && item.timeSale
            ? item.timeSale.price
            : item.salePrice
    );
    return (
        <L.FlexCols ref={lastRef} _gap={12} _padding={0} _width={width + "px"}>
            <RelativDiv>
                {item.timeSaleStatus && (
                    <AbsoluteTopDiv _top={"5px"} _left={"5px"} _zi={99}>
                        <B.Badge _color="white" _bg="blue">
                            타임 세일
                        </B.Badge>
                    </AbsoluteTopDiv>
                )}
                {isCart && (
                    <AbsoluteDiv>
                        <ProductCart id={item.itemId} count={1} type={"list"} />
                    </AbsoluteDiv>
                )}
                {!item.soldoutStatus ? (
                    <ImgSizeLayout
                        _width={width}
                        _height={width}
                        _bdr={6}
                        _object="cover"
                        src={
                            item.images &&
                            item.images.length > 0 &&
                            `${item.images[0]}?w=${width}&h=${width}`
                        }
                        onError={(e) =>
                            (e.target.src =
                                item.images &&
                                item.images.length > 0 &&
                                item.images[0])
                        }
                        onClick={() => {
                            dispatch(
                                historyActions.save({
                                    to: location.pathname,
                                    state:
                                        location.pathname === "/categories"
                                            ? location.state?.category
                                            : "",
                                })
                            );
                            navigate(`/details/${item.itemId}`);
                        }}
                    />
                ) : (
                    <div style={{ position: "relative" }}>
                        <ImgSizeLayout
                            _width={width}
                            _height={width}
                            _bdr={6}
                            _object="cover"
                            src={
                                item.images &&
                                item.images.length > 0 &&
                                `${item.images[0]}?w=${width}&h=${width}`
                            }
                            onError={(e) =>
                                (e.target.src =
                                    item.images &&
                                    item.images.length > 0 &&
                                    item.images[0])
                            }
                        />
                        <T.SoldoutText
                            _size={20}
                            _weight={600}
                            _color="white"
                            _width={width}
                            _height={width}>
                            판매완료
                        </T.SoldoutText>
                    </div>
                )}
            </RelativDiv>

            <L.FlexCols _gap={"4"} _padding={0}>
                {item.timeSaleStatus ? (
                    <ProductTimer
                        startDate={item.timeSale.startDateTime}
                        endDate={item.timeSale.endDateTime}
                        type={true}
                    />
                ) : (
                    item.type === "GROUP" &&
                    !item.soldoutStatus && (
                        <ProductTimer endDate={item.endDate} />
                    )
                )}

                <L.FlexCols _gap={"0"}>
                    <T.Text _size={12} _weight={500} _color="gray600">
                        {item.storeName}
                    </T.Text>
                    <T.TextMedia _size={14} _weight={500} _color="gray900">
                        {overNaming(item.name, width > 200 ? 40 : 30)}
                    </T.TextMedia>
                </L.FlexCols>

                <L.FlexCols _gap={"0"}>
                    {salePercent !== 0 && (
                        <L.FlexRows _gap={4} _padding={0} _items="center">
                            <T.Text
                                _size={15}
                                _weight={600}
                                _color="red"
                                _line="20px">
                                {salePercent}%
                            </T.Text>
                            <T.Text
                                _size={13}
                                _weight={400}
                                _color="gray500"
                                _decoration={"line-through"}
                                _line="20px">
                                {numberFormat(item.price)}원
                            </T.Text>
                        </L.FlexRows>
                    )}
                    <L.FlexRows>
                        <T.Text
                            _size={16}
                            _weight={600}
                            _color="gray900"
                            _line="20px">
                            {item.timeSaleStatus && item.timeSale
                                ? numberFormat(item.timeSale.price)
                                : numberFormat(item.salePrice)}{" "}
                            원
                        </T.Text>
                    </L.FlexRows>
                </L.FlexCols>
                <L.FlexRows _items="center">
                    <StarRate rate={item.rating} />
                    <T.Text _size={11} _weight={400} _color="gray800">
                        ({item.rating})
                    </T.Text>
                </L.FlexRows>
            </L.FlexCols>
        </L.FlexCols>
    );
}
