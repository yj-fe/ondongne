import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 20px 0 40px;
    padding-bottom: 24px;
    border-bottom: 1px solid #eee;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4px;
    flex-wrap: wrap;
    margin: 40px 0;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 45%;
    margin-bottom: 40px;

    & img {
        border-radius: 99px;
        width: 48px;
        width: 48px;
    }
`;
