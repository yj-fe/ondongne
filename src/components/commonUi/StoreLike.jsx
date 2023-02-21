import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as L from 'components/commonUi/Layout';
import { My, MyC } from 'components/commonUi/Icon';
import { storeLike } from "service/mystore";
import Confirm from "./Confirm";


const StoreLike = ({ id, checked, onChange }) => {
    const navigate = useNavigate();
    const [confirm, setConfirm] = useState(false);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const likeHandler = async () => {
        if (!isAuthenticated) {
            return setConfirm(true);
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
        </>
    )
}

export default StoreLike;