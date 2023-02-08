import "./styles.css";
import { React } from 'react';

export const newSteps  = [
  {
    id: 'locate',
    attachTo: { element: '.shepherd-first', on: 'bottom' },
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
        classes: 'shepherd-button-next',
        text: '다음',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: false,
    },
    // title: '1. 위치설정',
    text: '지역을 설정하면 우리동네 상점과 상품을\n쉽게 확인해 보실 수 있어요.',
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'news',
    attachTo: { element: '.shepherd-second', on: 'bottom' },
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
        classes: 'shepherd-button-back',
        text: '이전',
        type: 'back'
      },
      {
        classes: 'shepherd-button-next',
        text: '다음',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: false,
    },
    // title: '2. 알림/장바구니',
    text: ['새로운 정보와 장바구니에 저장한 상품을 확인해 보실 수 있어요.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'group',
    attachTo: { element: '.shepherd-third', on: 'bottom' },
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
        classes: 'shepherd-button-back',
        text: '이전',
        type: 'back'
      },
      {
        classes: 'shepherd-button-next',
        text: '다음',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: false,
    },
    // title: '3. 공동구매',
    text: [`다양한 상품을 저렴하게 공구해 보세요.\n회원가입하고 사장님 전용 비즈회원으로 전환하시면 공동구매 상품을 올려 판매하실 수 있어요.`],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'mystore',
    attachTo: { element: '.shepherd-forth', on: 'bottom' },
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
        classes: 'shepherd-button-back',
        text: '이전',
        type: 'back'
      },
      {
        classes: 'shepherd-button-next',
        text: '다음',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: false,
    },
    // title: '4. 단골가게',
    text: ['회원가입하고 단골 가게를 등록해 보세요. 우리동네 상품 정보를 빠르게 받아 보실 수 있어요.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'more',
    attachTo: { element: '.shepherd-fifth', on: 'bottom' },
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
        classes: 'shepherd-button-back',
        text: '이전',
        type: 'back'
      },
      {
        classes: 'shepherd-button-next',
        text: '닫기',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: false,
    },
    // title: '5. 더 보기',
    text: ['쉽게 회원가입하실 수 있고 다양한 정보를 확인해 보실 수 있어요. 사장님 전용 비즈회원으로 전환해서 상품 판매를 시작해 보세요.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },




];