import React, { useState } from "react";
import { Floating, FloatingPush } from 'components/commonUi/Icon'
import FloatingToggle from "./FloatingToggle";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import "./Floating.css";

const FloatingDiv = styled.div`
	bottom: ${props => props._bottom};
    /* position: sticky; */
    right: 10px;
	z-index: 99;
    position: fixed;
    @media screen and (max-width: 728px) {
        position: fixed;
        right: 15px;
    }
`;

const FloatingUi = () => {
    const location = useLocation();
    const [floating, setFloating] = useState(false);

    return (
        <FloatingDiv
            _bottom={location.pathname === "/" ? "70px" : "15px"}
            onClick={() => setFloating(!floating)}
        >
            {floating && <FloatingToggle  />}
            {floating 
                ? <FloatingPush /> 
                : <Floating />
            }
        </FloatingDiv>
    )
}

export default FloatingUi;