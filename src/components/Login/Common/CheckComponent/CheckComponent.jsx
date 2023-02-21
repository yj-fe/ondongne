import React, { useState, useEffect } from "react";
import { ReactComponent as Check } from "assets/check.svg";
import { ReactComponent as Checked } from "assets/checked.svg";
import { ReactComponent as Icon } from "assets/checkinput.svg";
import { CheckInput, Body } from './CheckComponentStyle'




function CheckComponent() {


  let [checkAll, setCheckAll] = useState(false);
  let [checkAge, setCheckAge] = useState(false);
  let [checkService, setCheckService] = useState(false);
  let [checkCollect, setCheckCollect] = useState(false);
  let [checkSns, setCheckSns] = useState(false);

  const [checkItems, setCheckItems] = useState([])



  // useEffect(() => {
  //   if(checkAge&&checkService === true){
  //     setCheckAll(true)
  //   } else {
  //     setCheckAll(false)
  //   }
  // },[checkAge, checkService])

  const AllCheck = () => {
    if (checkAll === true) {
      setCheckAge(true);
      setCheckService(true);
    } else {
      setCheckAge(false);
      setCheckService(false);
    }
  }

  return (
    <div>
      <Body>
        <CheckInput
          type="checkbox"
          name="checkAll"
          id="checkAll"
          checked={checkAll}
          onChange={AllCheck}
        // onClick={!setCheckAll}
        />
        <CheckInput
          type="checkbox"
          name="checkAge"
          id="checkAge"
          checked={checkAge}
          onChange={AllCheck}
        // onClick={()=>!setCheckAll}
        // onClick={()=>!(setCheckAll())}
        />
        <CheckInput
          type="checkbox"
          name="checkService"
          id="checkService"
          checked={checkService}
          onChange={AllCheck}
        // onClick={()=>!(setCheckAll())}
        />
        {/*  <Check
          type="checkbox" 
          name="checkCollect" 
          id="checkCollect"
          // onClick={()=>!(setCheckAll())}
        />  
        <Check
          type="checkbox" 
          name="checkSns" 
          id="checkSns"
          // onClick={()=>!(setCheckAll())}
        />   */}
      </Body>

    </div>
  )
}

export default CheckComponent