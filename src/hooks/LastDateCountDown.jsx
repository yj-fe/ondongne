import React, { useEffect, useState } from "react";

const LastDateCountDown = (targetDate) => {
    const countDownDate = new Date(targetDate + " 23:59:59").getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    const getReturnValues = () => {
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (countDown % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

        return [
            days,
            hours > 9 ? hours : `0${hours}`,
            minutes > 9 ? minutes : `0${minutes}`,
            seconds,
        ];
    };

    // 타이머 설정
    // useEffect(() => {
    //     setInterval(() => {
    //         setCountDown(countDownDate - new Date().getTime());
    //     }, 1000);
    // }, [countDownDate]);

    return getReturnValues(countDown);
};

export default LastDateCountDown;
