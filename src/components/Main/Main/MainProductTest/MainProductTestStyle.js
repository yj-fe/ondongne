import styled from 'styled-components'
export const MainBestCouponBody = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 20px 0px 20px 20px; */
  gap: 32px;
  max-width: 728px;
  height: 310px;
  background: #FFFFFF;
`
export const MainBestCouponTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: auto;
  margin-right: 20px;
  @media only screen and (max-width: 728px) { 
      max-width: 100%;
    }
`
export const TopTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  width: 150px;
`
export const TopAll = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1E88E5;
`
export const MainBestCouponContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 32px;
  gap: 16px;
  width: 100%;
  height: auto;
  @media only screen and (max-width: 728px) { 
      max-width: 100%;
    }
`
export const ContentProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 150px;
  height: 212px;
`
export const ContentImg = styled.img`
  width: 150px;
  height: 150px;
  background:  #D9D9D9;
  border-radius: 6px;
`
export const ContentMarket = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #212121;
`
export const ContentCouponDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 142px;
  height: 22px;
`
export const ContentCoupon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 4px;
  width: 32px;
  height: 22px;
  background: #E1F3F2;
  border-radius: 2px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  color: #0E907F;
`
export const ContentDrive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 4px;
  width: 51px;
  height: 22px;
  background: #F5F5F5;
  border-radius: 2px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  color: #424242;
`
export const ContentPick = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 4px;
  width: 51px;
  height: 22px;
  background: #F5F5F5;
  border-radius: 2px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  color: #424242;
`
