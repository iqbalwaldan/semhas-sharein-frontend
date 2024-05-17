"use client";
import TextEditor from "@/components/dashboard/text-editor/editor";
import ImageUpload from "@/components/fb-image_upload/imageUpload";
import ProcessedImage from "@/components/fb-image_upload/processedImage";
import InputError from "@/components/inputError";
import { useAuth } from "@/hooks/auth";
import { useReminder } from "@/hooks/reminder";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

export default function Reminder() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const Alert = () => {
    Swal.fire({
      icon: "success",
      title: "Successfully Added a Reminder",
      text: "You have successfully add a reminder and we will send you a reminder when the set date arrives",
      confirmButtonText: "Okey",
      confirmButtonColor: "#2652FF",
    });
  };
  const Alert1 = () => {
    Swal.fire({
      icon: "error",
      title: "Failed to Add Reminder",
      text: "Sorry, the reminder failed to add because the date you entered has passed.",
      confirmButtonText: "Try Again",
      confirmButtonColor: "#2652FF",
    });
  };

  const [processedImage, setProcessedImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const [image, setImage] = useState("");

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

    const backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    const uploadedImage = new Image();
    uploadedImage.src = imageUrl;

    uploadedImage.onload = () => {
      canvas.width = uploadedImage.width + uploadedImage.width * 0.3;
      canvas.height = uploadedImage.height + uploadedImage.width * 0.3;

      const x = (canvas.width - uploadedImage.width) / 2;
      const y = (canvas.height - uploadedImage.height) / 2;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(uploadedImage, x, y);

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
  };

  const countryCodes = ["+62", "+1", "+44", "+81"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [country_number, setCountry_number] = useState("+62");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCodeSelect = (code) => {
    setCountry_number(code);
    setIsDropdownOpen(false);
  };

  const dateToFormat = selectedDate || new Date();
  const formattedDateString = dateToFormat.toISOString().split("T")[0];

  const { setReminder } = useReminder();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [description, setDescription] = useState("");
  const [reminder_time, setReminder_time] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullPhoneNumber = `${country_number}${phone_number}`;
    const formattedDateString = getFormattedDate();

    setReminder({
      name,
      email,
      phone_number: fullPhoneNumber,
      description,
      reminder_time: formattedDateString,
      image,
      setErrors,
      setStatus,
    });
    showCustomErrorAlert();
  };

  const showCustomErrorAlert = () => {
    Swal.fire({
      imageUrl: "/assets/icons/alert-circle-success.png",
      imageHeight: 70,
      imageWidth: 70,
      title: "Successfully Add Reminder",
      text: "You have successfully add reminder",
      confirmButtonText: "Okey",
      buttonsStyling: false,
      customClass: {
        title: "sweet_titleImportant",
        htmlContainer: "sweet_textImportant",
        confirmButton: "alert-btn",
      },
    });
  };

  const getFormattedDate = () => {
    // Format the time and minute with leading zeros
    const formattedTime = formatValue(time);
    const formattedMinute = formatValue(minute);

    // Format the selected date
    const formattedDateString = selectedDate
      ? selectedDate.toISOString().split("T")[0]
      : "";

    // Return the formatted date and time
    return `${formattedDateString} ${formattedTime}:${formattedMinute}:00`;
  };

  const { user } = useAuth({ middleware: "auth" });

  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const handleTextChange = (editorValue) => {
    setDescription(editorValue);
  };

  return (
    <div className="flex w-full">
      <form onSubmit={handleSubmit} className="flex gap-5 w-full">
        <div className="flex flex-col w-[69%]">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="grid-password"
            >
              Name
              <span className="font-normal text-base text-error-base">*</span>
            </label>
            <input
              className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light w-full"
              id="label"
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputError messages={errors.name} className="mt-2" />
          </div>

          <div className="md:flex w-full flex-row md:justify-start">
            <div className="w-full px-3 mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                htmlFor="grid-password"
              >
                Phone Number
                {/* <span className="font-normal text-base text-error-base">*</span> */}
              </label>
              <div className="flex items-center relative">
                <input
                  className="cursor-pointer border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-[23%] h-12 rounded-l-md text-base font-light"
                  type="text"
                  value={country_number}
                  onChange={(e) => setCountry_number(e.target.value)}
                  onClick={toggleDropdown}
                  readOnly
                />
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-[20%] top-9 bg-white border border-[#CFCFCF] shadow-lg rounded-b-md">
                    {countryCodes.map((code) => (
                      <div
                        key={code}
                        onClick={() => handleCodeSelect(code)}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                      >
                        {code}
                      </div>
                    ))}
                  </div>
                )}
                <input
                  className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-full h-12 rounded-r-md text-base font-light"
                  type="text"
                  placeholder="your phone number"
                  onChange={(e) => setPhone_number(e.target.value)}
                />
                <InputError messages={errors.phone_number} className="mt-2" />
              </div>
            </div>

            <div className="w-full px-3 mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                htmlFor="grid-password"
              >
                E-mail
                <span className="font-normal text-base text-error-base">*</span>
              </label>
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light w-full"
                id="email"
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputError messages={errors.email} className="mt-2" />
            </div>
          </div>
          <div className="flex w-full flex-row justify-between my-6 gap-4">
            <div className="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
                <span className="font-normal text-base text-error-base">*</span>
              </label>
              <div className="">
                <TextEditor
                  id="description"
                  placeholder="Enter a description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  content={handleTextChange}
                />
                <InputError messages={errors.description} className="mt-2" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center my-auto w-[280px]">
                {imageUploaded ? (
                  ProcessedImage && <ProcessedImage imageUrl={processedImage} />
                ) : (
                  <div>
                    <img src="/assets/icons/img-icon.png" alt="image-icon" />
                  </div>
                )}
              </div>
              <div className="flex items-start">
                <label
                  for="Images"
                  class="bg-white border border-neutral-50 px-3 py-[0.32rem] rounded-l text-base font-normal text-[#A6A6A6]"
                >
                  Image
                </label>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="cursor-pointer w-full border border-y-neutral-50 border-l-0 border-r-neutral-50 rounded-r text-base font-normal text-[#A6A6A6] file:hidden bg-white px-3 py-[0.32rem] focus:text-neutral-70"
                />
              </div>
              <InputError messages={errors.image} className="mt-2" />
            </div>
          </div>
        </div>
        <div className="">
          <p className="mb-3 font-semibold text-xl text-neutral-80">
            Enter reminder time{" "}
          </p>
          {isEditMode ? (
            <div
              className="mb-4 flex flex-col gap-1 2xl:gap-3 bg-white shadow-lg rounded-lg py-1 2xl:py-2 px-8 cursor-pointer"
              onClick={handleEditClick}
            >
              <div className="flex flex-row px-2 justify-between">
                <div
                  className="text-primary-50 font-normal text-base"
                  onWheel={(e) => isScrollEnabled && handleScroll(e, "time")}
                >
                  {beforeTime}
                </div>
                <div
                  className="text-primary-50 font-normal text-base"
                  onWheel={(e) => isScrollEnabled && handleScroll(e, "minute")}
                >
                  {beforeMinute}
                </div>
              </div>
              <div className="flex bg-primary-base flex-row px-2 py-1 2xl:py-2 rounded-[5px] justify-between">
                <div
                  className="text-neutral-10 font-normal text-base"
                  onWheel={(e) => isScrollEnabled && handleScroll(e, "time")}
                >
                  {formatValue(time)}
                </div>
                <div className="text-neutral-10 font-normal text-base">:</div>
                <div
                  className="text-neutral-10 font-normal text-base"
                  onWheel={(e) => isScrollEnabled && handleScroll(e, "minute")}
                >
                  {formatValue(minute)}
                </div>
              </div>
              <div className="flex flex-row px-2 justify-between">
                <div
                  className="text-primary-50 font-normal text-base"
                  onWheel={(e) => isScrollEnabled && handleScroll(e, "time")}
                >
                  {afterTime}
                </div>
                <div
                  className="text-primary-50 font-normal text-base"
                  onWheel={(e) => isScrollEnabled && handleScroll(e, "minute")}
                >
                  {afterMinute}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="md:flex flex-row mb-4 justify-center cursor-pointer"
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

          <div className="flex flex-col">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              placeholderText="Select a date"
              inline
            />
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4  h-4" />
              <p className="text-sm text-[#646568] mx-3">
                Send reminder every same date
              </p>
            </div>
            <button
              // onClick={handleSaveClick}
              type="submit"
              className="bg-[#2652FF] w-[250px] h-[35px] mt-3 rounded-md py-2 px-4 text-xs font-semibold text-white"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
