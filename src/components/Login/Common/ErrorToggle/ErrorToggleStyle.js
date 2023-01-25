import styled from "styled-components";

export const ErrorToggleBody = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  margin: 0;
  padding: 8px 0px;
  > div {
  max-width: 648px;
  width: 100%;
  background-color: #fff;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
export const ErrorText = styled.p`
  float: left;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #D32F2F;
  /* display: flex;
  align-items: flex-start;
  justify-content: left; */
`
