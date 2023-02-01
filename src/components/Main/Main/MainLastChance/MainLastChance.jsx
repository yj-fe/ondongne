import React from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { LastChanceDiv } from './MainLastChanceStyle'
import { getLastGroupItemList } from 'service/main';
import { useSelector } from 'react-redux';
import LoadingBar from 'components/commonUi/LoadingBar';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from 'components/Main/productDetails/ProductCard';
import { useQuery } from 'react-query';

function MainLastChance() {
  const navigate = useNavigate();
  const local = useSelector(state => state.local);

  const getItem = async () => {
    const response = await getLastGroupItemList(local);
    return response.data.data.items;
  }

  const { data, isLoading } = useQuery(['main-group-list'], getItem, {
    staleTime: 30000,
    refetchOnWindowFocus: false,
  });

  const router = () => {
    navigate(
      "/collections",
      {
        state:
        {
          type: 1,
          title: "공동구매 마지막 찬스",
          list: data
        }
      }
    )
  }

  return (
    <>
      <L.FlexRows _cursor='default' _content='space-between' _items='center' _padding='0px 20px 0px 20px'>
        <T.Text _size={18} _weight={700} _color='black'>공동구매 마지막 찬스</T.Text>
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
          {
            isLoading && <LoadingBar />
          }
          {
            !isLoading &&
            data.length > 0 &&
            <L.GridContainer _marginr='0px' _count={data.length}>
              {
                data.map((item, index) => (
                  <React.Fragment
                    key={index}
                  >
                    <ProductCard item={item} lastRef={null} width={150} isCart={false} />
                  </React.Fragment>
                ))
              }
            </L.GridContainer>
          }
        </L.FlexRowsCP>
      </LastChanceDiv>
    </>
  )
}

export default MainLastChance