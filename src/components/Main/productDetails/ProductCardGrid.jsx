import React from "react";
import { useNavigate } from "react-router-dom";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import ProductCart from "../Cart/ProductCart";
import { AbsoluteDiv, AbsoluteDivGrid, ImgSizeH, ImgSizeLayout, RelativDiv } from 'components/layout/Img/ImgSizeLayout';
import ProductTimer from "components/commonUi/ProductTimer";
import { numberFormat, totalPrice } from "utils/utils";
import StarRate from "components/commonUi/StarRate";

export function ProductCardGrid({
    item, lastRef, isCart = true
}) {
    const navigate = useNavigate();

    return (
        <L.FlexColsGrid
            ref={lastRef}
            _gap={12} _padding={0}
        >
            <RelativDiv>
                {
                    isCart &&

                    <AbsoluteDivGrid>
                        <ProductCart id={item.itemId} count={1} type={"list"} />
                    </AbsoluteDivGrid>
                }
                {
                    !item.soldoutStatus
                        ?
                        <ImgSizeH
                            _bdr={6}
                            src={item.images && item.images.length > 0 && item.images[0]}
                            onClick={() => navigate(`/details/${item.itemId}`)}
                        />
                        :
                        <div style={{ position: 'relative' }}>
                            <ImgSizeH
                                _bdr={6}
                                src={item.images && item.images.length > 0 && item.images[0]}
                            />
                            <T.SoldoutText _size={20} _weight={600} _color='white'>판매완료</T.SoldoutText>
                        </div>
                }
            </RelativDiv>
            {/* <RelativDiv> */}
            <L.FlexCols _gap={4} _padding={0} >
                {
                    item.type == 'GROUP' &&
                    !item.soldoutStatus &&
                    <ProductTimer date={item.endDate} />
                }
                <T.Text _size={12} _weight={500} _color='gray600' _line='1.8' >{item.storeName}</T.Text>
                <T.Text _size={14} _weight={400} _color='gray900'>{item.name}</T.Text>
                {
                    item.salePercent > 0 &&
                    <L.FlexRows _gap={4} _padding={0} _items='center' >
                        <T.Text _size={15} _weight={600} _color='red'>{item.salePercent}%</T.Text>
                        <T.Text _size={13} _weight={400} _color='gray500' _decoration={'line-through'}>{numberFormat(item.price)}원</T.Text>
                    </L.FlexRows>
                }
                <L.FlexRows>
                    <T.Text _size={16} _weight={600} _color='gray900'>{totalPrice(item.price, item.salePercent)} 원</T.Text>
                </L.FlexRows>
                <L.FlexRows _items='center'>
                    <StarRate rate={item.rating} />
                    <T.Text _size={11} _weight={400} _color='gray800'>({item.rating})</T.Text>
                </L.FlexRows>

            </L.FlexCols>
            {/* </RelativDiv> */}
        </L.FlexColsGrid>

    )
}