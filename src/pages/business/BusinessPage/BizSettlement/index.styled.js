import styled from "styled-components";

export const InfoBoxDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props._content || "space-between"};
    align-items: center;
    padding: 14px 12px;
    width: 100%;
    height: 48px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    position: relative;

    span {
        position: absolute;
        right: 10px;
    }
`;

export const ToggleSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 192px;
    background: #ffffff;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    overflow-x: hidden;
    overflow-y: scroll;
`;

export const SelectBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 16px;
    background-color: ${(props) => props._bg};
`;

export const SettlementContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    width: 100%;
    margin: 40px 0;
`;

export const Settlement = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    width: 100%;
    gap: 32px 0;

    h1 {
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        color: #212121;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 20px 0;

        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
                color: #212121;
            }
        }

        .total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 20px;
            border-top: 2px solid #757575;

            p {
                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
                color: #212121;
            }

            p:first-child {
                font-weight: 600;
            }
        }
    }
`;
