import { useState, useRef } from "react";

const useDrag = () => {
    const ref = useRef(null);
    const [isDrag, setIsDrag] = useState(false); //드레그 중인지의 상태확인
    const [startX, setStartX] = useState(); //처음 클릭한 x좌표

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        setStartX(e.pageX + ref.current.scrollLeft);
    };
    const onDragEnd = () => {
        setIsDrag(false);
    };
    const onDragMove = (e) => {
        if (isDrag) {
            const { scrollWidth, clientWidth, scrollLeft } = ref.current;

            ref.current.scrollLeft = startX - e.pageX;

            if (scrollLeft === 0) {
                setStartX(e.pageX); //가장 왼쪽일 때, 움직이고 있는 마우스의 x좌표가 곧 startX로 설정.
            } else if (scrollWidth <= clientWidth + scrollLeft) {
                setStartX(e.pageX + scrollLeft); //가장 오른쪽일 때, 움직이고 있는 마우스의 x좌표에 현재 스크롤된 길이 scrollLeft의 합으로 설정
            }
        }
    };
    const throttle = (func, ms) => {
        let throttled = false;
        return (...args) => {
            if (!throttled) {
                throttled = true;
                setTimeout(() => {
                    func(...args);
                    throttled = false;
                }, ms);
            }
        };
    };

    const onMove = throttle(onDragMove, 1);

    return { ref, isDrag, onDragStart, onDragEnd, onMove };
};

export default useDrag;
