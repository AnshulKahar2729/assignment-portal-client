import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';

const Day = ({ date, currentMonth, onClick }) => (
  <td
    className={`border px-4 py-2 ${isSameMonth(date, currentMonth) ? '' : 'text-gray-400'} ${
      isToday(date) ? 'bg-blue-200' : ''
    }`}
    onClick={() => onClick(date)}
  >
    {format(date, 'd')}
  </td>
);

const Calendar = ({ onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleDayClick = (date) => {
    onSelectDate(date);
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: addMonths(startOfMonth(currentMonth), 1),
  });

  const groupedDays = Array.from({ length: daysInMonth.length / 7 }, (_, index) =>
    daysInMonth.slice(index * 7, (index + 1) * 7)
  );

  return (
    <div className='w-full flex justify-center '>
      <div className=" w-[82%] container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">{format(currentMonth, 'MMMM yyyy')}</h2>
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={prevMonth}>
          Previous Month
        </button>
        <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={nextMonth}>
          Next Month
        </button>
      </div>
      <table className="table-auto ">
        <thead>
          <tr>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <th key={day} className="border px-4 py-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groupedDays.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day) => (
                <Day key={day} date={day} currentMonth={currentMonth} onClick={handleDayClick} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Calendar;























