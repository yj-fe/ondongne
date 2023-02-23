import React, { useState } from "react";
import { Floating, FloatingPush } from "components/commonUi/Icon";
import FloatingToggle from "./FloatingToggle";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import "./Floating.css";

const FloatingDiv = styled.div`
    bottom: ${(props) => props._bottom};
    left: calc(50% + 280px);
    z-index: 99;
    position: fixed;
    @media screen and (max-width: 728px) {
        right: 15px;
        left: auto;
    }
`;

const FloatingUi = () => {
    const location = useLocation();
    const [active, setActive] = useState(false);

    return (
        <FloatingDiv
            _bottom={location.pathname === "/" ? "70px" : "15px"}
            onClick={() => setActive(!active)}
        >
            <FloatingToggle active={active} />
            {active ? (
                <FloatingPush />
            ) : (
                <div className="shepherd-biz">
                    <Floating />
                </div>
            )}
        </FloatingDiv>
    );
};

export default FloatingUi;
