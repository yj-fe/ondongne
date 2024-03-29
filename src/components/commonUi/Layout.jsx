import styled from "styled-components";

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: ${(props) => props.theme.breakpoint.tablet}px;
    margin: 0 auto;
`;

export const Container = styled.div`
    cursor: ${(props) => props._cursor};
    display: flex;
    flex-direction: column;
    gap: ${(props) => props._gap || 8}px;
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0 0 8px"};
`;

export const WhiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: ${(props) => props._gap || 8}px;
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0 0 8px"};
`;

export const Overlay = styled.div`
    z-index: 90;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);

    > * {
        position: relative;
        z-index: 91;
    }
`;

export const ContentsMedia = styled.div`
    display: block;
    padding: ${(props) => props._padding || "24px 20px"};
    background: ${(props) => props._bg || "#FFF"};
    max-width: 728px;
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    @media screen and (max-width: 600px) {
        padding: ${(props) => props._paddingm || "24px 20px"};
    }
`;

export const Contents = styled.div`
    display: block;
    padding: ${(props) => props._padding || "24px 20px"};
    background: ${(props) => props._bg || "#FFF"};
    max-width: 728px;
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    cursor: ${(props) => props._cursor};
    @media screen and (max-width: 450px) {
        padding: ${(props) => props._paddingmedia};
    }
`;

export const FlexCols = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${(props) => props._gap || 8}px;
    width: ${(props) => props._width || "100%"};
    padding: ${(props) => props._padding || "0px"};
`;

export const FlexColsHMedia = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${(props) => props._gap || 8}px;
    width: ${(props) => props._width || "100%"};
    height: auto;
    padding: ${(props) => props._padding || "0px"};
    @media screen and (max-height: 625px) {
    }
`;

export const FlexColsGrid = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* gap: 75px; */
    width: ${(props) => props._width || "100%"};
    padding: ${(props) => props._padding || "0px"};
    @media screen and (max-width: 728px) {
        /* gap: 73px; */
    }
    @media screen and (max-width: 700px) {
        /* gap: 65px; */
    }
    @media screen and (max-width: 690px) {
        /* gap: 60px; */
    }
    @media screen and (max-width: 650px) {
        /* gap: 50px; */
    }
    @media screen and (max-width: 625px) {
        /* gap: 32px; */
    }
    @media screen and (max-width: 600px) {
        /* gap: 25px; */
    }
    @media screen and (max-width: 550px) {
        /* gap: 10px; */
    }
    @media screen and (max-width: 336px) {
    }
`;

export const FlexColsSize = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    /* flex-basis: 318px; */
    /* flex-grow: 1; */
    gap: ${(props) => props._gap || 8}px;
    /* min-height: fit-content; */
    max-width: ${(props) => props._width || "216px"};
    padding: ${(props) => props._padding || "0px"};
    @media screen and (max-width: 500px) {
        width: 167px;
    }
`;

export const FlexColsScroll = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${(props) => props._gap || 8}px;
    width: ${(props) => props._width || "100%"};
    padding: ${(props) => props._padding || "0px"};
    height: ${(props) => props._height || "auto"};
`;

export const FlexRowsScroll = styled.div`
    display: flex;
    flex-direction: rows;
    gap: ${(props) => props._gap || 8}px;
    justify-content: ${(props) => props._content || "inherit"};
    align-items: ${(props) => props._items || "inherit"};
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0px"};
    white-space: "nowrap";
    overflow: "auto";
    > Link {
        display: inline-block;
    }
`;

export const Inline = styled.div`
    display: inline-block;
    gap: ${(props) => props._gap || 8}px;
    justify-content: ${(props) => props._content || "inherit"};
    align-items: ${(props) => props._items || "inherit"};
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0px"};
    flex: 0 0 auto;
`;

export const BottomColsW = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: ${(props) => props._width || "688px"};
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    gap: ${(props) => props._gap || 8}px;
    padding: ${(props) => props._padding || "0px"};
    @media only screen and (max-width: 728px) {
        width: 100%;
        padding: 0 20px;
    }
`;

export const BottomRow = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    background-color: white;
    width: ${(props) => props._width || "688px"};
    max-width: ${(props) => props.theme.breakpoint.tablet}px;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    gap: ${(props) => props._gap || 8}px;
    padding: ${(props) => props._padding || "0px"};
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
    gap: ${(props) => props._gap || 8}px;
    padding: ${(props) => props._padding || "0px"};
    @media only screen and (max-width: 728px) {
        width: 100%;
        padding: 0 20px;
    }
`;
export const CateCols = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${(props) => props._gap || 8}px;
    width: ${(props) => props._width || "31.4%"};
    padding: ${(props) => props._padding || "0px"};
    @media only screen and (max-width: 688px) {
        width: 47.5%;
    }
`;

export const FlexColsMedia = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props._gap || 8}px;
    justify-content: ${(props) => props._content || "inherit"};
    align-items: ${(props) => props._items || "inherit"};
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0px"};
    @media screen and (max-width: 600px) {
        padding: ${(props) => props._paddingm || "0px"};
        gap: ${(props) => props._gapm || 8}px;
    }
`;

export const FlexRows = styled.div`
    display: flex;
    flex-direction: rows;
    gap: ${(props) => props._gap || 8}px;
    justify-content: ${(props) => props._content || "inherit"};
    align-items: ${(props) => props._items || "inherit"};
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0px"};
    white-space: nowrap;
    overflow: ${(props) => props._overflow || "hidden"};
    cursor: ${(props) => props._cursor};
    transform: ${(props) => props._transform};
`;

export const FlexRowsCategory = styled.div`
    display: flex;
    flex-direction: rows;
    flex: 1 1 30%;
    gap: ${(props) => props._gap || 8}px;
    justify-content: ${(props) => props._content || "inherit"};
    align-items: ${(props) => props._items || "inherit"};
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0px"};
`;

export const FlexRowsCP = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    padding: ${(props) => props._padding || "0px 0px 10px 0px"};
    flex-direction: rows;
    gap: ${(props) => props._gap || 8}px;
    align-items: ${(props) => props._items || "inherit"};
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    > Link {
        display: inline-block;
        text-decoration: none;
    }
    ::-webkit-scrollbar {
        /* height: 4px;
        background-color: transparent; 
        @media screen and ( max-width: 710px) {
            display: none; 
        } */

        display: none;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #bdbdbd;
        border-radius: 99px;
    }
    &::-webkit-scrollbar-track {
    }
`;

export const FlexRowsWrapNew = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    flex-direction: rows;
    flex-wrap: wrap;
    gap: ${(props) => props._gap || 8}px;
    justify-content: ${(props) => props._content || "inherit"};
    align-items: ${(props) => props._items || "inherit"};
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0px"};
`;
export const FlexRowsWrap = styled.div`
    display: flex;
    flex-direction: rows;
    flex-wrap: wrap;
    gap: ${(props) => props._gap || 8}px;
    justify-content: ${(props) => props._content || "inherit"};
    align-items: ${(props) => props._items || "inherit"};
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0px"};
`;

export const FlexRowsWrapCategory = styled.div`
    display: flex;
    flex-direction: rows;
    flex-basis: 50%;
    /* flex-wrap: wrap; */
    gap: ${(props) => props._gap || 8}px;
    justify-content: ${(props) => props._content || "inherit"};
    align-items: ${(props) => props._items || "inherit"};
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    padding: ${(props) => props._padding || "0px"};
    @media screen and (max-width: 728px) {
    }
`;

export const NoneDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* height: 100px; */
`;

export const GridContainerNew = styled.div``;
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
        props._count < 10 ? `repeat(${props._count}, 1fr)` : "repeat(5, 1fr)"};
    padding-top: 32px;
    gap: 16px;
    margin-left: 20px;
    margin-right: ${(props) => props._marginr || "16px"};
`;
export const GridTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    gap: 16px;
    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 378px) {
        gap: 10px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0px;
    width: 100%;
    padding-top: 16px;
    gap: 32px 20px;
    @media screen and (max-width: 535px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #f5f5f5;
`;
export const Scroll = styled.div`
    overflow: scroll;
    height: ${(props) => props._height || "calc(100vh - 10%)"};
    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width: 450px) {
        height: ${(props) => props._heightmedia};
    }
`;
export const Parents = styled.div`
    width: 100%;
    position: relative;
    top: ${(props) => props._top || "auth"};
    left: ${(props) => props._left || "auth"};
    bottom: ${(props) => props._bottom || "auth"};
    right: ${(props) => props._right || "auth"};
`;

export const Child = styled.div`
    position: absolute;
    top: ${(props) => props._top || "auto"};
    left: ${(props) => props._left || "auto"};
    bottom: ${(props) => props._bottom || "auto"};
    right: ${(props) => props._right || "auto"};
    z-index: ${(props) => props._zIdx || "auto"};
`;
export const Zindex = styled.div`
    z-index: 999;
    width: ${(props) => props._width};
    height: ${(props) => props._height};
`;

export const FlexNewScroll = styled.div`
    padding: 8px 0;
    display: flex;
    gap: 8px;
    flex-direction: column;
    height: calc(100vh - 70px);
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const MyFlexCols = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props._content || "inherit"};
    align-items: ${(props) => props._items || "inherit"};
    gap: ${(props) => props._gap || 8}px;
    width: ${(props) => props._width || "100%"};
    padding: ${(props) => props._padding || "0px"};
`;
