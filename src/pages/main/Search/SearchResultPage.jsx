import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import LayoutSearch from 'components/layout/Layout/LayoutSearch';
import { DetailTabInfo } from 'pages/main/DetailsPage/DetailsPageStyle';
import { DetailTabReview } from './../DetailsPage/DetailsPageStyle';
import { Down } from 'components/commonUi/Icon';
import { CategoryCard } from './../Product/CategoryPage';
import { SortLayout } from 'components/layout/Layout/MoreLayout';
import { ListCard } from './SearchPage';

function SearchResultPage() {
  const [detailTab, setDetailTab] = useState(0)
  const [sort, setSort] = useState(false);
  const ShowSortModal = () => {
    setSort(!sort);
  }
  const CloseModal = () => {
    setSort(!sort);
  }
  return (
    <div>
      <LayoutSearch>
          <L.Contents _padding='0px'>
              <L.FlexRows _gap='0px'>
                <DetailTabInfo
                  onClick={() => { setDetailTab(0); }}
                  infocolor={detailTab === 0}
                  >
                  상품
                </DetailTabInfo>
                <DetailTabReview
                  onClick={() => { setDetailTab(1); }}
                  reviewcolor={detailTab === 1}
                  >
                  상점
                </DetailTabReview>
              </L.FlexRows>
            </L.Contents>
            <L.Contents>
              <L.FlexCols>
                <L.FlexRows _gap={16} _content='space-between'>
                  <L.FlexRows _content='left'>
                    <T.Text _size={16} _weight={700} _color='gray900'>‘과일’</T.Text>
                    <T.Text _size={16} _weight={500} _color='gray900'>검색결과</T.Text>
                  </L.FlexRows>
                  <L.FlexRows _gap={4} _content='flex-end'>
                    <T.Text _size={13} _weight={400} _color='gray900'>주문 많은 순</T.Text>
                    <button
                      type='button'
                      onClick={ShowSortModal}
                    >
                      <Down/>
                    </button>
                </L.FlexRows>
              </L.FlexRows>
            </L.FlexCols>
          </L.Contents>
          <L.Contents _padding="0px">
            <TabContent detailTab={detailTab} />
          </L.Contents>
      </LayoutSearch>
      {sort && <SortLayout CloseModal={CloseModal} />}
    </div>
  )
}
function TabContent(props) {
  const [items, setItems] = useState([])
  return [

    //=====================상품=====================
    <div>
{/* 없을때 */}
            {/* <L.Contents _height='calc(100vh - 190px)' _padding="80px 20px 600px" >
                <T.Text _weight={300} _size={15} _color="gray600" _align='center'>검색어와 일치하는 상품이 없습니다.</T.Text>
            </L.Contents> */}
{/* 있을때 */}
    <L.Contents _height='calc(100vh - 190px)' _padding="0px">
    {
      items.length > 0 &&
      <CategoryCard list={items}  />
    }
    </L.Contents>

    </div>,

    //=====================상점=====================
    <div>
{/* 없을때 */}
            {/* <L.Contents _height='calc(100vh - 190px)' _padding="80px 20px 600px" >
              <T.Text _weight={300} _size={15} _color="gray600" _align='center'>검색어와 일치하는 상점이 없습니다.</T.Text>
            </L.Contents> */}
{/* 있을때 */}
          <L.Contents _height='calc(100vh - 190px)'>
            <L.FlexCols>
              <ListCard/>
            </L.FlexCols>
          </L.Contents>
    </div>,
  ][props.detailTab]
}

export default SearchResultPage