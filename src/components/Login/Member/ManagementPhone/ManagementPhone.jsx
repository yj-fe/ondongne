import React, {useState, useEffect} from 'react'



function ManagementPhone() {
  const [showPhoneToggle,setShowPhoneToggle] = useState(true)
  const [showPhoneRequestToggle,setShowPhoneRequestToggle] = useState(false)
  
  return (
    <div>
      
{ showPhoneToggle ? <PhoneResetToggle phonevalue={phonevalue} setShowPhoneToggle={setShowPhoneToggle}/> : <PhoneToggle/> }
{ showPhoneRequestToggle && <PhoneRequestToggle setShowPhoneRequestToggle={setShowPhoneRequestToggle}/>}

    </div>
  )
}

export default ManagementPhone