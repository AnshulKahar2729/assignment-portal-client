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
    <div className='w-full py-5 flex justify-center overflow-auto  '>
      <div className="container  mx-auto ">
      
      
      
          <h2 className="text-2xl font-semibold mb-4 text-center">{format(currentMonth, 'MMMM yyyy')}</h2>




          <div className="flex justify-center gap-10 mb-4 ">
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={prevMonth}>
              Previous Month
            </button>
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={nextMonth}>
              Next Month
            </button>
          </div>




        <div className='w-full justify-center flex '>
          <table className="table-auto shadow-xl">
            <thead>
              <tr>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <th key={day} className="border px-0 py-1 sm:px-4 sm:py-2">
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
    </div>
  );
};

export default Calendar;























