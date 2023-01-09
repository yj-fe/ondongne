import React, { useEffect, useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import { Down, Flag, FlagN, FlagNC, OneStar } from 'components/commonUi/Icon';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import { Line } from 'components/Login/Signup/agreement/AgreementStyle';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import Img from 'assets/images/marketdetail.png'
import { SearchSortLayout } from 'components/layout/Layout/MoreLayout';
import CategoryTabs from 'components/commonUi/CategoryTabs';
import { numberFormat, sortFormatter } from 'utils/utils';
import { useInView } from 'react-intersection-observer';
import { getStoreCategoryList } from 'service/store';
import LoadingBar from 'components/commonUi/LoadingBar';
import StarRate from 'components/commonUi/StarRate';

function SearchPage() {
  const navigate = useNavigate();
  const [filter01, setFilter01] = useState(false);

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('전체');
  const categoryHandler = c => setCategory(c);
  const [sort, setSort] = useState('create');
  const local = useSelector(state => state.local);

  const [items, setItems] = useState([])
  const [totalCount, setTotalCount] = useState(0);

  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [fetching, isFetching] = useState(false);

  const getStores = async () => {
    const response = await getStoreCategoryList(category.replace(',', '/'), local, page, sort);
    const { data } = response.data;

    setTotalCount(data.count);
    setItems(data.stores);
    isFetching(false);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setPage(1);
    setItems([]);
    setSort('create');
    isFetching(true);
  }, [category])

  useEffect(() => {
    setPage(1);
    setItems([]);
    isFetching(true);
  }, [sort])

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
    getStores();
  }, [fetching])

  return (
    <div>
      <Layout
        title="검색"
        cart={true}
        bell={true}
        search={true}
        onBackClick={() => navigate('/')}
      >

        <L.Container >
          <L.Contents _height={'100vh'} _padding='0'>
            <L.FlexCols _padding="0" _gap='0'>


              {/* =================== 메뉴 =================== */}
              <CategoryTabs currentData={category} onChange={categoryHandler} />

              <Line />

              {/* =================== 필터 =================== */}
              <L.FlexCols _gap={32} _padding='24px 20px'>
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

                {/* =================== 상품 정보 없을 경우=================== */}
                {
                  !loading &&
                  items.length === 0 &&
                  <ListEmpty />
                }

                {/* =================== 상품 정보 있을 경우=================== */}
                {
                  items.length > 0 &&
                  <ListCard list={items} lastRef={ref} />
                }

                {/* ===================로딩=================== */}
                {
                  loading && <LoadingBar />
                }

              </L.FlexCols>
            </L.FlexCols>

            {/* {!filter01 && 
            <B.MapListButton>
              <Map />
              지도 보기
            </B.MapListButton>} */}
          </L.Contents>
        </L.Container>

        {filter01 && <SearchSortLayout CloseModal={() => setFilter01(false)} data={sort} setData={setSort} />}
      </Layout>
    </div>
  )
}

export const ListEmpty = () => {
  return (
    <L.FlexCols >
      <L.FlexRows _content='center' _padding='80px 20px'>
        <T.Text _weight={300} _size={15} _color="gray600" _align='center'><p>해당 지역에 등록된 업체가 없습니다.</p><p>다른 지역으로 검색해주세요!</p></T.Text>

      </L.FlexRows>
    </L.FlexCols>
  )
}
export const ListCard = ({ list, lastRef }) => {
  const [check, setCheck] = useState(false)
  const handleSwitch=()=>{
    setCheck(!check)
  }
  return (
    <L.FlexCols _gap={20}>
      {
        list.map((item, index) => (
          <L.FlexRows
            key={item.storeId}
            _content='space-between'
            ref={list.length == index + 1 ? lastRef : null}
          >
            <L.FlexRows _content='row'>
              <ImgSizeLayout _bdr={4} src={item.profile != null ? item.profile : Img} _width={98} _height={98}></ImgSizeLayout>
              <L.FlexCols _gap={2}>
                <T.Text _weight={600} _size={18} _color="gray900">{item.name}</T.Text>
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
                  {item.pickupStatus && <B.Badge>픽업가능</B.Badge>}
                  {item.deliveryStatus && <B.Badge>배달가능</B.Badge>}
                </L.FlexRows>
              </L.FlexCols>
            </L.FlexRows>
            <L.FlexRows
              _gap='0px' _content='right' _width='40px'
              onClick={handleSwitch}
            >
            {check ? <FlagNC /> : <FlagN />}
            </L.FlexRows>
          </L.FlexRows>
        ))
      }
    </L.FlexCols>
  )
}


export default SearchPage