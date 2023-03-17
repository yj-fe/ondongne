import React, { useState, useEffect, useCallback } from "react";
import Layout from "components/layout/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as S from "./index.styled";
import myStoreEmpty from "assets/images/myStoreEmpty.png";
import defaultProfile from "assets/common/Profile.png";
import { getStoreMembership } from "service/bizStore";

const Membership = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [list, setList] = useState();
    const [loading, setLoading] = useState(false);

    const loadData = useCallback(async () => {
        setLoading(true);
        await getStoreMembership(id)
            .then((res) => setList(res.data.data))
            .catch((e) => console.log(e))
            .finally(setLoading(false));
    }, [id]);

    useEffect(() => {
        if (id) loadData(id);
    }, [loadData, id]);

    if (loading) return <></>;

    return (
        <Layout
            title="단골 관리"
            cart={false}
            bell={false}
            onBackClick={() => navigate(-1)}
        >
            <L.Container>
                <L.Contents
                    _height="calc(100vh - 65px)"
                    _cursor="default"
                    _padding={0}
                >
                    {list?.length === 0 && <ListEmpty />}
                    {list?.length > 0 && <ListContainer list={list} />}
                </L.Contents>
            </L.Container>
        </Layout>
    );
};

const ListEmpty = () => {
    return (
        <L.MyFlexCols _items="center" _content="cetner" _gap={60}>
            <img
                src={myStoreEmpty}
                alt="myStoreEmpty"
                width={"328px"}
                height="244px"
            />
            <T.Text _color="gray800" _align="center" _size={16}>
                아직 단골찜한 손님들이 없네요. {`\n`} 단골찜 할만한 상품을
                올려보세요.
            </T.Text>
        </L.MyFlexCols>
    );
};

const ListContainer = ({ list }) => {
    return (
        <L.Scroll _height="calc(100vh - 80px)">
            <S.Header _padding={"0 0 0 0"}>
                <T.Text _size={20} _color={"gray900"} _weight={600}>
                    내 단골 리스트
                </T.Text>
                <T.Text _size={16} _color={"gray900"}>
                    총{" "}
                    <T.Text
                        as={"span"}
                        _size={16}
                        _color={"gray900"}
                        _weight={600}
                    >
                        {list.length}명
                    </T.Text>
                    의 고객이 우리가게를 찜했어요!
                </T.Text>
            </S.Header>
            <S.ItemContainer>
                {list.map((data, i) => (
                    <S.Item key={i}>
                        <img
                            src={data.memberProfile ?? defaultProfile}
                            alt="memberProfile"
                        />
                        <T.Text _size={15} _weight={600} _color={"black"}>
                            {data.memberName}
                        </T.Text>
                    </S.Item>
                ))}
            </S.ItemContainer>
        </L.Scroll>
    );
};

export default Membership;
