import styled from 'styled-components'
export const LocationBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cccccc;
  flex-direction: column;
  /* padding-bottom: 56px; */
  height: 100vh;
  /* gap: 8px; */
`
export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  padding: 24px 20px;
  margin-top: 60px;
  gap: 40px;
  width: 728px;
  height: 100vh;  
  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
export const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  width: 688px;
  height: 126px;
`
export const Div1 = styled.p`
  width: 688px;
  height: 26px;
  font-weight: 600;
  font-size: 18px;
  color: #212121;
`
export const Div2 = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 648px;
  height: 80px;
`
export const SearchDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  /* gap: 567px; */
  width: 648px;
  height: 44px;
  background: #FAFAFA;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
export const SearchInput = styled.input`
  width: 600px;
  font-weight: 400;
  font-size: 16px;
  color: #BDBDBD;  
  background: #FAFAFA;
  &:focus {
    color: #212121;
  }
`
export const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
`
export const MyLocationDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 200px;
  height: 20px;
`
export const LocationIcon = styled.div`
  width: 20px;
  height: 20px;
`
export const MyLocationText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #757575;
`
export const MyLocationResult = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #0B806F;
`
export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #EEEEEE;
`
export const Spinner = styled.div`
  width: 70px;
  text-align: center;

  > div {
  width: 10px;
  height: 10px;
  background-color: #BDBDBD;
  border-radius: 100%;
  display: inline-block;
  }
`
export const Bounce1 = styled.div`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;

  @keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
`
export const Bounce2 = styled.div`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  
  @keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
`
export const Bounce3 = styled.div`
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  
  @keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
`
export const LocationListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 8px;
  width: 648px;
  height: auto;
`
export const LocationListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0px;
  gap: 8px;
  width: 648px;
  height: 52px;
`
export const LocationListText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #212121;
`


