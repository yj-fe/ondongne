import React from 'react'
import Overlay from '../Overlay/Overlay'
import PopImg from "assets/main/popupimg.svg";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Badge } from '../../commonUi/Button';
import { Img } from '../../Buisness/BusinessManagement/BusinessManagementTabStyle';


function PopUp({closeModel, neverWatch}) {
  return (
    <div>
      <Overlay>
        <Badge _fdir='column' _padding='0px' _gap='0px' _width='350px' _height='406px' _bg='transparant' _bdr='10px'>
          <Img src={PopImg} alt='popup img' _width='350px' _height='350px' _bdr='10px 10px 0px 0px' />
          <L.FlexRows _gap='0px'>
            <Badge  
              _padding='0px' 
              _gap='0px' 
              _width='175px' 
              _height='56px' 
              _bg='white' 
              _bdr='0px 0px 0px 10px'
              onClick={neverWatch}
            >
              <T.Text _size={15} _color='gray800' _align='center'>다시보지않기</T.Text>
            </Badge>
            <Badge 
              _borderleft='1px solid #EEEEEE' 
              _padding='0px' 
              _gap='0px' 
              _width='175px' 
              _height='56px' 
              _bg='white' 
              _bdr='0px 0px 10px 0px'
              onClick={closeModel}
            >
              <T.Text _size={15} _color='gray800' _align='center'>닫기</T.Text>
            </Badge>
          </L.FlexRows>

        </Badge>
      </Overlay>
    </div>
  )
}

export default PopUp