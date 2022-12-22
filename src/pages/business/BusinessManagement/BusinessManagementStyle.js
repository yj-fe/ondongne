import styled from 'styled-components'
export const Container = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  gap: 40px;
  width: 728px;
  height: 100vh;  
  margin-top: 120px;
  /* margin-top: 60px; */

  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`

