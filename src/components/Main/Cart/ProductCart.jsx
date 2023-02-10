import React, { useState } from 'react';
import { Cart, CartC } from 'components/commonUi/Icon';
import { cartInsert } from 'service/cart';
import styled from 'styled-components';
import Alert from 'components/commonUi/Alert';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Confirm from 'components/commonUi/Confirm';

const CartContainer = styled.button`
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProductCart = ({ id, type, count = 1, disabled = false }) => {

    const navigate = useNavigate();
    const [confirm, setConfirm] = useState(false);
    const [alert, setAlert] = useState(null);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const onClick = async () => {

        if (!isAuthenticated) {
            return setConfirm(true);
        }

        const cart = { itemId: id, count: count }
        const response = await cartInsert(cart);

        if (response && response.data.message) {
            setAlert({
                contents: response.data.message,
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }
    }

    return (
        <>
            <CartContainer
                type='button'
                disabled={disabled}
                onClick={onClick}
            >
                {
                    type === "list"
                        ? <CartC />
                        : <Cart />
                }
            </CartContainer>
            {
                confirm &&
                <Confirm
                    contents="로그인 후 이용가능합니다. 로그인 페이지로 이동하시겠습니까?"
                    confirmText="네"
                    cancelText="아니오"
                    onConfirmClick={() => { navigate('/login') }}
                    onCancelClick={() => {
                        setConfirm(false)
                    }}
                />
            }
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
        </>
    )
}

export default ProductCart;