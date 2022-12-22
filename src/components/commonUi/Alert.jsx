import React from 'react'
import PropTypes from 'prop-types'
import Overlay from '../layout/Overlay/Overlay'
import styled from 'styled-components';
import { FlexCols } from './Layout';
import { Text } from './Text';
import { Search } from './Icon';
import { TextInput } from './Input';

const S = {
    AlertBox: styled.div`
        width: 342px;
        height: auto;
        max-width: calc(100vw - 40px);
        max-height: calc(100vh - 40px);
        border-radius: 12px;
        overflow: hidden;
    `,
    Body: styled.div`
        padding: 24px 24px 32px;
        text-align: center;
        background-color: #FFF;
    `,
    Button: styled.button`
        width: 100%;
        text-align: center;
        height: 48px;
        line-height: 48px;
        color: #FFF;
        background-color: ${props => props.theme.color.green600};
    `,
    SearchBox: styled.div`
        width: 310px;
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid #EEEEEE;
        gap: 12px;
        color: #9E9E9E;
        &:focus{
            color: #212121;
        }
    `
};

const Alert = ({
    active=true,
    ...props
}) => {

    if(active) {
        return (
            <Overlay
                onOverlayClick={props.onOverlayClick}
            >
                <S.AlertBox>
                    <S.Body>
                        <FlexCols _gap={12}>
                            <Text as="span" _size={18} _weight={600} _align="center">{props.title}</Text>
                                <S.SearchBox>
                                    <TextInput _borcolor={'#fff'} _boccolor={'#fff'}/>
                                        <Text as="p" _size={15} _weight={400} _color={'gray500'} >{props.placedesc}</Text>
                                        <Search/>
                                </S.SearchBox>
                            <Text as="p" _align="center">{props.contents}</Text>
                            <Text as="p" _size={13} _weight={400} _color={'gray600'} >{props.desc}</Text>
                        </FlexCols>
                    </S.Body>
                    <S.Button
                        onClick={() => {props.onButtonClick()}}
                    >{props.buttonText}</S.Button>
                </S.AlertBox>
            </Overlay>
        )
    }

}

Alert.propTypes = {
    title: PropTypes.string,
    contents: PropTypes.string,
    desc: PropTypes.string,
    placedesc: PropTypes.string,
    buttonText: PropTypes.string,
    onOverlayClick: PropTypes.func,
    onButtonClick: PropTypes.func,
    active: PropTypes.bool
}

export default Alert