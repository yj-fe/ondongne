import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Down } from 'components/commonUi/Icon';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import { bizItemList } from 'service/item';
import { numberFormat, totalPrice } from 'utils/utils';
import StarRate from 'components/commonUi/StarRate';
import ProductTimer from 'components/commonUi/ProductTimer';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';


function BusinessProductManagement() {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const [items, setItems] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [modal, setConfirm] = useState(null)

  const [ref, inView] = useInView();

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('order');
  const [loading, setLoading] = useState(false)

  const getItem = async () => {
    setLoading(true)
    const response = await bizItemList(page, sort);
    const { data } = response.data;

    if (data) {
      setItems(
        data.items
      );
      setTotalCount(data.count);
    }
    setLoading(false)
  }

  useEffect(() => {
    if (auth.isAuthenticated) getItem();
  }, [page, sort, auth]);

  useEffect(() => {
    if (items.length == totalCount) return;

    if (inView && !loading) {
      setPage(prevState => prevState + 1)
    }
  }, [inView, loading])

  return (
    <div>
      <Layout
        title="상품관리"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >

        <L.Container >
          <L.Contents _height={'100vh'}>
            <L.FlexCols _padding={0} _gap={0}>

              <L.FlexRows _gap={16} _content='space-between'>
                <div>
                  <T.Text _size={16} _weight={600} _color='gray900'>전체 {totalCount}</T.Text>
                </div>
                <L.FlexRows _gap={4} _content='flex-end' _width='100px'>
                  <T.Text _size={13} _weight={400} _color='gray900'>최신 순</T.Text>
                  <button
                    type='button'
                  >
                    <Down />
                  </button>
                </L.FlexRows>
              </L.FlexRows>

              <L.Contents _padding='0px' _gap={20}>
                <L.FlexRowsWrap _gap={20} _padding={0} _height='364px'>
                  {
                    items && items.length === 0 &&
                    <L.NoneDataContainer>
                      <T.Text _size={15} _weight={400} _color='gray600'>준비된 상품이 없습니다.</T.Text>
                      <T.Text _size={15} _weight={400} _color='gray600'>상품을 등록해보세요!</T.Text>
                    </L.NoneDataContainer>
                  }
                  {
                    items && items.length > 0 &&
                    items.map((item, index) => (
                      items.length === index + 1
                        ? <Link
                          ref={ref}
                          key={item.itemId}
                          to={`/business/product/details/${item.itemId}`}
                        >
                          <Card item={item} />
                        </Link>

                        : <Link
                          key={item.itemId}
                          to={`/business/product/details/${item.itemId}`}
                        >
                          <Card item={item} />
                        </Link>
                    ))
                  }
                </L.FlexRowsWrap>
              </L.Contents>

            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export function Card({ lastRef, item }) {
  return (
    <div>
      <L.FlexCols _gap={12} _padding={0} _width='216px' >

        {
          !item.soldoutStatus
            ? <ImgSizeLayout _width={216} _height={216} _bdr={6} src={item.thumbnail} />
            : <div style={{ position: 'relative' }}>
              <ImgSizeLayout _width={216} _height={216} _bdr={6} src={item.thumbnail} />
              <T.SoldoutText _size={20} _weight={600} _color='white'>판매완료</T.SoldoutText>
            </div>
        }

        <L.FlexCols _gap={4} _padding={0} >
          {
            item.type == 'GROUP' &&
            !item.soldoutStatus &&
            <ProductTimer date={item.endDate} />
          }
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
          <L.FlexRows>
            <StarRate rate={item.reviewRate} />
            <T.Text _size={11} _weight={400} _color='gray800'>({item.reviewRate})</T.Text>
          </L.FlexRows>

        </L.FlexCols>
      </L.FlexCols>
    </div>
  )
}


export default BusinessProductManagement