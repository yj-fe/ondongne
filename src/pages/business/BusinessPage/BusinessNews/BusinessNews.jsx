import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LoginHeader from 'components/Login/Common/LoginHeader/LoginHeader'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { S } from 'components/layout/Layout/LayoutStyle'
import { Line } from 'pages/main/DetailsPage/DetailsPageStyle';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import { getAlarmBizList } from 'service/alarm';
import dayjs from 'dayjs';

function BusinessNews() {
  const auth = useSelector(state => state.auth);
  const [list, setList] = useState([]);

  const loadData = async () => {
    const response = await getAlarmBizList();
    if (response && response.data.data) {
      setList(response.data.data);
    }
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      loadData();
    }
  }, [auth])
  return (
    <div>
      <S.Wrapper>
        <LoginHeader title="알림" to={-1} />
        <S.Main>
          <L.Contents _padding='24px 20px ' _height='100vh'>
            {/* ============ 알림없을때 ============ */}
            {
              list.length === 0 &&
              <L.Contents _padding='56px 0px 0px 0px'>
                <T.Text _weight={300} _size={15} _color="gray600" _align='center' >
                  <p>새로운 알림이 없습니다.</p>
                  <p>동네활동이 시작되면 알려드릴게요!</p>
                </T.Text>
              </L.Contents>
            }

            {/* ============ 알림있을때 ============ */}
            {
              list.length > 0 &&
              list.map((item, index) => (
                <React.Fragment  key={index}>
                  <L.FlexRows _gap={16}>
                    {
                      item.image &&
                      <ImgSizeLayout src={item.image} _height={48} _weight={48} />
                    }
                    <L.FlexCols _gap={4}>
                      {
                        item.title &&
                        <L.FlexRows _items='center'>
                          <T.Text _weight={600} _size={16} _color="gray900">{item.title ?? ""}</T.Text>
                        </L.FlexRows>
                      }
                      <T.Text _weight={400} _size={15} _color="gray800">{item.contents}</T.Text>
                      <L.FlexRows>
                        <T.Text _weight={300} _size={12} _color="gray500"  >
                          {dayjs(item.createDate).format('YYYY년 MM월 DD일 HH:mm')}
                        </T.Text>
                      </L.FlexRows>
                    </L.FlexCols>
                  </L.FlexRows>
                  {
                    (item.length -1) > index &&
                    <Line />
                  }
                </React.Fragment>
              ))
            }

          </L.Contents>
        </S.Main>
      </S.Wrapper>
    </div>
  )
}

export default BusinessNews
