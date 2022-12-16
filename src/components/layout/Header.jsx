import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as Common from '../commonUi/Layout';
import { ArrowLeft_tail, ArrowLeft } from '../commonUi/Icon';
import { useNavigate } from 'react-router-dom';
import Bell from '../../assets/icons/utils/Bell.svg';
import Cart from '../../assets/icons/utils/Cart.svg';

const S = {
    Header: styled.header`
        z-index: 30;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%; 
        height: 60px;
        background: #FFF;
        border-bottom: 1px solid ${props => props.theme.color.gray200};

        @media(${props => props.theme.media.tablet}) {
            border-bottom: 0;
        }
    `,
    Inner: styled(Common.Inner)`
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
    `,
    Block: styled.div`
        display: flex;
        gap: 20px;
        align-item: center;
    `,
    UtilBtn: styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        padding: 0;
    `,
    Title: styled.h1`
        font-size: 18px;
        font-weight: 600;
    `
};

const Header = ({
    title = "title",
    bell = false,
    cart = false,
    back = true,
    backArrow = true,
    ...props
}) => {

    const navigate = useNavigate();

    /* ====================
        click action or path or prev url
    ==================== */
    const handleBackClick = (e) => {
        e.preventDefault();
        if(props.onBackClick) {
            props.onBackClick();
        } else {
            navigate(props.backPath || -1);
        }
    };

    return (
        <S.Header>
            <S.Inner>
                <S.Block>
                    {
                        back &&
                        <S.UtilBtn
                            onClick={handleBackClick}  
                        >
                        {
                            backArrow
                            ? <ArrowLeft_tail />
                            : <ArrowLeft />
                        }
                        </S.UtilBtn>

                    }
                    {
                        title &&
                        <S.Title
                        >{title}</S.Title>
                    }
                </S.Block>
                <S.Block>
                    {
                        bell &&
                        <S.UtilBtn>
                            <img src={Bell} alt="알림" />
                        </S.UtilBtn>
                    }
                    {
                        cart &&
                        <S.UtilBtn as={Link} to="/cart">
                            <img src={Cart} alt="장바구니" />
                        </S.UtilBtn>
                    }
                </S.Block>
            </S.Inner>
        </S.Header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    bell: PropTypes.bool,
    cart: PropTypes.bool,
    back: PropTypes.bool,
    backArrow: PropTypes.bool,
    titleCenter: PropTypes.bool,
    onBackClick: PropTypes.func,
    backPath: PropTypes.string
}

export default Header