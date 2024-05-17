import React, { useState } from "react";

export default function InputImage({ onChange,containerWidth, containerHeight }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
      onChange(selectedImage);
    }
  };

  return (
    <div>
      <div className="border border-neutral-10 rounded-2xl p-2 flex justify-center items-center bg-[#F5F6F8]"
      style={{
        width: containerWidth ? containerWidth : "300px",
        height: containerHeight ? containerHeight : "300px",
      }}>
        {image ? (
          <img
            src={image}
            alt="Selected Image"
            className="w-full h-full object-cover"
          />
        ) : (
          <div>
            <img src="/assets/icons/img-icon.png" alt="image-icon" />
          </div>
        )}
      </div>
      <div className="mt-4 flex" style={{
        width: containerWidth ? containerWidth : "300px"
      }}>
        <label
          htmlfor="Images"
          className="bg-white border border-neutral-50 px-3 py-[0.32rem] rounded-l text-base font-normal text-[#A6A6A6]"
        >
          Image
        </label>
        <input
          label="images"
          type="file"
          id="files"
          onChange={handleImageChange}
          className="cursor-pointer w-full border border-y-neutral-50 border-l-0 border-r-neutral-50 rounded-r text-base font-normal text-[#A6A6A6] file:hidden bg-white px-3 py-[0.32rem] focus:text-neutral-70"
        />
      </div>
    </div>
  );
}
