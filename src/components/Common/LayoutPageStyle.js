
import styled from 'styled-components'
export const Body = styled.div`
  /* margin-top: 60px; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F5F5;
  flex-direction: column;
  gap: 8px;
  /* padding-bottom: 56px; */
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6e6868;
  width: 728px;
  height: 100vh;
  /* margin-top: 60px; */
  padding: 0px;

  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
export const Div = styled.div`
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  align-items: flex-start;
  /* padding: 20px; */
  width: 728px;
  height: 100vh;
  background: #FFFFFF;
`     
export const MarginBDiv = styled.div`
  margin-bottom: 60px;
`