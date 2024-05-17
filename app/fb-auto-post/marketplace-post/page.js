"use client";
import ChooseAccount from "@/components/dashboard/choose-account";
import ChooseGroup1 from "@/components/dashboard/choose-group-1";
import ScheduleCalendar from "@/components/dashboard/schedule/scheduleCalendar";
import ScheduleTime from "@/components/dashboard/schedule/scheduleTime";
import TextEditor from "@/components/dashboard/text-editor/editor";
import TextEditor2 from "@/components/dashboard/text-editor/editor2";
import SampleText from "@/components/dashboard/text-editor/sampletext";
import ImageUpload from "@/components/fb-image_upload/imageUpload";
import ProcessedImage from "@/components/fb-image_upload/processedImage";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import {FaCheck} from 'react-icons/fa'

const hashTagData = [
  {
    id: "1",
    name: "sellcarsurabaya",
  },
  {
    id: "2",
    name: "car",
  },
  {
    id: "3",
    name: "secondcar",
  },
  {
    id: "4",
    name: "cheapcar",
  },
  {
    id: "5",
    name: "sellcarsidoarjo",
  },
  {
    id: "6",
    name: "cheapcar",
  },
  {
    id: "7",
    name: "sellcarsidoarjo",
  },
  {
    id: "8",
    name: "usedcarshowroom",
  },
  {
    id: "9",
    name: "toyotasupra",
  },
  {
    id: "10",
    name: "sellcarsurabaya",
  },
  {
    id: "11",
    name: "car",
  },
];

export default function MarketplacePost() {
  const [processedImage, setProcessedImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageUpload = (imageUrl) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Define the background color
    const backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16); // Change this to your desired color

    // Create a new Image object for the uploaded image
    const uploadedImage = new Image();
    uploadedImage.src = imageUrl;

    uploadedImage.onload = () => {
      // Set canvas dimensions to match the uploaded image
      canvas.width = uploadedImage.width + uploadedImage.width * 0.3;
      canvas.height = uploadedImage.height + uploadedImage.width * 0.3;

      // Calculate the coordinates to center the image on the canvas
      const x = (canvas.width - uploadedImage.width) / 2; 
      const y = (canvas.height - uploadedImage.height) / 2;

      // Fill the canvas with the background color
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the uploaded image centered on top of the background
      ctx.drawImage(uploadedImage, x, y);

      // Convert the canvas to a data URL (base64 encoded image)
      const processedImageUrl = canvas.toDataURL("image/png");

      // Set processed image URL using setProcessedImage function
      setProcessedImage(processedImageUrl);
      setImageUploaded(true);
    };
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contentModal, setContentModal] = React.useState("");

  const contents = ["schedule", "caption"];

  const handleOpenModal = (contentModal) => {
    setContentModal(contentModal);
    onOpen();
  };

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

  const categorySelect = ["Cat1", "Cat2","Cat3","Cat4","Cat5",];
  const [selectCategory, setSelectCategory] = useState("Select category");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleCalendarSelect = (selectedCategory) => {
    setSelectCategory(selectedCategory);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-[24.5%] h-full">
        <ChooseAccount />
        <div className="mb-6"></div>
        <ChooseGroup1 />
      </div>
      <div className="w-[75.5%] h-full">
        <div className="flex">
          <div className="w-1/2 2xl:h-[832px] h-[528px]">
            <div className="p-4 text-2xl font-semibold mb-4 border border-neutral-20 rounded-lg">
              <div className="flex flex-col w-full mb-2">
                <div className="flex mb-1">
                  <p className="font-normal text-base text-neutral-70">
                    Title Marketplace Post
                  </p>
                  <p className="font-normal text-base text-error-base">*</p>
                </div>
                <input
                  className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                  type="text"
                  placeholder="Your title"
                />
              </div>
              <div className="flex flex-col w-full mb-2">
                <div className="flex mb-1">
                  <p className="font-normal text-base text-neutral-70">Category</p>
                  <p className="font-normal text-base text-error-base">*</p>
                </div>
                <input
                  className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                  type="text"
                  placeholder="Your category"
                />
              </div>
              <div className="flex flex-col w-full mb-2">
                <div className="flex mb-1">
                  <p className="font-normal text-base text-neutral-70">Price</p>
                  <p className="font-normal text-base text-error-base">*</p>
                </div>
                <input
                  className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                  type="text"
                  placeholder="Your price"
                />
              </div>
              <div className="flex flex-col w-full mb-2">
                <div className="flex mb-1">
                  <p className="font-normal text-base text-neutral-70">Location</p>
                  <p className="font-normal text-base text-error-base">*</p>
                </div>
                <input
                  className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                  type="text"
                  placeholder="Your location"
                />
              </div>
              <div className="flex flex-col w-full mb-2">
                <div className="flex mb-1">
                  <p className="font-normal text-base text-neutral-70">
                    Caption
                  </p>
                  <p className="font-normal text-base text-error-base">*</p>
                </div>
              </div>
              <TextEditor/>
              <p className="flex justify-end text-xs font-normal text-neutral-70 mb-2">
                don&#39;t have a caption yet?&nbsp;
                <button onClick={() => handleOpenModal("caption")}>
                  <span className="text-xs font-bold text-primary-base cursor-pointer">
                    Generate here
                  </span>
                </button>
              </p>
              <div className="flex flex-col w-full mb-2">
                <div className="flex mb-1">
                  <p className="font-normal text-base text-neutral-70">
                    Hashtag
                  </p>
                  <p className="font-normal text-base text-error-base">*</p>
                </div>
                <input
                  className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                  type="text"
                  placeholder="Your hashtag for the post"
                />
              </div>
              <div className="flex flex-wrap gap-x-1 gap-y-2 mb-4 2xl:mb-9">
                {hashTagData.map((item) => (
                  <div key={item.id}>
                    <div className="h-5 bg-white shadow-md text-xs font-normal text-primary-base px-1 py-[2px] box-border rounded-[13px] cursor-pointer">
                      #{item.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-end">
                <button className="text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md">
                  Regenerate
                </button>
              </div>
            </div>
          </div>
          <div className="w-4 2xl:w-[22px]"></div>
          <div className="w-1/2 p-4 border border-neutral-20 rounded-lg 2xl:h-[832px] h-[550px] flex flex-col justify-between">
            <div>
              <div className="flex flex-col w-full border border-neutral-20 rounded-lg">
                <div className="2xl:h-[602px] 2xl:w-[483px] w-full h-[400px] bg-white flex items-center justify-center">
                  {imageUploaded ? (
                    processedImage && (
                      <ProcessedImage imageUrl={processedImage} />
                    )
                  ) : (
                    <div>
                      <img src="/assets/icons/img-icon.png" alt="image-icon" />
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-7">
                <ImageUpload onUpload={handleImageUpload} />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button className="text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md">
                Regenerate
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-80 mb-2 mt-44 ml-1">
              Random Delay
            </h1>
            <div className="flex items-center justify-evenly">
              <button
                className="flex items-center justify-center cursor-pointer border border-[#CFCFCF] text-neutral-90 w-24 2xl:w-[132px] h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                onClick={() => handleOpenModal("schedule")}
              >
                start
              </button>
              <div className="border-[3px] border-neutral-30 w-[29px] mx-2"></div>
              <button
                className="flex items-center justify-center cursor-pointer border border-[#CFCFCF] text-neutral-90 w-24 2xl:w-[132px] h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                onClick={() => handleOpenModal("schedule")}
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
                        {contentModal === "schedule"
                          ? "Determine the schedule date and time"
                          : "Generate captions for marketplace"}
                      </ModalHeader>
                      <ModalBody>
                        {contentModal === "schedule" ? (
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
                        ) : (
                          <div className="flex justify-between">
                            <div className="w-[40%]">
                              <div className="flex flex-col w-full mb-2">
                                <div className="flex mb-1">
                                  <p className="font-normal text-base text-neutral-70">
                                    Product Name
                                  </p>
                                  <p className="font-normal text-base text-error-base">
                                    *
                                  </p>
                                </div>
                                <input
                                  className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                                  type="text"
                                  placeholder="Your title"
                                />
                              </div>
                              <div className="flex flex-col w-full mb-2">
                                <div className="flex mb-1">
                                  <p className="font-normal text-base text-neutral-70">
                                    Category
                                  </p>
                                  <p className="font-normal text-base text-error-base">
                                    *
                                  </p>
                                </div>
                                <div onClick={toggleDropdown} className="relative cursor-pointer flex items-center border border-[#CFCFCF] p-3 text-neutral-70 h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light">
                                  <p className={`${selectCategory === "Select category" ? "text-neutral-30" : "text-neutral-90"}`}>
                                    {selectCategory}
                                  </p>
                                  
                                  {isDropdownOpen && (
                                  <div className="w-full absolute z-[12] mt-2 top-9 right-0 bg-white border border-[#CFCFCF] shadow-lg rounded-md">
                                    {categorySelect.map((category) => (
                                      <div
                                        key={category}
                                        onClick={() =>
                                          handleCalendarSelect(category)
                                        }
                                        className="w-full cursor-pointer text-sm font-normal text-neutral-90 p-2 flex items-center justify-between hover:bg-slate-300"
                                      >
                                        {category}
                                        {category === selectCategory && <FaCheck color="green" />}
                                      </div>
                                    ))}
                                  </div>
                                )}
                                </div>
                                
                              </div>
                              <div className="flex flex-col w-full mb-2">
                                <div className="flex mb-1">
                                  <p className="font-normal text-base text-neutral-70">
                                    Caption
                                  </p>
                                  <p className="font-normal text-base text-error-base">
                                    *
                                  </p>
                                </div>
                                <TextEditor2 />
                              </div>
                            </div>
                            <div className="w-[55%]">
                              <h1 className="text-base 2xl:text-xl font-semibold text-neutral-90 mb-2 2xl:mb-4">
                                Our Recommendations
                              </h1>
                              <div className="grid grid-cols-2 grid-rows-3 gap-4">
                                <div className="w-full">
                                  <div className="w-full h-[100px] 2xl:h-[150px] border border-neutral-20 p-2 2xl:p-4 rounded-lg overflow-y-auto ">
                                    <SampleText />
                                  </div>
                                  <div className="flex items-center justify-end cursor-pointer mt-2">
                                    <img
                                      src="/assets/icons/copy.png"
                                      width={14}
                                      height={14}
                                    />
                                    <p className="ml-2 text-[11px] font-semibold text-primary-base">
                                      Copy
                                    </p>
                                  </div>
                                </div>
                                <div className="w-full">
                                  <div className="w-full h-[100px] 2xl:h-[150px] border border-neutral-20 p-2 2xl:p-4 rounded-lg overflow-y-auto ">
                                    <SampleText />
                                  </div>
                                  <div className="flex items-center justify-end cursor-pointer mt-2">
                                    <img
                                      src="/assets/icons/copy.png"
                                      width={14}
                                      height={14}
                                    />
                                    <p className="ml-2 text-[11px] font-semibold text-primary-base">
                                      Copy
                                    </p>
                                  </div>
                                </div>
                                <div className="w-full">
                                  <div className="w-full h-[100px] 2xl:h-[150px] border border-neutral-20 p-2 2xl:p-4 rounded-lg overflow-y-auto ">
                                    <SampleText />
                                  </div>
                                  <div className="flex items-center justify-end cursor-pointer mt-2">
                                    <img
                                      src="/assets/icons/copy.png"
                                      width={14}
                                      height={14}
                                    />
                                    <p className="ml-2 text-[11px] font-semibold text-primary-base">
                                      Copy
                                    </p>
                                  </div>
                                </div>
                                <div className="w-full">
                                  <div className="w-full h-[100px] 2xl:h-[150px] border border-neutral-20 p-2 2xl:p-4 rounded-lg overflow-y-auto ">
                                    <SampleText />
                                  </div>
                                  <div className="flex items-center justify-end cursor-pointer mt-2">
                                    <img
                                      src="/assets/icons/copy.png"
                                      width={14}
                                      height={14}
                                    />
                                    <p className="ml-2 text-[11px] font-semibold text-primary-base">
                                      Copy
                                    </p>
                                  </div>
                                </div>
                                <div className="w-full">
                                  <div className="w-full h-[100px] 2xl:h-[150px] border border-neutral-20 p-2 2xl:p-4 rounded-lg overflow-y-auto ">
                                    <SampleText />
                                  </div>
                                  <div className="flex items-center justify-end cursor-pointer mt-2">
                                    <img
                                      src="/assets/icons/copy.png"
                                      width={14}
                                      height={14}
                                    />
                                    <p className="ml-2 text-[11px] font-semibold text-primary-base">
                                      Copy
                                    </p>
                                  </div>
                                </div>
                                <div className="w-full">
                                  <div className="w-full   h-[100px] 2xl:h-[150px] border border-neutral-20 p-2 2xl:p-4 rounded-lg overflow-y-auto ">
                                    <SampleText />
                                  </div>
                                  <div className="flex items-center justify-end cursor-pointer mt-2">
                                    <img
                                      src="/assets/icons/copy.png"
                                      width={14}
                                      height={14}
                                    />
                                    <p className="ml-2 text-[11px] font-semibold text-primary-base">
                                      Copy
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full flex justify-end">
                                <div className="cursor-pointer 2xl:w-8 2xl:h-8 w-6 h-6 mt-2 2xl:mt-4 rounded-full flex justify-center items-center bg-primary-base">
                                  <div className="w-1/2 h-1/2">
                                    <img src="/assets/icons/reload.png" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </ModalBody>
                      <ModalFooter>
                        {contentModal === "schedule" ? (
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
                        ) : (
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
                              Next
                            </button>
                          </>
                        )}
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" />
              <p className="ml-2 text-base font-normal text-neutral-70">
                Save settings
              </p>
            </div>
          </div>
          <div className="flex items-end">
            <button className="text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md">
              Send now
            </button>
            <button className="mx-2 2xl:mx-4 text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md">
              Send by Schedule
            </button>
            <button className="text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
