import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { ArrowLeft_tail, ArrowLeft } from 'components/commonUi/Icon';
import { useNavigate } from 'react-router-dom';
import Bell from 'assets/icons/utils/Bell.svg';
import Cart from 'assets/icons/utils/Cart.svg';

import { S } from './HeaderStyle';

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