import React, { useEffect, useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import LayoutSearch from 'components/layout/Layout/LayoutSearch';
import MainCategory from 'components/Main/Main/MainCategory/MainCategory';
import { getBestItemList } from 'service/item';
import { useSelector } from 'react-redux';
import LoadingBar from 'components/commonUi/LoadingBar';
import { ProductCard } from 'components/Main/productDetails/ProductCard';

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
              <L.FlexRowsCP>
                <L.GridContainer >
                  {
                    !loading && items.length > 0 &&
                    items.map((item, index) => (
                      <React.Fragment
                        key={index}
                      >
                        <ProductCard item={item} lastRef={null} width={150} isCart={false} />
                      </React.Fragment>
                    ))
                  }
                </L.GridContainer>
              </L.FlexRowsCP>

            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </LayoutSearch>
    </div>
  )
}

export default SearchDetailPage