import "./styles.css";
import { React } from 'react';

export const moreSteps  =[
  {
    id: 'biz',
    attachTo: { element: '.shepherd-biz', },
    floatingUIOptions: {      
    },
    modalOverlayOpeningRadius:4,
    modalOverlayOpeningPadding:	4,
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'shepherd-button-never-biz',
        text: '다시보지 않기',
        type: 'next'
      },
      {
        classes: 'shepherd-button-next',
        text: '시작하기',
        type: 'cancel'
      },
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: false,
    },
    text: ['퀵메뉴를 이용하여 쉽고 빠르게 이용이 가능해요!'],
    when: {
      show: function(){
        return(
          console.log('show')
          // neverWatch={() => eventhandler(365, 3)}
          // 다시보지않기 값 넘겨주기

        );
      },
      hide: () => {
        console.log('hide');
      }
    }
  },




];