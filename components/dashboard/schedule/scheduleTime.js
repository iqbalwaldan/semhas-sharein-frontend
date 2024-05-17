import React, { useState } from "react";

export default function ScheduleTime({
  setNewTime,
  setNewMinute,
  setTimeData,
}) {
  const [time, setTime] = useState(0);
  const [minute, setMinute] = useState(0);

  const formatValue = (value) => value.toString().padStart(2, "0");

  const handleScroll = (e, inputType) => {
    e.preventDefault();
    const scrollDirection = e.deltaY > 0 ? 1 : -1;

    if (inputType === "time") {
      let newValue = time + scrollDirection;
      if (newValue < 0) newValue = 23;
      if (newValue > 23) newValue = 0;
      setTime(newValue);
    } else if (inputType === "minute") {
      let newValue = minute + scrollDirection;
      if (newValue < 0) newValue = 59;
      if (newValue > 59) newValue = 0;
      setMinute(newValue);
    }
  };
  const beforeTime = formatValue(time > 0 ? time - 1 : 23);
  const afterTime = formatValue(time < 23 ? time + 1 : 0);
  const beforeMinute = formatValue(minute > 0 ? minute - 1 : 59);
  const afterMinute = formatValue(minute < 59 ? minute + 1 : 0);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
    setIsScrollEnabled(!isEditMode);
    setNewTime = time;
    setNewMinute = minute;
    setTimeData({ time, minute });
  };

  return (
    <div>
      <p className="mb-3 font-semibold text-xl text-neutral-80">
        Enter Posting time
      </p>
      {isEditMode ? (
        <div
          className="mb-4 flex flex-col gap-1 2xl:gap-3 bg-white shadow-lg rounded-lg py-1 2xl:py-2 px-8 cursor-pointer"
          onClick={handleEditClick}
        >
          <div className="flex flex-row px-2 justify-between w-full">
            <div
              className="w-1/2"
              onWheel={(e) => isScrollEnabled && handleScroll(e, "time")}
            >
              <p className="text-primary-50 font-normal text-base">
                {beforeTime}
              </p>
            </div>
            <div
              className="w-1/2"
              onWheel={(e) => isScrollEnabled && handleScroll(e, "minute")}
            >
              <p className="text-primary-50 font-normal text-base text-end">
                {beforeMinute}
              </p>
            </div>
          </div>
          <div className="flex bg-primary-base flex-row px-2 py-1 2xl:py-2 rounded-[5px] justify-between">
            <div
              className="w-1/2"
              onWheel={(e) => isScrollEnabled && handleScroll(e, "time")}
            >
              <p className="text-neutral-10 font-normal text-base">
                {formatValue(time)}
              </p>
            </div>
            <div className="text-neutral-10 font-normal text-base">:</div>
            <div
              className="w-1/2"
              onWheel={(e) => isScrollEnabled && handleScroll(e, "minute")}
            >
              <p className="text-neutral-10 font-normal text-base text-end">
                {formatValue(minute)}
              </p>
            </div>
          </div>
          <div className="flex flex-row px-2 justify-between">
            <div
              className="w-1/2"
              onWheel={(e) => isScrollEnabled && handleScroll(e, "time")}
            >
              <p className="text-primary-50 font-normal text-base">
                {afterTime}
              </p>
            </div>
            <div
              className="w-1/2"
              onWheel={(e) => isScrollEnabled && handleScroll(e, "minute")}
            >
              <p className="text-primary-50 font-normal text-base text-end">
                {afterMinute}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="md:flex flex-row mb-4 justify-start cursor-pointer"
          onClick={handleEditClick}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="border border-[#CFCFCF] text-primary-50 p-4 rounded-md text-3xl 2xl:text-6xl font-bold">
              <div className="w-[50px] h-[60px] 2xl:w-[71px] 2xl:h-[84px] flex items-center justify-center">
                {formatValue(time)}
              </div>
            </div>
          </div>
          <p className="mx-2 flex items-center text-primary-50 font-bold text-xl">
            :
          </p>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="border border-[#CFCFCF] text-primary-50 p-4 rounded-md text-3xl 2xl:text-6xl font-bold cursor-default">
              <div className="w-[50px] h-[60px] 2xl:w-[71px] 2xl:h-[84px] flex items-center justify-center">
                {formatValue(minute)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
