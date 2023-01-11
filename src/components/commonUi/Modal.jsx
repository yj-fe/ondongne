import React from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { ModalBody, ModalButton, ModalDiv1, ModalDiv2, ModalOutside, ModalTitle, ModalTitle2 } from 'components/Main/More/ModalPageStyle';
const Modal= ({
  title='title',
  desc1='desc1',
  desc2='desc2',
  ...props
})=> {
  const navigate = useNavigate();
  const handleCloseClick = (e) => {
    e.preventDefault();
    if(props.onCloseClick) {
        props.onCloseClick();
    } else {
        navigate(props.backPath || -1);
    }
};

  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <ModalDiv1>{title}</ModalDiv1>
          <ModalDiv2>
            <ModalTitle>{desc1}</ModalTitle>
            <ModalTitle2>{desc2}</ModalTitle2>
          </ModalDiv2>
          <ModalButton
            type="button"
            onClick={handleCloseClick}  
          >
          닫기
          </ModalButton>
        </ModalBody>
      </ModalOutside>
    </div>
  )
}
Modal.propTypes = {
  title: PropTypes.string,
  desc1: PropTypes.string,
  desc2: PropTypes.string,
  onCloseClick: PropTypes.func,
}

export default Modal