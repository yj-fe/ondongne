import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginHeader from "components/Login/Common/LoginHeader/LoginHeader";
import { LocationListContainer, LocationListText, Line, MyLocationResult, Div1, Div2, LocationIcon, MyLocationDiv, MyLocationText, SearchDiv, SearchIcon, SearchInput, LocationListDiv } from "./LocationSettingStyle";
import { ReactComponent as Location } from "assets/login/Location.svg";
import { ReactComponent as Search } from "assets/login/Search.svg";
import "./LocationSetting.css";
import Alert from "components/commonUi/Alert";
import { getLocal, searchLocation } from "service/common";
import { useNavigate } from "react-router-dom";
import { localActions } from "store/slices/location";
import * as L from 'components/commonUi/Layout';
import { S } from 'components/layout/Layout/LayoutStyle'

function LocationSetting() {
  const localState = useSelector(state => state.local);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [address, setAddress] = useState('');
  const [searchList, setSearchList] = useState([]);

  // 지도 검색
  const searchHandler = async () => {
    if (!address) {
      return setAlert({
        contents: "지번/도로명을 입력해주세요.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    }
    setLoading(true);
    setSearchList([]);

    const response = await searchLocation(address);
    const { data, message } = response.data;
    if (message) {
      return setAlert({
        contents: message,
        buttonText: "확인",
        onButtonClick: () => {
          setLoading(false);
          setAlert(false)
        },
        onOverlayClick: () => {
          setLoading(false);
          setAlert(false)
        },
      })
    }
    if (data) setSearchList(data);

    setLoading(false);
  }

  // 위치 변경
  const onSubmit = async (item) => {

    const response = await getLocal(item);
    const { data } = response.data;
    dispatch(localActions.save(data));

    return setAlert({
      contents: '위치를 변경하였습니다.',
      buttonText: "확인",
      onButtonClick: () => navigate('/'),
      onOverlayClick: () => navigate('/')
    })

  }

  return (
    <div>
      <S.Wrapper>
        <LoginHeader title="우리동네 설정" to={"/"} />
        <S.Main>
          <L.Contents _padding='24px 20px' _height='calc(100vh - 68px)'>
            <L.FlexCols _gap={32} >
              {/* ============ 위치설정페이지 ============ */}
              <L.FlexCols _gap={20}>
                <Div1>내 위치 설정</Div1>
                <Div2>
                  <SearchDiv>
                    <SearchInput
                      type="text"
                      placeholder="지번/도로명을 입력해주세요."
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') searchHandler()
                      }}
                    />
                    <SearchIcon
                      onClick={searchHandler}
                    >
                      <Search />
                    </SearchIcon>
                  </SearchDiv>
                  <MyLocationDiv>
                    <LocationIcon>
                      <Location />
                    </LocationIcon>
                    <MyLocationText>현재 내 위치</MyLocationText>
                    <MyLocationResult>
                      {localState.addres}
                    </MyLocationResult>
                  </MyLocationDiv>
                </Div2>
              </L.FlexCols>

              <Line />
              {/* ============ 로딩 ============ */}
              {loading && (
                <L.FlexRows _content='center'>
                  <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                  </div>
                </L.FlexRows>
              )}
              {/* ============ 검색리스트 ============ */}
              <LocationListContainer>
                {
                  searchList.length > 0 &&
                  searchList.map((item, i) => (
                    <LocationListDiv
                      key={i}
                      onClick={() => onSubmit(item)}
                    >
                      <SearchIcon><Search /></SearchIcon>
                      <LocationListText>{item}</LocationListText>
                    </LocationListDiv>
                  ))
                }
              </LocationListContainer>
              {
                alert &&
                <Alert
                  title={alert.title}
                  contents={alert.contents}
                  buttonText={alert.buttonText}
                  onButtonClick={alert.onButtonClick}
                  onOverlayClick={alert.onOverlayClick}
                />
              }
            </L.FlexCols>
          </L.Contents>
        </S.Main>
      </S.Wrapper>
    </div>
  );
}

export default LocationSetting;
