import React, { useCallback, useState } from 'react';
import { Calendar } from 'react-date-range';
import ko from 'date-fns/locale/ko';
import Overlay from '../layout/Overlay/Overlay';
import { format } from 'date-fns';

const CalendarModel = ({ modelClose, onChange, dateFormat = 'yy-MM-dd' }) => {
    const [date, setDate] = useState(new Date());

    const onChangeDate = useCallback((date) => {
        if (!date) return;
        setDate(date);
        onChange(format(date, dateFormat));
        modelClose();
    }, [date]);

    return (
        <Overlay
            onOverlayClick={modelClose}
        >
            <Calendar
                locale={ko}
                months={1}
                date={date}
                onChange={onChangeDate}
                dateDisplayFormat={dateFormat}
            />
        </Overlay>
    )
}

export default CalendarModel;