"use client";
import InputImage from "@/components/dashboard/auto-inbox/input-image";
import TextEditor from "@/components/dashboard/text-editor/editor";
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

export const FriendListData = [
  {
    id: 1,
    image: "fb_pp1.png",
    name: "Budi Santoso",
  },
  {
    id: 2,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 3,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 4,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 5,
    image: "fb_pp1.png",
    name: "Budi Santoso",
  },
  {
    id: 6,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 7,
    image: "fb_pp1.png",
    name: "Kim Jong Un",
  },
  {
    id: 8,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 9,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 10,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 11,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 12,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 13,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 14,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 15,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 16,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 17,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 18,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
  {
    id: 19,
    image: "fb_pp1.png",
    name: "Rina Fitriani",
  },
];

export default function FriendList() {
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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(FriendListData);

  // Fungsi pencarian
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter data berdasarkan nama
    const filteredResults = FriendListData.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });

    setSearchResults(filteredResults);
  };

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[360px] bg-white">
        <div className="text-lg font-semibold text-black mb-2">
          Choose Account
        </div>
        <div className="">
          <div className="relative mb-3">
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
          <div className="flex flex-col gap-1 2xl:gap-3 overflow-y-auto max-h-[410px] 2xl:max-h-[810px]">
            {searchResults.map((item) => (
              <div key={item.id}>
                <div className="p-1 rounded flex flex-row justify-between items-center">
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
                  <input type="checkbox" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-5 h-full w-[1074px]">
        <h1 className="text-lg font-semibold text-neutral-80">Your Message</h1>
        <TextEditor />
        <div className="mt-4 flex">
          <InputImage onChange={handleImageUpload} />

          <div className="ml-6">
            <h1 className="text-base font-semibold text-[#A6A6A6] mb-6">
              Detail Photo
            </h1>
            <div className="flex items-center">
              <div className="space-y-4">
                <p className="text-sm font-normal text-[#A6A6A6">Name</p>
                <p className="text-sm font-normal text-[#A6A6A6">Dimensions</p>
                <p className="text-sm font-normal text-[#A6A6A6">Width</p>
                <p className="text-sm font-normal text-[#A6A6A6">Height</p>
                <p className="text-sm font-normal text-[#A6A6A6">Item type</p>
                <p className="text-sm font-normal text-[#A6A6A6">Size</p>
              </div>
              {selectedImageData && (
                <div className="space-y-4 ml-9">
                  <p className="text-sm font-normal text-[#A6A6A6]">
                    {selectedImageData.name}
                  </p>
                  <p className="text-sm font-normal text-[#A6A6A6]">
                    {selectedImageData.dimensions}
                  </p>
                  <p className="text-sm font-normal text-[#A6A6A6]">
                    {selectedImageData.width} pixels
                  </p>
                  <p className="text-sm font-normal text-[#A6A6A6]">
                    {selectedImageData.height} pixels
                  </p>
                  <p className="text-sm font-normal text-[#A6A6A6]">
                    {selectedImageData.itemType}
                  </p>
                  <p className="text-sm font-normal text-[#A6A6A6]">
                    {selectedImageData.size} bytes
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
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
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="bg-primary-base text-xs 2xl:text-base font-medium text-white rounded-md py-2 px-6">
            Send to all
          </button>
          <button className="bg-primary-10 text-xs 2xl:text-base font-medium text-primary-base rounded-md py-2 px-6">
            Send to selected
          </button>
        </div>
      </div>
    </div>
  );
}
