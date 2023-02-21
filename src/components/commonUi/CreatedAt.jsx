import React from "react";
import Moment from "react-moment";


// 업로드 시간 가공
const CreatedAt = ({ date }) => {
    let startTime = new Date(date);
    let nowTime = Date.now();

    if (parseInt(startTime - nowTime) > -60000) {
        return <Moment format="방금 전">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) < -86400000) {
        return <Moment format="MMM D일">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) > -86400000) {
        return <Moment fromNow>{startTime}</Moment>;
    }
};


export default CreatedAt;