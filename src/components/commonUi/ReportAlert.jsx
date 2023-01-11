import React from 'react'
import PropTypes from 'prop-types'
import Overlay from '../layout/Overlay/Overlay'
import styled from 'styled-components';
import { FlexCols } from './Layout';
import { Text } from './Text';
import { Close, Search, SimpleClose } from './Icon';
import { TextInput } from './Input';
import { FlexRows } from './BuisinessLayout';

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
        width: 100%;
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #EEEEEE;
        color: #9E9E9E;
        &:focus{
            color: #212121;
        }
    `
};

const ReportAlert = ({
    active = true,
    ...props
}) => {

    if (active) {
        return (
            <Overlay
                onOverlayClick={props.onOverlayClick}
            >
                <S.AlertBox>
                    <S.Body>
                        <FlexRows _content='space-between'>
                            <FlexRows _content='center'>
                                <Text as="span" _size={18} _weight={600} _align="center">{props.title}</Text>
                            </FlexRows>
                            <div
                            onClick={() => {props.onCloseClick()}}
                            >
                                <SimpleClose/>
                                {/* <Close/> */}
                            </div>
                        </FlexRows>
                    </S.Body>
                    <S.Body>
                                
                            <FlexCols _gap={4}>
                                <Text as="span"  _size={20} _weight={500} _align="left">{props.titledesc1}</Text>
                                <Text as="span" _color='gray600' _size={14} _weight={400} _align="left">{props.titledesc2}</Text>
                            </FlexCols>

                            <Text as="p" _align="center">{props.contents}</Text>
                            <Text as="p" _size={13} _weight={400} _color={'gray600'} >{props.desc}</Text>
                    </S.Body>
                    <S.Button
                        onClick={() => { props.onButtonClick() }}
                    >{props.buttonText}</S.Button>
                </S.AlertBox>
            </Overlay>
        )
    }

}

ReportAlert.propTypes = {
    title: PropTypes.string,
    titledesc2: PropTypes.string,
    contents: PropTypes.string,
    desc: PropTypes.string,
    placedesc: PropTypes.string,
    buttonText: PropTypes.string,
    onOverlayClick: PropTypes.func,
    onButtonClick: PropTypes.func,
    onCloseClick: PropTypes.func,
    active: PropTypes.bool,
    isSearch: PropTypes.bool,
}

export default ReportAlert