import styled from 'styled-components'
export const MainCategoryBody = styled.div`
  cursor: default;
  padding: 20px 60px;
  gap: 12px;
  background: #FFFFFF;
  width: 100%;
  height: 196px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) { 
    width: 100%;
    padding: 20px;
    height: 184px;
    gap: 24px;
  }
`
export const MainCategoryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;

  width: 100%;
  height: 72px;

`
export const MainCategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 121.6px;
  height: 72px;
  @media only screen and (max-width: 600px) { 
    /* width: 100%; */
    width: 100%;
    height: 60px;
  }
`
export const MainCategoryText = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #212121;
  @media only screen and (max-width: 600px) { 
    font-size: 12px
  }
`