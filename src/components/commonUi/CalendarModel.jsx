import React, { useCallback, useState } from 'react';
import { Calendar } from 'react-date-range';
import ko from 'date-fns/locale/ko';
import Overlay from '../layout/Overlay/Overlay';
import { format } from 'date-fns';

const CalendarModel = ({modelClose, now, onChange}) => {
    const [date, setDate] = useState(new Date());

    const onChangeDate = useCallback((date) => {
        if (!date) return;
        setDate(date);
        onChange(format(date, 'yy-MM-dd'));
        modelClose();
    },[date]);

    return (
        <Overlay
            onOverlayClick={modelClose}
        >
            <Calendar
                locale={ko}
                months={1}
                date={date}
                onChange={onChangeDate}
                dateDisplayFormat={'yy-MM-dd'}
            />
        </Overlay>
    )
}

export default CalendarModel;