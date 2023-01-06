import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { ArrowLeft_tail, ArrowLeft } from 'components/commonUi/Icon';
import { useNavigate } from 'react-router-dom';
import Bell from 'assets/icons/utils/Bell.svg';
import Cart from 'assets/icons/utils/Cart.svg';
import Search from 'assets/icons/utils/Search.svg';

import { S } from './HeaderStyle';
import { SearchInput } from 'components/commonUi/Input';
import { AbsoluteDiv, AbsoluteDivS, RelativDiv, RelativDivS } from './../Img/ImgSizeLayout';

const HeaderSearch = ({
    cart = true,
    back = true,
    search = true,
    backArrow = true,
    ...props
}) => {

    const navigate = useNavigate();
    const [value, setValue] = useState('');

    /* ====================
        click action or path or prev url
    ==================== */
    const handleBackClick = (e) => {
        e.preventDefault();
        if (props.onBackClick) {
            props.onBackClick();
        } else {
            navigate(props.backPath || -1);
        }
    };

    const activeEnter = (e) => {
        if (e.key === "Enter") {
            getSearch();
        }
    }

    const getSearch = () => {
        navigate('/search/result', { state: { search: value } })
    }

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
                </S.Block>
                <RelativDivS>
                    <SearchInput
                        placeholder='검색어를 입력해 주세요.'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        onKeyDown={activeEnter}
                    />
                    <AbsoluteDivS
                        onClick={getSearch}
                    >
                        <img src={Search} alt="" />
                    </AbsoluteDivS>
                </RelativDivS>
                <S.Block>
                    {
                        cart &&
                        <S.SearchUtilBtn as={Link} to="/cart">
                            <img src={Cart} alt="장바구니" />
                        </S.SearchUtilBtn>
                    }
                </S.Block>
            </S.Inner>
        </S.Header>
    )
}


export default HeaderSearch