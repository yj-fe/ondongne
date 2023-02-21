import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import Layout from 'components/layout/Layout/Layout';
import { useNavigate, useLocation } from 'react-router-dom'
import { Down } from 'components/commonUi/Icon';
import { Line } from '../DetailsPage/DetailsPageStyle';
import { FilterLayout, SortLayout } from 'components/layout/Layout/MoreLayout';
import { sortFormatter } from 'utils/utils';
import { useInView } from 'react-intersection-observer';
import { getItemCategoryList } from 'service/item';
import LoadingBar from 'components/commonUi/LoadingBar';
import CategoryTabs from 'components/commonUi/CategoryTabs';
import { Scroll } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import { ProductCardGrid } from 'components/Main/productDetails/ProductCardGrid';
import LoadingDots from 'components/commonUi/LoadingDots';

function CategoryPage(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [filter01, setFilter01] = useState(false);
  const [filter02, setFilter02] = useState(false);

  const [fetching, isFetching] = useState(false);

  const [page, setPage] = useState(1)
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('create');
  const local = useSelector(state => state.local);
  const [category, setCategory] = useState(location.state.category);
  const categoryHandler = e => setCategory(e);

  const [items, setItems] = useState([])
  const [totalCount, setTotalCount] = useState(0);

  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false)

  const getItems = async () => {
    const response = await getItemCategoryList(category.replace(',', '/'), local, page, type, sort);
    const { data } = response.data;

    setTotalCount(data.count);
    setItems(data.items);
    isFetching(false);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setPage(1);
    setItems([]);
    setType('all');
    setSort('create');
    isFetching(true);
  }, [category])

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
    <div>
      <Layout
        title={category}
        serch={true}
        bell={true}
        cart={true}
        onBackClick={() => navigate('/')}
      >
        <L.Container >
          <L.Contents _cursor='default' _padding="0" _height='calc(100vh - 70px)'>
            {/* =================== 메뉴 =================== */}
            <CategoryTabs currentData={category} onChange={categoryHandler} />

            <Line />

            <L.FlexColsScroll _padding='24px 20px'>
              {/* =================== 필터 =================== */}
              <L.FlexRows _gap='12' _items='center' _content='space-between' _width='auto'>
                <L.FlexRows _width={'max-content'}>
                  <B.FilterButton
                    type='button'
                    _bg={type === 'normal' && 'green700'}
                    onClick={() => setType(type === 'normal' ? 'all' : 'normal')}
                  >
                    <T.Text _weight={400} _size={13} _color={type === 'normal' ? 'white' : 'gray900'} _align='center'>일반 상품</T.Text>
                  </B.FilterButton>
                  <B.FilterButton
                    type='button'
                    _bg={type === 'group' && 'green700'}
                    onClick={() => setType(type === 'group' ? 'all' : 'group')}
                  >
                    <T.Text _weight={400} _size={13} _color={type === 'group' ? 'white' : 'gray900'} _align='center'>공동구매 상품</T.Text>
                  </B.FilterButton>
                </L.FlexRows>


                <L.FlexRows
                  _width={'max-content'}
                  onClick={() => setFilter02(true)}
                >
                  <T.Text _weight={400} _size={13} _color={'gray900'} _align='center'>{sortFormatter(sort)}</T.Text>
                  <Down color={'#424242'} />
                </L.FlexRows>
              </L.FlexRows>
              {/* =================== 없을때 =================== */}
              {
                !loading &&
                items.length === 0 &&
                <CategoryEmpty />
              }

              {/* =================== 있을때 =================== */}
              {
                items.length > 0 &&
                <CategoryCard list={items} lastRef={ref} />
              }

              {/* =================== 로딩 =================== */}
              <LoadingDots isVisible={loading} />
            </L.FlexColsScroll>
          </L.Contents>
        </L.Container>
        {filter01 && <FilterLayout PropsModal={() => setFilter01(false)} data={type} setData={setType} />}
        {filter02 && <SortLayout CloseModal={() => setFilter02(false)} data={sort} setData={setSort} />}
      </Layout>
    </div>
  )
}



function CategoryEmpty() {
  return (
    <L.FlexRows _content='center' _gap='0px' _padding='56px 0px' _height='calc(100vh - 218px)'>
      <T.Text _weight={300} _size={15} _color="gray600" _align='center'>
        <p>해당 카테고리에</p>
        <p>등록된 상품이 없습니다.</p>
      </T.Text>
    </L.FlexRows>
  )
}


export function CategoryCard({ list, lastRef }) {

  return (
    <Scroll _height='calc(100vh - 218px)'>
      <L.Grid>
        {list.length > 0 && list.map((item, index) => (
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

export default CategoryPage;