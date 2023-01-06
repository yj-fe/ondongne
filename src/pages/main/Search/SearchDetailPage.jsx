import React, { useEffect, useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import LayoutSearch from 'components/layout/Layout/LayoutSearch';
import MainCategory from 'components/Main/Main/MainCategory/MainCategory';
import { ImgSizeLayout, RelativDiv, AbsoluteDiv } from 'components/layout/Img/ImgSizeLayout';
import { CartC, Star } from 'components/commonUi/Icon';
import { getBestItemList } from 'service/item';
import { useSelector } from 'react-redux';
import LoadingBar from 'components/commonUi/LoadingBar';
import ProductTimer from 'components/commonUi/ProductTimer';
import { numberFormat, totalPrice } from 'utils/utils';
import StarRate from 'components/commonUi/StarRate';

function SearchDetailPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const local = useSelector(state => state.local);

  const getItems = async () => {
    const response = await getBestItemList(local.x, local.y);
    const { data } = response.data;
    setItems(data.items);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getItems();
  }, [])

  return (
    <div>
      <LayoutSearch>
        <L.Container>
          <L.Contents _padding='0px'>
            <MainCategory />
          </L.Contents>
          <L.Contents _padding='20px' >
            <L.FlexCols>
              <L.FlexRows _content='space-between'>
                <T.Text _weight={700} _size={18} _color="black">우리동네 인기 추천</T.Text>
                {/* <T.Text _weight={500} _size={14} _color="blue">전체 보기</T.Text> */}
              </L.FlexRows>

              {
                loading && <LoadingBar />
              }

              <L.FlexRowsWrap >
                {
                  !loading && items.length > 0 &&
                  items.map(item => (
                    <L.FlexCols key={item.itemId} _width='150px' _gap={12}>
                      <RelativDiv>
                        <AbsoluteDiv>
                          <CartC />
                        </AbsoluteDiv>
                        {
                          !item.soldoutStatus
                            ? <ImgSizeLayout _width={150} _height={150} _bdr={6} src={item.thumbnail} />
                            : <div style={{ position: 'relative' }}>
                              <ImgSizeLayout _width={150} _height={150} _bdr={6} src={item.thumbnail} />
                              <T.SoldoutText _size={20} _weight={600} _color='white'>판매완료</T.SoldoutText>
                            </div>
                        }
                      </RelativDiv>
                      <L.FlexCols _gap={1} _width='150px'>
                        {
                          item.type == 'GROUP' &&
                          !item.soldoutStatus &&
                          <ProductTimer date={item.endDate} />
                        }
                        <T.Text _weight={500} _size={12} _color="gray600">{item.storeName}</T.Text>
                        <T.Text _weight={400} _size={14} _color="gray900">{item.name}</T.Text>
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
                        <L.FlexRows _gap={1}>
                          <StarRate rate={item.reviewRate} />
                          <T.Text _size={11} _weight={400} _color='gray800'>({item.reviewRate})</T.Text>
                        </L.FlexRows>
                      </L.FlexCols>
                    </L.FlexCols>
                  ))
                }
              </L.FlexRowsWrap>

            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </LayoutSearch>
    </div>
  )
}

export default SearchDetailPage