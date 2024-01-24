import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, eachDayOfInterval, isSameMonth, isToday, startOfWeek } from 'date-fns';




const Day = ({ date, currentMonth, onClick, isPostDay }) => (
  <td
    className={`border px-4 py-2 ${isSameMonth(date, currentMonth) ? '' : 'text-gray-900'} ${
      isToday(date) ? 'bg-blue-600 text-white' : ''
    } ${isPostDay ? 'text-red-600 cursor-pointer' : ''}`}
    onClick={() => onClick(date)}
  >
    {format(date, 'd')}
  </td>
);


const Calendar = ({ onSelectDate,Posts }) => {
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

  const firstDayOfWeek = startOfWeek(startOfMonth(currentMonth));

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfWeek,
    end: addMonths(startOfMonth(currentMonth), 1),
  });

  const groupedDays = Array.from(
    { length: daysInMonth.length / 7 },
    (_, index) => daysInMonth.slice(index * 7, (index + 1) * 7)
  );

  return (
    <div className="w-full py-5 flex justify-center overflow-auto  ">
      <div className="container  sm:mx-auto ">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex justify-center gap-10 mb-4 ">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded text-sm sm:text-xl"
            onClick={prevMonth}
          >
            Previous Month
          </button>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded text-sm sm:text-xl"
            onClick={nextMonth}
          >
            Next Month
          </button>
        </div>
        <div className="sm:w-full justify-center flex ">
          <table className="w-full table-auto shadow-xl overflow-x-scroll hideScrollbar">
            <thead>
              <tr>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <th
                      key={day}
                      className="border px-0 py-0 xl:px-4 xl:py-2 text-[12px] sm:text-lg"
                    >
                      {day}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {groupedDays.map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((day) => {
                    const postForDay = Posts.find(
                      (item) => format(day, "MM/dd/yyyy") === item.date
                    );
                    const isPostDay =
                      postForDay &&
                      isSameMonth(day, new Date(postForDay.date));

                    return (
                      <Day
                        key={day}
                        date={day}
                        currentMonth={currentMonth}
                        onClick={handleDayClick}
                        isPostDay={isPostDay}
                      >
                        {postForDay
                          ? postForDay.title
                          : "No Posts Found"}
                      </Day>
                    );
                  })}
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