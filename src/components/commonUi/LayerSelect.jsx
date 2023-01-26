import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import * as L from './Layout';
import styled, { keyframes } from 'styled-components';
import Overlay from '../layout/Overlay/Overlay';
import { useState } from 'react';

const S = {
    Wrap: styled.div`
        display: flex;
        align-items: end;
        width: 728px;
        height: 100%;
        justify-content: center;
    `,
    SelectBox: styled.div`
        width: 100%;
        height: auto;
        border-radius: 20px 20px 0 0;
        padding-bottom: ${props => props._pb ? '16px' : '0'};
        background-color: #FFF;
        transform: translateY(100%);

        animation: ${props =>
            props.close
                ? keyframes`
                0% { transform: translateY(0) }
                100% { transform: translateY(100%) }
            `
                : keyframes`
                0% { transform: translateY(100%) }
                100% { transform: translateY(0) }
            `
        } .2s forwards;
    `,
    Top: styled.div`
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 14px;
    `,
    Body: styled.div`
        max-height: 50vh;
        overflow-x: hidden;
        /* overflow-y: scroll; */
    `,
    Option: styled.div`
        position: relative;
        width:100%;
        height: 52px;

        input {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            opacity: 0;
        }
        
        label {
            display: block;
            width: 100%;
            height: 100%;
            padding: 16px 20px;
            font-size: 15px;
            font-weight: ${props => props.checked ? 500 : 400};
            color: ${props => props.theme.color[props.checked ? 'green900' : 'gray900']};

            &::before {

            }
        }
    `,
    close: styled.button`
        display: ${props => props.show ? 'block' : 'none'};
        width: 100%;
        height: 56px;
        line-height: 56px;
        text-align: center;
        border-top: 1px solid ${props => props.theme.color.gray200};
    `,
};

const LayerSelect = props => {

    const wrapRef = useRef(null);
    const [closeMotion, setCloseMotion] = useState(false);

    const onWrapClick = (event) => {
        const target = event.target;
        if (!closeMotion && target === wrapRef.current) {
            setCloseMotion(true);
        }

    }

    useEffect(() => {
        let closeTimeout = undefined;

        if (closeMotion) {
            closeTimeout = setTimeout(function () {
                props.onOverlayClick();
                setCloseMotion(false);
            }, 200);
        }

        return (() => {
            clearTimeout(closeTimeout);
        })
    }, [closeMotion])

    useEffect(() => {
        if (props.active) {
            setCloseMotion(false);
        }
    }, [props.active])

    if (props.active) {
        return (
            <Overlay>
                <S.Wrap
                    {
                    ...props.onOverlayClick &&
                    (
                        {
                            ref: wrapRef,
                            onClick: onWrapClick
                        }
                    )
                    }
                >
                    <S.SelectBox close={closeMotion}>
                        <L.FlexCols _gap={0}>
                            <S.Top>{props.selectName}</S.Top>
                            <S.Body>
                                <div>
                                    {
                                        props.options.map((item, idx) => (
                                            <S.Option
                                                key={idx}
                                                checked={props.selected === item.value}
                                            >
                                                <input
                                                    type="radio"
                                                    id={`${props.name}_${idx}`}
                                                    name={`${props.name}_${idx}`}
                                                    value={item.value}
                                                    checked={props.selected === item.value}
                                                    onChange={props.onChange}
                                                />
                                                <label
                                                    htmlFor={`${props.name}_${idx}`}
                                                >{item.text}</label>
                                            </S.Option>
                                        ))
                                    }
                                </div>
                            </S.Body>
                            <S.close
                                show={props.close}
                                onClick={() => { setCloseMotion(true) }}
                            >닫기</S.close>
                        </L.FlexCols>
                    </S.SelectBox>
                </S.Wrap>
            </Overlay>
        )
    } else {
        return null;
    }

}

LayerSelect.propTypes = {
    options: PropTypes.array,
    selected: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    selectName: PropTypes.string,
    onOverlayClick: PropTypes.func,
    onCloseClick: PropTypes.func,
    active: PropTypes.bool,
    close: PropTypes.bool,
}

export default LayerSelect