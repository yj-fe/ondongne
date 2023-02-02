import React, { useEffect, useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import { DetailTabInfo, DetailTabReview } from 'pages/main/DetailsPage/DetailsPageStyle';
import { Down } from 'components/commonUi/Icon';
import { FilterLayout, MyStoreSortLayout, SortLayout } from 'components/layout/Layout/MoreLayout';
import { sortFormatter } from 'utils/utils';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingBar from 'components/commonUi/LoadingBar';
import { useInView } from 'react-intersection-observer';
import { CategoryCard } from 'pages/main/Product/CategoryPage';
import { StoreListCard } from 'components/commonUi/StoreListCard';
import { MyStoreBestItem } from 'service/main';
import { getMyStores } from 'service/mystore';
import Layout from 'components/layout/Layout/Layout';
import { Scroll } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import { CursorDiv } from 'components/Common/LayoutPageStyle';

function MyMarket() {

  const navigate = useNavigate();
  const [detailTab, setDetailTab] = useState(0);
  const [filter01, setFilter01] = useState(false);
  const [filter02, setFilter02] = useState(false);
  const local = useSelector(state => state.local);

  const [type, setType] = useState('all');
  const [sort, setSort] = useState('create');
  const [page, setPage] = useState(1);
  
  const [normal, setNormal] = useState('');
  const [group, setGroup] = useState('');

  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [fetching, isFetching] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const getItems = async () => {
    const response = detailTab === 0
      ? await MyStoreBestItem(local)
      : await getMyStores(page, sort);

    if (response && response.data) {
      const { data } = response.data;

      setTotalCount(data.count);
      setItems(detailTab === 0 ? data.items : data.stores);
      isFetching(false);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  useEffect(() => {
    setPage(1);
    setItems([]);
    setType('all');
    setSort('create');
    isFetching(true);
  }, [detailTab])

  useEffect(() => {
    setPage(1);
    setItems([]);
    isFetching(true);
  }, [type, sort])


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
    <CursorDiv>
      <Layout
        title="My 단골"
        cart={true}
        bell={true}
        onBackClick={() => navigate(-1)}
      >
        <L.Contents _padding='0px'>
          <L.FlexRows _gap='0px'>
            <DetailTabInfo
              width="50%"
              onClick={() => {
                setType('all');
                setSort('create');
                setDetailTab(0);
              }}
              infocolor={detailTab === 0}
            >
              상품
            </DetailTabInfo>
            <DetailTabReview
              width="50%"
              onClick={() => {
                setType('all');
                setSort('create');
                setDetailTab(1);
              }}
              reviewcolor={detailTab === 1}
            >
              상점
            </DetailTabReview>
          </L.FlexRows>
        </L.Contents>
        <L.Contents >
          <L.FlexCols>
            {
              detailTab === 0
                ? 
                // <L.FlexRows _gap='12' _items='center' _width='auto'>
                <L.FlexRows _content='space-between' _gap='16' _items='center' _width='auto'>
                <L.FlexRows _content='flex-start' _gap='12' _items='center' _width='calc(100% - 120px)'>
                  <B.FilterButton
                    type='button'
                    _pd='8px 12px'
                    _bg={normal && 'green700'}
                    onClick={() => 
                      setNormal(!normal)
                    }
                    // _bg={type !== 'all' && 'green700'}
                    // onClick={() => setFilter01(true)}
                  >
                    <T.Text _weight={400} _size={13} _color={normal ? 'white' : 'gray900'} _align='center'>일반상품</T.Text>
                  </B.FilterButton>
                  <B.FilterButton
                    type='button'
                    _pd='8px 12px'
                    _bg={group && 'green700'}
                    onClick={() => 
                      setGroup(!group)
                    }
                    // _bg={sort != 'create' && 'green700'}
                    // onClick={() => setFilter02(true)}
                  >
                    <T.Text _weight={400} _size={13} _color={group ? 'white' : 'gray900'} _align='center'>공동구매 상품</T.Text>
                  </B.FilterButton>
                  </L.FlexRows>

                  <L.FlexRows 
                    _gap={4} _content='flex-end' _width='120px'
                    onClick={() => setFilter02(true)}
                  >
                    <T.Text _size={13} _weight={400} _color='gray900'>{sortFormatter(sort)}</T.Text>
                    <button
                      type='button'
                      _bg={sort !== 'create' && 'green700'}
                    >
                      <L.FlexRows>
                        <Down />
                      </L.FlexRows>
                    </button>
                  </L.FlexRows>

                </L.FlexRows>
                : 
                <L.FlexRows _gap={16} _content='space-between'>
                  <div>
                    <T.Text _size={16} _weight={600} _color='gray900'>전체 {totalCount}</T.Text>
                  </div>
                  <L.FlexRows _gap={4} _content='flex-end' _width='100px'>
                    <T.Text _size={13} _weight={400} _color='gray900'>{sortFormatter(sort)}</T.Text>
                    <button
                      type='button'
                      _bg={sort !== 'create' && 'green700'}
                      onClick={() => setFilter01(true)}
                    >
                      <Down />
                    </button>
                  </L.FlexRows>
                </L.FlexRows>
            }
          </L.FlexCols>
        </L.Contents>

        <L.Contents _padding="0px" _height='calc(100vh - 195px)'>
          <Scroll _height='calc(100vh - 200px)'>
            <TabContent detailTab={detailTab} items={items} setData={setItems} loading={loading} lastRef={ref} />
          </Scroll>
        </L.Contents>

      </Layout>
      {
        filter01 &&
        detailTab === 0
        && <FilterLayout PropsModal={() => setFilter01(false)} data={type} setData={setType} />
      }
      {
        filter01 &&
        detailTab === 1
        && <MyStoreSortLayout CloseModal={() => setFilter01(false)} data={sort} setData={setSort} />
      }
      {
        filter02 &&
        detailTab === 0 &&
        <SortLayout CloseModal={() => setFilter02(false)} data={sort} setData={setSort} />
      }
    </CursorDiv>
  )
}
function TabContent({ detailTab, items, setData, loading, lastRef }) {
  return [

    //=====================상품=====================
    <>
      {/* 없을때 */}
      {
        !loading &&
        items.length === 0 &&
        <L.Contents _padding="80px 20px 600px" >
          <T.Text _weight={300} _size={15} _color="gray600" _align='center'>아직 단골가게가 없습니다.</T.Text>
          <T.Text _weight={300} _size={15} _color="gray600" _align='center'>주변 단골가게를 추가해보세요!</T.Text>
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

    </>,

    //=====================상점=====================
    <>
      {/* 없을때 */}
      {
        !loading &&
        items.length === 0 &&
        <L.Contents _padding="80px 20px 600px" >
          <T.Text _weight={300} _size={15} _color="gray600" _align='center'>아직 단골가게가 없습니다.</T.Text>
          <T.Text _weight={300} _size={15} _color="gray600" _align='center'>주변 단골가게를 추가해보세요!</T.Text>
        </L.Contents>
      }
      {/* 있을때 */}
      {
        items.length > 0 &&
        <L.Contents _height='100vh'>
          <L.FlexCols>
            <StoreListCard list={items} setData={setData} lastRef={lastRef} />
          </L.FlexCols>
        </L.Contents>
      }

      {/* =================== 로딩 =================== */}
      {
        loading && <LoadingBar />
      }

    </>,
  ][detailTab]
}

export default MyMarket;