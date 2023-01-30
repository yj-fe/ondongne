import React from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import StarRate from './StarRate';
import { numberFormat } from 'utils/utils';
import Img from 'assets/images/marketdetail.png';
import { useNavigate } from 'react-router-dom';
import { ImgCollect } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';

export const StoreListCard = ({ list, lastRef }) => {

    const navigate = useNavigate();


    return (
        <L.FlexCols _gap={20}>
            {
                list.map((item, index) => (
                    <L.FlexRows
                        key={index}
                        _gap='0px'
                        // _content='space-between'
                        ref={list.length == index + 1 ? lastRef : null}
                    >
                        <L.FlexRows _content='row' 
                            onClick={() => navigate(`/market/detail/${item.storeId}`)}
                        >
                            <ImgCollect  src={item.profile != null ? item.profile : Img}  />
                            <L.FlexCols _gap={2} _width='calc(100% - 100px)'>
                                <L.FlexRows _gap='0px' _width='200px'>
                                    <T.TextCut _weight={600} _size={17} _color="gray900">{item.name.substring(0, 17)}</T.TextCut>
                                </L.FlexRows>
                                <L.FlexRows _content='flex-start' _items='center' _gap={2}>
                                    <StarRate rate={item.reviewRate} />
                                    <T.Text _weight={500} _size={13} _color="gray900" _align='center'>({item.reviewRate})</T.Text>
                                </L.FlexRows>
                                <L.FlexRows>
                                    <T.Text _weight={400} _size={13} _color="gray800" _align='center'>
                                        최소주문 {item.orderMinPrice ? numberFormat(item.orderMinPrice) : 0}원,
                                    </T.Text>
                                    <T.Text _weight={400} _size={13} _color="gray800" _align='center'>
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


                    </L.FlexRows>
                ))
            }
        </L.FlexCols>
    )
}