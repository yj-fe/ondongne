import styled from "styled-components";

export const RequesInputTitle = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #212121;
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
    background: #0b806f;
    border: none;
    border-radius: 4px;
    flex: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
`;
export const EyeOffStyle = styled.div`
    float: right;
    /* display: flex;  */
    /* justify-content: center;  */
    /* align-items: center */
`;
export const ValidText = styled.p`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: left;
    color: ${(props) => (props.color ? "#388E3C" : "#d32f2f")};
`;
