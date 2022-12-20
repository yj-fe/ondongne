import styled from 'styled-components'
export const InputForm = styled.form`

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: 24px;
  width: 688px;
  height: 48px;
  background: #F5F5F5;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  &:focus-within{
    background: #FFFFFF;
  }
`