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
import { ShepherdBox } from 'components/commonUi/Box';

function MainLastChance() {
  const navigate = useNavigate();
  const local = useSelector(state => state.local);
  const limit = 10;
  const page = 1;

  const getItem = async () => {
    const response = await getLastGroupItemList(local, limit, page);
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
      <L.FlexRows _cursor='default' _content='space-between' _items='center' _padding='9px 20px 0px 10px'>
        <ShepherdBox
          _width='180px' _height='44px'
          className="shepherd-third"
        >
          <T.Text
            _size={18} _weight={700} _color='black' _line='44px'
          >
            공동구매 마지막 찬스
          </T.Text>
        </ShepherdBox>
        <T.Text
          _size={14}
          _weight={500}
          _color='blue'
          onClick={router}
        >
          전체 보기
        </T.Text>
      </L.FlexRows>


      <LastChanceDiv _pd='0px 0px 0px 10px'>
        <L.FlexRowsCP>
          {
            isLoading && <LoadingBar />
          }
          {
            !isLoading &&
            data?.length > 0 &&
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