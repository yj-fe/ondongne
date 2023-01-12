import React, { useState } from "react";
import { useSelector } from 'react-redux';
import * as L from 'components/commonUi/Layout';
import { My, MyC } from 'components/commonUi/Icon';
import { AlertText } from "components/Login/Member/MemberPhone/MemberPhoneStyle";
import { storeLike } from "service/mystore";


const StoreLike = ({ id, checked, onChange }) => {
    const [alert, setAlert] = useState(null);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const likeHandler = async () => {
        if (!isAuthenticated) {
            return setAlert({
                contents: "로그인 후 이용 가능합니다.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        const response = await storeLike(id);

        if (response && response.data.data) {
            onChange(id);
        }
    }

    return (
        <>
            <L.FlexRows
                _gap='0px' _content='right' _width='40px'
                onClick={likeHandler}
            >
                {
                    checked
                        ? <MyC />
                        : <My />
                }
            </L.FlexRows>
            {alert && (
                <AlertText
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

export default StoreLike;