import styled from 'styled-components'
export const RequestTextStyle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 648px;
  height: 60px;
  flex: none;
  margin-bottom: 40px;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
export const RequestText = styled.div`
  /* width: 648px; */
  height: 32px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #212121;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
export const RequestInfo = styled.p`
  /* width: 648px; */
  height: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  color: #424242;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
export const RequestFindEmail = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 8px;
  width: 100%;
  height: 96px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  flex: none;
  margin-bottom: 40px;

`
export const RequestFindEmailText = styled.p`
  height: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  color: #212121;
`
export const RequestButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 100%;
  height: 52px;

`
export const RequestButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 4px;
  width: 100%;
  height: 52px;
  background: #0B806F;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`
export const RequestButtonDisable = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 4px;
  width: 100%;
  height: 52px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  color: #424242;
`
