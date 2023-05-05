import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { Down } from "components/commonUi/Icon";
import { bizItemList } from "service/bizItem";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import {
  ModalBody,
  ModalDiv1,
  ModalDiv2,
  ModalOutside,
  ModalTitle,
} from "components/Main/More/ModalPageStyle";
import { ProductCardGrid } from "components/Main/productDetails/ProductCardGrid";
import { CursorDiv } from "components/Common/LayoutPageStyle";
import { sortFormatter } from "utils/utils";

function BusinessProductManagement() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [ref, inView] = useInView();

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("create");
  const [loading, setLoading] = useState(false);

  // 정렬모달
  const PropsModal = () => {
    setModal(!modal);
  };
  const ShowMoreModal = () => {
    setModal(!modal);
  };
  // ====================================
  const getItem = async () => {
    setLoading(true);
    const response = await bizItemList(page, sort);
    const { data } = response.data;

    if (data) {
      setItems(data.items);
      setTotalCount(data.count);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (auth.isAuthenticated) getItem();
  }, [page, sort, auth]);

  useEffect(() => {
    if (items.length === totalCount) return;

    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <CursorDiv>
      <Layout
        title="상품 관리"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container>
          <L.Contents _padding="24px 20px" _height={"calc(100vh - 70px)"}>
            <L.Scroll _height={"calc(100vh - 120px)"}>
              <L.FlexCols _padding={0} _gap={0}>
                <L.FlexRows _gap={16} _content="space-between">
                  <div>
                    <T.Text _size={16} _weight={600} _color="gray900">
                      전체 {totalCount}
                    </T.Text>
                  </div>
                  <L.FlexRows
                    onClick={ShowMoreModal}
                    _gap={4}
                    _content="flex-end"
                    _width="150px"
                  >
                    <T.Text
                      _align="right"
                      _size={13}
                      _weight={400}
                      _color="gray900"
                    >
                      {sortFormatter(sort)}
                    </T.Text>
                    <button type="button">
                      <Down />
                    </button>
                  </L.FlexRows>
                </L.FlexRows>

                <L.Contents _padding="0px" _gap={20}>
                  {/* <L.FlexRowsWrapBPM _padding={0}> */}
                  {items && items.length === 0 && (
                    <L.Contents _padding="50px 0px">
                      <L.NoneDataContainer>
                        <T.Text
                          _align="center"
                          _size={15}
                          _weight={400}
                          _color="gray600"
                        >
                          준비된 상품이 없습니다.
                        </T.Text>
                        <T.Text
                          _align="center"
                          _size={15}
                          _weight={400}
                          _color="gray600"
                        >
                          상품을 등록해보세요!
                        </T.Text>
                      </L.NoneDataContainer>
                    </L.Contents>
                  )}
                  <L.Grid>
                    {items &&
                      items.length > 0 &&
                      items.map((item, index) =>
                        items.length === index + 1 ? (
                          <Link
                            ref={ref}
                            key={item.itemId}
                            to={`/details/${item.itemId}`}
                          >
                            <ProductCardGrid isCart={false} item={item} />
                          </Link>
                        ) : (
                          <Link
                            key={item.itemId}
                            to={`/details/${item.itemId}`}
                          >
                            <ProductCardGrid isCart={false} item={item} />
                          </Link>
                        )
                      )}
                  </L.Grid>
                  {/* </L.FlexRowsWrapBPM> */}
                </L.Contents>
              </L.FlexCols>
            </L.Scroll>
          </L.Contents>
        </L.Container>
        {modal && (
          <ModalFilter
            type={sort}
            handler={(value) => setSort(value)}
            closeSelector={() => setModal(false)}
            PropsModal={PropsModal}
          />
        )}
      </Layout>
    </CursorDiv>
  );
}

// 정렬 모달
export function ModalFilter({ type, handler, closeSelector, PropsModal }) {
  const [data, setData] = useState([
    {
      id: 0,
      name: "최신 순",
      value: "create",
      checked: false,
    },
    {
      id: 1,
      name: "주문 많은 순",
      value: "order",
      checked: false,
    },
    {
      id: 2,
      name: "리뷰 별점 순",
      value: "review",
      checked: false,
    },
  ]);
  const clickHandler = (value) => {
    setData(
      data.map((item) =>
        item.value === value
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false }
      )
    );
    handler(value);
    closeSelector();
  };

  useEffect(() => {
    setData(
      data.map((item) =>
        item.value === type ? { ...item, checked: !item.checked } : item
      )
    );
  }, []);
  return (
    <div>
      <ModalOutside onClick={PropsModal}>
        <ModalBody>
          <ModalDiv1>정렬</ModalDiv1>
          <ModalDiv2>
            {data.map((item) => (
              <ModalTitle
                key={item.id}
                onClick={() => clickHandler(item.value)}
              >
                <T.Text
                  _weight={item.checked ? 600 : 400}
                  _size={15}
                  _color={item.checked ? "green700" : "gray900"}
                >
                  {item.name}
                </T.Text>
              </ModalTitle>
            ))}
          </ModalDiv2>
        </ModalBody>
      </ModalOutside>
    </div>
  );
}

export default BusinessProductManagement;
