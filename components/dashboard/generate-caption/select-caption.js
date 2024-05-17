import React, { useState } from "react";
import SampleText from "../text-editor/sampletext";
import TextEditor2 from "../text-editor/editor2";

export default function SelectCaption(props) {
  const handleTextChange = (editorValue) => {
    setDescription(editorValue);
  };
  const { dataSelectCaption, handleChangeSelectCaption, isLoading } = props;

  return (
    <div className="flex">
      <div className="flex flex-col w-full mb-2">
        <div className="flex mb-1">
          <p className="font-normal text-base text-neutral-70">Caption</p>
          <p className="font-normal text-base text-error-base">*</p>
        </div>
        <TextEditor2
          content={handleTextChange}
          value={dataSelectCaption.description}
          onChange={handleChangeSelectCaption}
          name="description"
        />
      </div>
      <div className="w-full">
        <h1 className="text-base 2xl:text-xl font-semibold text-neutral-90 mb-2 2xl:mb-4">
          Our Recommendations
        </h1>
        <input
          type="text"
          name="info"
          value={dataSelectCaption.info}
          onChange={handleChangeSelectCaption}
        />
        <div className="">
          <div className="w-full">
            <div className="w-full h-[200px] 2xl:h-[300px] border border-neutral-20 p-2 2xl:p-4 rounded-lg overflow-y-auto ">
              {isLoading ? (
                <div className="h-[200px] flex items-center justify-center">
                  <div className="loading"></div>
                </div>
              ) : (
                <>{props.contentAPI}</>
              )}
            </div>
            <div className="flex items-center justify-end cursor-pointer mt-2">
              <img src="/assets/icons/copy.png" width={14} height={14} />
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
  );
}
