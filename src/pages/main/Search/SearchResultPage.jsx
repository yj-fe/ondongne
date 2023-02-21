import React, { useEffect, useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import LayoutSearch from 'components/layout/Layout/LayoutSearch';
import { DetailTabInfo } from 'pages/main/DetailsPage/DetailsPageStyle';
import { DetailTabReview } from './../DetailsPage/DetailsPageStyle';
import { Down } from 'components/commonUi/Icon';
import { CategoryCard } from './../Product/CategoryPage';
import { SearchSortLayout, SortLayout } from 'components/layout/Layout/MoreLayout';
import { sortFormatter } from 'utils/utils';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { searchItmeList } from 'service/item';
import { searchStoreList } from 'service/store';
import LoadingBar from 'components/commonUi/LoadingBar';
import { useInView } from 'react-intersection-observer';
import { StoreListCard } from 'components/commonUi/StoreListCard';

function SearchResultPage() {
  const location = useLocation()
  const [detailTab, setDetailTab] = useState(0)
  const [filter01, setFilter01] = useState(false);
  const local = useSelector(state => state.local);

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('create');
  const [page, setPage] = useState(1);

  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [fetching, isFetching] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const getItems = async () => {

    const response = detailTab === 0
      ? await searchItmeList(search, sort, page, local.x, local.y)
      : await searchStoreList(search, sort, page, local.x, local.y);

    const { data } = response.data;

    setTotalCount(data.count);
    setItems(detailTab === 0 ? data.items : data.stores);
    isFetching(false);


    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setSort('create')
    setSearch(location.state.search);
  }, [detailTab, location])

  useEffect(() => {
    setPage(1);
    setItems([]);
    isFetching(true);
  }, [sort, search, detailTab])


  useEffect(() => {
    if (totalCount < 9) return;
    if (totalCount === items.length) return;
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
    <div>
      <LayoutSearch>
        <L.Contents _padding='0px'>
          <L.FlexRows _gap='0px'>
            <DetailTabInfo
              width='50%'
              onClick={() => { setDetailTab(0); }}
              infocolor={detailTab === 0}
            >
              상품
            </DetailTabInfo>
            <DetailTabReview
              width='50%'
              onClick={() => { setDetailTab(1); }}
              reviewcolor={detailTab === 1}
            >
              상점
            </DetailTabReview>
          </L.FlexRows>
        </L.Contents>
        <L.Contents>
          <L.FlexCols>
            <L.FlexRows _gap={16} _content='space-between'>
              <L.FlexRows _content='left'>
                <T.Text _size={16} _weight={700} _color='gray900'>‘{search}’</T.Text>
                <T.Text _size={16} _weight={500} _color='gray900'>검색결과</T.Text>
              </L.FlexRows>
              <L.FlexRows _gap={4} _content='flex-end' _width='200px'>
                <T.Text _size={13} _color='gray900'>{sortFormatter(sort)}</T.Text>
                <button
                  type='button'
                  _bg={sort !== 'create' && 'green700'}
                  onClick={() => setFilter01(true)}
                >
                  <Down />
                </button>
              </L.FlexRows>
            </L.FlexRows>
          </L.FlexCols>
        </L.Contents>

        <L.Contents _padding="0px">
          <TabContent detailTab={detailTab} items={items} setItems={setItems} loading={loading} lastRef={ref} />
        </L.Contents>

      </LayoutSearch>
      {
        filter01 &&
        detailTab === 0
        && <SortLayout CloseModal={() => setFilter01(false)} data={sort} setData={setSort} />
      }

      {
        filter01 &&
        detailTab === 1
        && <SearchSortLayout CloseModal={() => setFilter01(false)} data={sort} setData={setSort} />
      }
    </div>
  )
}
function TabContent({ detailTab, items, setItems, loading, lastRef }) {
  return [

    //=====================상품=====================
    <div>
      {/* 없을때 */}
      {
        !loading &&
        items.length === 0 &&
        <L.Contents _padding="80px 20px 600px" >
          <T.Text _weight={300} _size={15} _color="gray600" _align='center'>검색어와 일치하는 상품이 없습니다.</T.Text>
        </L.Contents>
      }
      {/* 있을때 */}
      {
        items.length > 0 &&
        <L.Contents _padding="0 20px">
          <CategoryCard list={items} lastRef={lastRef} />
        </L.Contents>
      }

      {/* =================== 로딩 =================== */}
      {
        loading && <LoadingBar />
      }

    </div>,

    //=====================상점=====================
    <div>
      {/* 없을때 */}
      {
        !loading &&
        items.length === 0 &&
        <L.Contents _padding="80px 20px 600px" >
          <T.Text _weight={300} _size={15} _color="gray600" _align='center'>검색어와 일치하는 상품이 없습니다.</T.Text>
        </L.Contents>
      }
      {/* 있을때 */}
      {
        items.length > 0 &&
        <L.Contents _height='100vh'>
          <L.FlexCols>
            <StoreListCard list={items} setData={setItems} lastRef={lastRef} />
          </L.FlexCols>
        </L.Contents>
      }

      {/* =================== 로딩 =================== */}
      {
        loading && <LoadingBar />
      }

    </div>,
  ][detailTab]
}

export default SearchResultPage