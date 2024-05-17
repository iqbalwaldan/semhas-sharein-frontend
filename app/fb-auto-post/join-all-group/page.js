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

const JoinAllGroupData = [
  {
    id: 1,
    image: "fb_pp1.png",
    name: "Hotwheels Rare",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 2,
    image: "fb_pp1.png",
    name: "Hotwheels Ultimate",
    category: "Public",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 3,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 4,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 5,
    image: "fb_pp1.png",
    name: "Hotwheels Ultimate",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 6,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Public",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 7,
    image: "fb_pp1.png",
    name: "Hotwheels Ultimate",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 8,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 9,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 10,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Public",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 11,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 12,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 13,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 14,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Public",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 15,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 16,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 17,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 18,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Public",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 19,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 20,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 21,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 22,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Public",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 23,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
  {
    id: 24,
    image: "fb_pp1.png",
    name: "Hotwheels Sale Indonesia",
    category: "Privat",
    member: "9,3 rb",
    post: "10+",
  },
];

export default function JoinAllGroup() {
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

  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState(
    JoinAllGroupData.map(() => false)
  );

  // Event handler for "Select All" button
  const handleSelectAll = () => {
    setSelectAllChecked(true);
    setCheckboxes(JoinAllGroupData.map(() => true));
  };

  // Event handler for "Deselect All" button
  const handleDeselectAll = () => {
    setSelectAllChecked(false);
    setCheckboxes(JoinAllGroupData.map(() => false));
  };

  // Event handler for individual checkboxes
  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);

    // Check if all checkboxes are selected
    const allChecked = newCheckboxes.every((checkbox) => checkbox);
    setSelectAllChecked(allChecked);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(JoinAllGroupData);

  // Fungsi pencarian
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter data berdasarkan nama
    const filteredResults = JoinAllGroupData.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });

    setSearchResults(filteredResults);
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-1/2 mb-2">
        <input
          className="pl-10 bg-[#F8F8F8] text-xs 2xl:text-base font-normal placeholder:text-xs 2xl:placeholder:text-base placeholder:font-normal text-neutral-60 focus:outline-none h-9 2xl:h-12 rounded-md w-full"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchTerm}
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <img src="/assets/icons/search-icon.png" alt="search icon" />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 h-full">
          <div className="w-full max-h-[565px] 2xl:max-h-[677px] border rounded-lg flex flex-col items-center gap-4 overflow-y-auto mb-3">
            {searchResults.map((item) => (
              <div
                key={item.id}
                className="flex flex-row p-2 w-full items-center border border-neutral-20 rounded-lg"
              >
                <div className="mr-4">
                  <img
                    src={`/assets/images/${item.image}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-base font-semibold text-[#1C1C1C]">
                  {item.name}
                  <div className="flex items-center text-xs font-light text-neutral-60">
                    {item.category}
                    &nbsp; &#183; &nbsp;
                    {item.member}
                    &nbsp;
                    <p> anggota</p>
                    &nbsp; &#183; &nbsp;
                    {item.post}
                    &nbsp;
                    <p> postingan per hari</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center w-full justify-end">
            <button className="bg-primary-10 rounded-md text-base font-medium text-primary-base py-1 px-5 2xl:py-2 2xl:px-12">
              Scrap
            </button>
          </div>
        </div>
        <div className="w-6 h-full"></div>
        <div className="w-1/2 h-full">
          <div className="w-full max-h-[565px] 2xl:max-h-[677px] border rounded lg overflow-y-auto">
            <table className="min-w-full table-auto mb-3">
              <thead className="sticky top-0 bg-white border-b border-neutral-20">
                <tr className="border-b-1 text-center">
                  <th className="border-none px-4 py-2 text-sm font-normal text-[#B5B7C0]">
                    Group Name
                  </th>
                  <th className="border-none px-4 py-2 text-sm font-normal text-[#B5B7C0]">
                    ID Group
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
                {JoinAllGroupData.map((item, index) => (
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
                          item.category === "Privat"
                            ? "bg-error-20 border border-error-60 text-error-60"
                            : "bg-success-20 border border-success-60 text-success-60"
                        }`}
                      >
                        {item.category === "Privat" ? "private" : "public"}
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
              className="bg-primary-10 rounded-md text-base font-medium text-primary-base py-1 px-5 2xl:py-2 2xl:px-12"
              onClick={selectAllChecked ? handleDeselectAll : handleSelectAll}
            >
              {selectAllChecked ? "Deselect All" : "Select All"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-neutral-80 mb-4">
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
      </div>
    </div>
  );
}
