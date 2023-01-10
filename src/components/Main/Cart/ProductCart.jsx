import React, { useState } from 'react';
import { Cart, CartC } from 'components/commonUi/Icon';
import { cartInsert } from 'service/cart';
import styled from 'styled-components';
import Alert from 'components/commonUi/Alert';
import { useSelector } from 'react-redux';

const CartContainer = styled.button`
    cursor: pointer;
`;

const ProductCart = ({ id, type, count = 1, disabled = false }) => {

    const [alert, setAlert] = useState(null);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const onClick = async () => {

        if (!isAuthenticated) {
            return setAlert({
                contents: "로그인 후 이용 가능합니다.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
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