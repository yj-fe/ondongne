import React, { useState } from 'react'
import styled from "styled-components";



const ToggleBody = styled.div`
  display: flex;
  width: 648px;
  height: 100px;
  padding: 8px 12px;
`
const ToggleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
  gap: 4px;
  isolation: isolate;
  background: #F5F5F5;
  border-radius: 4px;
`
const ToggleText = styled.p`
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.25px;
  color: #424242;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    width: 4px;
    background: none;
  }
`



function ToggleDetail() {

  const [checked, setChecked] = useState();

  const handeleChange = () => {
    setChecked((prev)=>!prev)
  }
  return (
    <div>
      {/* <Input
      id='checkbox'
      type='checkbox'
      value={checked}
      onChange={handeleChange}
      />
      <Label htmlfor="checkbox">Test</Label> */}
      <ToggleBody>
        <ToggleDiv>
          <ToggleText>
          이용약관 텍스트 이용약관 텍스트
          이용약관 텍스트

          이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트이용약관 텍스트이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
          </ToggleText>
        </ToggleDiv>
      </ToggleBody>
    </div>
  )
}

export default ToggleDetail