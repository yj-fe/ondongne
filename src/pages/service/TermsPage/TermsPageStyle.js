import styled from 'styled-components'
export const TermsBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F5F5;
  flex-direction: column;
  /* padding-bottom: 56px; */
  height: 100vh;
  /* gap: 8px; */
`
export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #FFFFFF;
  padding: 24px 20px;
  margin-top: 56px;
  width: 728px;
  height: 100vh;  
  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
export const TermsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  width: 688px;
  height: 56px;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }

`
export const TermsTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #212121;

`
export const TermsTextDiv = styled.p`
  height: 790px;
  margin-top: 24px;
  font-weight: 400;
  font-size: 14px;
  color: #424242;
  overflow: auto;
  padding: 10px;
`
export const TermsIconStyle = styled.div`
  width: 20px;
  height: 20px;

`
