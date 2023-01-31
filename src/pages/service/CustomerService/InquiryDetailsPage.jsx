import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import * as B from 'components/commonUi/Button';
import { Line } from 'components/Login/Signup/agreement/AgreementStyle';
import { MarketCommentsStyle } from 'pages/main/DetailsPage/DetailsPageStyle';
import { detailsList } from 'service/border';
import dayjs from 'dayjs';
import { CursorDiv } from 'components/Common/LayoutPageStyle';

function InquiryDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    answer: null,
    answerDate: null,
    borderId: "",
    category: "",
    contents: "",
    createDate: "",
    memberId: "",
    title: "",
    type: ""
  });

  console.log(id);

  const loadData = async () => {
    const response = await detailsList({ borderId: id })

    if (response && response.data) {
      const { data } = response.data;
      setItem(data);
    }
  }

  console.log(item);

  useEffect(() => {
    if (id) {
      loadData();
    }
  }, [id])

  return (
    <CursorDiv>
      <Layout
        title="1:1 문의"
        cart={false}
        bell={false}
        floating={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px 0px 8px" >
          <L.Contents _padding="0" _height='calc(100vh - 68px)'>
            <L.FlexCols>

              <L.FlexRows _gap='0px' _padding='20px' _items='center' _content='space-between' _height='86px'>
                <L.FlexCols _width='width: calc(100% - 100px);' _gap={4}>
                  <T.Text _weight={600} _size={16} _color="gray800">{item.title}</T.Text>
                  <T.Text _size={13} _color="gray500">{dayjs(item.createDate).format('YYYY/MM/DD HH:mm')}</T.Text>
                </L.FlexCols>
                <B.Badge
                  _items='center'
                  _size='14px'
                  _width='70px'
                  _height='36px'
                  _bg={item.answer && 'green50'}
                  _color={item.answer ? 'green700' : 'gray600'}
                >{item.answer ? '답변' : '대기중'}</B.Badge>
              </L.FlexRows>
              <Line />

              <L.FlexCols _gap={28} _padding='20px' >
                <T.Text _size={15} >{item.contents}</T.Text>
                {
                  item.answer &&
                  <MarketCommentsStyle>
                    <L.FlexCols _padding='4px'>
                      <L.FlexRows _content='space-between'>
                        <T.Text _size={15} _weight={600} _color="gray900">답변 내용</T.Text>
                        <T.Text _size={13} _color="gray500">{dayjs(item.answerDate).format('YYYY/MM/DD HH:mm')}</T.Text>
                      </L.FlexRows>
                      <T.Text _size={15} >{item.answer}</T.Text>
                    </L.FlexCols>
                  </MarketCommentsStyle>
                }
              </L.FlexCols>
            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </CursorDiv>
  )
}

export default InquiryDetailsPage