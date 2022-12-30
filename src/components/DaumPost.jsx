import REACT, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import styled from 'styled-components';

const Model = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 560px;
    max-width: 530px;
`;

const DaumPost = ({ closeModel, setAddress }) => {
    const handleComplete = (data) => {
        let address = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            address += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setAddress(address);
        closeModel();
    }
    return (
        <Model
            onClick={closeModel}
        >
            <Container>
                <DaumPostCode
                    className="post-code"
                    onComplete={handleComplete}
                    style={{ width: "100%", height: "100%" }}
                />
            </Container>
        </Model>
    );
}
export default DaumPost;