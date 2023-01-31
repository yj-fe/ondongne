import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import Layout from 'components/layout/Layout/Layout';
import LoadingBar from 'components/commonUi/LoadingBar';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import { Img } from '../MainPage/MainPageStyle';
import StarRate from 'components/commonUi/StarRate';
import { FlagN, FlagNC } from 'components/commonUi/Icon';
import { numberFormat } from 'utils/utils';
import { ProductCard } from 'components/Main/productDetails/ProductCard';
import { Scroll } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import { ProductCardGrid } from './../../../components/Main/productDetails/ProductCardGrid';
import { StoreListCard } from 'components/commonUi/StoreListCard';

function CollectionPage() {

  const navigate = useNavigate();
  const location = useLocation();

  const { title, list, type } = location.state;

  const [newList, setNewList] = useState(list);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      <Layout
        title={title}
        bell={true}
        cart={true}
        onBackClick={() => navigate('/')}
      >
        <L.Container >
          <L.Contents _cursor='default' _padding="0" >
            <L.FlexCols _padding={0} _gap="0" >
              <L.FlexColsScroll _padding='24px 20px'>
                <Scroll _height="calc(100vh - 60px)">
                  {/* =================== 로딩 =================== */}
                  {
                    loading && <LoadingBar />
                  }

                  {/* =================== 없을때 =================== */}
                  {
                    !loading &&
                    newList.length === 0 &&
                    <L.FlexRows _content='center' _gap='0px' _padding='56px 0px' _height='calc(100vh - 230px)'>
                      <T.Text _weight={300} _size={15} _color="gray600" _align='center'>
                        <p>등록된 상품이 없습니다.</p>
                      </T.Text>
                    </L.FlexRows>
                  }

                  {/* =================== 있을때 =================== */}
                  {
                    !loading &&
                      newList.length > 0 &&
                      type === 0
                      ?
                      <StoreListCard list={newList} lastRef={null} setData={setNewList} />
                      :
                      <L.Grid _padding={0}>
                        {newList.map(item => (
                          <ProductCardGrid
                            item={item}
                            lastRef={null}
                          />
                        ))}
                      </L.Grid>
                  }
                </Scroll>
              </L.FlexColsScroll>
            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}


export default CollectionPage;