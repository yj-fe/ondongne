import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSwitchCheckBox = styled.div`
    position: relative;
    display: flex;  
    gap: 8px;

    label {
        width: auto;
        line-height: 20px;
        font-weight: 500;
        font-size: 14px;
    }

    input {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        opacity: 0;
    }
`;


const SwitchCheckBox = props => {

    return (
        <StyledSwitchCheckBox>
            <input 
                id={props.name}
                name={props.name}
                type="SwitchCheckBox" 
                checked={props.checked}
                onChange={props.onChange}
            />
            <svg width="52" height="28" viewBox="0 0 52 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect 
                    width="52" 
                    height="28" 
                    rx="14" 
                    fill={ props.checked? "#0B806F" : "#E0E0E0"}
                />
                <circle 
                    cx="14" 
                    cy="14" 
                    r="12" 
                    fill="white"
                />
            </svg>
            <label 
                htmlFor={props.name} 
            >{props.label}</label>
        </StyledSwitchCheckBox>
    )
}

SwitchCheckBox.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

export default SwitchCheckBox