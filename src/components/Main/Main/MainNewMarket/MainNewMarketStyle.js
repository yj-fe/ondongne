import styled from 'styled-components'
export const ContentProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 280px;
  height: 232px;

  border-radius: 6px;
`
export const ContentImgDiv = styled.div`
  margin: 0;
  padding: 0;
  width: ${props => props._width || '280px'} ;
  height: ${props => props._height || '160px'};
  border-radius: ${props => props._bdr || '6px 6px 0px 0px'} ;
  position: relative;
`
export const ContentImgBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  gap: 4px;

  position: absolute;
  width: 53px;
  height: 22px;
  left: 14px;
  top: 12px;

  background: rgba(16, 157, 140, 0.8);
  border-radius: 2px;

  font-weight: 500;
  font-size: 11px;
  color: #FFFFFF;
`
export const ContentImg = styled.img`
  width: 280px;
  height: 160px;
  border-radius: 6px 6px 0px 0px;
	overflow: hidden;
	object-fit: cover;
	background-repeat: no-repeat;
`
export const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  /* gap: 24px; */
  width: 280px;
  height: 72px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 0px 0px 6px 6px;
`
export const ContentMarket = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #212121;
`
export const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  height: 40px;
`
export const ContentMarketImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`
export const ContentTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  height: 40px;
`
export const ContentInfo = styled.p`
  display: block; 
  font-weight: 400;
  font-size: 13px;
  color: #757575;
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
`