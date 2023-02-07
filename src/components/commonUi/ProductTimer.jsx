import LastDateCountDown from "hooks/LastDateCountDown";
import { Watch } from "react-loader-spinner";
import styled from "styled-components";

const ContentDate = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
  gap: 4px;
  width: auto !important;
  height: 22px;
  background: #FDECEE;
  border-radius: 2px;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ED4F62;
  margin-bottom: 4px;
`

const ProductTimer = ({ date }) => {

  const [days, hours, minutes, seconds] = LastDateCountDown(date);

  return (
    <ContentDate>
      <Watch
        height="12"
        width="12"
        radius="48"
        color="red"
        ariaLabel="watch-loading"
        wrapperStyle={{ fontWeight: "blod" }}
        visible={true}
      />
      {`D-${days}일 ${Number(hours) > 9 ? hours : `0${hours}`}시간 ${Number(minutes) > 9 ? minutes : `0${minutes}`}분`}
    </ContentDate>
  )

}

export default ProductTimer;