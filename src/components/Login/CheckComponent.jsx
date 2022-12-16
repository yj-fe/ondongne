import React, { useState , useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Checked } from "../../assets/checked.svg";
import { ReactComponent as Icon } from "../../assets/checkinput.svg";


const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 100px;
gap: 50px;
height: 600px;
background: #f7f8c5;
`


const CheckInput = styled.input`
    box-sizing: border-box;


    width: 20px;
    height: 20px;
    /* border: 1px solid  ${props => props.checked ? "#0B806F" :"#E0E0E0"};
    background:  ${props => props.checked ? "#0B806F" :"#FFFFFF"};
    border-radius: 2px;
    outline: none;
    appearance: none; */

`



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
    if(checkAll === true){
      setCheckAge(true);
      setCheckService(true);
    } else {
      setCheckAge(false);
      setCheckService(false);
    }
  }

  console.log(checkAll);
  console.log(checkAge);
  console.log(checkService);

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