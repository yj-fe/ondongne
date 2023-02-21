import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Down } from 'components/commonUi/Icon';
import { ModalBody, ModalDiv1, ModalDiv2, ModalOutside, ModalTitle } from '../More/ModalPageStyle';
import { useEffect } from 'react';
import { getStoreItemList } from 'service/item';
import { useInView } from 'react-intersection-observer';
import { ProductCard } from '../productDetails/ProductCard';
import LoadingBar from 'components/commonUi/LoadingBar';
import { ModalFilter } from 'components/layout/Layout/MoreLayout';
import { sortFormatter } from 'utils/utils';
import { Scroll } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import { ProductCardGrid } from 'components/Main/productDetails/ProductCardGrid';
import { CursorDiv } from 'components/Common/LayoutPageStyle';

function MarketDetailProduct({ id }) {
  const [filter, setFilter] = useState(false);
  const [fetching, isFetching] = useState(false);

  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [sort, setSort] = useState("create");
  const [page, setPage] = useState(1);

  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false)

  const getItems = async () => {
    const response = await getStoreItemList(id, page, sort);
    if (response && response.data.data) {

      const { items, count } = response.data.data;

      setList(items);
      setTotalCount(count);
      isFetching(false);

      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }
  }

  useEffect(() => {
    setPage(1);
    setList([]);
    isFetching(true);
  }, [id, sort])

  useEffect(() => {
    if (totalCount < 18) return;
    if (totalCount === list.length) return;
    if (loading) return;

    if (inView) {
      setPage(prevState => prevState + 1);
      isFetching(true);
    }
  }, [inView, loading])

  useEffect(() => {
    if (!fetching) return;

    setLoading(true);
    getItems();
  }, [fetching])

  return (
    <CursorDiv>
      <L.Container>
        <L.Contents>
          <L.FlexCols _gap={16}>
            <L.FlexRows _content='space-between' _items='content'>
              <L.FlexRows _gap={4} _content='flex-start' _items='content'>
                <T.Text _size={13} _weight={400} _color='gray900'>전체</T.Text>
                <T.Text _size={13} _weight={600}>{totalCount}</T.Text>
              </L.FlexRows>
              <L.FlexRows _gap={4} _content='flex-end' _items='content'>
                <T.Text _size={13} _weight={400} _color='gray900'>{sortFormatter(sort)}</T.Text>
                <button
                  type='button'
                  onClick={() => setFilter(true)}
                >
                  <Down />
                </button>
              </L.FlexRows>
            </L.FlexRows>

            {/* =================== 로딩 =================== */}
            {
              loading && <LoadingBar />
            }

            {/* =================== 없을때 =================== */}
            {
              !loading &&
              list.length === 0 &&
              <ProductEmpty />
            }

            {/* =================== 있을때 =================== */}
            {
              list.length > 0 &&
              <ProductList list={list} lastRef={ref} />
            }



          </L.FlexCols>
        </L.Contents>
      </L.Container>
      {filter && <ModalFilter CloseModal={() => setFilter(false)} data={sort} setData={setSort} />}
    </CursorDiv>
  )
}

function ProductEmpty() {
  return (
    <L.FlexRows _content='center' _gap='0px' _padding='56px 0px' _height='calc(100vh - 230px)'>
      <T.Text _weight={300} _size={15} _color="gray600" _align='center'>
        <p>해당 상점에</p>
        <p>등록된 상품이 없습니다.</p>
      </T.Text>
    </L.FlexRows>
  )
}


export function ProductList({ list, lastRef }) {

  return (
    <Scroll>

      <L.Grid>
      {list.map((item, index) => (
        <React.Fragment key={index}>
          <ProductCardGrid
            item={item}
            lastRef={list.length === index + 1 ? lastRef : null}
          />
        </React.Fragment>
      ))}
      </L.Grid>
    </Scroll>
  )
}

export default MarketDetailProduct