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

function CollectionPage() {

  const navigate = useNavigate();
  const location = useLocation();

  const { title, list, type } = location.state;

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
          <L.Contents _padding="0" >
            <L.FlexCols _padding={0} _gap="0" >
              <L.FlexColsScroll _padding='24px 20px'>
                {/* =================== 로딩 =================== */}
                {
                  loading && <LoadingBar />
                }

                {/* =================== 없을때 =================== */}
                {
                  !loading &&
                  list.length === 0 &&
                  <L.FlexRows _content='center' _gap='0px' _padding='56px 0px' _height='calc(100vh - 230px)'>
                    <T.Text _weight={300} _size={15} _color="gray600" _align='center'>
                      <p>등록된 상품이 없습니다.</p>
                    </T.Text>
                  </L.FlexRows>
                }

                {/* =================== 있을때 =================== */}
                {
                  !loading &&
                  list.length > 0 &&
                  <L.FlexRowsWrap _gap={20} _padding={0}>
                    {
                      type === 0
                        ? <ListCard list={list} lastRef={null} />
                        : list.map(item => (
                          <ProductCard
                            item={item}
                            lastRef={null}
                          />
                        ))
                    }
                  </L.FlexRowsWrap>
                }
              </L.FlexColsScroll>
            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export const ListCard = ({ list, lastRef }) => {
  const [check, setCheck] = useState(false)
  const handleSwitch = () => {
    setCheck(!check)
  }
  return (
    <L.FlexCols _gap={20}>
      {
        list.map(item => (
          <L.FlexRows
            key={item.storeId}
            _content='space-between'
            ref={null}
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

export default CollectionPage;