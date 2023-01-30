import React, { useState, useEffect } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { LastChanceDiv } from './MainBestProductStyle'
import LoadingBar from 'components/commonUi/LoadingBar';
import { useSelector } from 'react-redux';
import { MyStoreBestItem } from 'service/main';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from 'components/Main/productDetails/ProductCard';


function MainBestProduct() {
  const navigate = useNavigate();
  const local = useSelector(state => state.local);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const getItem = async () => {
    const response = await MyStoreBestItem(local);
    const { data } = response.data;
    setList(data.items);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  const router = () => {
    navigate(
      "/collections",
      {
        state:
        {
          type: 1,
          title: "My단골 인기 상품",
          list: list,
        }
      }
    )
  }

  useEffect(() => {
    setLoading(true)
    getItem();
  }, [])

  return (
    <>
      {
        loading && <LoadingBar />
      }
      {
        !loading &&
        list.length > 0 &&
        <L.Inner>
          <L.Contents _padding='20px 0px 20px 0px'>
            <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 0px 20px'>
              <T.Text _size={18} _weight={700} _color='black'>My단골 인기 상품</T.Text>
              <T.Text
                _size={14}
                _weight={500}
                _color='blue'
                onClick={router}
              >
                전체 보기
              </T.Text>
            </L.FlexRows>
            <LastChanceDiv>
              <L.FlexRowsCP>
                <L.GridContainer>
                  {
                    list.map((item, index) => (
                      <React.Fragment
                        key={index}
                      >
                        <ProductCard item={item} lastRef={null} width={150} isCart={false} />
                      </React.Fragment>
                    ))
                  }
                </L.GridContainer>
              </L.FlexRowsCP>
            </LastChanceDiv>
          </L.Contents>
        </L.Inner>
      }
    </>
  )
}

export default MainBestProduct