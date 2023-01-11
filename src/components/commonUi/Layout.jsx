import styled from "styled-components";
import { screen } from '@testing-library/react';

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
    background: ${props => props._bg || '#FFF'};
    max-width: 728px;
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

export const FlexColsSize = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    /* flex-basis: 318px; */
    /* flex-grow: 1; */
    gap: ${props => props._gap || 8}px;
    /* min-height: fit-content; */
    max-width: ${props => props._width || '216px'};
    padding: ${props => props._padding || '0px'};
    /* @media screen and (max-width: 500px){
        width: 167px;
    } */
`;

export const FlexColsScroll = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${props => props._gap || 8}px;
    width: ${props => props._width || '100%'};
    padding: ${props => props._padding || '0px'};
    height: ${props => props._height || 'auto'};
`;

export const FlexRowsScroll = styled.div`
    display: flex;
    flex-direction: rows;
    gap: ${props => props._gap || 8}px;
    justify-content: ${props => props._content || 'inherit'};
    align-items: ${props => props._items || 'inherit'};
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
    padding: ${props => props._padding || '0px'};
    white-space: 'nowrap';
    overflow: 'auto';
    > Link{
        display: inline-block;
    }
`;

export const Inline = styled.div`
    display: inline-block;
    gap: ${props => props._gap || 8}px;
    justify-content: ${props => props._content || 'inherit'};
    align-items: ${props => props._items || 'inherit'};
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
    padding: ${props => props._padding || '0px'};
    flex: 0 0 auto;
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

export const FlexRowsCP = styled.div`
    display: flex;
    overflow-x: scroll; 
    overflow-y: hidden;
    flex-wrap: nowrap;
    
    flex-direction: rows;
    gap: ${props => props._gap || 8}px;
    /* justify-content: ${props => props._content || 'inherit'}; */
    align-items: ${props => props._items || 'inherit'};
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
    > Link {
        display: inline-block;
        /* text-align: center; */
        text-decoration: none;
    }
    ::-webkit-scrollbar{
    display: none; 
}
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

export const FlexRowsWrapMedia = styled.div`
    display: flex;
    flex-direction: rows;
    flex-wrap: wrap;
    gap: ${props => props._gap || 8}px;
    justify-content: ${props => props._content || 'inherit'};
    align-items: ${props => props._items || 'inherit'};
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
    padding: ${props => props._padding || '0px'};
@media screen and (max-width:600px){
    
}
`;

export const FlexRowsWrapBPM = styled.div`
    display: flex;
    flex-direction: rows;
    flex-wrap: wrap;
    gap: 1.2em;
    /* gap: ${props => props._gap || '20px'}; */
    justify-content: ${props => props._content || 'inherit'};
    align-items: ${props => props._items || 'flex-start'};
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
    padding: ${props => props._padding || '0px'};
    /* @media screen and (max-width: 500px) {
        gap: 16px;
    } */
`;

export const NoneDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* height: 100px; */
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	padding-top: 32px;
	gap: 16px;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #F5F5F5;
`