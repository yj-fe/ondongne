import React, { useEffect, useState } from "react";

const useCountDown = (startDate, endDate) => {
    const date = new Date(
        endDate.length < 12 ? endDate + " 23:59:59" : endDate
    ).getTime();

    const [countDown, setCountDown] = useState(
        date - new Date(startDate).getTime()
    );

    const getReturnValues = (time) => {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return [
            days,
            hours > 9 ? hours : `0${hours}`,
            minutes > 9 ? minutes : `0${minutes}`,
            seconds,
        ];
    };

    // 타이머 설정
    useEffect(() => {
        setInterval(() => {
            setCountDown(date - new Date().getTime());
        }, 1000);
    }, [date]);

    return getReturnValues(countDown);
};

export default useCountDown;
