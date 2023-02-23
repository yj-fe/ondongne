import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { Line } from "components/Login/Signup/agreement/AgreementStyle";
import { detailsList } from "service/border";
import dayjs from "dayjs";

function NoticeDetailsPage() {
    const navigate = useNavigate();
    const [details, setDetails] = useState();

    // borderId 가져오기
    const {
        state: { item },
    } = useLocation();

    // 공지사항 상세 불러오기
    const getDetails = useCallback(async () => {
        const response = await detailsList({ borderId: `${item.borderId}` });
        const { data } = response.data;
        setDetails(data);
    }, [item]);

    useEffect(() => {
        getDetails();
    }, [getDetails]);

    if (!details) return <></>;

    return (
        <Layout
            title="공지사항"
            cart={false}
            bell={false}
            onBackClick={() => navigate(-1)}
        >
            <L.Container _padding="0px 0px 8px" _cursor="default">
                <L.Contents _height="calc(100vh - 60px)" _padding="0px">
                    <L.FlexCols _gap={"0"} _padding="0px">
                        <L.FlexCols _gap={"0"} _padding="20px 16px">
                            <T.Text _weight={500} _size={16} _color="gray900">
                                {details.title}
                            </T.Text>
                            <T.Text _weight={400} _size={13} _color="gray500">
                                {dayjs(details.createDate).format("YYYY/MM/DD")}
                            </T.Text>
                        </L.FlexCols>
                        <Line />
                        <L.FlexCols _gap={4} _padding="20px 16px">
                            <T.Text _weight={400} _size={15} _color="gray800">
                                {details.contents}
                            </T.Text>
                        </L.FlexCols>
                    </L.FlexCols>
                </L.Contents>
            </L.Container>
        </Layout>
    );
}

export default NoticeDetailsPage;
