import React, { useState } from "react";
import { Floating, FloatingPush } from 'components/commonUi/Icon'
import FloatingToggle from "./FloatingToggle";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';


const FloatingDiv = styled.div`
	position: fixed;
    right: 15px;
	bottom: ${props => props._bottom};
	z-index: 99;
`;

const FloatingUi = () => {
    const location = useLocation();
    const [floating, setFloating] = useState(false);

    return (
        <FloatingDiv
            _bottom={location.pathname === "/" ? "70px" : "15px"}
            onClick={() => setFloating(!floating)}
        >
            {floating && <FloatingToggle />}
            {floating ? <FloatingPush /> : <Floating />}
        </FloatingDiv>
    )
}

export default FloatingUi;