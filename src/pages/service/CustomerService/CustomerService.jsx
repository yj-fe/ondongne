import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { ArrowRight } from "components/commonUi/Icon";

function CustomerService() {
    const navigate = useNavigate();

    return (
        <div>
            <Layout
                title="고객센터"
                cart={false}
                bell={false}
                onBackClick={() => navigate(-1)}
            >
                <L.Container
                    _cursor="default"
                    _padding="0px 0px 8px"
                    _height="calc(100vh - 60px)"
                >
                    <L.Contents _padding="0px">
                        <L.FlexCols _gap="0px" _padding="8px 20px">
                            <Link to="/service/faq">
                                <L.FlexRows
                                    _height="56px"
                                    _content="space-between"
                                    _items="center"
                                    _padding="16px 0px"
                                >
                                    <T.Text
                                        _weight={500}
                                        _size={16}
                                        _color="gray900"
                                    >
                                        자주하는 질문
                                    </T.Text>
                                    <ArrowRight />
                                </L.FlexRows>
                            </Link>
                            <Link to="/service/inquiry">
                                <L.FlexRows
                                    _height="56px"
                                    _content="space-between"
                                    _items="center"
                                    _padding="16px 0px"
                                >
                                    <T.Text
                                        _weight={500}
                                        _size={16}
                                        _color="gray900"
                                    >
                                        1:1 문의
                                    </T.Text>
                                    <ArrowRight />
                                </L.FlexRows>
                            </Link>
                            <Link to="/service/voc">
                                <L.FlexRows
                                    _height="56px"
                                    _content="space-between"
                                    _items="center"
                                    _padding="16px 0px"
                                >
                                    <T.Text
                                        _weight={500}
                                        _size={16}
                                        _color="gray900"
                                    >
                                        Voc 의견
                                    </T.Text>
                                    <ArrowRight />
                                </L.FlexRows>
                            </Link>
                        </L.FlexCols>
                    </L.Contents>

                    <L.Contents _padding="0px">
                        <L.FlexCols _gap="0px" _padding="8px 20px">
                            <L.FlexRows
                                _height="36px"
                                _content="space-between"
                                _items="center"
                                _width={688}
                                _padding="8px 0px"
                            >
                                <T.Text
                                    _weight={400}
                                    _size={14}
                                    _color="gray800"
                                >
                                    우리동네 고객센터
                                </T.Text>
                                <T.Text
                                    _weight={400}
                                    _size={14}
                                    _color="gray800"
                                >
                                    02-6954-1685
                                </T.Text>
                            </L.FlexRows>
                            <L.FlexRows
                                _height="36px"
                                _content="space-between"
                                _items="center"
                                _width={688}
                                _padding="8px 0px"
                            >
                                <T.Text
                                    _weight={400}
                                    _size={14}
                                    _color="gray800"
                                >
                                    이메일
                                </T.Text>
                                <T.Text
                                    _weight={400}
                                    _size={14}
                                    _color="gray800"
                                >
                                    cs.hyperlocality@gmail.com
                                </T.Text>
                            </L.FlexRows>
                        </L.FlexCols>
                    </L.Contents>
                </L.Container>
            </Layout>
        </div>
    );
}

export default CustomerService;
