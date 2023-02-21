import React from 'react'
import { ToggleBody, ToggleDiv, ToggleText } from './ToggleDetailStyle'



function ToggleDetail({ contents }) {

  return (
    <ToggleBody>
      <ToggleDiv>
        <ToggleText
          spellcheck="false"
        >
          {contents}
        </ToggleText>
      </ToggleDiv>
    </ToggleBody>
  )
}

export default ToggleDetail