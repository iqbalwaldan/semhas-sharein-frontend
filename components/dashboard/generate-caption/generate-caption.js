"use client";
import React, { useState } from "react";
import TextEditor2 from "../text-editor/editor2";
import SampleText from "../text-editor/sampletext";
import axios from "@/lib/axios";

export default function GenerateCaption(props) {
  const categorySelect = ["Cat1", "Cat2", "Cat3", "Cat4", "Cat5"];
  const [selectCategory, setSelectCategory] = useState("Select category");
  const handleCategorySelect = (cat) => {
    setSelectCategory(cat);
    setIsDropdownOpen(false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { dataGenerateCaption, handleChangeGenerateCaption } = props;

  const [contentAPI, setContentAPI] = useState("");

  // const generateCaption = async () => {
  //   try {
  //     const response = await axios.get("/api/open-ai/generate-caption", {
  //       params: { title: dataGenerateCaption.title },
  //     });

  //     // Handle the API response
  //     const content = response.data.data.choices[0].message.content;
  //     setContentAPI(content);
  //     props.handleContentAPIChange(content);
  //     console.log(response.data.choice);
  //     // Update your state or perform other actions based on the response
  //   } catch (error) {
  //     // Handle errors
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <div className="flex">
      <div className="w-full">
        <form></form>
        <div className="flex flex-col w-full mb-2">
          <div className="flex mb-1">
            <p className="font-normal text-base text-neutral-70">Title</p>
            <p className="font-normal text-base text-error-base">*</p>
          </div>
          <input
            className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
            type="text"
            placeholder="Your title"
            name="title"
            value={dataGenerateCaption.title}
            onChange={handleChangeGenerateCaption}
          />
        </div>
        <div className="flex flex-col w-full mb-2">
          <div className="flex mb-1">
            <p className="font-normal text-base text-neutral-70">Category</p>
            <p className="font-normal text-base text-error-base">*</p>
          </div>
          <div
            onClick={toggleDropdown}
            className="relative cursor-pointer flex items-center border border-[#CFCFCF] p-3 text-neutral-70 h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
          >
            <p
              className={`${
                selectCategory === "Select category"
                  ? "text-neutral-30"
                  : "text-neutral-90"
              }`}
            >
              {selectCategory}
            </p>

            {isDropdownOpen && (
              <div className="w-full absolute z-[12] mt-2 top-9 right-0 bg-white border border-[#CFCFCF] shadow-lg rounded-md">
                {categorySelect.map((category) => (
                  <div
                    key={category}
                    onClick={() => handleCategorySelect(category)}
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
        {/* <button onClick={generateCaption}>Generate Caption</button> */}
      </div>
    </div>
  );
}
