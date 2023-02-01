import React, { useState, useEffect } from 'react'
import bestcoupon from 'assets/data/bestcoupon'
import newmarket from 'assets/data/newmarket'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { getLastGroupItemList } from 'service/main';
import {ContentCouponDiv,ContentImg,ContentMarket,ContentProduct} from './MainBestCouponStyle'
import { CursorDiv } from 'components/Common/LayoutPageStyle';
import LoadingBar from 'components/commonUi/LoadingBar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from 'components/commonUi/Button';

function MainBestCoupon() {
  let [item] = useState(newmarket)

  const navigate = useNavigate();
  const local = useSelector(state => state.local);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);


  const getItem = async () => {
    const response = await getLastGroupItemList(local);
    if (response && response.data) {
      const { data } = response.data;
      setList(data.items);
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }
  }

  const router = () => {
    navigate(
      "/",
      {
        state:
        {
          // type: ,
          title: "우리동네 인기 쿠폰",
          list: list
        }
      }
    )
  }

  useEffect(() => {
    setLoading(true)
    getItem();
  }, [])

  return (
    <CursorDiv>
        <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 0px 20px'>
          <T.Text _size={18} _weight={700} _color='black'>우리동네 인기 쿠폰</T.Text>
          <T.Text 
            _size={14} 
            _weight={500} 
            _color='blue'
            onClick={router}
          >
            전체 보기
          </T.Text>
        </L.FlexRows>

        <L.FlexRowsCP>
          {
            loading && <LoadingBar />
          }
          {
            !loading &&
            list.length > 0 &&
            <L.GridContainer _marginr='0px'>
              {
                item.map((a, i)=>{
                  return(
                    <BestCouponCard item={item[i]} i={i}/>
                    )
                  })
                }
            </L.GridContainer>
          }
        </L.FlexRowsCP>



    </CursorDiv>
  )
}

function BestCouponCard(props){
  return(
  <div>
    <ContentProduct>
      <ContentImg src={props.item.img}/>
      <ContentMarket>{props.item.market}</ContentMarket>
      <ContentCouponDiv>
        <Badge _bg='green50' _color='green600'>쿠폰</Badge>
        <Badge>배달가능</Badge>
        <Badge>픽업가능</Badge>
      </ContentCouponDiv>
    </ContentProduct>
  </div>
  )
}

export default MainBestCoupon