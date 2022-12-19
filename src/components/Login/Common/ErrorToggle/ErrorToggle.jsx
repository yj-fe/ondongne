import React from 'react'
import {ErrorText,ErrorToggleBody} from './ErrorToggleStyle'


function ErrorToggle({errormessage}) {
  return (
    <div>
      <ErrorToggleBody>
        <ErrorText>{errormessage}</ErrorText>
      </ErrorToggleBody>
    </div>
  )
}

export default ErrorToggle