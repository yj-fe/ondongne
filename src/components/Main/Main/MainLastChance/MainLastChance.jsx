import React, { useState, useEffect, useRef } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { LastChanceDiv } from './MainLastChanceStyle'
import { getLastGroupItemList } from 'service/main';
import { useSelector } from 'react-redux';
import { ProductCard } from 'components/Main/MarketDetail/MarketDetailProduct';
import LoadingBar from 'components/commonUi/LoadingBar';

function MainLastChance() {
  const local = useSelector(state => state.local);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const getItem = async () => {
    const response = await getLastGroupItemList(local);
    const { data } = response.data;
    setList(data.items);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  useEffect(() => {
    setLoading(true)
    getItem();
  }, [])

  return (
    <div>
      <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 0px 0px'>
        <T.Text _size={18} _weight={700} _color='black'>공동구매 마지막 찬스</T.Text>
        <T.Text _size={14} _weight={500} _color='blue'>전체 보기</T.Text>
      </L.FlexRows>
      <LastChanceDiv>
        <L.FlexRowsCP>
          {
            loading && <LoadingBar />
          }
          {
            !loading &&
            list.length > 0 &&
            <L.GridContainer>
              {
                list.map((item, index) => (
                  <React.Fragment
                    key={index}
                  >
                    <ProductCard item={item} lastRef={null} width={150} />
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

export default MainLastChance