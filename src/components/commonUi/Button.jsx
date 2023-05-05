import styled from "styled-components";
import arrowBottom from "assets/icons/arrow/Arrow-Bottom.svg";
import right from "assets/main/right.svg";
import Calendar from "assets/icons/utils/Calendar.svg";
import CameraC from "assets/icons/utils/CameraC.svg";

export const Button = styled.button`
  width: ${(props) => props._width || "100%"};
  max-width: ${(props) => props._maxWidth || "100%"};
  height: ${(props) => props._height || "auto"};
  border-radius: ${(props) => props._radius || 0}px;
  background-color: ${(props) => props.theme.color[props._bg || "#FFF"]};
  color: ${(props) => props.theme.color[props._color || "gray900"]};
  font-size: ${(props) => props._size || 16}px;
  font-weight: ${(props) => props._weight || 400};
  cursor: pointer;
`;

export const LayerOptionButton = styled.button`
  width: 100%;
  padding: 0 16px;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  border: 1px solid ${(props) => props.theme.color.gray200};
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    background: url(${arrowBottom}) center no-repeat;
    transform: rotate(${(props) => (props.active ? 180 : 0)}deg);
  }
`;

export const LayerOptionButtonC = styled.button`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
  height: 48px;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  border: 1px solid ${(props) => props.theme.color.green700};
  color: ${(props) => props.theme.color.green700};
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    background: url(${CameraC}) center no-repeat;
    transform: rotate(${(props) => (props.active ? 180 : 0)}deg);
  }
`;
export const BorderBox = styled.button`
  width: 100%;
  padding: 0 16px;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
  border: 1px solid ${(props) => props.theme.color.gray200};
  border-radius: ${(props) => props._bdr || "4px"};
  font-size: 15px;
  font-weight: 500;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    background: url(${Calendar});
    transform: rotate(${(props) => (props.active ? 180 : 0)}deg);
  }
`;

export const CouponButton = styled.button`
  bottom: 57px;
  width: 100%;
  padding: 0 16px;
  position: fixed;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: space-between;
  left: 50%;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoint.tablet}px;
  transform: translateX(-50%);
  align-items: center;
  line-height: 1.5;
  background: #ffffff;
  font-size: 15px;
  font-weight: 500;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    background: url(${right}) center no-repeat;
    transform: rotate(${(props) => (props.active ? 180 : 0)}deg);
  }
  @media screen and (max-width: 500px) {
    bottom: ${(props) => props._buttommedia};
  }
`;
export const LayerTextButton = styled.button`
  width: ${(props) => props._width || "100%"};
  padding: ${(props) => props._padding || "0px 16px"};
  display: flex;
  gap: 8px;
  height: ${(props) => props._height || "48px"};
  justify-content: ${(props) => props._content || "center"};
  align-items: center;
  line-height: 1.5;
  border: 1px solid ${(props) => props.theme.color.gray200};
  border-radius: 4px;
`;

export const FixedActionButton = styled.button`
  z-index: 29;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoint.tablet}px;
  height: 56px;
  padding: 0 16px;
  background-color: ${(props) =>
    props.theme.color[props.backgroundColor || "green700"]};
  color: #fff;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    display: ${(props) => props._displaymedia};
  }
`;

export const ActionButton = styled.button`
  z-index: 29;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoint.tablet}px;
  height: 56px;
  padding: 0 16px;
  background-color: ${(props) => (props.color ? "#0E907F" : "#E0E0E0")};
  /* background-color: ${(props) => props.theme.color.green700}; */
  color: #fff;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 700;
`;
export const FilterButton = styled.button`
  width: ${(props) => props._width || "auto"};
  height: ${(props) => props._height || "36px"};
  padding: ${(props) => props._pd || "5px 8px"};
  background: ${(props) => props.theme.color[props._bg || "gray50"]};
  border: 1px solid #eeeeee;
  border-radius: 99px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;
export const Badge = styled.button`
  display: flex;
  flex-direction: ${(props) => props._fdir || "row"};
  justify-content: center;
  align-items: ${(props) => props._items || "center"};
  padding: ${(props) => props._padding || "2px 6px"};
  gap: ${(props) => props._gap || "4px"};
  width: ${(props) => props._width || "fit-content"};
  height: ${(props) => props._height || "22px"};
  background: ${(props) => props.theme.color[props._bg || "gray100"]};
  border-radius: ${(props) => props._bdr || "2px"};
  color: ${(props) => props.theme.color[props._color || "gray800"]};
  font-weight: ${(props) => props._weight || 500};
  font-size: ${(props) => props._size || "11px"};
  border-left: ${(props) => props._borderleft};
  letter-spacing: ${(props) => props._letspace};
`;
export const MapListButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 29;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  gap: 8px;
  width: 123px;
  height: 48px;
  bottom: 68px;
  background: ${(props) => props.theme.color[props._bg || "green400"]};
  border-radius: 99px;
  color: ${(props) => props.theme.color[props._color || "white"]};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  font-weight: 700;
  font-size: 16px;
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LabelCols = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FileLebelForm = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
  height: 48px;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  border: 1px solid ${(props) => props.theme.color.green700};
  color: ${(props) => props.theme.color.green700};
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    background: url(${CameraC}) center no-repeat;
    transform: rotate(${(props) => (props.active ? 180 : 0)}deg);
  }
`;
export const Fixed = styled.div`
  position: fixed;
`;
