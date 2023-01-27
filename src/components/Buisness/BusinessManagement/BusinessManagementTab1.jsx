import React, { useEffect, useState } from 'react'
import Camera from 'assets/common/Camera.png'
import { ReactComponent as Right } from "assets/main/right.svg";
import CheckBox from 'components/commonUi/CheckBox';

import ProfileAvatar from 'components/commonUi/ProfileAvatar'
import { Text } from 'components/commonUi/Text';
import { TimeBox, TimeDiv, RowTimeDiv, DayDiv, DayBox, RowTitle, RowInput, InputText, TabDiv, TabProfileDiv, ProfileBtnDiv, Img, AvatarDiv, TabContent, RowDiv, ContentDiv, ContentTitle, TitleInfo, TitleInfoDiv, RightStyle, TabBtn, InputBox, RowInfoDiv, Input, BankToggleDiv, BankListDiv, Textarea, TimerModel, Size, ImgBanner } from './BusinessManagementTabStyle'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBizStore, storeImageBannerUpdate, storeImageProfileUpdate, storeUpdate } from 'service/bizStore';
import { Down } from 'components/commonUi/Icon';
import { deliveryToString, numberFormat, numberFormatter } from 'utils/utils';
import AddressModel from 'components/AddressModel';
import Alert from 'components/commonUi/Alert';
import CalendarModel from 'components/commonUi/CalendarModel';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { AbsoluteDiv } from 'components/layout/Img/ImgSizeLayout';
const IMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/";


// 상점정보
function BusinessManagementTab1({ tabHandler }) {

  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const [alert, setAlert] = useState(null);
  const [store, setStore] = useState({});
  const [select, setSelect] = useState(false);
  const [active, setActive] = useState(false);
  // 카테고리 데이터
  const [categories, setCategories] = useState([
    { "id": 0, "name": "야채/과일", "checked": false },
    { "id": 1, "name": "정육", "checked": false },
    { "id": 2, "name": "수산/해산", "checked": false },
    { "id": 3, "name": "쌀/잡곡", "checked": false },
    { "id": 4, "name": "식품", "checked": false },
    { "id": 5, "name": "생활용품", "checked": false },
    { "id": 6, "name": "디저트", "checked": false },
    { "id": 7, "name": "식음료", "checked": false },
    { "id": 8, "name": "반려동물", "checked": false },
    { "id": 9, "name": "기타", "checked": false }
  ]);
  const [categoryErroMessage, setCategoryErrorMessage] = useState('');

  // 딜리버리 데이터
  const [deliveries, setDeliverise] = useState([]);
  const [deliveryModel, isDeliveryModel] = useState(false);

  // 달력
  const [calendar, setCalendar] = useState(false);

  const goBiz = () => {
    navigate('/business')
  }
  
  // input 체인지 핸들러
  const onChange = (e) => {
    const { name, value } = e.target;
    setStore({
      ...store,
      [name]: value
    });
  }

  // 카테고리 핸들러
  const categoryHandler = (id, checked) => {

    setCategoryErrorMessage('')

    if (!checked) {
      const count = categories.filter(category => category.checked === true)
      if (count.length == 5) {
        return setCategoryErrorMessage('최대 5개까지 추가 가능합니다.');
      }
    }

    setCategories(
      categories.map(category =>
        category.id === id ? { ...category, checked: !category.checked } : category
      )
    )
  }


  // 배너 이미지 변경
  const bannerUpdate = async (e) => {
    const file = e.target.files[0];
    const response = await storeImageBannerUpdate(file, store.storeId);
    const { data } = response.data;

    if (data) {
      setStore({
        ...store,
        banner: IMGURL + data.name
      })
    }
  }

  // 프로필 이미지 변경
  const profileUpdate = async (e) => {
    const file = e.target.files[0];
    const response = await storeImageProfileUpdate(file, store.storeId);
    const { data } = response.data;

    if (data) {
      setStore({
        ...store,
        profile: IMGURL + data.name
      })
    }
  }

  // 오픈 날짜 변경
  const openDateHandler = (date) => {
    setStore({
      ...store,
      openDate: date,
    })
  }

  // 휴무일 변경
  const dayOffHandler = (dayWeek) => {
    setStore({
      ...store,
      sales: store.sales.map(item =>
        item.dayWeek === dayWeek ? { ...item, dayOffStatus: !item.dayOffStatus } : item
      )
    })
  }

  // 운영시간 변경
  const salesOpenTimeHandler = (dayWeek, time) => {
    setStore({
      ...store,
      sales: store.sales.map(item =>
        item.dayWeek === dayWeek ? { ...item, openTime: time } : item
      )
    })
  }

  // 운영시간 변경
  const salesCloseTimeHandler = (dayWeek, time) => {
    setStore({
      ...store,
      sales: store.sales.map(item =>
        item.dayWeek === dayWeek ? { ...item, closeTime: time } : item
      )
    })
  }

  // 수령 방법 데이터 핸들러
  const recetiveTypeHandler = (value) => {
    return setStore({
      ...store,
      recetiveType: store.recetiveType.includes(value)
        ? store.recetiveType.filter(r => r !== value)
        : [...store.recetiveType, value]
    })
  }

  // 상점 수정
  const onSubmit = async () => {
    const response = await storeUpdate({ ...store, recetiveType: store.recetiveType.join(",") });

    if (response && response.data.data) {
      return setAlert({
        contents: "상점 정보 등록이 완료되었습니다.",
        buttonText: "확인",
        onButtonClick: () => {
          // tabHandler(1);
          setAlert(false);
          goBiz();
        },
        onOverlayClick: () => setAlert(false),
      })
    } else {
      return setAlert({
        contents: "상점 정보 등록을 실패하였습니다.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    }
  }

  // 상점 조회
  const getStore = async () => {
    const response = await getBizStore();
    const { data } = response.data;
    if (!data) {
      return navigate("/");
    }

    //카테고리
    setCategories(
      categories.map(category =>
        data.categories.includes(category.name) ? { ...category, checked: true } : category
      )
    )

    setStore({
      ...data,
      recetiveType: data.recetiveType ? data.recetiveType.split(',') : [],
    });
  }

  // 카테고리 데이터 핸들러
  useEffect(() => {

    if (!store) {
      return false;
    }
    setStore({
      ...store,
      categories: categories.filter(category => category.checked === true).map(category => category.name),
    })
  }, [categories]);

  // 활동 지역 데이터 핸들러
  useEffect(() => {

    if (!store) {
      return false;
    }
    setStore({
      ...store,
      deliveries: deliveries,
    })
  }, [deliveries]);

  useEffect(() => {
    if (store.banner && store.categories.length > 0 && store.deliveries.length > 0
      && store.name && store.openDate && store.profile && store.recetiveType.length > 0 && store.description.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [store])

  // 상점 조회
  useEffect(() => {
    if (auth.isAuthenticated) getStore()
  }, [auth]);

  

  return (
    <div>
      <TabDiv>
        {/* 배너 */}
        <TabProfileDiv>
          <AbsoluteDiv __width='93' _height='30' _right='16px' _top='120px'>
            <ProfileBtnDiv for="bannerFile">
              <Img src={Camera} />
              이미지 변경
            </ProfileBtnDiv>
          </AbsoluteDiv>
          <input type="file" id="bannerFile" onChange={bannerUpdate} />
          <ImgBanner src={store.banner && store.banner} />
        </TabProfileDiv>

        {/* 프로필 */}
        <AvatarDiv>
          <ProfileAvatar
            profile={store.profile && store.profile}
            onChange={profileUpdate}
          />
        </AvatarDiv>

        <TabContent>

          {/* ============== 상점명 ============== */}
          <ContentDiv>
            <ContentTitle>상점명</ContentTitle>
            <TitleInfoDiv>
              <Input
                _width='90%'
                name='name'
                value={store.name}
                onChange={onChange}
                maxLength={'50'}
              />
            </TitleInfoDiv>
          </ContentDiv>

          {/* ============== 카테고리 ==============  */}
          <ContentDiv style={{ position: "relative" }}>
            <ContentTitle>카테고리</ContentTitle>
            <TitleInfoDiv onClick={() => setSelect(!select)}>
              <TitleInfo>
                {store.categories?.length > 0 ? store.categories.join(', ') : '카테고리 선택'}
              </TitleInfo>
              <RightStyle

              ><Down /></RightStyle>
            </TitleInfoDiv>
            {categoryErroMessage && <Text as="p" _size={13} _weight={400} style={{ color: '#D32F2F' }} >{categoryErroMessage}</Text>}
            {
              select &&
              <CateToggle
                close={() => setSelect(false)}
                categories={categories}
                categoryHandler={categoryHandler}
              />
            }
          </ContentDiv>


          {/* ============== 활동지역 ============== */}
          <ContentDiv>
            <ContentTitle>활동지역</ContentTitle>
            <TitleInfoDiv onClick={() => isDeliveryModel(true)}>
              <TitleInfo>
                {store.deliveries?.length > 0 ? deliveryToString(store.deliveries.join(',')) : '활동 지역 선택'}
              </TitleInfo>
              <RightStyle><Right /></RightStyle>
            </TitleInfoDiv>
          </ContentDiv>

          {/* ============== 배달/픽업 여부 ============== */}
          <L.FlexCols _gap={16}>
            <T.Text _weight={600} _size={16} _color="gray900">배달/픽업 여부</T.Text>
            <L.FlexRows _gap={16}>
              <CheckBox
                label="배달 가능"
                name="delivery"
                checked={store.recetiveType && store.recetiveType.includes('배달')}
                onChange={() => recetiveTypeHandler('배달')}
              />
              <CheckBox
                label="픽업 가능"
                name="pickup"
                checked={store.recetiveType && store.recetiveType.includes('픽업')}
                onChange={() => recetiveTypeHandler('픽업')}
              />
              <CheckBox
                label="택배 가능"
                name="parcel"
                checked={store.recetiveType && store.recetiveType.includes('택배')}
                onChange={() => recetiveTypeHandler('택배')}
              />
            </L.FlexRows>
          </L.FlexCols>


          {/* ============== 상점 소개 ============== */}
          <ContentDiv>
            <ContentTitle>상점 소개</ContentTitle>
            <InputBox
              height={200}
            >
              <Textarea
                name='description'
                value={store.description}
                onChange={onChange}
                placeholder='어떤 상점인지 소개해 주세요!'
                maxLength={255}
              />
            </InputBox>
          </ContentDiv>


          {/* ============== 배달 금액/최소 주문 ============== */}
          <RowDiv>
            <ContentDiv>
              <ContentTitle>배달 금액(원)</ContentTitle>
              <TitleInfoDiv>
                <InputText>￦ </InputText>
                <Input
                  name='deliveryPrice'
                  value={store.deliveryPrice ? numberFormat(store.deliveryPrice) : ''}
                  onChange={e => {
                    setStore({
                      ...store,
                      deliveryPrice: numberFormatter(e.target.value)
                    })
                  }}
                  placeholder='0'
                  maxLength={12} />
              </TitleInfoDiv>
            </ContentDiv>
            <ContentDiv>
              <ContentTitle>최소 주문 금액(원)</ContentTitle>
              <TitleInfoDiv>
                <InputText>￦ </InputText>
                <Input
                  name='orderMinPrice'
                  value={store.orderMinPrice ? numberFormat(store.orderMinPrice) : ''}
                  onChange={e => {
                    setStore({
                      ...store,
                      orderMinPrice: numberFormatter(e.target.value)
                    })
                  }}
                  placeholder='0'
                  maxLength={12} />
              </TitleInfoDiv>
            </ContentDiv>
          </RowDiv>


          {/* ============== 비즈 오픈 날짜 ============== */}
          <ContentDiv>
            <ContentTitle>비즈 오픈 날짜</ContentTitle>
            <RowDiv
              onClick={() => setCalendar(true)}
            >
              <TitleInfoDiv>
                <RowInput
                  placeholder='YYYY'
                  type='text'
                  value={store.openDate?.split('-')[0]}
                />
                <InputText>년</InputText>
              </TitleInfoDiv>
              <TitleInfoDiv>
                <RowInput
                  placeholder='MM'
                  type='text'
                  value={store.openDate?.split('-')[1]}
                />
                <InputText>월</InputText>
              </TitleInfoDiv>
              <TitleInfoDiv>
                <RowInput
                  placeholder='DD'
                  type='text'
                  value={store.openDate?.split('-')[2]}
                />
                <InputText>일</InputText>
              </TitleInfoDiv>
            </RowDiv>
          </ContentDiv>


          {/* ============== 휴무일 ============== */}
          <RowDiv>
            <ContentDiv>
              <L.FlexRows _content='space-between' >
                <ContentTitle>휴무일</ContentTitle>
                <CheckBox
                  label="공휴일 휴무"
                  name="holidayStatus"
                  checked={store.holidayStatus}
                  onChange={e => {
                    setStore({
                      ...store,
                      holidayStatus: e.currentTarget.checked
                    })
                  }}
                />
              </L.FlexRows>
              <DayDiv>
                {
                  store.sales && store.sales.length > 0 &&
                  store.sales.map(item => (
                    <DayOffForm
                      sales={item}
                      dayOffHandler={dayOffHandler}
                    />
                  ))
                }
              </DayDiv>
            </ContentDiv>
          </RowDiv>


          {/* ============== 운영 시간 ============== */}
          <ContentDiv>
            <ContentTitle >운영 시간</ContentTitle>
            {
              store.sales && store.sales.length > 0 &&
              store.sales.map(item => (
                <SalesForm
                  sales={item}
                  salesOpenTimeHandler={salesOpenTimeHandler}
                  salesCloseTimeHandler={salesCloseTimeHandler}
                />
              ))
            }
          </ContentDiv>

          {/* ============== 수령 안내 ============== */}
          <ContentDiv>
            <ContentTitle>수령 안내</ContentTitle>
            <InputBox
              height={200}
            >
              <Textarea
                name='recetiveDescription'
                value={store.recetiveDescription}
                onChange={onChange}
                placeholder='수령 안내 메세지를 입력해주세요.'
                maxLength={255}
              />
            </InputBox>
          </ContentDiv>


        </TabContent>

        <TabBtn
          type='button'
          disabled={!active}
          _active={active}
          onClick={onSubmit}
        >확인</TabBtn>

      </TabDiv>
      {
        alert &&
        <Alert
          title={alert.title}
          contents={alert.contents}
          desc={alert.desc}
          buttonText={alert.buttonText}
          onButtonClick={alert.onButtonClick}
          onOverlayClick={alert.onOverlayClick}
        />
      }
      {
        deliveryModel &&
        <AddressModel
          setModelClose={() => isDeliveryModel(false)}
          setDeliverise={setDeliverise}
        />
      }
      {
        calendar &&
        <CalendarModel
          modelClose={() => setCalendar(false)}
          now={store?.openDate}
          dateFormat='yyyy-MM-dd'
          onChange={openDateHandler} />
      }

    </div>
  )
}

const DayOffForm = ({ sales, dayOffHandler }) => {
  const { dayWeek, dayOffStatus } = sales;

  return (
    <DayBox
      onClick={() => dayOffHandler(dayWeek)}
      color={dayOffStatus}
    >
      {dayWeek.charAt(0)}
    </DayBox>
  )
}

const SalesForm = ({ sales, salesOpenTimeHandler, salesCloseTimeHandler }) => {
  const { dayWeek, dayOffStatus, openTime, closeTime } = sales;
  const [openHour, setOpenHour] = useState(openTime.split(':')[0]);
  const [openMin, setOpenMin] = useState(openTime.split(':')[1]);
  const [closeHour, setCloseHour] = useState(closeTime.split(':')[0]);
  const [closeMin, setCloseMin] = useState(closeTime.split(':')[1]);


  const timeValid = (value, handler, maxNumber) => {
    const num = Number(value);
    if (num === NaN) return handler(``)

    if (num < 0 || num > maxNumber) {
      return handler(``)
    }

    return handler(`${num}`);

  }

  useEffect(() => {
    salesOpenTimeHandler(dayWeek, `${openHour}:${openMin}:00`)
  }, [openHour, openMin])

  useEffect(() => {
    salesCloseTimeHandler(dayWeek, `${closeHour}:${closeMin}:00`)
  }, [closeHour, closeMin])

  return (
    <RowTitle align={'center'}>
      <Size _width='40px'>
        <Text _size={15}>{dayWeek}</Text>
      </Size>
      <Size>
        <L.FlexRows _height='44px' _items='center'>
          <TimeDiv
            color={dayOffStatus}
          >
            <TimeBox>
              <Input
                color={dayOffStatus}
                align={'center'}
                placeholder='00'
                disabled={dayOffStatus}
                value={openHour}
                maxLength={2}
                onChange={e => timeValid(e.target.value, setOpenHour, 23)}
              />
            </TimeBox>
            :
            <TimeBox>
              <Input
                color={dayOffStatus}
                align={'center'}
                placeholder='00'
                disabled={dayOffStatus}
                value={openMin}
                maxLength={2}
                onChange={e => timeValid(e.target.value, setOpenMin, 59)}
              />
            </TimeBox>
          </TimeDiv>
          ~
          <TimeDiv
            color={dayOffStatus}
          >
            <TimeBox>
              <Input
                maxLength={2}
                color={dayOffStatus}
                align={'center'}
                placeholder='00'
                disabled={dayOffStatus}
                value={closeHour}
                onChange={e => timeValid(e.target.value, setCloseHour, 23)}
              />
            </TimeBox>
            :
            <TimeBox>
              <Input
                maxLength={2}
                color={dayOffStatus}
                align={'center'}
                placeholder='00'
                disabled={dayOffStatus}
                value={closeMin}
                onChange={e => timeValid(e.target.value, setCloseMin, 59)}
              />
            </TimeBox>
          </TimeDiv>
        </L.FlexRows>
      </Size>
    </RowTitle>
  )
}

function CateToggle({ close, categories, categoryHandler }) {

  const onChecked = (id, checked) => {
    categoryHandler(id, checked);
    close();
  }

  return (
    <div>
      <BankToggleDiv>
        {
          categories.map(item => {
            return (
              <BankListDiv key={item.id} onClick={() => onChecked(item.id, item.checked)}>
                <TitleInfo
                  weight={item.checked && 600}
                  color={item.checked && '#0B806F'}
                >
                  {item.name}
                </TitleInfo>
              </BankListDiv>
            )
          })
        }
      </BankToggleDiv>
    </div>
  )
}

export default BusinessManagementTab1