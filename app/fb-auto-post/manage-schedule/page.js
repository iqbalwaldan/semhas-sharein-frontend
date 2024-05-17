"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
// import ScheduleCalendar from "@/components/dashboard/schedule/scheduleCalendar";
import ScheduleTime from "@/components/dashboard/schedule/scheduleTime";
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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import axios from "@/lib/axios";
import { useAuth } from "@/hooks/auth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/components/dashboard/schedule/DatePicker.css";
import { useAuthFacebook } from "@/hooks/facebook";
// import { useAuthFacebook } from "@/hooks/facebook";
export default function ManageSchedule() {
  const [size, setSize] = React.useState("md");
  const sizes = ["full"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contentModal, setContentModal] = React.useState("");
  const [radio1Selected, setRadio1Selected] = useState(false);
  const [radio2Selected, setRadio2Selected] = useState(false);

  const handleRadio1Change = () => {
    if (radio1Selected) {
      setRadio1Selected(false);
    } else {
      setRadio1Selected(true);
      setRadio2Selected(false);
    }
  };

  const handleRadio2Change = () => {
    if (radio2Selected) {
      setRadio2Selected(false);
    } else {
      setRadio2Selected(true);
      setRadio1Selected(false);
    }
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarFormat = ["Month", "Week"];
  const [viewMode, setViewMode] = useState("Month");

  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const startOfWeekDate = startOfWeek(currentDate);

  const prevMonthEndDate = new Date(
    startOfMonthDate.getFullYear(),
    startOfMonthDate.getMonth(),
    0
  ).getDate();

  const startDate = startOfMonthDate.getDay();
  const endDate = endOfMonthDate.getDate();
  const days = [];

  const handleOpen = (size, postId) => {
    setSize(size);
    onOpen();
    setSelectedScheduleId(postId);
  };

  for (let i = prevMonthEndDate - startDate + 1; i <= prevMonthEndDate; i++) {
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
      <div
        className={`text-center flex items-center justify-center text-base 2xl:text-xl font-semibold border border-primary-base text-primary-50 px-2 py-1 rounded-[4px] cursor-pointer hover:bg-neutral-20 hover:text-primary-base`}
      >
        {format(currentDateCursor, "d")}
      </div>
    );
  }

  const { user } = useAuth();

  const [manageSchedule, setManageSchedule] = useState([]);

  useEffect(() => {
    const fetchManageScheduleData = async () => {
      try {
        const response = await axios.get("/api/manage-schedule/schedule", {
          params: {
            user_id: user.id,
          },
        });
        setManageSchedule(response.data.post_list);
        // console.log(user?.id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchManageScheduleData();
  }, [user?.id, manageSchedule]);

  const [facebookAccounts, setFacebookAccounts] = useState([]);

  useEffect(() => {
    const fetchFacebookData = async () => {
      try {
        const response = await axios.get("/api/list-accounts");
        setFacebookAccounts(response.data.accounts);
        // console.log(user?.id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFacebookData();
  }, []);

  const getFacebookName = (user_fb_account_id) => {
    const account = facebookAccounts.find(
      (account) => account.id === user_fb_account_id
    );
    return account ? account.name : "N/A";
  };

  const [selectedScheduleId, setSelectedScheduleId] = useState(null);

  const [editSchedule, setEditSchedule] = useState([]);

  useEffect(() => {
    const fetchEditSchedule = async () => {
      try {
        const response = await axios.get("/api/manage-schedule/edit-schedule", {
          params: {
            id: selectedScheduleId,
          },
        });
        const editScheduleData = response.data.accounts;

        // Check if data is available and has a valid post_time
        if (editScheduleData && editScheduleData.length > 0) {
          const postTime = editScheduleData[0].post_time;

          // Parse the post_time to get date, hour, and minute
          const dateTime = new Date(postTime);
          const parsedHour = dateTime.getHours();
          const parsedMinute = dateTime.getMinutes();

          console.log(parsedHour);

          // Update the state variables
          setTime(parsedHour);
          setMinute(parsedMinute);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchEditSchedule();
  }, [selectedScheduleId]);

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [minute, setMinute] = useState();
  const [startDatePicker, setStartDatePicker] = useState(new Date());
  function formatDateTimePicker(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  const formattedDate = formatDateTimePicker(startDatePicker);

  const formatTimeAndMinuteToHIS = (hour, minute) => {
    const formattedHour = String(hour).padStart(2, "0");
    const formattedMinute = String(minute).padStart(2, "0");

    return `${formattedHour}:${formattedMinute}:00`;
  };

  const formattedTime = formatTimeAndMinuteToHIS(time, minute);
  const dateTimeInput = `${formattedDate} ${formattedTime}`;

  const handleDateData = ({ date }) => {
    setDate(date);
  };
  const handleTimeData = ({ time, minute }) => {
    setTime(time);
    setMinute(minute);
  };

  const { setUpdateSchedule } = useAuthFacebook();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const formData = new FormData();
  formData.append("post_time", dateTimeInput);

  const handleSubmitUpdateSchedule = async (event) => {
    event.preventDefault();
    setLoading(true);

    await axios.post("/api/manage-schedule/update-schedule", formData, {
      params: {
        id: selectedScheduleId,
      },
    });
  };

  const handleSubmitDeleteSchedule = async (event) => {
    event.preventDefault();
    setLoading(true);

    await axios.delete("/api/manage-schedule/schedule", {
      params: {
        id: selectedScheduleId,
      },
    });
  };

  const Alert2 = (postId, event) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await handleSubmitDeleteSchedule(event); // Pass the event object
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle the "Cancel" button click
        Swal.fire("Cancelled", "Your file is safe :)", "info");
      }
    });
    setSelectedScheduleId(postId);
  };

  return (
    <div className="flex w-full md:flex-row">
      <div className="flex flex-col w-full">
        <div className="w-full px-3 ml-1">All Schedule</div>
        <div className="md:flex w-full flex-row justify-between">
          <div className="w-full px-3 ml-1 mt-4 text-success-50">
            Active Scheduled
          </div>
        </div>

        <div className="relative mt-10">
          <table className="w-full text-sm text-left ml-1 text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Post Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Account Facebook
                </th>
                <th scope="col" className="px-6 py-3">
                  Posting Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {manageSchedule && manageSchedule.length > 0
                ? manageSchedule.map((item, index) => (
                    <tr key={item.id} className="bg-white">
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap text-black"
                      >
                        {item.post.title}
                      </td>
                      <td className="px-6 py-4">
                        {getFacebookName(item.post.user_fb_account_id)}
                      </td>

                      <td className="px-6 py-4">{item.post.post_time}</td>
                      <td className="px-6 py-4">{item.post.hashtag}</td>

                      <td className="">
                        <div
                          className={`flex items-center justify-center rounded-md border h-[18px] w-[56px] text-[10px] ml-5`}
                        >
                          {/* {item.Status} */}
                        </div>
                      </td>

                      <td>
                        <div className="flex ">
                          {sizes.map((size) => (
                            <Button
                              key={size}
                              onPress={() => {
                                handleOpen(size, item.post.id);
                                setSelectedScheduleId(item.post.id);
                              }}
                              color="white"
                              variant="light"
                            >
                              <Image
                                src="/assets/icons/icons-edit.png"
                                width="32"
                                height="32"
                              />
                            </Button>
                          ))}
                          <Modal
                            size="5xl"
                            contentModal={contentModal}
                            isOpen={isOpen}
                            onClose={onClose}
                          >
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalHeader>
                                    Determine the schedule date and time
                                  </ModalHeader>
                                  <ModalBody>
                                    <div className="flex justify-between">
                                      <div className="w-1/2">
                                        <div className="p-4 border border-primary-20 rounded-lg">
                                          <DatePicker
                                            selected={startDatePicker}
                                            onChange={(date) =>
                                              setStartDatePicker(date)
                                            }
                                            inline
                                          />
                                        </div>
                                      </div>
                                      <div className="w-1/3">
                                        <ScheduleTime
                                          setNewTime={time}
                                          setNewMinute={minute}
                                          setTimeData={handleTimeData}
                                        />

                                        <div className="flex flex-col w-full mb-2">
                                          <div className="flex mb-1">
                                            <p className="font-normal text-base text-neutral-70">
                                              Title Schedule
                                            </p>
                                            <p className="font-normal text-base text-error-base">
                                              *
                                            </p>
                                          </div>
                                          <input
                                            className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                                            type="text"
                                            placeholder="Your title schedule"
                                          />
                                        </div>
                                        <div className="w-full flex justify-start items-center">
                                          <div className="flex mr-4">
                                            <input
                                              type="radio"
                                              id="radio1"
                                              name="radios"
                                              onChange={handleRadio1Change}
                                              checked={radio1Selected}
                                            />
                                            <label htmlFor="radio1">
                                              <span className="ml-2 text-[12px] font-normal text-neutral-70">
                                                Today only
                                              </span>
                                            </label>
                                          </div>
                                          <div className="flex">
                                            <input
                                              type="radio"
                                              id="radio2"
                                              name="radios"
                                              onChange={handleRadio2Change}
                                              checked={radio2Selected}
                                            />
                                            <label htmlFor="radio2">
                                              <span className="ml-2 text-[12px] font-normal text-neutral-70">
                                                Repeat on the same date
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </ModalBody>
                                  <ModalFooter>
                                    <>
                                      <button
                                        className="w-[100px] h-10 text-base font-medium flex items-center justify-center bg-[#EDEDED] text-neutral-base rounded-md"
                                        onClick={onClose}
                                      >
                                        Clear
                                      </button>
                                      <button
                                        className="w-[100px] h-10 text-base font-medium flex items-center justify-center bg-primary-base text-white rounded-md"
                                        onClick={handleSubmitUpdateSchedule}
                                        // encType="application/x-www-form-urlencoded"
                                      >
                                        Save
                                      </button>
                                    </>
                                  </ModalFooter>
                                </>
                              )}
                            </ModalContent>
                          </Modal>
                          <button
                            className="w-[32px] h-[32px] my-1 rounded-md  ml-0"
                            onClick={() => {
                              Alert2(item.post.id, event);
                              setSelectedScheduleId(item.post.id);
                            }}
                          >
                            <Image
                              src="/assets/icons/icons-delete.png"
                              width="32"
                              height="32"
                              className="mr-[14px]"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                : "No dataa"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
