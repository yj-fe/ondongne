import styled from 'styled-components'
export const CartBody = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background: #cccccc;
  flex-direction: column;
  padding-bottom: 56px;
  height: 100vh;
  margin-top: 60px;
  gap: 8px;
`
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6e6868;
  width: 728px;
  height: auto;
  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
export const CartEmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 20px;
  gap: 4px;
  height: 100vh;
  margin-top: 60px;
  background: #ffffff;
`
export const CartEmptyTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`
export const CartEmptyText = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #757575;
`
export const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 728px;
  height: auto;
`
export const CarProfiletDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;
  width: 728px;
  height: 64px;
  background: #FFFFFF;
  border-bottom: 1px solid #EEEEEE;
`
export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`
export const ProfileName = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/900 */

  color: #212121;
`
export const CarContentDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 24px;
gap: 20px;
width: 728px;
height: auto;
background: #FFFFFF;
`
export const ContentProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 680px;
  height: auto;
`
export const ProductTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 680px;
  height: 26px;
`
export const DeleteStyle = styled.div`
  width: 20px;
  height: 20px;
`
export const ProductTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #212121;
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 680px;
`
export const ProductInfoText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #757575;
`
export const ContentCountDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 680px;
  height: 32px;
`
export const CountText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #212121;
`
export const CountAddDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 88px;
  height: 32px;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
export const CountAddIconStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`
export const CoundAddNum = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #424242;
`
export const ContentButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 680px;
  height: 48px;
  background: #0B806F;
  border-radius: 4px;
`
export const ButtonText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
`