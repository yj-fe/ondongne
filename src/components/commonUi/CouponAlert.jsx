import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Overlay from '../layout/Overlay/Overlay'
import styled from 'styled-components';
import { FlexCols, FlexRows, Scroll } from './Layout';
import { Text } from './Text';
import { SimpleClose, EmptyCheck, InputValue, Calendar, EmptyUnCheck } from './Icon';
import { TextInput } from './Input';
import { Line } from 'pages/login/LocationSetting/LocationSettingStyle';
import { Badge, BorderBox, Fixed, LayerTextButton } from './Button';
import { DayBox, Input, InputBox } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { LoginNavTitle } from 'components/Login/Common/LoginHeader/LoginHeaderStyle'
import { Container } from 'components/layout/Modal/Modal'
import CalendarModel from './CalendarModel';
import dayjs from 'dayjs';

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
        padding: ${props => props._pd || '24px 24px 32px'};
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
    const [couponLimit, setCouponLimit] = useState(false);
    const [calendar, setCalendar] = useState(false);
    const [data, setData] = useState({
        endDate: '',
        benefitName: '',
        couponCount: '',

    });

      // 종료일 설정
  const endDateHandler = (date) => {
    setData({
      ...data,
      endDate: date,
    })
}

  const onChangeBenefit = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    
  }

    if(active) {
        return (
            <Overlay
                onOverlayClick={props.onOverlayClick}
            >
                <Container  _height='636px' _br='16px' _items='center' _content='center'>
                            <FlexCols>
                            {/* <Scroll _height='100%'> */}
                            <FlexRows _padding='0px 20px 0px 20px' _content='space-between'>
                                <FlexRows _content='center' >
                                    <LoginNavTitle _transform='translateX(+20px)'>쿠폰 등록</LoginNavTitle>
                                </FlexRows>
                                <button
                                    onClick={() => {props.onOverlayClick()}}
                                >
                                    <SimpleClose/>
                                </button>
                            </FlexRows>
                        <Line/>

                        
                            <FlexCols _gap={32} _padding='16px 20px 0px'>
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
                                    </FlexRows>
                                </FlexCols>
                                <FlexCols _gap={16}>
                                    <Text as="p">쿠폰 혜택</Text>
                                    <FlexCols>
                                        <TextInput
                                            _boccolor='#FFFFFF'
                                            name='benefitName'
                                            onChange={onChangeBenefit}
                                            placeholder='혜택을 입력해 주세요.'
                                        />
                                        {
                                            !data.benefitName &&
                                            <Text _color='error' _size={13} as="p">쿠폰 혜택을 입력해 주세요.(최대 12자)</Text>
                                        }
                                    </FlexCols>
                                </FlexCols>
                                <FlexCols _gap={16}>
                                    <Text as="p">사용 기간</Text>
                                        <BorderBox
                                            onClick={() => setCalendar(true)}
                                        >
                                            <Input
                                                disabled
                                                name='endDate'
                                                _place='#212121' style={{ background: '#fff' }}
                                                value={data.endDate ? dayjs(data.endDate).format('YYYY-MM-DD') : ''}
                                            />
                                        </BorderBox>
                                </FlexCols>
                                <FlexCols _gap={16}>
                                    <FlexRows _content='space-between'>
                                        <Text as="p">쿠폰 갯수</Text>
                                        <FlexRows _content='right' _width='80px' onClick={()=> setCouponLimit(!couponLimit)}>
                                           { couponLimit ? <EmptyCheck/> : <EmptyUnCheck/>}
                                            <Text _weight={400} _size={14} _color="gray600">제한 없음</Text>
                                        </FlexRows>
                                    </FlexRows>
                                    <FlexCols>
                                        <InputBox _content='right'>
                                            <Input
                                                name='couponCount'
                                                onChange={onChangeBenefit}
                                                placeholder='0'
                                                type='number'
                                                align='right' style={{ background: '#fff' }}
                                            />
                                            <FlexRows _gap='0px' _padding='3px 0px' _width='auto'>
                                                <InputValue/>
                                            </FlexRows>
                                        </InputBox>
                                        {
                                            !data.couponCount &&
                                            <Text _color='error' _size={13} as="p">쿠폰 갯수를 입력해 주세요.</Text>
                                        }
                                    </FlexCols>
                                </FlexCols>

                                
                            </FlexCols>
                            {/* </Scroll> */}
                            </FlexCols>
                                {/* <Text as="p" _size={13} _weight={400} _color={'gray600'} >{props.desc}</Text> */}
                            <S.Button
                                onClick={() => {props.onButtonClick(); onSubmit();}}
                            >쿠폰 등록</S.Button>
                            {
                                calendar &&
                                <CalendarModel
                                    modelClose={() => setCalendar(false)}
                                    onChange={endDateHandler}
                                    dateFormat={'yyyy-MM-dd HH:mm:ss'}
                                />
                            }
                </Container>
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