import React from "react";

const ImageUpload = ({ onUpload }) => {
  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      onUpload(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center">
      <label
        for="Images"
        class="bg-white border border-neutral-50 px-3 py-[0.32rem] rounded-l text-base font-normal text-[#A6A6A6]"
      >
        Image
      </label>
      <input
        label="images"
        type="file"
        id="files"
        onChange={handleImageUpload}
        class="cursor-pointer w-full border border-y-neutral-50 border-l-0 border-r-neutral-50 rounded-r text-base font-normal text-[#A6A6A6] file:hidden bg-white px-3 py-[0.32rem] focus:text-neutral-70"
      />
    </div>
  );
};

export default ImageUpload;
