import React, { useState, useEffect } from "react";
import * as T from "components/commonUi/Text";
import * as S from "./index.styled";
import { format, sub } from "date-fns";

function DateToggle({ currentDate, onChange, close }) {
    const newDate = new Date();
    const [data, setData] = useState([]);

    const clickHandler = (value) => {
        setData(
            data.map((item) =>
                item.date === value
                    ? { ...item, checked: !item.checked }
                    : { ...item, checked: false }
            )
        );
        onChange(value);
        close();
    };

    useEffect(() => {
        setData([]);
        for (let i = 0; i < 12; i++) {
            let subDate = sub(newDate, { months: i });
            setData((d) => [
                ...d,
                {
                    id: Number(i + 1),
                    date: subDate,
                    checked: subDate === currentDate ? true : false,
                },
            ]);
        }
    }, []);

    return (
        <S.ToggleSelect>
            {data.map((item, i) => (
                <S.SelectBox
                    key={i}
                    _bg={item.checked ? "#E3F2FD" : "#FFF"}
                    onClick={() => clickHandler(item.date)}
                >
                    <T.Text
                        _weight={item.checked ? 600 : 400}
                        _size={16}
                        _color={item.checked ? "blue" : "gray900"}
                    >
                        {format(item.date, "yyyy년 MM월")}
                    </T.Text>
                </S.SelectBox>
            ))}
        </S.ToggleSelect>
    );
}

export default DateToggle;
