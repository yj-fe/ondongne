import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledOverlay = styled.div`
    z-index: 90;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.6);

    > * {
        position: relative;
        z-index: 91;
    }
`;

const Overlay = props => {

    const portal = document.getElementById('portal');
    const overlayRef = useRef(null);

    const handleOverlayClick = (event) => {
        event.preventDefault();
        const target = event.target;

        if(target === overlayRef.current) {
            props.onOverlayClick();
        }
    };

    return ReactDOM.createPortal(
        <StyledOverlay
            {
                ...props.onOverlayClick &&
                (
                    {
                        ref: overlayRef,
                        onClick: handleOverlayClick
                    }
                )
            }
        >
            {props.children}
        </StyledOverlay>,
        portal);
}

Overlay.props = {
    children: PropTypes.children,
    onOverlayClick: PropTypes.onOverlayClick
}

export default Overlay