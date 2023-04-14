import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { ArrowTop, Down } from "components/commonUi/Icon";
import {
    Scroll,
    ToggleBody,
    ToggleText,
    ToggleDiv,
} from "components/Login/Password/ToggleDetail/ToggleDetailStyle";
import { faqList } from "service/border";

function FrequentlyAskedQuestion() {
    const navigate = useNavigate();
    const [faq, setFaq] = useState([]);

    const getFaq = useCallback(async () => {
        const response = await faqList({ page: 1 });
        const { data } = response.data;
        setFaq(data);
    }, []);

    useEffect(() => {
        getFaq();
    }, [getFaq]);

    return (
        <div>
            <Layout
                title="자주하는 질문(FAQ)"
                cart={false}
                bell={false}
                floating={false}
                onBackClick={() => navigate(-1)}
            >
                <L.Container _cursor="default" _height="calc(100vh - 60px)">
                    <L.Contents _height="calc(100vh - 60px)">
                        <Scroll>
                            <L.FlexCols
                                _gap="0px"
                                _padding="0px"
                                _items="center"
                            >
                                {faq.map((item, i) => (
                                    <React.Fragment key={i}>
                                        <FaqList item={item} />
                                    </React.Fragment>
                                ))}
                            </L.FlexCols>
                        </Scroll>
                    </L.Contents>
                </L.Container>
            </Layout>
        </div>
    );
}

function FaqList({ item }) {
    const [show, setShow] = useState();

    return (
        <>
            <L.FlexRows
                id={item.borderId}
                onClick={() => setShow((s) => !s)}
                _height="56px"
                _content="space-between"
                _items="center"
                _padding="0px "
            >
                <T.Text _weight={400} _size={16} _color="gray900">
                    {item.title}
                </T.Text>
                {show ? <ArrowTop /> : <Down />}
            </L.FlexRows>
            {show && <Toggle item={item} />}
        </>
    );
}

function Toggle({ item }) {
    return (
        <ToggleBody>
            <ToggleText _height={110} value={item.contents} readOnly={true} />
        </ToggleBody>
    );
}

export default FrequentlyAskedQuestion;
