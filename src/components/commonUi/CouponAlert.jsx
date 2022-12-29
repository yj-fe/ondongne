import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Overlay from '../layout/Overlay/Overlay'
import styled from 'styled-components';
import { FlexCols, FlexRows } from './Layout';
import { Text } from './Text';
import { SimpleClose, EmptyCheck } from './Icon';
import { TextInput } from './Input';
import { Line } from 'pages/login/LocationSetting/LocationSettingStyle';
import { Badge, BorderBox, LayerTextButton } from './Button';
import { DayBox } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';

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

const CouponAlert = ({
    
    active=true,
    ...props
}) => {
    const [mobox, setMoBox] = useState(true);
    const [tubox, setTuBox] = useState(false);

    if(active) {
        return (
            <Overlay
                onOverlayClick={props.onOverlayClick}
            >
                <S.AlertBox>
                    <S.Body>
                        <FlexRows _content='space-between'>
                            <FlexRows _content='center'>
                                <Text as="span" _size={18} _weight={600} _align="center">쿠폰 등록</Text>
                            </FlexRows>
                            <div
                            onClick={() => {props.onOverlayClick()}}
                            >
                                <SimpleClose/>
                            </div>
                            </FlexRows>
                    </S.Body>
                    <Line/>
                    <S.Body>
                        <FlexCols _gap={32}>
                            <FlexCols _gap={16}>
                                <Text as="p">쿠폰 종류</Text>
                                <FlexRows>
                                <DayBox
                                    onClick={()=>{setMoBox(!mobox)}}
                                    color={mobox}
                                >
                                일반 쿠폰</DayBox>
                                <DayBox
                                    onClick={()=>{setTuBox(!tubox)}}
                                    color={tubox}
                                >
                                단골 쿠폰</DayBox>
                                    {/* <Badge _bdr='8px' _height='auto' _padding='12px 24px' _bg='green50' _color='green700'  _size='15px'>일반 쿠폰</Badge> */}
                                    {/* <Badge _bdr='8px' _height='auto' _padding='12px 24px' _bg='gray50' _color='gray600'  _size='15px'>단골 쿠폰</Badge> */}
                                </FlexRows>
                            </FlexCols>
                            <FlexCols _gap={16}>
                                <Text as="p">쿠폰 혜택</Text>
                                <TextInput
                                    _boccolor='#FFFFFF'
                                    placeholder='혜택을 입력해 주세요.'
                                />
                            </FlexCols>
                            <FlexCols _gap={16}>
                                <Text as="p">사용 기간</Text>
                                    <BorderBox>
                                        <Text _weight={400} _size={16} _color="gray900">2022-12-15</Text>
                                    </BorderBox>
                            </FlexCols>
                            <FlexCols _gap={16}>
                                <FlexRows _content='space-between'>
                                    <Text as="p">쿠폰 갯수</Text>
                                    <FlexRows _content='right' _width='80px'>
                                        <EmptyCheck/>
                                        <Text _weight={400} _size={14} _color="gray600">제한 없음</Text>
                                    </FlexRows>
                                </FlexRows>
                                    <LayerTextButton _content='right'>
                                        <Text _weight={400} _size={16} _color="gray400">0</Text>
                                        <Text _weight={400} _size={16} _color="gray900">개</Text>
                                    </LayerTextButton>
                            </FlexCols>

                            
                        </FlexCols>
                    </S.Body>
                            <Text as="p" _size={13} _weight={400} _color={'gray600'} >{props.desc}</Text>
                    <S.Button
                        onClick={() => {props.onButtonClick()}}
                    >쿠폰 등록</S.Button>
                </S.AlertBox>
            </Overlay>
        )
    }

}

CouponAlert.propTypes = {
    title: PropTypes.string,
    contents: PropTypes.string,
    desc: PropTypes.string,
    placedesc: PropTypes.string,
    buttonText: PropTypes.string,
    onOverlayClick: PropTypes.func,
    onButtonClick: PropTypes.func,
    active: PropTypes.bool
}

export default CouponAlert