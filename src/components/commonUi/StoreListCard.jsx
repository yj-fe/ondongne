import React from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import StarRate from './StarRate';
import { numberFormat } from 'utils/utils';
import StoreLike from './StoreLike';
import Img from 'assets/images/marketdetail.png';
import { useNavigate } from 'react-router-dom';

export const StoreListCard = ({ list, setData, lastRef }) => {

    const navigate = useNavigate();

    const likeHandler = (id) => {
        setData(
            list.map(item =>
                item.storeId === id
                    ? { ...item, likeStatus: !item.likeStatus }
                    : item
            )
        )
    }

    return (
        <L.FlexCols _gap={20}>
            {
                list.map((item, index) => (
                    <L.FlexRows
                        onClick={() => navigate(`/market/detail/${item.storeId}`)}
                        key={index}
                        _content='space-between'
                        ref={list.length == index + 1 ? lastRef : null}
                    >
                        <L.FlexRows _content='row'>
                            <ImgSizeLayout _bdr={4} src={item.profile != null ? item.profile : Img} _width={98} _height={98}></ImgSizeLayout>
                            <L.FlexCols _gap={2}>
                                <L.FlexRows _gap='0px' _width='200px'>
                                    <T.TextCut _weight={600} _size={18} _color="gray900">{item.name.substring(0, 17)} ...</T.TextCut>
                                </L.FlexRows>
                                <L.FlexRows _content='flex-start' _items='center' _gap={2}>
                                    <StarRate rate={item.reviewRate} />
                                    <T.Text _weight={500} _size={14} _color="gray900" _align='center'>({item.reviewRate})</T.Text>
                                </L.FlexRows>
                                <L.FlexRows>
                                    <T.Text _weight={400} _size={14} _color="gray800" _align='center'>
                                        최소주문 {item.orderMinPrice ? numberFormat(item.orderMinPrice) : 0}원,
                                    </T.Text>
                                    <T.Text _weight={400} _size={14} _color="gray800" _align='center'>
                                        배달 {item.deliveryPrice ? numberFormat(item.deliveryPrice) : 0}원
                                    </T.Text>
                                </L.FlexRows>
                                <L.FlexRows>
                                    {item.newStatus && <B.Badge _color='white' _bg='green500'>신규 입점</B.Badge>}
                                    {item.couponStatus && <B.Badge _color='green600' _bg='green50'>쿠폰</B.Badge>}
                                    {
                                        item.recetiveType && item.recetiveType.split(',').map((r, i) => (
                                            <React.Fragment key={i}>
                                                <B.Badge>{r}가능</B.Badge>
                                            </React.Fragment>
                                        ))
                                    }
                                </L.FlexRows>
                            </L.FlexCols>
                        </L.FlexRows>

                        <StoreLike id={item.storeId} checked={item.likeStatus} onChange={likeHandler} />

                    </L.FlexRows>
                ))
            }
        </L.FlexCols>
    )
}