import styled from 'styled-components'

export const FinalPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  gap: 40px;
  /* position: absolute; */
  width: 100%;
  height: 100vh;
  /* top: 60px; */
  background: #FFFFFF;
`
export const CenterDiv = styled.div`
margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 16px;
  width: 100%;
  height: 188px;
`
export const ConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 4px;
  width: 100%;
  height: 48px;
  background: #0B806F;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
`