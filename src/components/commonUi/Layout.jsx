import styled from "styled-components";

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: ${props => props.theme.breakpoint.tablet}px;
    margin: 0 auto;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props._gap || 8}px;
    height: ${props => props._height || 'auto'};
    padding: ${props => props._padding || '0 0 8px'};
`;

export const Overlay = styled.div`
    z-index: 90;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.6);

    > * {
        position: relative;
        z-index: 91;
    }
`;

export const Contents = styled.div`
    display: block;
    padding: ${props => props._padding || '24px 20px'};
    background: #FFF;
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
`;

export const FlexCols = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${props => props._gap || 8}px;
    width: ${props => props._width || '100%'};
    padding: ${props => props._padding || '0px'};
`;
export const BottomCols = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 688px;
    bottom: 24px;
    left: 0;
    right: 0;
    margin: 0 auto;
    gap: ${props => props._gap || 8}px;
    padding: ${props => props._padding || '0px'};
    @media only screen and (max-width: 728px) { 
        width: 100%;
        padding: 0 20px;
  }
`;
export const CateCols = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${props => props._gap || 8}px;
    width: ${props => props._width || '31.4%'};
    padding: ${props => props._padding || '0px'};
    @media only screen and (max-width: 688px) { 
      width: 47.5%;
    }
`;

export const FlexRows = styled.div`
    display: flex;
    flex-direction: rows;
    gap: ${props => props._gap || 8}px;
    justify-content: ${props => props._content || 'inherit'};
    align-items: ${props => props._items || 'inherit'};
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
    padding: ${props => props._padding || '0px'};
`;

export const FlexRowsWrap = styled.div`
    display: flex;
    flex-direction: rows;
    flex-wrap: wrap;
    gap: ${props => props._gap || 8}px;
    justify-content: ${props => props._content || 'inherit'};
    align-items: ${props => props._items || 'inherit'};
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
    padding: ${props => props._padding || '0px'};
`;

export const NoneDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`;