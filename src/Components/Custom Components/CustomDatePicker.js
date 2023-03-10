import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { STRING_ARRAYS } from 'Shared/Constants';

function CustomDatePicker({DateLabel}) {
    // () => {
        const rangeFill = (start,end,inc) => {
            const arr = [];
            while(start <= end)
            {
                arr.push(start);
                start += inc;
            }
            return arr;
        }
        const [startDate, setStartDate] = useState(new Date());
        const years = rangeFill(1990, (new Date()).getFullYear() + 1, 1);
        return (
        <>
            <label>{DateLabel}</label>
            <DatePicker
                renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
                }) => (
                <div
                    style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                    }}
                >
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    {"<"}
                    </button>
                    <select
                    value={date.getFullYear()}
                    onChange={({ target: { value } }) => changeYear(value)}
                    >
                    {years.map((option) => (
                        <option key={option} value={option}>
                        {option}
                        </option>
                    ))}
                    </select>
        
                    <select
                    value={STRING_ARRAYS.MONTHS[date.getMonth()]}
                    onChange={({ target: { value } }) =>
                        changeMonth(STRING_ARRAYS.MONTHS.indexOf(value))
                    }
                    >
                    {STRING_ARRAYS.MONTHS.map((option) => (
                        <option key={option} value={option}>
                        {option}
                        </option>
                    ))}
                    </select>
        
                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    {">"}
                    </button>
                </div>
                )}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
        </>
        );
      };
// }

export default CustomDatePicker