import React, {useState} from 'react'
import Alert from '../components/commonUi/Alert'

function NotFound() {

  const [alert, setAlert] = useState(null)

  const openAlert = () => {
    return setAlert({
      contents: "현재 사용중인 번호와 일치합니다.\n새로운 전화번호를 입력해주세요.",
      buttonText: "확인",
      onButtonClick: () => setAlert(null),
      onOverlayClick: () => setAlert(null),
    })
  }

  return (
    <div>
      <button onClick={openAlert}>alert</button>
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
    </div>
  )
}

export default NotFound