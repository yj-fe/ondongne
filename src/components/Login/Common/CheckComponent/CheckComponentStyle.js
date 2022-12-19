import styled from "styled-components";

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 100px;
gap: 50px;
height: 600px;
background: #f7f8c5;
`


export const CheckInput = styled.input`
    box-sizing: border-box;


    width: 20px;
    height: 20px;
    /* border: 1px solid  ${props => props.checked ? "#0B806F" :"#E0E0E0"};
    background:  ${props => props.checked ? "#0B806F" :"#FFFFFF"};
    border-radius: 2px;
    outline: none;
    appearance: none; */

`