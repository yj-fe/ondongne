import styled from "styled-components";

export const FinalPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;
    gap: 40px;
    /* position: absolute; */
    width: 100%;
    height: 100vh;
    /* top: 60px; */
    background: #ffffff;
`;
export const CenterDiv = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 16px;
    width: 100%;
    height: 188px;
`;
export const ConfirmButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 4px;
    width: 100%;
    height: 48px;
    background: #0b806f;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
`;

export const ProfileBtnDiv = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    gap: 4px;
    width: 93px;
    height: 30px;
    background: #ffffff;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    color: #212121;
`;

export const TabProfileDiv = styled.div`
    width: 100%;
    height: 228px;
    background: #e0e0e0;
    display: flex;
    justify-content: right;
    object-fit: cover;
    position: relative;
    & input[type="file"] {
        display: none;
    }
`;

export const ProfileDiv = styled.label`
    width: 100px;
    height: 100px;
    background: #fafafa;
    border-radius: 99px;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
`;
export const ImgStyle = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    overflow: ${(props) => props._hidden};
    object-fit: ${(props) => props._object};
    background-repeat: no-repeat;
    background: #fafafa;
    border-radius: 99px;
`;
export const CameraStyle = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 99px;
    z-index: 10;
`;

export const FileInput = styled.input`
    display: none;
`;
