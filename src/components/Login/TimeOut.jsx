import {React, useEffect, useState, useRef} from 'react'
// import { useInterval } from "./hooks";
import ReactDOM from "react-dom";
import styled from "styled-components";


const InputForm = styled.div`
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  /* width: 648px; */
  /* height: 48px; */
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px;

  font-weight: 400;
  font-size: 16px;

  color: #bdbdbd;
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
  
`
let Input = styled.input`

outline: none;
  /* &:focus {
    border-bottom: 1px solid #616161;
    color: #212121;
  } */
`;
let TimeNum = styled.p`
  display: flex;
  float: right;
  /* position: relative; */
  /* width: 38px; */
  /* height: 20px; */
  /* right: 12px; */
  /* top: calc(50% - 20px/2); */

  /* font-family: 'Pretendard'; */
  /* font-style: normal; */
    font-weight: 400;
  font-size: 14px;
  /* line-height: 20px; */
  /* identical to box height, or 143% */


  color: #1565C0;
`





// function TimeOut() {



  // const TimeOut = ({ targetISOString }) => {
    const CountDownView = ({remain}) => {
      return (
        <div>
          남은 시간(초) : {remain} 
        </div>
      );
    }
    
    const TimeOut = ()=>{
      const targetISOString = '2022-01-01T09:00:00.000Z';//한국 시간 기준 2022년 시작 시간
      const remain = Math.floor((new Date(targetISOString) - new Date())/1000);
    
      return (
      <div>
         <CountDownView remain={remain}/>
      </div>
      )
    }
//   const [count, setCount] = useState(13);

//   useInterval(() => {
//     // Your custom logic here
//     setCount(count - 1);
//     if(count<0){}
//   }, 1000);

//   return <h1>{count}</h1>;
// }

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest function.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }

  // const countdown = setTimeout(function(){
  // }, 1000);
  //   setTimeout(function(){clearTimeout(countdown);
  // }, 180000)
  // useEffect(()=>{
  //   const countdown = setTimeout(()=>{

  //   }, 1000);
  //   return()=> clearTimeout(countdown);
  // }, 180000)
  // let time = setInterval(() => {
  //   console.log('2초마다실행');
  // }, 2000);
  // setTimeout(()=>{
  //   clearInterval(time);
  // }, 7000);
  // const [time, setTime] = useState(179)
  // const { verification } = useSelector((state: RootState) => state.auth)
  // const { expireAt } = verification.OTP

  // useEffect(() => {
  //   if (time > 0) {
  //     const Counter = setInterval(() => {
  //       const gap = Math.floor((new Date(expireAt).getTime() - new Date().getTime()) / 1000)
  //       setTime(gap)
  //     }, 1000)
  //     return () => clearInterval(Counter)
  //   }
  // }, [expireAt, time])


  // return (
    // <InputForm>
    //   <Input
    //     placeholder="인증번호 입력"
    //     id="email"
    //     name="email"
    //     // onChange={onChangeInput}
    //   />

    //   <TimeNum>00:00</TimeNum>
    // </InputForm>
//   )
// }

export default TimeOut