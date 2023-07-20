import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { Line } from "components/Login/Signup/agreement/AgreementStyle";
import { noticeList } from "service/border";
import dayjs from "dayjs";

function NoticePage() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  // 포스트맨 body
  const [requestData] = useState({
    category: "NOTICE",
    page: 1,
  });
  // 공지사항 목록 불러오기
  const getNotices = useCallback(async () => {
    const response = await noticeList(requestData);
    const { data } = response.data;
    console.log(response);
    setList(data);
  }, [requestData]);

  useEffect(() => {
    getNotices();
  }, [getNotices]);

  return (
    <div>
      <Layout title="공지사항" cart={false} bell={false} onBackClick={() => navigate(-1)}>
        <L.Container _cursor="default" _padding="0px 0px 8px">
          <L.Contents _padding="0px" _height="calc(100vh - 60px)">
            <L.FlexCols _gap="0px" _padding="8px 20px">
              {list && list.length > 0 ? (
                list.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      navigate(`/notice/details/:${item.borderId}`, {
                        state: { item },
                      });
                    }}>
                    <L.FlexRows id={item.borderId} key={item.borderId} _height="86px" _items="center">
                      <L.FlexCols _gap={4}>
                        <T.Text _weight={500} _size={16} _color="gray900">
                          {item.title}
                        </T.Text>
                        <T.Text _weight={400} _size={13} _color="gray500">
                          {dayjs(item.createDate).format("YYYY/MM/DD")}
                        </T.Text>
                      </L.FlexCols>
                    </L.FlexRows>
                    <Line />
                  </div>
                ))
              ) : (
                <L.FlexRows _height="180px" _content="center" _items="center">
                  <T.Text _size={13} _color="gray500">
                    등록된 공지사항이 존재하지 않습니다.
                  </T.Text>
                </L.FlexRows>
              )}
            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  );
}

export default NoticePage;
