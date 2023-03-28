import React, { useState } from "react";
import * as T from "components/commonUi/Text";
import { Close } from "components/commonUi/Icon";
import styled from "styled-components";

const CoachMark = ({ text }) => {
    const [show, isShow] = useState(true);

    return !show ? null : (
        <Sticky>
            <Container>
                <T.Text _size={13} _weight={600} _color="white">
                    {text}
                </T.Text>
                <div className="bar"></div>
                <button onClick={() => isShow(false)}>
                    <Close width={14} height={14} fill={"#fff"} />
                </button>
            </Container>
            <Arrow />
        </Sticky>
    );
};

const Sticky = styled.div`
    width: 100%;
    max-width: 728px;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 120px;
    animation: 2s bounce infinite;
    margin: 0 auto;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e54e2b;
    border-radius: 4px;
    width: 100%;
    max-width: 320px;
    height: 42px;

    p {
        padding: 0 8px;
    }

    .bar {
        width: 1px;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ef9a9a;
    }

    button {
        width: max-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Arrow = styled.div`
    width: 0px;
    height: 0px;
    border-bottom: 8px solid transparent;
    border-top: 8px solid #e54e2b;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    z-index: 30;
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translate(-50%, 0);
`;

export default CoachMark;
