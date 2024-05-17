"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import ScheduleCalendar from "@/components/dashboard/schedule/scheduleCalendar";
import ScheduleTime from "@/components/dashboard/schedule/scheduleTime";
import ProgressBarCustomModal from "@/components/progress-bar-custom-modal/progress-bar-custom-modal";
import Swal from "sweetalert2";

export const groupData = [
    {
      id: "1",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "2",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "3",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "4",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "5",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "6",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "7",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "8",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "9",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "10",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "11",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "12",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "13",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "14",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "15",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
  ];

  export const ExampleAccountData = [
    {
      id: "71289312936",
      images: "fb_pp1.png",
      name: "Example Account Data",
      category: "can add",
    },
    {
      id: "71289312936",
      images: "fb_pp1.png",
      name: "Example Account Data",
      category: "just follow",
    },
    {
      id: "71289312936",
      images: "fb_pp1.png",
      name: "Example Account Data",
      category: "can add",
    },
    {
      id: "71289312936",
      images: "fb_pp1.png",
      name: "Example Account Data",
      category: "just follow",
    },
    {
      id: "71289312936",
      images: "fb_pp1.png",
      name: "Example Account Data",
      category: "can add",
    },
    {
      id: "71289312936",
      images: "fb_pp1.png",
      name: "Example Account Data",
      category: "just follow",
    },
    {
      id: "71289312936",
      images: "fb_pp1.png",
      name: "Example Account Data",
      category: "can add",
    },
    {
      id: "71289312936",
      images: "fb_pp1.png",
      name: "Example Account Data",
      category: "just follow",
    },
  ];

export default function HalamanAutoAdd1() {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState(groupData.map(() => false));

  // Event handlers...
  const handleSelectAll = () => {
    setSelectAllChecked(true);
    setCheckboxes(groupData.map(() => true));
  };

  const handleDeselectAll = () => {
    setSelectAllChecked(false);
    setCheckboxes(groupData.map(() => false));
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);

    const allChecked = newCheckboxes.every((checkbox) => checkbox);
    setSelectAllChecked(allChecked);
  };

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [success, setSuccess] = useState(false);

  const [progress, setProgress] = useState(0);
  const simulateProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsModalOpen(false); // Tutup modal saat progress mencapai 100%

        if (success) {
          Swal.fire({
            imageUrl: "/assets/icons/alert-circle-success.png",
            imageHeight: 70,
            imageWidth: 70,
            title: "Successfully Sending Inbox to Friendlist",
            text: "You have successfully sent an inbox to your friendlist",
            confirmButtonText: "Okey",
            buttonsStyling: false,
            customClass: {
              title: "sweet_titleImportant",
              htmlContainer: "sweet_textImportant",
              confirmButton: "alert-btn",
            },
          });
        } else {
          Swal.fire({
            imageUrl: "/assets/icons/alert-circle-danger.png",
            imageHeight: 70,
            imageWidth: 70,
            title: "Failed Sending Inbox to Friendlist",
            text: "Sorry, the inbox sending process failed due to a problem. Please try again later",
            confirmButtonText: "Try Again",
            buttonsStyling: false,
            customClass: {
              title: "sweet_titleImportant",
              htmlContainer: "sweet_textImportant",
              confirmButton: "alert-btn",
            },
          });
        }
      }
    }, 15);
  };

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[360px] bg-white border border-gray-300 rounded-md">
        <div className="text-lg font-semibold text-black mb-4 ml-3">Choose Group</div>
        <div className="">
          <div className="relative mb-3">
            <input
              className="pl-10 bg-[#F8F8F8] text-xs 2xl:text-base font-normal placeholder:text-xs 2xl:placeholder:text-base placeholder:font-normal text-neutral-60 focus:outline-none h-9 2xl:h-12 rounded-md w-full"
              type="text"
              placeholder="Search"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <img src="/assets/icons/search-icon.png" alt="search icon" />
            </div>
          </div>
          <div className="flex flex-col gap-1 2xl:gap-3 overflow-y-auto max-h-[410px] 2xl:max-h-[810px]">
            {groupData.map((item) => (
              <div key={item.id}>
                <div className="border border-neutral-20 p-1 rounded flex flex-row justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <div className="flex w-7 h-7 2xl:w-[33px] 2xl:h-[33px] items-center mr-2">
                      <img src={`/assets/icons/${item.images}`} alt="icon" />
                    </div>
                    <div>
                      <p className="text-xs 2xl:text-sm font-normal text-black">
                        {item.name}
                      </p>
                      <p className="text-[10px] font-light text-black">
                        {item.member} Member
                      </p>
                    </div>
                  </div>
                  <input type="checkbox" className="w-4 h-4 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[500px] 2xl:w-[715px] p-2">
        <div className="w-full max-h-[565px] 2xl:max-h-[677px] border rounded lg overflow-y-auto">
        <table className="min-w-full table-auto mb-3">
              <thead className="sticky top-0 bg-white border-b border-neutral-20">
                <tr className="border-b-1 text-center">
                  <th className="border-none px-4 py-2 text-sm font-normal text-[#B5B7C0]">
                    Account Name
                  </th>
                  <th className="border-none px-4 py-2 text-sm font-normal text-[#B5B7C0]">
                    ID Account
                  </th>
                  <th className="border-none px-4 py-2 text-sm font-normal text-[#B5B7C0]">
                    Category
                  </th>
                  <th className="border-none px-4 py-2 text-sm font-normal text-[#B5B7C0]">
                    Select
                  </th>
                </tr>
              </thead>
              <tbody>
                {ExampleAccountData.map((item, index) => (
                  <tr key={item.id} className="text-center">
                    <td className="border-none px-4 py-2 text-sm font-normal text-neutral-60">
                      {item.name}
                    </td>
                    <td className="border-none px-4 py-2 text-sm font-normal text-neutral-60">
                      {item.id}
                    </td>
                    <td className="border-none px-4 py-2">
                      <p
                        className={`rounded-[5px] text-[10px] font-light ${
                          item.category === "just follow"
                            ? "bg-error-20 border border-error-60 text-error-60"
                            : "bg-success-20 border border-success-60 text-success-60"
                        }`}
                      >
                        {item.category}
                      </p>
                    </td>
                    <td className="border-none px-4 py-2">
                      <input
                        type="checkbox"
                        checked={checkboxes[index]}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
        <div className="flex items-center w-full justify-end">
          <button
            className="bg-primary-10 rounded-md text-base font-medium text-primary-base py-1 px-5 2xl:py-2 2xl:px-12 mt-3"
            onClick={selectAllChecked ? handleDeselectAll : handleSelectAll}
          >
            {selectAllChecked ? "Deselect All" : "Select All"}
          </button>
        </div>
      </div>
      <div>
            <h1 className="text-lg font-semibold text-neutral-80 mb-4">
              Random Delay
            </h1>
            <div className="flex items-center">
              <button
                className="flex items-center justify-center bcursor-pointer border border-[#CFCFCF] text-neutral-90 w-24 2xl:w-[132px] h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                onClick={() => onOpen()}
              >
                start
              </button>
              <div className="border-[3px] border-neutral-30 w-[29px] mx-2"></div>
              <button
                className="flex items-center justify-center bcursor-pointer border border-[#CFCFCF] text-neutral-90 w-24 2xl:w-[132px] h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                onClick={() => onOpen()}
              >
                end
              </button>
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
                              <ScheduleCalendar />
                            </div>
                          </div>
                          <div className="w-1/3">
                            <ScheduleTime />
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
                            onClick={onClose}
                          >
                            Save
                          </button>
                        </>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <button
                className="bg-primary-base w-28 2xl:w-[154px] h-10 text-sm 2xl:text-base font-medium text-white rounded-md"
                onClick={() => {
                  simulateProgress();
                  openModal();
                }}
              >
                Send to all
              </button>
              <ProgressBarCustomModal
                isOpen={isModalOpen}
                onClose={closeModal}
                progress={progress}
              />
              <button className="bg-primary-base w-32 2xl:w-[154px] h-10 text-sm 2xl:text-base font-medium text-white rounded-md">
                Send to selected
              </button>
            </div>
          </div>
    </div>
  );
}
