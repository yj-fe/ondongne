import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

import { StyledOverlay } from './OverlayStyle';

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