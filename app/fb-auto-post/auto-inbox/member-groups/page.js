"use client";
import ChooseGroupAutoInbox from "@/components/dashboard/auto-inbox/choose-group-auto-inbox";
import InputImage from "@/components/dashboard/auto-inbox/input-image";
import ScheduleCalendar from "@/components/dashboard/schedule/scheduleCalendar";
import ScheduleTime from "@/components/dashboard/schedule/scheduleTime";
import TextEditor from "@/components/dashboard/text-editor/editor";
import ProgressBarCustomModal from "@/components/progress-bar-custom-modal/progress-bar-custom-modal";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FriendListData } from "../friend-list/page";

export default function MemberGroups() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageData, setSelectedImageData] = useState(null);

  const handleImageUpload = (image) => {
    setSelectedImage(image);

    // Create a FileReader to read the image file
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;

      img.onload = function () {
        // Get image width and height
        const width = img.width;
        const height = img.height;
        const dimensions = `${width}x${height}`;

        const imageData = {
          name: image.name,
          width,
          height,
          dimensions,
          itemType: image.type,
          size: image.size,
        };

        setSelectedImageData(imageData);
      };
    };

    reader.readAsDataURL(image);
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

  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState(FriendListData.map(() => false));

  // Event handler for "Select All" button
  const handleSelectAll = () => {
    setSelectAllChecked(true);
    setCheckboxes(FriendListData.map(() => true));
  };

  // Event handler for "Deselect All" button
  const handleDeselectAll = () => {
    setSelectAllChecked(false);
    setCheckboxes(FriendListData.map(() => false));
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

  return (
    <div className="h-full w-full flex">
      <div className="w-[360px] h-full mr-6">
        <div className="w-full h-full border border-neutral-10 rounded-lg">
          <ChooseGroupAutoInbox />
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-primary-10 rounded-md px-14 py-2 mt-6 text-sm font-medium text-primary-base">
            Scrap
          </button>
        </div>
      </div>
      <div className="flex">
        <div>
          <div className="h-[450px] w-[350px] 2xl:h-[780px] 2xl:w-[520px] bg-white border border-neutral-10 rounded-lg p-2">
            <div className="text-lg font-semibold text-black mb-2">
              Choose Account
            </div>
            <div className="flex flex-col gap-1 2xl:gap-3 overflow-y-auto max-h-[395px] 2xl:max-h-[740px] pr-1">
              {FriendListData.map((item, index) => (
                <div key={item.id}>
                  <div className="p-1 border border-neutral-10 rounded flex flex-row justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex w-7 h-7 2xl:w-[33px] 2xl:h-[33px] items-center mr-2 2xl:mr-4">
                        <img src={`/assets/images/${item.image}`} />
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs 2xl:text-sm font-normal text-neutral-80">
                          {item.name}
                        </p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={checkboxes[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              className="bg-primary-10 rounded-md px-6 py-2 mt-6 text-sm font-medium text-primary-base"
              onClick={selectAllChecked ? handleDeselectAll : handleSelectAll}
            >
              {selectAllChecked ? "Deselect All" : "Select All"}
            </button>
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
        <div className="ml-5 h-full w-[350px] 2xl:w-[497px]">
          <h1 className="text-lg font-semibold text-neutral-80">
            Your Message
          </h1>
          <div>
            <TextEditor />
          </div>
          <div className="mt-4 ">
            <InputImage
              onChange={handleImageUpload}
              containerWidth="100%"
              containerHeight="330px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
