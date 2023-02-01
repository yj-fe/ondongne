import React, { useState, useEffect } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { ContentDiv, ContentImg, ContentImgBadge, ContentImgDiv, ContentInfo, ContentMarket, ContentMarketImg, ContentProduct, ContentStyle, ContentTextStyle } from './MainNewMarketStyle'
import { useSelector } from 'react-redux';
import { newStoreList } from 'service/main';
import LoadingBar from 'components/commonUi/LoadingBar';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

function MainNewMarket() {
  const navigate = useNavigate();
  const local = useSelector(state => state.local);

  const loadData = async () => {
    const response = await newStoreList(local);
    return response.data.data.stores;
  }

  const { data, isLoading } = useQuery(['main-new-store-list'], loadData, {
    staleTime: 30000,
    refetchOnWindowFocus: false,
  });

  const router = () => {
    navigate(
      "/collections",
      {
        state:
        {
          type: 0,
          title: "우리동네 신규 입점",
          list: data,
        }
      }
    )
  }

  return (
    <div>
      <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 0px 20px'>
        <T.Text _size={18} _weight={700} _color='black'>우리동네 신규 입점</T.Text>
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
          isLoading && <LoadingBar />
        }
        {
          !isLoading &&
          data.length > 0 &&
          <L.GridContainer _count={data.length}>
            {
              data.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/market/detail/${item.storeId}`)}
                >
                  <NewMarketCard item={item} />
                </div>
              ))
            }
          </L.GridContainer>
        }
      </L.FlexRowsCP>
    </div>
  )
}

function NewMarketCard({ item }) {
  return (
    <ContentProduct>
      <ContentImgDiv>
        <ContentImgBadge>신규 입점</ContentImgBadge>
        <ContentImg src={item.banner} />
      </ContentImgDiv>
      <ContentStyle>
        <ContentDiv>
          <ContentMarketImg src={item.profile} />
          <ContentTextStyle>
            <ContentMarket>{item.name}</ContentMarket>
            <ContentInfo>{item.description}</ContentInfo>
          </ContentTextStyle>
        </ContentDiv>
      </ContentStyle>
    </ContentProduct>
  )
}

export default MainNewMarket