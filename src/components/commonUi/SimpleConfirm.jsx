import React from 'react'
import PropTypes from 'prop-types'
import Overlay from '../layout/Overlay/Overlay'
import styled from 'styled-components';
import { FlexCols } from './Layout';
import { Text } from './Text';

const S = {
    ConfirmBox: styled.div`
        width: 342px;
        height: auto;
        max-width: calc(100vw - 40px);
        max-height: calc(100vh - 40px);
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 24px 24px;
        text-align: center;
        border-radius: 12px;
        background-color: #FFF;
        overflow: hidden;
    `,
    Button: styled.button`
        width: 100%;
        text-align: center;
        height: 48px;
        line-height: 48px;
        border-radius: 4px;
        color: ${props => 
                (props.confirm && !props.warn)
                ? '#FFF' 
                : props.theme.color[props.warn? 'error' : 'gray900']
        };
        background-color: ${props => 
                (props.confirm && !props.warn)
                ? props.theme.color.green600 
                : '#FFF'
        };
        border: ${props => 
                (props.confirm && !props.warn)
                ? 'none' 
                : `1px solid ${props.theme.color[props.warn? 'error' : 'gray200']}`
        };
    `
};

const SimpleConfirm = ({
    active=true,
    ...props
}) => {

    if(active) {
        return (
            <Overlay
                onOverlayClick={props.onOverlayClick}
            >
                <S.ConfirmBox>
                    <Text as="p" _align="center">{props.contents}</Text>
                    <FlexCols _gap={12}>
                        <S.Button
                            confirm={true}
                            warn={props.warn || false}
                            onClick={() => {props.onConfirmClick()}}
                        >{props.confirmText || '확인'}</S.Button>
                    </FlexCols>
                </S.ConfirmBox>
            </Overlay>
        )
    }

}

SimpleConfirm.propTypes = {
    contents: PropTypes.string,
    confirmText: PropTypes.string,
    onConfirmClick: PropTypes.func,
    active: PropTypes.bool,
    warn: PropTypes.bool,
}

export default SimpleConfirm