import React, { useCallback, useState } from "react";
import Calendar from "react-calendar";
import ko from "date-fns/locale/ko";
import "react-calendar/dist/Calendar.css";
import Overlay from "../layout/Overlay/Overlay";
import { format } from "date-fns";

const CalendarModel = ({
    modelClose,
    onChange,
    dateFormat = "yy-MM-dd",
    maxDay = null,
}) => {
    const [date, setDate] = useState(new Date());

    const onChangeDate = useCallback(
        (date) => {
            if (!date) return;
            setDate(date);
            onChange(format(date, dateFormat));
            modelClose();
        },
        [date]
    );

    return (
        <Overlay onOverlayClick={modelClose}>
            <Calendar
                className="myCalendar"
                date={date}
                onChange={onChangeDate}
                dateDisplayFormat={dateFormat}
                minDate={new Date(date.setDate(date.getDate() + 1))}
                maxDate={new Date(date.setDate(date.getDate() + maxDay))}
            />
        </Overlay>
    );
};

export default CalendarModel;
