import React, { useState } from 'react';
import { CartC } from 'components/commonUi/Icon';
import { cartInsert } from 'service/cart';
import styled from 'styled-components';
import Alert from 'components/commonUi/Alert';
import { useSelector } from 'react-redux';

const CartContainer = styled.div`
    cursor: pointer;
`;

const ProductCart = ({id}) => {

    const [alert, setAlert] = useState(null);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const onClick = async () => {

        if(!isAuthenticated) {
            return setAlert({
                contents: "로그인 후 이용 가능합니다.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        const cart = {itemId: id, count: 1}
        const response = await cartInsert(cart);
        
        if(response && response.data.message) {
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
                onClick={onClick}
            >
                <CartC />
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