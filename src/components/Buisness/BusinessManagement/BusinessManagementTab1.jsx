import React, { useEffect, useState } from 'react'
import Camera from 'assets/common/Camera.png'
import { ReactComponent as Right } from "assets/main/right.svg";
import CheckBox from 'components/commonUi/CheckBox';

import ProfileAvatar from 'components/commonUi/ProfileAvatar'
import { Text } from 'components/commonUi/Text';
import { TimeBox, TimeDiv, RowTimeDiv, DayDiv, DayBox, RowTitle, RowInput, InputText, TabDiv, TabProfileDiv, ProfileBtnDiv, CameraImg, AvatarDiv, TabContent, RowDiv, ContentDiv, ContentTitle, TitleInfo, TitleInfoDiv, RightStyle, TabBtn, InputBox, RowInfoDiv, Input, BankToggleDiv, BankListDiv } from './BusinessManagementTabStyle'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBizStore, storeImageBannerUpdate, storeImageProfileUpdate } from 'service/store';
import { Down } from 'components/commonUi/Icon';
import { numberFormatter } from 'utils/utils';
const FILEURL = 'https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store';

// 상점정보
function BusinessManagementTab1() {

  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const [store, setStore] = useState({});
  const [banner, setBanner] = useState(null);
  const [profile, setProfile] = useState(null);
  const [select, setSelect] = useState(false);
  // 카테고리 데이터
  const [categories, setCategories] = useState([
    { id: 0, name: '야채/과일', checked: false },
    { id: 1, name: '정육', checked: false },
    { id: 2, name: '수산/해산', checked: false },
    { id: 3, name: '쌀/잡곡', checked: false },
    { id: 4, name: '식품', checked: false },
    { id: 5, name: '생활용품', checked: false },
    { id: 6, name: '디저트', checked: false },
    { id: 7, name: '음료/주류', checked: false },
    { id: 8, name: '반려동물', checked: false },
    { id: 9, name: '기타', checked: false },
  ]);
  const [categoryErroMessage, setCategoryErrorMessage] = useState('');
  const [category, setCategory] = useState('');
  const [mobox, setMoBox] = useState(false);
  const [tubox, setTuBox] = useState(false);
  const [webox, setWeBox] = useState(false);
  const [thbox, setThBox] = useState(false);
  const [fibox, setFiBox] = useState(false);
  const [sabox, setSaBox] = useState(false);
  const [subox, setSuBox] = useState(false);
  const [requestSave, setRequestSave] = useState(false);

  // input 체인지 핸들러
  const onChange = (e) => {
    const { name, value } = e.target;
    setStore({ ...store, [name]: value });
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
    const { data } = response.data

    if (data) getStore()
  }

  // 프로필 이미지 변경
  const profileUpdate = async (e) => {
    const file = e.target.files[0];
    const response = await storeImageProfileUpdate(file, store.storeId);
    const { data } = response.data

    if (data) getStore()
  }


  // 상점 조회
  const getStore = async () => {
    const response = await getBizStore();
    const { data } = response.data;
    if (!data) {
      navigate("/");
    }

    if (data.storeImages.length > 0) {
      setProfile(data.storeImages.filter(image => image.storeImageType == 'PROFILE'));
      setBanner(data.storeImages.filter(image => image.storeImageType == 'BANNER'));
    }

    if (data.storeCategories.length > 0) {

      const category = [];
      data.storeCategories.forEach(item => {
        category.push(item.category);
      });
      
      setCategory(category.join(','));
    }

    setStore(data);
  }

  useEffect(() => {
    if (auth.isAuthenticated) getStore()
  }, [auth])

  return (
    <div>
      <TabDiv>
        {/* 배너 */}
        <TabProfileDiv
          banner={banner && `${FILEURL}/${banner[0].name}`}
        >
          <ProfileBtnDiv for="bannerFile">
            <CameraImg src={Camera} />
            이미지 변경
          </ProfileBtnDiv>
          <input type="file" id="bannerFile" onChange={bannerUpdate} />
        </TabProfileDiv>

        {/* 프로필 */}
        <AvatarDiv>
          <ProfileAvatar
            profile={profile && profile.length > 0 && `${FILEURL}/${profile[0]?.name}`}
            onChange={profileUpdate}
          />
        </AvatarDiv>

        <TabContent>

          {/* ============== 상점명 ============== */}
          <ContentDiv>
            <ContentTitle>상점명</ContentTitle>
            <TitleInfoDiv>
              <Input
                name='name'
                value={store.name}
                onChange={onChange}
                maxLength={'50'}
              />
            </TitleInfoDiv>
          </ContentDiv>

          {/* 카테고리 */}
          <ContentDiv style={{ position: "relative" }}>
            <ContentTitle>카테고리</ContentTitle>
            <TitleInfoDiv>
              <TitleInfo>
                { category ?? '카테고리 선택'}
              </TitleInfo>
              <RightStyle
                onClick={() => setSelect(!select)}
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
            <TitleInfoDiv>
              <TitleInfo>풍무동, 사우동, 걸포동 외 4개</TitleInfo>
              <RightStyle><Right /></RightStyle>
            </TitleInfoDiv>
          </ContentDiv>


          {/* ============== 상점 소개 ============== */}
          <ContentDiv>
            <ContentTitle>상점 소개</ContentTitle>
            <InputBox
              height={200}
            >
              <Input
                name='description'
                value={store.description}
                onChange={onChange}
                placeholder='어떤 상점인지 소개해 주세요!'
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
                  value={numberFormatter(store.deliveryPrice)}
                  onChange={onChange}
                  placeholder='0'
                  maxLength={12}/>
              </TitleInfoDiv>
            </ContentDiv>
            <ContentDiv>
              <ContentTitle>최소 주문 금액(원)</ContentTitle>
              <TitleInfoDiv>
                <InputText>￦ </InputText>
                <Input
                  name='orderMinPrice'
                  value={numberFormatter(store.orderMinPrice)}
                  onChange={onChange}
                  placeholder='0'
                  maxLength={12}/>
              </TitleInfoDiv>
            </ContentDiv>
          </RowDiv>


          {/* ============== 매장 오픈 날짜 ============== */}
          <ContentDiv>
            <ContentTitle>매장 오픈 날짜</ContentTitle>
            <RowDiv>
              <TitleInfoDiv>
                <RowInput
                  placeholder='YY'
                  type='number'
                />
                <InputText>년</InputText>
              </TitleInfoDiv>
              <TitleInfoDiv>
                <RowInput
                  placeholder='MM'
                  type='number'
                />
                <InputText>월</InputText>
              </TitleInfoDiv>
              <TitleInfoDiv>
                <RowInput
                  placeholder='DD'
                  type='number'
                />
                <InputText>일</InputText>
              </TitleInfoDiv>
            </RowDiv>
          </ContentDiv>


          {/* ============== 휴무일 ============== */}
          <RowDiv>
            <ContentDiv>
              <RowTitle>
                <ContentTitle>휴무일</ContentTitle>
                <CheckBox
                  label="공휴일 휴무"
                  name="requestSave"
                  checked={requestSave}
                  onChange={e => { setRequestSave(e.currentTarget.checked) }}
                />
              </RowTitle>
              <DayDiv>
                <DayBox
                  onClick={() => { setMoBox(!mobox) }}
                  color={mobox}
                >
                  월</DayBox>
                <DayBox
                  onClick={() => { setTuBox(!tubox) }}
                  color={tubox}
                >
                  화</DayBox>
                <DayBox
                  onClick={() => { setWeBox(!webox) }}
                  color={webox}
                >
                  수</DayBox>
                <DayBox
                  onClick={() => { setThBox(!thbox) }}
                  color={thbox}
                >
                  목</DayBox>
                <DayBox
                  onClick={() => { setFiBox(!fibox) }}
                  color={fibox}
                >
                  금</DayBox>
                <DayBox
                  onClick={() => { setSaBox(!sabox) }}
                  color={sabox}
                >
                  토</DayBox>
                <DayBox
                  onClick={() => { setSuBox(!subox) }}
                  color={subox}
                >
                  일</DayBox>
              </DayDiv>
            </ContentDiv>
          </RowDiv>


          {/* ============== 운영 시간 ============== */}
          <ContentDiv>
            <ContentTitle>운영 시간</ContentTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>월요일</Text>
              <RowTimeDiv>
                <TimeDiv color={mobox}><TimeBox><Input color={mobox} align={'center'} placeholder='09' /></TimeBox>:<TimeBox><Input color={mobox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
                ~
                <TimeDiv color={mobox}><TimeBox><Input color={mobox} align={'center'} placeholder='22' /></TimeBox>:<TimeBox><Input color={mobox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>화요일</Text>
              <RowTimeDiv>
                <TimeDiv color={tubox}><TimeBox><Input color={tubox} align={'center'} placeholder='09' /></TimeBox>:<TimeBox><Input color={tubox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
                ~
                <TimeDiv color={tubox}><TimeBox><Input color={tubox} align={'center'} placeholder='22' /></TimeBox>:<TimeBox><Input color={tubox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>수요일</Text>
              <RowTimeDiv>
                <TimeDiv color={webox}><TimeBox><Input color={webox} align={'center'} placeholder='09' /></TimeBox>:<TimeBox><Input color={webox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
                ~
                <TimeDiv color={webox}><TimeBox><Input color={webox} align={'center'} placeholder='22' /></TimeBox>:<TimeBox><Input color={webox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>목요일</Text>
              <RowTimeDiv>
                <TimeDiv color={thbox}><TimeBox><Input color={thbox} align={'center'} placeholder='09' /></TimeBox>:<TimeBox><Input color={thbox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
                ~
                <TimeDiv color={thbox}><TimeBox><Input color={thbox} align={'center'} placeholder='22' /></TimeBox>:<TimeBox><Input color={thbox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>금요일</Text>
              <RowTimeDiv>
                <TimeDiv color={fibox}><TimeBox><Input color={fibox} align={'center'} placeholder='09' /></TimeBox>:<TimeBox><Input color={fibox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
                ~
                <TimeDiv color={fibox}><TimeBox><Input color={fibox} align={'center'} placeholder='22' /></TimeBox>:<TimeBox><Input color={fibox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>토요일</Text>
              <RowTimeDiv>
                <TimeDiv color={sabox}><TimeBox><Input color={sabox} align={'center'} placeholder='09' /></TimeBox>:<TimeBox><Input color={sabox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
                ~
                <TimeDiv color={sabox}><TimeBox><Input color={sabox} align={'center'} placeholder='22' /></TimeBox>:<TimeBox><Input color={sabox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>일요일</Text>
              <RowTimeDiv>
                <TimeDiv color={subox}><TimeBox><Input color={subox} align={'center'} placeholder='09' /></TimeBox>:<TimeBox><Input color={subox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
                ~
                <TimeDiv color={subox}><TimeBox><Input color={subox} align={'center'} placeholder='22' /></TimeBox>:<TimeBox><Input color={subox} align={'center'} placeholder='00' /></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
          </ContentDiv>


          {/* ============== 수령 안내 ============== */}
          <ContentDiv>
            <ContentTitle>수령 안내</ContentTitle>
            <InputBox height={120}>
              <Input
                placeholder='수령 안내 메시지를 입력해주세요.'
              />
            </InputBox>
          </ContentDiv>


        </TabContent>


        <TabBtn>수정 완료</TabBtn>

      </TabDiv>

    </div>
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