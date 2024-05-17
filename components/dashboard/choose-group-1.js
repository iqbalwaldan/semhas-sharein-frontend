import React from "react";

export const groupData = [
  {
    id: "1",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "2",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "3",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "4",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "5",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "6",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "7",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "8",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "9",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "10",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "11",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "12",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "13",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "14",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
  {
    id: "15",
    images: "sh-icon.png",
    name: "Kec. Lowokwaru",
    member: "Malang",
  },
];

export default function ChooseGroup1() {
  return (
    <div className="h-1/2 2xl:h-[458px] w-full 2xl:w-[343px] bg-white p-2">
      <div className="text-lg font-semibold text-black mb-4">Choose Group</div>
      <div className="overflow-y-auto max-h-[220px] 2xl:max-h-[403px]">
        <div className="relative mb-3">
          <input
            className="pl-10 bg-[#F8F8F8] text-xs 2xl:text-base font-normal placeholder:text-xs 2xl:placeholder:text-base placeholder:font-normal text-neutral-60 focus:outline-none h-9 2xl:h-12 rounded-md w-full"
            type="text"
            placeholder="Search"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <img src="/assets/icons/search-icon.png" alt="search icon"/>
          </div>
        </div>
        <div className="flex flex-col gap-1 2xl:gap-3">
          {groupData.map((item) => (
            <div key={item.id}>
              <div className="border border-neutral-20 p-1 rounded flex flex-row justify-between items-center cursor-pointer">
                <div className="flex items-center">
                  <div className="flex w-7 h-7 2xl:w-[33px] 2xl:h-[33px] items-center mr-2">
                    <img src={`/assets/icons/${item.images}`} />
                  </div>
                  <div>
                    <p className="text-xs 2xl:text-sm font-normal text-black">{item.name}</p>
                    <p className="text-[10px] font-light text-black">{item.member}-Jawa Timur</p>
                  </div>
                </div>
                <input type="checkbox" className="w-4 h-4 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
