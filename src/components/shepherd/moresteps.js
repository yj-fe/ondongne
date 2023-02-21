import "./styles.css";

// 비즈메인페이지 온보딩 STEP
const StepBizOptions = (eventHandler) => {
 const moreSteps  =[
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
        // 다시보지 않기
        action() {
          eventHandler();
          return this.cancel();
        },
        classes: 'shepherd-button-never-biz',
        text: '다시보지 않기',
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
      show: () => {
        console.log('시작');
      },
      hide: () => {
        console.log('다시보지않기');
      }
    }
  },
];
return { moreSteps }
}
export default StepBizOptions;