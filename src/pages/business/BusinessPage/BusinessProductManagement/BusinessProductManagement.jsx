import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Down } from 'components/commonUi/Icon';
import { ImgSizeH, ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import { bizItemList } from 'service/bizItem';
import { numberFormat, totalPrice } from 'utils/utils';
import StarRate from 'components/commonUi/StarRate';
import ProductTimer from 'components/commonUi/ProductTimer';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { ModalBody, ModalDiv1, ModalDiv2, ModalOutside, ModalTitle } from 'components/Main/More/ModalPageStyle';
import { Scroll } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import { ProductCard } from 'components/Main/productDetails/ProductCard';


function BusinessProductManagement() {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const [items, setItems] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [consfirm, setConfirm] = useState(null)
  const [modal, setModal] = useState(false);
  const [ref, inView] = useInView();

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('order');
  const [loading, setLoading] = useState(false)

  // 정렬
  const [data, setData] = useState({
    type: "최신 순",
  })
  // 정렬- 선택한 type으로 바꾸기
  const dataChecked = type => {
    setData({ ...data, type: type })
  }
  // 정렬모달
  const PropsModal = () => {
    setModal(!modal);
  }
  const ShowMoreModal = () => {
    setModal(!modal);
  }
  // ====================================
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
    if (items.length === totalCount) return;

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
          <L.Contents>
            <L.FlexCols _padding={0} _gap={0}>

              <L.FlexRows _gap={16} _content='space-between'>
                <div>
                  <T.Text _size={16} _weight={600} _color='gray900'>전체 {totalCount}</T.Text>
                </div>
                <L.FlexRows onClick={ShowMoreModal} _gap={4} _content='flex-end' _width='100px'>
                  <T.Text _size={13} _weight={400} _color='gray900'>{data.type}</T.Text>
                  <button
                    type='button'
                  >
                    <Down />
                  </button>
                </L.FlexRows>
              </L.FlexRows>

              <L.Contents _padding='0px' _gap={20}>
                <L.FlexRowsWrapBPM _padding={0}>
                  {
                    items && items.length === 0 &&
                    <L.Contents _padding='50px 0px' _height='calc(100vh - 68px)'>
                      <L.NoneDataContainer>
                        <T.Text _size={15} _weight={400} _color='gray600'>준비된 상품이 없습니다.</T.Text>
                        <T.Text _size={15} _weight={400} _color='gray600'>상품을 등록해보세요!</T.Text>
                      </L.NoneDataContainer>
                    </L.Contents>
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
                          <ProductCard item={item} />
                        </Link>

                        : <Link
                          key={item.itemId}
                          to={`/business/product/details/${item.itemId}`}
                        >
                          <ProductCard item={item} />
                        </Link>
                    ))
                  }
                </L.FlexRowsWrapBPM>
              </L.Contents>

            </L.FlexCols>
          </L.Contents>
        </L.Container>
        {modal && <ModalFilter type={data.type} handler={dataChecked} closeSelector={() => setModal(false)} PropsModal={PropsModal} />}
      </Layout>
    </div>
  )
}


// 정렬 모달
export function ModalFilter({ type, handler, closeSelector }) {

  const [data, setData] = useState([
    {
      id: 0,
      name: "최신 순",
      checked: false
    },
    {
      id: 1,
      name: "주문 많은 순",
      checked: false
    },
    {
      id: 2,
      name: "리뷰 별점 순",
      checked: false
    },
  ])
  const clickHandler = name => {
    setData(
      data.map(item =>
        item.name === name
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false }
      )
    )
    handler(name);
    closeSelector();
  }

  useEffect(() => {
    setData(
      data.map(item =>
        item.name === type
          ? { ...item, checked: !item.checked }
          : item
      )
    )
  }, []);
  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <ModalDiv1>정렬</ModalDiv1>
          <ModalDiv2>

            {data.map(item => (
              <ModalTitle
                key={item.id}
                onClick={() => clickHandler(item.name)}
              >
                <T.Text
                  _weight={item.checked ? 600 : 400}
                  _size={15}
                  _color={item.checked ? "green700" : "gray900"}
                >
                  {item.name}
                </T.Text>
              </ModalTitle>
            ))
            }
          </ModalDiv2>
        </ModalBody>
      </ModalOutside>
    </div>
  )
}


export default BusinessProductManagement