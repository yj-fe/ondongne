import LastDateCountDown from "hooks/LastDateCountDown";
import styled from "styled-components";

const ContentDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px;
  gap: 4px;
  width: 150px;
  height: 22px;
  background: #FDECEE;
  border-radius: 2px;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ED4F62;
  margin-bottom: 4px;
  @media screen  and (max-width:500px){
    width: 130px;
  }
  @media screen  and (max-width:450px){
    width: 150px;
  }
  @media screen  and (max-width:340px){
    width: 129px;
    font-size: 11px;
  }
  @media screen  and (max-width:336px){
    width: 130px;
  }
`

const ProductTimer = ({ date }) => {

    const [days, hours, minutes, seconds] = LastDateCountDown(date);

    return (
        <ContentDate>{`D-${days}일 ${Number(hours) > 9 ? hours : `0${hours}`}시간 ${Number(minutes) > 9 ? minutes : `0${minutes}`}분`}</ContentDate>
    )

}

export default ProductTimer;