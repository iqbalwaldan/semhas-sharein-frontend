import {
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfMonth,
  startOfWeek,
  addDays,
} from "date-fns";
import { useState } from "react";

function ScheduleCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const startOfWeekDate = startOfWeek(currentDate);

  const prevMonthEndDate = new Date(
    startOfMonthDate.getFullYear(),
    startOfMonthDate.getMonth(),
    0
  ).getDate();

  const daysInMonth = eachDayOfInterval({
    start: startOfMonthDate,
    end: endOfMonthDate,
  });

  const daysInWeek = eachDayOfInterval({
    start: startOfWeekDate,
    end: addDays(startOfWeekDate, 6),
  });

  const startDate = startOfMonthDate.getDay();
  const endDate = endOfMonthDate.getDate();
  const days = [];

  const changeCalendarPage = (newDate) => {
    setCurrentDate(newDate);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const renderCalendar = () => {
    for (let i = prevMonthEndDate - startDate + 1; i <= prevMonthEndDate; i++) {
      days.push(
        <div
          className={`text-center h-[35px] 2xl:h-[43px] flex items-center justify-center text-base 2xl:text-xl font-semibold border-[2px] border-primary-20 text-primary-20 px-2 py-1 rounded-[4px] cursor-default`}
          key={`prev-month-${i}`}
        >
          {i}
        </div>
      );
    }
    for (let i = 1; i <= endDate; i++) {
      const currentDateCursor = new Date(
        startOfMonthDate.getFullYear(),
        startOfMonthDate.getMonth(),
        i
      );
      days.push(
        <div
          className={`text-center flex items-center justify-center text-base 2xl:text-xl font-semibold ${
            selectedDate &&
            format(selectedDate, "yyyyMMdd") ===
              format(currentDateCursor, "yyyyMMdd")
              ? "bg-primary-base text-white"
              : "border-[2px] border-primary-base text-primary-base hover:bg-neutral-20 hover:text-primary-base cursor-pointer"
          } px-2 py-1 rounded-[4px]`}
          onClick={() => {
            setSelectedDate(currentDateCursor);
            changeCalendarPage(currentDateCursor);
          }}
          key={`current-month-${i}`}
        >
          {format(currentDateCursor, "d")}
        </div>
      );
    }
    return (
      <>
        <div className="grid grid-cols-7 gap-x-3  mb-4">
          {daysInWeek.map((day) => (
            <div
              key={day}
              className="h-[25px] text-lg font-medium bg-primary-base text-neutral-10 p-2 rounded flex items-center justify-center"
            >
              {format(day, "EEEEEE")}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-x-3 gap-y-3">{days}</div>
      </>
    );
  };

  const handleMonthYearChange = (e) => {
    const [selectedYear, selectedMonth] = e.target.value.split("-");
    const newDate = new Date(selectedYear, selectedMonth, 1);
    changeCalendarPage(newDate);
  };

  const monthYearOptions = [];

  for (let i = 0; i < 12; i++) {
    const optionDate = new Date(currentDate.getFullYear(), i, 1);
    monthYearOptions.push({
      value: `${optionDate.getFullYear()}-${optionDate.getMonth()}`,
      label: format(optionDate, "MMMM yyyy"),
    });
  }

  for (let i = 2016; i <= 2030; i++) {
    for (let j = 0; j < 12; j++) {
      const optionDate = new Date(i, j, 1);
      const optionValue = `${optionDate.getFullYear()}-${optionDate.getMonth()}`;
      if (i !== currentDate.getFullYear()) {
        monthYearOptions.push({
          value: optionValue,
          label: format(optionDate, "MMMM yyyy"),
        });
      }
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-neutral-90">
          {format(currentDate, "MMMM")}
        </h1>
        <div className="flex items-center">
          <div className="flex items-center border border-neutral-50 py-1 text-xs font-normal text-neutral-50 rounded-lg">
            <select
              onChange={handleMonthYearChange}
              value={`${currentDate.getFullYear()}-${currentDate.getMonth()}`}
            >
              {monthYearOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {renderCalendar()}
    </div>
  );
}

export default ScheduleCalendar;
