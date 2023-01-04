import React, { useState } from 'react'
import {ToggleBody, ToggleDiv, ToggleText } from './ToggleDetailStyle'



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
          이용약관 텍스트 이용약관 텍스트
          이용약관 텍스트
          이용약관 텍스트 이용약관 텍스트
          이용약관 텍스트
          이용약관 텍스트 이용약관 텍스트
          이용약관 텍스트
          이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트이용약관 텍스트이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
          이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트이용약관 텍스트이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
          </ToggleText>
        </ToggleDiv>
      </ToggleBody>
    </div>
  )
}

export default ToggleDetail