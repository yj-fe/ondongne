import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";





const ModalOutside = styled.body`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 24px;
  gap: 32px;

  position: absolute;
  width: 342px;
  height: 184px;

  background: #FFFFFF;
  border-radius: 12px;
`
const ModalText = styled.p`
  width: 294px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #212121;
`
const ModalButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  /* bottom: 28px; */
  gap: 4px;

  width: 294px;
  height: 48px;
  background: #0E907F;
  border-radius: 4px;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
`




function ModalErrorPage({errortext, errorbutton}) {
  const navigate = useNavigate();

  return (
    <div>
      <ModalOutside>
        <ModalBody>
          {/* <ModalText>{errortext}</ModalText>
          <ModalButton
            type="button"
            onClick={()=>{navigate(-1)}}
          >
            {errorbutton}
          </ModalButton> */}
        </ModalBody>
      </ModalOutside>
    </div>
  )
}

export default ModalErrorPage