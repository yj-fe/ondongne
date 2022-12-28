import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Down, Star } from 'components/commonUi/Icon';
import maindata from 'assets/data/maindata'
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';


function BusinessProductManagement() {
  let [item] = useState(maindata)
  const navigate = useNavigate();
  const [modal, setConfirm] = useState(null)

  return (
    <div>
      <Layout
          title="상품관리"
          cart={false}
          bell={false}
          onBackClick={() => navigate('/')}
      >

      <L.Container >
        <L.Contents  _height={'100vh'}>
          <L.FlexCols _padding={0} _gap={0}>

            <L.FlexRows _gap={16} _content='space-between'>
              <div>
                <T.Text _size={16} _weight={600} _color='gray900'>전체 150</T.Text>
              </div>
              <L.FlexRows _gap={4} _content='flex-end' _width='100px'>
                <T.Text _size={13} _weight={400} _color='gray900'>최신 순</T.Text>
                <button
                    type='button'
                  >
                  <Down/>
                </button>
              </L.FlexRows>
            </L.FlexRows>

            <L.Contents _padding='0px' _gap={20}>
              <Link to='/business/product/details/:id'>
              <L.FlexRows _gap={20} _padding={0} _height='364px'>
                <Card item={item[0]}/>
                <Card item={item[1]}/>
                <Card item={item[2]}/>
              </L.FlexRows>
              <L.FlexRows _gap={20} _padding={0} _height='364px'>
                <Card item={item[3]}/>
                <Card item={item[4]}/>
                <Card item={item[5]}/>
              </L.FlexRows>
              </Link>
            </L.Contents>


          </L.FlexCols>
        </L.Contents>
      </L.Container>


      </Layout>

    </div>
  )
}

export function Card(props){
  return(
  <div>

    <L.FlexCols _gap={12} _padding={0} _width='216px'>

        <ImgSizeLayout _width={216} _height={216} _bdr={6} src={props.item.img}/>

      <L.FlexCols _gap={4} _padding={0} >
        <T.Text _size={14} _weight={400} _color='gray900'>{props.item.title}</T.Text>
        <L.FlexRows _gap={4} _padding={0} _items='center' >
          <T.Text  _size={15} _weight={600} _color='red'>{props.item.discount}</T.Text>
          <T.Text  _size={13} _weight={400} _color='gray500'>{props.item.price}</T.Text>
        </L.FlexRows>
        <L.FlexRows>
          <T.Text  _size={16} _weight={600} _color='gray900'>{props.item.finalprice}</T.Text>
        </L.FlexRows>
        <L.FlexRows>
          <Star/>
          <T.Text  _size={11} _weight={400} _color='gray800'>(4.5)</T.Text>
        </L.FlexRows>

      </L.FlexCols>
    </L.FlexCols>
  </div>
  )
}


export default BusinessProductManagement