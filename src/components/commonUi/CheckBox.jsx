import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCheckBox = styled.div`
    position: relative;
    display: flex;  
    gap: 8px;

    label {
        width: auto;
        line-height: 20px;
        font-weight: 500;
        font-size: 14px;
        align-items: center;
        display: flex;
        gap: 8px;
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


const CheckBox = props => {

    return (
        <StyledCheckBox>
            <input
                type="checkbox"
                id={props.name}
                name={props.name}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
            />
            <label
                htmlFor={props.name}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        width="20"
                        height="20"
                        rx="2"
                        fill={props.checked ? "#0B806F" : "#E0E0E0"}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8333 6.92182L8.57258 14.1654L4.16667 9.7699L5.36556 8.68011L8.57258 11.8795L14.6344 5.83203L15.8333 6.92182Z"
                        fill="white"
                    />
                </svg>
                {props.label}
            </label>
        </StyledCheckBox>
    )
}

CheckBox.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

export default CheckBox