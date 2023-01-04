import styled from "styled-components";

export const ToggleBody = styled.div`
  display: flex;
  width: 100%;
  height: 100px;

`
export const ToggleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  padding: 8px 12px;
  isolation: isolate;
  background: #F5F5F5;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    width: 4px;
    background: none;
    color: #BDBDBD;
  }
  ::-webkit-scrollbar-thumb {
  background: #BDBDBD;
  border-radius: 99px;
}
`
export const ToggleText = styled.p`
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.25px;
  color: #424242;

`