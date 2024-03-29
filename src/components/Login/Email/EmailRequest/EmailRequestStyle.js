import styled from "styled-components";
export const EmailRequestBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 40px;
    gap: 40px;
    width: 100%;
    @media only screen and (max-width: 500px) {
        padding: 32px 20px 60px;
    }
`;
export const RequestTextStyle = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    padding: 0px;
    gap: 8px;

    @media only screen and (max-width: 390px) {
        width: 105%;
    }
`;
export const RequestText = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #212121;
`;
export const RequestInfo = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #424242;
    @media only screen and (max-width: 390px) {
        width: 100%;
    }
`;
export const RequestButton = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    gap: 4px;
    width: 90px;
    height: 48px;
    background: #e8f5e9;
    border: none;
    border-radius: 4px;
    flex: none;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #43a047;
    /* color: #212121; */
`;
