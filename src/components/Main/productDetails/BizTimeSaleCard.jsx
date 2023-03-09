import React from "react";
import { useNavigate } from "react-router-dom";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as B from "components/commonUi/Button";
import ProductCart from "../Cart/ProductCart";
import {
    AbsoluteTopDiv,
    AbsoluteDivGrid,
    ImgSizeH,
    RelativDiv,
} from "components/layout/Img/ImgSizeLayout";
import ProductTimer from "components/commonUi/ProductTimer";
import { disRate, numberFormat, overNaming } from "utils/utils";
import StarRate from "components/commonUi/StarRate";

export function BizTimeSaleCard({ item, lastRef, isCart = true }) {
    const navigate = useNavigate();
    const salePercent = disRate(
        item.price,
        item.timeSale ? item.timeSale.price : item.salePrice
    );

    return (
        <L.FlexColsGrid ref={lastRef} _gap={12} _padding={0}>
            <RelativDiv
                onClick={() => navigate(`./update/${item.timeSale.timeSaleId}`)}
            >
                {item.timeSale && (
                    <AbsoluteTopDiv _top={"5px"} _left={"5px"}>
                        <B.Badge _color="white" _bg="blue">
                            타임 세일
                        </B.Badge>
                    </AbsoluteTopDiv>
                )}
                {isCart && (
                    <AbsoluteDivGrid>
                        <ProductCart id={item.itemId} count={1} type={"list"} />
                    </AbsoluteDivGrid>
                )}
                {item.soldoutStatus ? (
                    <div style={{ position: "relative" }}>
                        <ImgSizeH
                            src={
                                item.images &&
                                item.images.length > 0 &&
                                item.images[0]
                            }
                        />
                        <T.SoldoutText _size={20} _weight={600} _color="white">
                            판매완료
                        </T.SoldoutText>
                    </div>
                ) : item.timeSaleStartStatus ? (
                    <div style={{ position: "relative" }}>
                        <ImgSizeH
                            src={
                                item.images &&
                                item.images.length > 0 &&
                                item.images[0]
                            }
                        />
                        <T.SoldoutText _size={20} _weight={600} _color="white">
                            타임세일 예정
                        </T.SoldoutText>
                    </div>
                ) : item.timeSaleStatus && item.timeSaleSoldOutStatus ? (
                    <div style={{ position: "relative" }}>
                        <ImgSizeH
                            src={
                                item.images &&
                                item.images.length > 0 &&
                                item.images[0]
                            }
                        />
                        <T.SoldoutText _size={20} _weight={600} _color="white">
                            타임세일 판매 완료
                        </T.SoldoutText>
                    </div>
                ) : item.timeSaleEndStatus ? (
                    <div style={{ position: "relative" }}>
                        <ImgSizeH
                            src={
                                item.images &&
                                item.images.length > 0 &&
                                item.images[0]
                            }
                        />
                        <T.SoldoutText _size={20} _weight={600} _color="white">
                            타임세일 종료
                        </T.SoldoutText>
                    </div>
                ) : (
                    <ImgSizeH
                        src={
                            item.images &&
                            item.images.length > 0 &&
                            item.images[0]
                        }
                        onClick={() =>
                            navigate(`./update/${item.timeSale.timeSaleId}`)
                        }
                    />
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
                        {overNaming(item.name, 40)}
                    </T.TextMedia>
                </L.FlexCols>

                <L.FlexCols _gap={"0"}>
                    {salePercent != 0 && (
                        <L.FlexRows _gap={4} _padding={0} _items="center">
                            <T.Text
                                _size={15}
                                _weight={600}
                                _color="red"
                                _line="20px"
                            >
                                {salePercent}%
                            </T.Text>
                            <T.Text
                                _size={13}
                                _weight={400}
                                _color="gray500"
                                _decoration={"line-through"}
                                _line="20px"
                            >
                                {numberFormat(item.price)}원
                            </T.Text>
                        </L.FlexRows>
                    )}
                    <L.FlexRows>
                        <T.Text
                            _size={16}
                            _weight={600}
                            _color="gray900"
                            _line="20px"
                        >
                            {item.timeSale
                                ? item.timeSale.price
                                : item.salePrice}{" "}
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
            {/* </RelativDiv> */}
        </L.FlexColsGrid>
    );
}
