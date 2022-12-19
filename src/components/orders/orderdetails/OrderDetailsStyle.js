import styled from 'styled-components';

export const S = {
  Actions: styled.div`
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      padding: 16px;
  `,
  Action: styled.button`
      width: 100%;
      height: 48px;
      line-height: 48px;
      border-radius: 4px;
      text-align: center;
      background-color: #FFF;
      font-weight: 500;
      font-size: 15px;
      color: ${props => props.theme.color[props._color || 'gray900']};
  `,
  State: styled.span`
      position: absolute;
  `
};

