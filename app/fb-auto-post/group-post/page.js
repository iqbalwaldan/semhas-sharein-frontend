"use client";
import ChooseAccount from "@/components/dashboard/choose-account";
import ChooseGroup from "@/components/dashboard/choose-group";
import GenerateCaption from "@/components/dashboard/generate-caption/generate-caption";
import SelectCaption from "@/components/dashboard/generate-caption/select-caption";
import DatePickerEnd from "@/components/dashboard/schedule/datePickerEnd";
import DatePickerStart from "@/components/dashboard/schedule/datePickerStart";
import TimeEnd from "@/components/dashboard/schedule/timeEnd";
import TimeStart from "@/components/dashboard/schedule/timeStart";
import TextEditor from "@/components/dashboard/text-editor/editor";
import ProcessedImage from "@/components/fb-image_upload/processedImage";
import InputError from "@/components/inputError";
import { useAuth } from "@/hooks/auth";
import { useGroupPost } from "@/hooks/groupPost";
import axios from "@/lib/axios";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/components/dashboard/schedule/DatePicker.css";
import ScheduleTime from "@/components/dashboard/schedule/scheduleTime";
import { useAuthFacebook } from "@/hooks/facebook";

export default function GroupPost() {
  const [loading, setLoading] = useState(false);

  const [selectedAccount, setSelectedAccount] = useState();
  const [selectedAccountId, setSelectedAccountId] = useState();

  const handleAccountSelect = (account) => {
    setSelectedAccount(account);
  };
  const handleAccountSelectId = (accountId) => {
    setSelectedAccountId(accountId);
  };

  const [selectedGroupId, setSelectedGroupId] = useState([]);

  const handleSelectedGroupIdChange = (groupId) => {
    setSelectedGroupId(groupId);
  };

  const [processedImage, setProcessedImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const [image, setImage] = useState("");

  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const [regenerateBackgroundColor, setRegenerateBackgroundColor] = useState(
    generateRandomColor()
  );

  const handleRegenerateColor = () => {
    setRegenerateBackgroundColor(generateRandomColor());
    borderedImage(borderedImage(image)); // Pastikan untuk menyertakan parameter yang sesuai
  };

  const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], { type: mime });
  };

  const borderedImage = (imageUrl) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

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
      ctx.fillStyle = regenerateBackgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the uploaded image centered on top of the background
      ctx.drawImage(uploadedImage, x, y);

      // Convert the canvas to a data URL (base64 encoded image)
      const processedImageUrl = canvas.toDataURL("image/png");

      const blob = dataURLtoBlob(processedImageUrl);

      setProcessedImage(processedImageUrl);
      setImage(blob);
      setImageUploaded(true);
    };
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      borderedImage(reader.result);
    };

    reader.readAsDataURL(file);
    setImage(file);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contentModal, setContentModal] = React.useState("");

  const contents = ["start", "end", "schedule", "caption"];

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

  const handleCalendarSelect = (selectedCategory) => {
    setSelectCategory(selectedCategory);
    setIsDropdownOpen(false);
  };

  // handle time data

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startTime, setStartTime] = useState();
  const [startMinute, setStartMinute] = useState();

  const handleStartData = ({ time, minute }) => {
    setStartTime(time);
    setStartMinute(minute);
  };
  const [endTime, setEndTime] = useState();
  const [endMinute, setEndMinute] = useState();

  const handleEndData = ({ time, minute }) => {
    setEndTime(time);
    setEndMinute(minute);
  };

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

  const handleTimeData = ({ time, minute }) => {
    setTime(time);
    setMinute(minute);
  };

  const { setGroupPost, setGroupSchedulePost } = useGroupPost();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [caption, setCaption] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const finalMessage = title + "\n" + price + "\n" + caption + "\n" + hashtag;
    const groupIds = Array.isArray(selectedGroupId)
      ? selectedGroupId
      : [selectedGroupId];

    setGroupPost({
      group_id: groupIds.reduce((acc, id, index) => {
        acc[index] = id;
        return acc;
      }, {}),
      message: finalMessage,
      file: image,
      setErrors,
      setStatus,
    }).finally(() => {
      setLoading(false);
      // showCustomErrorAlert();
    });
  };

  const { user } = useAuth();

  const handleSubmitSchedule = (event) => {
    event.preventDefault();
    setLoading(true);

    setGroupSchedulePost({
      user_id: user.id,
      user_fb_account_id: selectedAccountId,
      title: title,
      price: price,
      caption: caption,
      hashtag: hashtag,
      post_time: dateTimeInput,
      image: image,
      setErrors,
      setStatus,
    }).finally(() => {
      setLoading(false);
      // showCustomErrorAlert();
    });
  };

  const showCustomErrorAlert = () => {
    Swal.fire({
      imageUrl: "/assets/icons/alert-circle-success.png",
      imageHeight: 70,
      imageWidth: 70,
      title: "Successfully Set Newsletter",
      text: "You have successfully sent an inbox to your friendlist",
      confirmButtonText: "Okey",
      buttonsStyling: false,
      customClass: {
        title: "sweet_titleImportant",
        htmlContainer: "sweet_textImportant",
        confirmButton: "alert-btn",
      },
    });
  };

  const handleTextChange = (editorValue) => {
    setCaption(editorValue);
  };

  // handle generate data

  const [contentAPI, setContentAPI] = useState("");

  const handleContentAPIChange = (content) => {
    setContentAPI(content);
  };

  const [dataGenerateCaption, setDataGenerateCaption] = useState({
    name: "",
    category: "",
    description: "",
  });

  const handleChangeGenerateCaption = (event) => {
    const { name, value } = event.target;
    setDataGenerateCaption({
      ...dataGenerateCaption,
      [name]: value,
    });
  };

  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const formCaptionElements = [
    <GenerateCaption
      dataGenerateCaption={dataGenerateCaption}
      handleChangeGenerateCaption={handleChangeGenerateCaption}
      handleContentAPIChange={handleContentAPIChange}
    />,
    <SelectCaption
      dataSelectCaption={dataGenerateCaption}
      handleChangeSelectCaption={handleChangeGenerateCaption}
      contentAPI={contentAPI}
      isLoading={isLoading}
    />,
  ];

  const generateCaption = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/open-ai/generate", {
        params: {
          input:
            "buatkan caption untuk menjual " +
            dataGenerateCaption.title +
            "dalam bahasa indonesia",
        },
      });

      const content = response.data.data.choices[0].message.content;
      setContentAPI(content);
      props.handleContentAPIChange(content);
      console.log(response.data.choice);
      // Update your state or perform other actions based on the response
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    } finally {
      // Set loading to false after the request is complete (whether successful or not)
      setIsLoading(false);
    }
  };

  const [manualHashtag, setManualHashtag] = useState("");

  const [generateHashtag, setGenerateHashtag] = useState("");

  const hashtagString = generateHashtag;

  // Memisahkan string menjadi array berdasarkan "\n"
  const hashtagArray = hashtagString.split("\n");

  // Menghapus angka dan titik dari setiap elemen array
  const cleanedHashtags = hashtagArray.map((hashtag) =>
    hashtag.replace(/^\d+\.\s*/, "")
  );

  const openAIGenerateHashtag = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/open-ai/generate", {
        params: { input: "buatkan hashtag tentang " + title },
      });
      const content = response.data.data.choices[0].message.content;
      setGenerateHashtag(content);
      console.log(response.data.choice);
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    } finally {
      // Set loading to false after the request is complete (whether successful or not)
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex">
      <form></form>
      <div className="w-[24.5%] h-full">
        <ChooseAccount
          onSelectAccount={handleAccountSelect}
          onSelectAccountId={handleAccountSelectId}
        />
        <div className="mb-6"></div>
        <ChooseGroup
          selectedAccount={selectedAccount}
          onSelectedGroupIdChange={handleSelectedGroupIdChange}
        />
      </div>
      <div className="w-[75.5%] h-full">
        <div className="flex">
          <div className="w-1/2 2xl:h-[832px] h-[750px]">
            <div className="p-4 text-2xl font-semibold mb-4 border border-neutral-20 rounded-lg">
              <div className="flex flex-col w-full mb-2">
                <div className="flex mb-1">
                  <p className="font-normal text-base text-neutral-70">
                    Title Group Post
                  </p>
                  <p className="font-normal text-base text-error-base">*</p>
                </div>
                <input
                  className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                  type="text"
                  placeholder="Your title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <InputError messages={errors.title} className="mt-2" />
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
              <TextEditor
                content={handleTextChange}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              <p className="flex justify-end text-xs font-normal text-neutral-70 mb-2">
                don&#39;t have a caption yet?&nbsp;
                <span onClick={() => handleOpenModal("caption")}>
                  <span className="text-xs font-bold text-primary-base cursor-pointer">
                    Generate here
                  </span>
                </span>
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
                  value={hashtag}
                  onChange={(e) => {
                    setHashtag(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-wrap gap-x-1 gap-y-2 mb-4 2xl:mb-9">
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center loading"></div>
                  </div>
                ) : (
                  <>
                    {cleanedHashtags.map((hashtag, index) => (
                      <div
                        className={`h-5 bg-white shadow-md text-xs font-normal text-primary-base px-1 py-[2px] box-border rounded-[13px] cursor-pointer `}
                        key={index}
                        onClick={() => setSelectedHashtagIndex(index)}
                      >
                        {hashtag}
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="w-full flex justify-end">
                <span
                  onClick={openAIGenerateHashtag}
                  className="cursor-pointer text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md"
                >
                  Regenerate
                </span>
              </div>
            </div>
          </div>
          <div className="w-4 2xl:w-[22px]"></div>
          <div className="w-1/2 p-4 border border-neutral-20 rounded-lg 2xl:h-[832px] h-[550px] flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center">
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
              <div className="flex items-center mt-7">
                <label
                  for="Images"
                  class="bg-white border border-neutral-50 px-3 py-[0.32rem] rounded-l text-base font-normal text-[#A6A6A6]"
                >
                  Image
                </label>
                <input
                  type="file"
                  label="images"
                  id="files"
                  className="cursor-pointer w-full border border-y-neutral-50 border-l-0 border-r-neutral-50 rounded-r text-base font-normal text-[#A6A6A6] file:hidden bg-white px-3 py-[0.32rem] focus:text-neutral-70"
                  onChange={handleImageUpload}
                />
                <InputError messages={errors.image} className="mt-2" />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <span
                onClick={handleRegenerateColor}
                className="cursor-pointer text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md"
              >
                Regenerate
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-80 mb-4">
              Random Delay
            </h1>
            <div className="flex items-center justify-evenly">
              <span
                className="flex items-center justify-center cursor-pointer border border-[#CFCFCF] text-neutral-90 w-24 2xl:w-[132px] h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                onClick={() => handleOpenModal("start")}
              >
                start
              </span>
              <div className="border-[3px] border-neutral-30 w-[29px] mx-2"></div>
              <span
                className="flex items-center justify-center cursor-pointer border border-[#CFCFCF] text-neutral-90 w-24 2xl:w-[132px] h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                onClick={() => handleOpenModal("end")}
              >
                end
              </span>
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
                        {contentModal === "start"
                          ? "Determine the schedule date and time"
                          : contentModal === "end"
                          ? "Determine the schedule date and time"
                          : contentModal === "schedule"
                          ? "Determine the schedule date and time"
                          : "Generate captions for group post"}
                      </ModalHeader>
                      <ModalBody>
                        {contentModal === "start" ? (
                          <div className="flex justify-between">
                            <div className="w-1/2">
                              <div className="p-2 border border-primary-20 rounded-lg flex items-center justify-center">
                                <DatePickerStart
                                  startDate={startDate}
                                  setStartDate={setStartDate}
                                  endDate={endDate}
                                />
                              </div>
                            </div>
                            <div className="w-1/3">
                              {/* <ScheduleTime /> */}
                              <TimeStart
                                startTime={startTime}
                                startMinute={startMinute}
                                setStartData={handleStartData}
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
                        ) : contentModal === "end" ? (
                          <div className="flex justify-between">
                            <div className="w-1/2">
                              <div className="p-2 border border-primary-20 rounded-lg flex items-center justify-center">
                                <DatePickerEnd
                                  startDate={startDate}
                                  endDate={endDate}
                                  setEndDate={setEndDate}
                                />
                              </div>
                            </div>
                            <div className="w-1/3">
                              <TimeEnd
                                endTime={endTime}
                                endMinute={endMinute}
                                setEndData={handleEndData}
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
                        ) : contentModal === "schedule" ? (
                          <div className="flex justify-between">
                            <div className="w-1/2">
                              <div className="p-2 border border-primary-20 rounded-lg flex items-center justify-center">
                                <DatePicker
                                  selected={startDatePicker}
                                  onChange={(date) => setStartDatePicker(date)}
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
                            </div>
                          </div>
                        ) : (
                          <div className="px-[10%]">
                            <div className="mb-4">
                              {formCaptionElements[activeTab]}
                            </div>
                            <div className="flex flex-wrap gap-x-6 mx-auto">
                              <span
                                disabled={activeTab === 0 ? "disabled" : ""}
                                onClick={() => setActiveTab((prev) => prev - 1)}
                                className={`px-4 py-2 rounded-md text-base font-medium bg-primary-base text-white ${
                                  activeTab === 0
                                    ? "opacity-50 bg-neutral-70"
                                    : "opacity-100"
                                }`}
                              >
                                <MdNavigateBefore />
                              </span>
                              <span
                                disabled={
                                  activeTab === formCaptionElements.length - 1
                                    ? "disabled"
                                    : ""
                                }
                                onClick={() => setActiveTab((prev) => prev + 1)}
                                className={`px-4 py-2 rounded-md text-base font-medium bg-primary-base text-white ${
                                  activeTab === formCaptionElements.length - 1
                                    ? "opacity-50 bg-neutral-70"
                                    : "opacity-100"
                                }`}
                              >
                                <MdNavigateNext onClick={generateCaption} />
                              </span>
                              {activeTab === formCaptionElements.length - 1 ? (
                                <span
                                  className="px-4 py-2 rounded-md text-base font-medium bg-primary-base text-white"
                                  onClick={() => console.log(data)}
                                >
                                  Submit
                                </span>
                              ) : null}
                            </div>
                          </div>
                        )}
                      </ModalBody>
                      <ModalFooter>
                        {contentModal === "schedule" ? (
                          <>
                            <span
                              className="w-[100px] h-10 text-base font-medium flex items-center justify-center bg-[#EDEDED] text-neutral-base rounded-md"
                              onClick={onClose}
                            >
                              Clear
                            </span>
                            <span
                              className="w-[100px] h-10 text-base font-medium flex items-center justify-center bg-primary-base text-white rounded-md"
                              onClick={handleSubmitSchedule}
                            >
                              Save
                            </span>
                          </>
                        ) : (
                          <>
                            <span
                              className="w-[100px] h-10 text-base font-medium flex items-center justify-center bg-[#EDEDED] text-neutral-base rounded-md"
                              onClick={onClose}
                            >
                              Clear
                            </span>
                            <span
                              className="w-[100px] h-10 text-base font-medium flex items-center justify-center bg-primary-base text-white rounded-md"
                              onClick={onClose}
                            >
                              Next
                            </span>
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
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md"
            >
              {loading ? "Loading..." : "Send now"}
            </button>
            <button
              onClick={() => handleOpenModal("schedule")}
              className="mx-2 2xl:mx-4 text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md"
            >
              Send by Schedule
            </button>
            <span className="text-sm 2xl:text-base font-medium text-neutral-10 bg-primary-base p-2 2xl:px-4 2xl:py-2 rounded-md">
              Clear All
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
