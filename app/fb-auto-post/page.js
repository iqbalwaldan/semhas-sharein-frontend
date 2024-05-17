"use client";
import Calendar from "@/components/dashboard/calendar";
import ChartActiveAccount from "@/components/dashboard/chart/chart-active-account";
import ChartGroupPost from "@/components/dashboard/chart/chart-group-post";
import ChartMarketPlacePost from "@/components/dashboard/chart/chart-marketplace-post";
import ChartSuspendAccount from "@/components/dashboard/chart/chart-suspend-account";
import { useAuth } from "@/hooks/auth";
import { getFacebookResponse } from "@/hooks/facebook";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export const LinkedAccountData = [
  {
    id: "1",
    images: "fb_pp1.png",
    name: "Rina Fitriani",
    status: "active",
  },
  {
    id: "2",
    images: "fb_pp2.png",
    name: "Maya Wulandari",
    status: "suspend",
  },
  {
    id: "3",
    images: "fb_pp3.png",
    name: "Rina Fitriani",
    status: "active",
  },
  {
    id: "4",
    images: "fb_pp4.png",
    name: "Budi Santoso",
    status: "active",
  },
  {
    id: "5",
    images: "fb_pp5.png",
    name: "Agus Widodo",
    status: "suspend",
  },
  {
    id: "6",
    images: "fb_pp6.png",
    name: "Dian Purnama",
    status: "suspend",
  },
  {
    id: "7",
    images: "fb_pp7.png",
    name: "Rini Susanti",
    status: "suspend",
  },
  {
    id: "8",
    images: "fb_pp8.png",
    name: "Siti Rahmawati",
    status: "suspend",
  },
  {
    id: "9",
    images: "fb_pp9.png",
    name: "Dewi Kusuma",
    status: "active",
  },
  {
    id: "10",
    images: "fb_pp10.png",
    name: "Andi Rahman",
    status: "active",
  },
  {
    id: "11",
    images: "fb_pp1.png",
    name: "Rina Fitriani",
    status: "active",
  },
  {
    id: "12",
    images: "fb_pp2.png",
    name: "Maya Wulandari",
    status: "suspend",
  },
  {
    id: "13",
    images: "fb_pp3.png",
    name: "Rina Fitriani",
    status: "active",
  },
  {
    id: "14",
    images: "fb_pp4.png",
    name: "Budi Santoso",
    status: "active",
  },
  {
    id: "15",
    images: "fb_pp5.png",
    name: "Agus Widodo",
    status: "suspend",
  },
  {
    id: "16",
    images: "fb_pp6.png",
    name: "Dian Purnama",
    status: "suspend",
  },
  {
    id: "17",
    images: "fb_pp7.png",
    name: "Rini Susanti",
    status: "suspend",
  },
  {
    id: "18",
    images: "fb_pp8.png",
    name: "Siti Rahmawati",
    status: "suspend",
  },
  {
    id: "19",
    images: "fb_pp9.png",
    name: "Dewi Kusuma",
    status: "active",
  },
  {
    id: "20",
    images: "fb_pp10.png",
    name: "Andi Rahman",
    status: "active",
  },
];

export default function Dashboard() {
  const RecentActivityData = [
    {
      id: 1,
      day: "Thu",
      date: "08",
      title: "You have done a mass post on the market place",
      time: "1 mins ago",
    },
    {
      id: 2,
      day: "Thu",
      date: "08",
      title: "You have done a mass post on the market place",
      time: "1 mins ago",
    },
    {
      id: 3,
      day: "Thu",
      date: "08",
      title: "You have done a mass post on the market place",
      time: "1 mins ago",
    },
    {
      id: 4,
      day: "Thu",
      date: "08",
      title: "You have done a mass post on the market place",
      time: "1 mins ago",
    },
  ];

  const MarketPlaceActivityData = [
    {
      id: 1,
      image: "fb_pp1.png",
      name: "Rina Fitriani",
      title: "The car you uploaded on the marketplace is sold!",
      time: "19.30",
    },
    {
      id: 2,
      image: "fb_pp2.png",
      name: "Rina Fitriani",
      title: "The car you uploaded on the marketplace is sold!",
      time: "19.30",
    },
    {
      id: 3,
      image: "fb_pp3.png",
      name: "Rina Fitriani",
      title: "The car you uploaded on the marketplace is sold!",
      time: "19.30",
    },
    {
      id: 4,
      image: "fb_pp4.png",
      name: "Rina Fitriani",
      title: "The car you uploaded on the marketplace is sold!",
      time: "19.30",
    },
  ];

  const [facebookUrl, setFacebookUrl] = useState("");

  const loginFacebook = async (e) => {
    e.preventDefault();
    const facebookUrl = await axios.get("/api/auth/facebook/redirect");
    setFacebookUrl(facebookUrl.data);
    // window.location.href = facebookUrl;
  };

  useEffect(() => {
    console.log(facebookUrl.data);
    if (facebookUrl != "") {
      window.location.href = facebookUrl;
    }
  }, [facebookUrl]);

  const { user } = useAuth({ middleware: "auth" });

  const [facebookAccounts, setFacebookAccounts] = useState([]);

  useEffect(() => {
    const fetchFacebookData = async () => {
      try {
        const response = await axios.get("/api/list-accounts", {
          params: {
            user_id: user.id,
          },
        });
        setFacebookAccounts(response.data.accounts);
        console.log(user?.id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Panggil fungsi fetch data saat komponen dipasang
    fetchFacebookData();
  }, [user?.id]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-wrap flex-row items-center gap-6">
        <ChartActiveAccount />
        <ChartSuspendAccount />
        <ChartMarketPlacePost />
        <ChartGroupPost />
      </div>
      <div className="flex flex-row mt-4 gap-4">
        <div className="w-[73%]">
          <div className="border border-neutral-20 rounded-lg p-4">
            <Calendar />
          </div>
          <div className="flex flex-row w-full gap-7 mt-4">
            <div className="w-1/2 h-[289px] p-4 border border-neutral-20 rounded-lg">
              <div className="flex flex-row items-center justify-between">
                <p className="text-base 2xl:text-lg font-semibold text-[#1C1C1C]">
                  Recent Activity
                </p>
                <div className="flex items-center border border-neutral-20 rounded-lg py-1 px-2">
                  <p className="text-xs 2xl:text-base font-normal text-neutral-90">
                    All Activity
                  </p>
                  <p className="ml-3 text-base font-normal text-neutral-90">
                    v
                  </p>
                </div>
              </div>
              <div className="max-h-[200px] mt-6 overflow-y-auto flex flex-col gap-4">
                {RecentActivityData.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-[35px] h-49[px] shadow-lg flex flex-col items-center justify-center rounded-lg">
                      <h1 className="text-sm font-semibold text-primary-base ">
                        {item.day}
                      </h1>
                      <p className="text-base font-normal text-neutral-80">
                        {item.date}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <p className="text-sm 2xl:text-base font-normal text-neutral-70">
                        {item.title}
                      </p>
                      <p className="text-sm font-light text-neutral-60">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 h-[289px] p-4 border border-neutral-20 rounded-lg">
              <div className="flex flex-row items-center justify-between">
                <p className="text-base 2xl:text-lg font-semibold text-[#1C1C1C]">
                  Marketplace Activity
                </p>
                <div className="flex items-center border border-neutral-20 rounded-lg py-1 px-2">
                  <p className="text-xs 2xl:text-base font-normal text-neutral-90">
                    All Activity
                  </p>
                  <p className="ml-3 text-base font-normal text-neutral-90">
                    v
                  </p>
                </div>
              </div>
              <div className="max-h-[200px] pr-2 mt-6 overflow-y-scroll flex flex-col gap-4">
                {MarketPlaceActivityData.map((item) => (
                  <div key={item.id} className="w-full flex items-center">
                    <div className="w-10 h-10 2xl:w-[46px] 2xl:h-[46px] rounded-full overflow-hidden">
                      <img
                        src={`/assets/images/${item.image}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-[85%] flex flex-col ml-2 gap-2">
                      <div className="flex items-center justify-between w-full">
                        <p className="text-sm 2xl:text-base font-semibold text-neutral-60">
                          {item.name}
                        </p>
                        <p className="text-xs font-semibold text-primary-base">
                          See more
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p className="text-sm font-light text-neutral-60">
                          {item.title}
                        </p>
                        <p className="text-xs 2xl:text-sm font-light text-neutral-60">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[26%] h-[654px] 2xl:h-full p-2 border border-neutral-20 rounded-lg">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h1 className="text-sm 2xl:text-lg font-semibold text-[#1C1C1C]">
                Linked Account
              </h1>
              <p className="text-[10px] 2xl:text-xs font-normal text-neutral-60 w-32">
                List of your connected account
              </p>
            </div>
            <div
              onClick={loginFacebook}
              className="cursor-pointer flex w-32 items-center justify-evenly border border-primary-base px-1 py-[5px] 2xl:px-2 2xl:py-3 rounded-lg"
            >
              <img src="/assets/icons/formkit_add.png" />
              <span className="text-[10px] 2xl:text-sm font-semibold text-primary-base">
                Add Account
              </span>
            </div>
          </div>
          <div className="w-full max-h-[565px] 2xl:max-h-[677px] px-2 flex flex-col items-center mt-4 gap-4 overflow-y-scroll">
            {/* {LinkedAccountData.map((item) => (
              <div
                key={item.id}
                className="p-2 w-full flex flex-row items-center justify-between border border-neutral-20 rounded-lg"
              >
                <div className="flex flex-row gap-2 items-center">
                  <div className="rounded-full w-[33px] h-[33px] overflow-hidden">
                    <img
                      src={`/assets/images/${item.images}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs 2xl:text-sm font-normal">{item.name}</p>
                </div>
                <div
                  className={`flex items-center justify-center border w-14 h-[18px] rounded-[5px] ${
                    item.status === "suspend"
                      ? "bg-error-20 border-error-60 text-error-60"
                      : "bg-success-20 border-success-60 text-success-60"
                  } text-[10px] font-light`}
                >
                  {item.status}
                </div>
              </div>
            ))} */}
            {facebookAccounts.map((item) => (
              <div
                key={item.id}
                className="p-2 w-full flex flex-row items-center justify-between border border-neutral-20 rounded-lg"
              >
                <div className="flex flex-row gap-2 items-center">
                  <div className="rounded-full w-[33px] h-[33px] overflow-hidden">
                    <img
                      src={item.avatar_url}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs 2xl:text-sm font-normal">{item.name}</p>
                </div>
                <div
                  className={`flex items-center justify-center border w-14 h-[18px] rounded-[5px] ${
                    item.status === "suspend"
                      ? "bg-error-20 border-error-60 text-error-60"
                      : "bg-success-20 border-success-60 text-success-60"
                  } text-[10px] font-light`}
                >
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
