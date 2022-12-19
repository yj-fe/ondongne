import styled from 'styled-components'
export const EmailBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 0;
  margin-top: 60px;
  gap: 40px;
  background: #FFFFFF;

  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`