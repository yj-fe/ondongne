import React from 'react'
import { LastChanceDiv } from './MainBestCollectionStyle'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import LoadingBar from 'components/commonUi/LoadingBar';
import { useSelector } from 'react-redux';
import { bestItemList } from 'service/main';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from 'components/Main/productDetails/ProductCard';
import { useQuery } from 'react-query';


function MainBestCollection() {
  const navigate = useNavigate();
  const local = useSelector(state => state.local);
  const limit = 10;
  const page = 1;

  const loadData = async () => {
    const response = await bestItemList(local, limit, page);
    return response.data.data.items;
  }

  const { data, isLoading } = useQuery(['main-best-item-list'], loadData, {
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
          title: "우리동네 인기 추천",
          list: data
        }
      }
    )
  }

  return (
    <div>
      <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 0px 20px'>
        <T.Text _size={18} _weight={700} _color='black'>우리동네 인기 추천</T.Text>
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
            data?.length > 0 &&
            <L.GridContainer
              _count={data.length}
            >
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



    </div>
  )
}

export default MainBestCollection