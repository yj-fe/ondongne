import React, { useState } from "react";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as B from "components/commonUi/Button";
import Confirm from "components/commonUi/Confirm";
import "utils/Editor.css";
import TextEditor from "components/TextEditor/TextEditor";

const BusinessProductEditInfo = ({ isOpen, close, data, dataHanler }) => {
    const [value, setValue] = useState(data.description);
    const [confirm, setConfirm] = useState(null);

    return (
        <L.Overlay style={{ display: isOpen ? "block" : "none" }}>
            <Layout
                title="돌아가기"
                cart={false}
                bell={false}
                floating={false}
                onBackClick={() => {
                    setConfirm({
                        contents: `지금 페이지를 나가시면\n작성중인 데이터가 저장되지 않을 수 있습니다.`,
                        confirmText: "나가기",
                        cancelText: "취소",
                        onConfirmClick: () => {
                            setConfirm(null);
                            close();
                        },
                        onCancelClick: () => {
                            setConfirm(null);
                        },
                    });
                }}
            >
                <L.Container _padding="0px">
                    <L.Contents _padding="0px" _height="calc(100vh - 60px)">
                        <TextEditor
                            initData={value}
                            onChange={(e) => setValue(e)}
                            height={"calc(100vh - 156px)"}
                        />
                    </L.Contents>
                    <B.FixedActionButton
                        onClick={() => {
                            dataHanler({
                                ...data,
                                description: value,
                            });
                            close();
                        }}
                    >
                        저장
                    </B.FixedActionButton>
                </L.Container>
            </Layout>
            {confirm && (
                <Confirm
                    warn={confirm.warn}
                    contents={confirm.contents}
                    confirmText={confirm.confirmText}
                    cancelText={confirm.cancelText}
                    onConfirmClick={confirm.onConfirmClick}
                    onCancelClick={confirm.onCancelClick}
                />
            )}
        </L.Overlay>
    );
};

export default BusinessProductEditInfo;
