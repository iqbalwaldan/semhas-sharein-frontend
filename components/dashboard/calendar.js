import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { Tooltip } from "@nextui-org/react";
import {
  addDays,
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useEffect, useState } from "react";

function Calendar() {
  const { user } = useAuth({ middleware: "auth" });

  const [facebookAccounts, setFacebookAccounts] = useState([]);

  useEffect(() => {
    const fetchFacebookData = async () => {
      try {
        const response = await axios.get("/api/list-accounts", {
          params: {
            user_id: user.id,
          },
        });
        setFacebookAccounts(response.data.accounts);
        console.log(user?.id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Panggil fungsi fetch data saat komponen dipasang
    fetchFacebookData();
  }, [user?.id]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarFormat = ["Month", "Week"];
  const [viewMode, setViewMode] = useState("Month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleCalendarSelect = (calendarType) => {
    setViewMode(calendarType);
    setIsDropdownOpen(false);
  };

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

  const toggleViewModeCalendar = (mode) => {
    setViewMode(mode);
  };

  const changeCalendarPage = (direction) => {
    if (viewMode === "Month") {
      setCurrentDate(addMonths(currentDate, direction));
    } else if (viewMode === "Week") {
      setCurrentDate(addWeeks(currentDate, direction));
    }
  };

  const [isDropdownAccountOpen, setIsDropdownAccountOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggleDropdownAccount = () => {
    setIsDropdownAccountOpen(!isDropdownAccountOpen);
  };

  const [selectedAccount, setSelectedAccount] = useState();

  const handleAccountSelect = (accountId) => {
    setSelectedAccount(accountId);
    setShowPopup(false);
  };

  const renderCalendar = () => {
    if (viewMode === "Month") {
      for (
        let i = prevMonthEndDate - startDate + 1;
        i <= prevMonthEndDate;
        i++
      ) {
        days.push(
          <div
            className={`text-center h-[35px] 2xl:h-[43px] flex items-center justify-center text-base 2xl:text-xl font-semibold bg-primary-20 px-2 py-1 text-primary-10 rounded-[4px] cursor-default`}
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
          <Tooltip
            key={i}
            delay={0}
            closeDelay={0}
            content={
              <div className="p-2">
                <div className="w-full flex justify-center">
                  <h1 className="text-base font-semibold text-neutral-70">
                    Post Count of This Date
                  </h1>
                </div>
                <div className="w-full h-[1px] bg-neutral-10 mt-1 mb-[10px]"></div>
                <p className="text-xs font-normal text-neutral-60 mb-[5px]">
                  Group Post : 90
                </p>
                <p className="text-xs font-normal text-neutral-60">
                  Marketplace Post : 90
                </p>
              </div>
            }
          >
            <div
              className={`text-center flex items-center justify-center text-base 2xl:text-xl font-semibold bg-primary-base text-neutral-20 px-2 py-1 rounded-[4px] cursor-pointer hover:bg-neutral-20 hover:text-primary-base`}
            >
              {format(currentDateCursor, "d")}
            </div>
          </Tooltip>
        );
      }
      return (
        <>
          <div className="grid grid-cols-7 gap-x-3 2xl:gap-x-[39px] mb-4">
            {daysInWeek.map((day) => (
              <div
                key={day}
                className="border border-primary-base h-[25px] text-lg font-medium bg-white text-primary-base p-2 rounded flex items-center justify-center"
              >
                {format(day, "EEEEEE")}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-x-3 2xl:gap-x-[39px] gap-y-3 2xl:gap-y-[22px]">
            {days}
          </div>
        </>
      );
    } else if (viewMode === "Week") {
      return (
        <>
          <div className="grid grid-cols-7 gap-x-3 2xl:gap-x-[39px] mb-4">
            {daysInWeek.map((day) => (
              <div
                key={day}
                className="border border-primary-base h-[25px] text-lg font-medium bg-white text-primary-base p-2 rounded flex items-center justify-center"
              >
                {format(day, "EEEEEE")}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-x-3 2xl:gap-x-[39px]">
            {daysInWeek.map((day) => (
              <div
                key={day}
                className="bg-gradient-to-b from-primary-base via-primary-base to-[#00C2FF] text-white h-[309px] rounded flex flex-col pl-2 py-2 justify-between"
              >
                <div className="bg-white flex items-center justify-center w-7 h-7 text-primary-base text-xs font-semibold rounded">
                  {format(day, "d")}
                </div>
                <div>
                  <div className="bg-white text-[7px] 2xl:text-[8px] font-semibold text-primary-base py-[2px] w-16 2xl:w-[72px] px-[5px] rounded-sm mb-2">
                    Group Post : 90
                  </div>
                  <div className="bg-white text-[7px] 2xl:text-[8px] font-semibold text-primary-base py-[2px] w-16 2xl:w-[97px] px-[5px] rounded-sm">
                    Marketplace Post : 90
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="rounded-full w-11 h-11 2xl:w-14 2xl:h-14 overflow-hidden">
            <img
              src={
                selectedAccount
                  ? facebookAccounts.find((item) => item.id === selectedAccount)
                      ?.avatar_url
                  : facebookAccounts[0]?.avatar_url
              }
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative flex flex-col ml-2">
            <div
              onClick={toggleDropdownAccount}
              className="flex items-center cursor-pointer"
            >
              <p className="mr-4 text-base 2xl:text-xl font-semibold text-neutral-100">
                {selectedAccount
                  ? facebookAccounts.find((item) => item.id === selectedAccount)
                      ?.name
                  : facebookAccounts[0]?.name}
              </p>
              <p className="text-xl font-semibold text-neutral-100">{"v"}</p>
              {isDropdownAccountOpen && (
                <div className="z-10 absolute mt-2 w-[180px] h-[104px] top-9 right-0 bg-white border border-[#CFCFCF] shadow-md rounded-b-md cursor-default">
                  <div className="flex flex-col items-center justify-center py-4">
                    <p className="text-center text-xs font-normal text-neutral-60">
                      Do you want to Switch Accounts?
                    </p>
                    <div className="flex items-center mt-4">
                      <div
                        onClick={() => {
                          setSelectedOption("No");
                          setIsDropdownAccountOpen(false);
                        }}
                        className="cursor-pointer w-[58px] h-6 flex items-center justify-center mr-4 text-xs font-semibold text-primary-base rounded-md border border-primary-base"
                      >
                        No
                      </div>
                      <div
                        onClick={() => {
                          setSelectedOption("Yes");
                          setIsDropdownAccountOpen(false);
                          setShowPopup(true);
                        }}
                        className="cursor-pointer w-[58px] h-6 flex items-center justify-center rounded-md bg-primary-base text-xs font-semibold text-white"
                      >
                        Yes
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {showPopup && (
              <div className="z-[11] absolute mt-2 h-[300px] 2xl:h-[505px] w-[250px] 2xl:w-[358px] top-9 -right-20 bg-white p-4 shadow-md">
                <input
                  className="mb-4 pl-4 2xl:pl-10 bg-[#F8F8F8] text-xs 2xl:text-base font-normal placeholder:text-xs 2xl:placeholder:text-base placeholder:font-normal text-neutral-60 focus:outline-none h-9 2xl:h-12 rounded-md w-full"
                  type="text"
                  placeholder="Search"
                />
                <div className="flex flex-col gap-1 2xl:gap-4 overflow-y-auto max-h-[220px] 2xl:max-h-[415px]">
                  {facebookAccounts.map((item) => (
                    <div key={item.id}>
                      <div
                        className="p-4 flex flex-row justify-between items-center cursor-pointer hover:bg-neutral-10"
                        onClick={() => {
                          handleAccountSelect(item.id);
                        }}
                      >
                        <div className="flex items-center">
                          <div className="flex w-7 h-7 2xl:w-[33px] 2xl:h-[33px] items-center mr-2 2xl:mr-4">
                            <img src={item.avatar_url} />
                          </div>
                          <div className="flex items-center">
                            <p className="text-xs 2xl:text-base font-semibold text-neutral-80">
                              {item.name}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`w-3 h-3 rounded-full ${
                            selectedAccount === item.id
                              ? "border-[3px] border-primary-base mr-4"
                              : "border-[1px] border-primary-base mr-4"
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <p className="text-xs 2xl:text-base font-normal text-neutral-100">
              Account Activity Post
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <button onClick={() => changeCalendarPage(-1)}>
              <img src="/assets/icons/left_arrow.png" />
            </button>
            <h2 className="text-base 2xl:text-xl text-neutral-100 font-semibold cursor-default mx-[10px]">
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <button onClick={() => changeCalendarPage(1)}>
              <img src="/assets/icons/right_arrow.png" />
            </button>
          </div>
          <div>
            <button
              className="relative items-center flex flex-row px-4 py-1 border border-primary-base ml-4 rounded-lg cursor-pointer"
              onClick={toggleDropdown}
            >
              <div className="flex items-center text-sm 2xl:text-base font-semibold text-primary-base">
                {viewMode}
                <div className="ml-[6px]">
                  <img src="/assets/icons/down_arrow.png" />
                </div>
              </div>
              {isDropdownOpen && (
                <div className="absolute z-[12] mt-2 w-24 top-9 right-0 bg-white border border-[#CFCFCF] shadow-lg rounded-md">
                  {calendarFormat.map((calendar) => (
                    <div
                      key={calendar}
                      onClick={() => handleCalendarSelect(calendar)}
                      className="cursor-pointer text-sm font-semibold text-primary-base p-2 flex items-center hover:bg-slate-300"
                    >
                      {calendar}
                    </div>
                  ))}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {renderCalendar()}
    </div>
  );
}

export default Calendar;
