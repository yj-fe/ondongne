import styled from "styled-components";


export const ShepherdBox = styled.div`
  width: ${p => p._width};
  height: ${p => p._height};
  left: ${p => p._left};
  right: ${p => p._right};
  top: ${p => p._top};
  gap: ${p=>p._gap};
  bottom: ${p => p._bottom};
  position: ${p => p._position};
  border-radius: 4px;
  /* border: 1px solid black; */
  background: transparent;
  padding-left: ${p=>p._pdleft ||'10px'};
  justify-content: center;
  display: ${p=>p._display};
  align-items: center;
  margin-bottom: ${p=>p._mbottom };
`;