import React, { useState, useCallback } from "react";
import LoginHeader from "components/Login/Common/LoginHeader/LoginHeader";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { S } from "components/layout/Layout/LayoutStyle";
import { Line } from "pages/main/DetailsPage/DetailsPageStyle";
import { ImgSizeLayout } from "components/layout/Img/ImgSizeLayout";
import { ArrowRightB } from "components/commonUi/Icon";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAlarmMemberList, alarmRead } from "service/alarm";
import { useNavigate } from "react-router-dom";
import { CursorDiv } from "components/Common/LayoutPageStyle";

function MemberNews() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [list, setList] = useState([]);

    const loadData = useCallback(async () => {
        const response = await getAlarmMemberList();
        if (response && response.data.data) {
            setList(response.data.data);
        }
    }, [auth]);

    const clickHandler = async (item) => {
        await alarmRead(item.alarmId)
            .then((res) => {
                if (item.href) navigate(item.href);
                loadData();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (auth.isAuthenticated) {
            loadData();
        }
    }, [auth, loadData]);

    return (
        <CursorDiv>
            <S.Wrapper>
                <LoginHeader title="알림" to={-1} />
                <S.Main>
                    <L.Contents _padding="0" _height="calc(100vh - 68px)">
                        {/* ============ 알림없을때 ============ */}
                        {list.length === 0 && (
                            <L.Contents _padding="56px 0px 0px 0px">
                                <T.Text
                                    _weight={300}
                                    _size={15}
                                    _color="gray600"
                                    _align="center"
                                >
                                    <p>새로운 알림이 없습니다.</p>
                                    <p>동네활동이 시작되면 알려드릴게요!</p>
                                </T.Text>
                            </L.Contents>
                        )}

                        {/* ============ 알림있을때 ============ */}

                        {list.length > 0 && (
                            <L.Scroll _height="calc(100vh - 100px)">
                                {list.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <L.FlexRows
                                            _gap={16}
                                            _padding={"24px 20px"}
                                            style={{
                                                background: item.readStatus
                                                    ? "#fff"
                                                    : "#EBF5FF",
                                                borderBottom: "1px solid #eee",
                                            }}
                                            onClick={() => clickHandler(item)}
                                        >
                                            {item.image && (
                                                <ImgSizeLayout
                                                    src={item.image}
                                                    _height={48}
                                                    _weight={48}
                                                />
                                            )}
                                            <L.FlexCols _gap={4}>
                                                {item.title && (
                                                    <L.FlexRows _items="center">
                                                        <T.Text
                                                            _weight={600}
                                                            _size={16}
                                                            _color="gray900"
                                                        >
                                                            {item.title ?? ""}
                                                        </T.Text>
                                                        <ArrowRightB />
                                                    </L.FlexRows>
                                                )}
                                                <T.Text
                                                    _weight={400}
                                                    _size={15}
                                                    _color="gray800"
                                                >
                                                    {item.contents}
                                                </T.Text>
                                                <L.FlexRows>
                                                    <T.Text
                                                        _weight={300}
                                                        _size={12}
                                                        _color="gray500"
                                                    >
                                                        {dayjs(
                                                            item.createDate
                                                        ).format(
                                                            "YYYY년 MM월 DD일 HH:mm"
                                                        )}
                                                    </T.Text>
                                                </L.FlexRows>
                                            </L.FlexCols>
                                        </L.FlexRows>
                                        {index < list.length - 1 && <Line />}
                                    </React.Fragment>
                                ))}
                            </L.Scroll>
                        )}
                    </L.Contents>
                </S.Main>
            </S.Wrapper>
        </CursorDiv>
    );
}

export default MemberNews;
