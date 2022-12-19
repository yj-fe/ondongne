import styled from "styled-components";

export const ToggleBody = styled.div`
  display: flex;
  width: 648px;
  height: 100px;
  padding: 8px 12px;
`
export const ToggleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
  gap: 4px;
  isolation: isolate;
  background: #F5F5F5;
  border-radius: 4px;
`
export const ToggleText = styled.p`
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