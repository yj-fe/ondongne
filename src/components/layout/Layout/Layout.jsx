import React from 'react';
import PropTypes from 'prop-types'
import Header from '../Header/Header';
import { S } from './LayoutStyle';
import { useSelector } from 'react-redux';
import FloatingUi from 'components/commonUi/Floating/FloatingUi';

const Layout = (props) => {
  const auth = useSelector(state => state.auth);

  return (
    <S.Wrapper>
      <Header {...props} />
      {/* <Header {...props} itemtitle={itemtitle}/> */}
      <S.Main as="main">
        {/* parent component로 사용할 때: Outlet */}
        {/* { <Outlet /> } */}
        {props.children}
        {
          (props.floating && auth.bizId) && <FloatingUi />
        }
      </S.Main>
    </S.Wrapper>
  )
};

Layout.defaultProps = {
  floating: true,
};

Layout.props = {
  title: PropTypes.string,
  search: PropTypes.bool,
  bell: PropTypes.bool,
  cart: PropTypes.bool,
  back: PropTypes.bool,
  completed: PropTypes.bool,
  floating: PropTypes.bool,
  backArrow: PropTypes.bool,
  titleCenter: PropTypes.bool,
  onBackClick: PropTypes.func,
  backPath: PropTypes.string,
  bottom: PropTypes.string,
}

export default Layout;