import styled from "styled-components";
export const MainFooterDiv = styled.div`
    position: absolute;
    display: fixed;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 0px;
    gap: 4px;

    height: 56px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #ffffff;
    @media only screen and (max-width: 728px) {
        width: 100%;
    }
`;
export const FooterNav = styled.div`
    box-sizing: border-box;
    max-width: 728px;
    width: 100%;
    height: 56px;
    border-top: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 70px;
    @media only screen and (max-width: 420px) {
        width: 100%;
        padding: 0 20px;
    }
`;
export const NavIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 24px;
    height: 40px;
`;
