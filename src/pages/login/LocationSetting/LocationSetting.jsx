import React, { useState } from 'react'
import LoginHeader from '../../../components/Login/Common/LoginHeader/LoginHeader';
import {LocationListContainer,LocationListText,Bounce1,Bounce2,Bounce3,Spinner,LocationBody,Line,LocationContainer,MyLocationResult,LocationDiv,Div1,Div2,LocationIcon,MyLocationDiv,MyLocationText,SearchDiv,SearchIcon,SearchInput, LocationListDiv,} from './LocationSettingStyle'
import { ReactComponent as Location } from "../../../assets/login/Location.svg";
import { ReactComponent as Search } from "../../../assets/login/Search.svg";



function LocationSetting() {


 
  return (
    <div>
      <LoginHeader title="우리동네 설정"/>
      <LocationBody>

{/* ============ 위치설정페이지 ============ */}
        <LocationContainer>
          <LocationDiv>
            <Div1>내 위치 설정</Div1>
            <Div2>
              <SearchDiv>
                <SearchInput
                  type="text"
                  placeholder="지번/도로명을 입력해주세요."
                />
                <SearchIcon><Search/></SearchIcon>
              </SearchDiv>
              <MyLocationDiv>
                <LocationIcon><Location/></LocationIcon>
                <MyLocationText>현재 내 위치</MyLocationText>
                <MyLocationResult>서울특별시 가양동</MyLocationResult>
              </MyLocationDiv>
            </Div2>
          </LocationDiv>
          <Line/>
{/* ============ 로딩 ============ */}
          <Spinner>
            <Bounce1/>
            <Bounce2/>
            <Bounce3/>
          </Spinner>
{/* ============ 검색리스트 ============ */}
          <LocationListContainer>
            <LocationListDiv>
              <SearchIcon><Search/></SearchIcon>
              <LocationListText>경기도 김포시 감정동</LocationListText>
            </LocationListDiv>
            <LocationListDiv>
              <SearchIcon><Search/></SearchIcon>
              <LocationListText>경기도 김포시 걸포동</LocationListText>
            </LocationListDiv>
            <LocationListDiv>
              <SearchIcon><Search/></SearchIcon>
              <LocationListText>경기도 김포시 고촌읍</LocationListText>
            </LocationListDiv>
            <LocationListDiv>
              <SearchIcon><Search/></SearchIcon>
              <LocationListText>경기도 김포시 구래동</LocationListText>
            </LocationListDiv>
            <LocationListDiv>
              <SearchIcon><Search/></SearchIcon>
              <LocationListText>경기도 김포시 김포본동</LocationListText>
            </LocationListDiv>
            <LocationListDiv>
              <SearchIcon><Search/></SearchIcon>
              <LocationListText>경기도 김포시 대곶면</LocationListText>
            </LocationListDiv>
            <LocationListDiv>
              <SearchIcon><Search/></SearchIcon>
              <LocationListText>경기도 김포시 마산동</LocationListText>
            </LocationListDiv>
            <LocationListDiv>
              <SearchIcon><Search/></SearchIcon>
              <LocationListText>경기도 김포시 북변동</LocationListText>
            </LocationListDiv>
          </LocationListContainer>
        </LocationContainer>
      </LocationBody>
    </div>
  )
}

export default LocationSetting