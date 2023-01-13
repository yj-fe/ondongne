import styled from "styled-components";

export const ModalOutside = styled.body`
    z-index: 90;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.6);
    > * {
        position: relative;
        z-index: 91;
    }
`
export const ModalBody = styled.div`
  gap: 32px;
  padding: 28px 24px;
  position: absolute;
  width: 350px;
  height: auto;
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  text-align: center;
`
export const TextDiv = styled.div`

  padding: 0px;
  gap: 12px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #212121;
`
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  gap: 8px;
  width: 100%;
  height: 104px;
`
export const ButtonDelete = styled.button`
  /* display: flex;
  flex-direction: column; */
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 4px;
  width: 100%;
  height: 48px;
  background: #D32F2F;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;

`
export const ButtonClose = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 4px;
  width: 100%;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #212121;
`