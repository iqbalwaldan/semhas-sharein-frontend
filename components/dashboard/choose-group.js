"use client";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import React, { useEffect, useState } from "react";

export const groupData = [
  {
    id: 1,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 2,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 3,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 4,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 5,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 6,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 7,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 8,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 9,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 10,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 11,
    images: "sh-icon.png",
    name: "Sharein Community Malang",
    member: "105K",
  },
  {
    id: 12,
    images: "sh-icon.png",
    name: "Sharein Community Malang",
    member: "105K",
  },
  {
    id: 13,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 14,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
  {
    id: 15,
    images: "sh-icon.png",
    name: "Sharein Community Surabaya",
    member: "105K",
  },
];

export default function ChooseGroup({
  selectedAccount,
  onSelectedGroupIdChange,
}) {
  const [facebookGroups, setFacebookGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState([]);

  useEffect(() => {
    const fetchFacebookGroupData = async () => {
      try {
        const response = await axios.get("/api/group-post/groups", {
          params: {
            user_fb_account_id: selectedAccount,
          },
        });
        setFacebookGroups(response.data.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (selectedAccount) {
      fetchFacebookGroupData();
    }
  }, [selectedAccount]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(groupData);

  // Fungsi pencarian
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter data berdasarkan nama
    const filteredResults = groupData.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });

    setSearchResults(filteredResults);
  };

  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState(groupData.map(() => false));

  // Event handler for "Select All" button
  const handleSelectAll = () => {
    setSelectAllChecked(true);
    setCheckboxes(groupData.map(() => true));
  };

  // Event handler for "Deselect All" button
  const handleDeselectAll = () => {
    setSelectAllChecked(false);
    setCheckboxes(groupData.map(() => false));
  };

  // Event handler for individual checkboxes
  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);

    // Update selectedGroupId based on checkbox state
    const selectedIds = facebookGroups
      .filter((group, i) => newCheckboxes[i])
      .map((group) => group.id);
    setSelectedGroupId(selectedIds);
    onSelectedGroupIdChange(selectedIds);
  };

  return (
    <div className="h-[300px] 2xl:h-[458px] w-full 2xl:w-[343px] bg-white p-2">
      <div className="text-lg font-semibold text-black mb-4">Choose Group</div>
      <div className="overflow-y-auto max-h-[270px] 2xl:max-h-[403px]">
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
        <div className="flex flex-col gap-1 2xl:gap-3">
          {facebookGroups.map((item, index) => (
            <div key={item.id}>
              <div className="border border-neutral-20 p-1 rounded flex flex-row justify-between items-center cursor-pointer">
                <div className="flex items-center">
                  <div className="flex w-7 h-7 2xl:w-[33px] 2xl:h-[33px] items-center mr-2">
                    {/* <img src={item.name} /> */}
                    <img src="/assets/icons/image.png" alt="" />
                  </div>
                  <div>
                    <p className="text-xs 2xl:text-sm font-normal text-black">
                      {item.name}
                    </p>
                    <p className="text-[10px] font-light text-black">
                      {item.id} Member
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 ml-1"
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
    </div>
  );
}
