"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from "@/lib/axios";
import { useAuth } from "@/hooks/auth";

export default function LoginMultiAccount() {
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 5;
  const [data, setData] = useState([
    // Your data array goes here
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Suspend",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      Name: "Judha Maygustya Account",
      IA: "1538193517849371",
      SED: "23 December 2023",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    // Example data...
  ]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSortStatus = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Status.localeCompare(b.Status);
      } else {
        return b.Status.localeCompare(a.Status);
      }
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setData(sortedData);
  };

  const Alert = () => {
    Swal.fire({
      icon: "success",
      title: "Successfully Added a Reminder",
      text: "You have successfully added a reminder and we will send you a reminder when the set date arrives",
      confirmButtonText: "Okay",
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentEntriesStart = startIndex + 1;
  const currentEntriesEnd = Math.min(endIndex, data.length);

  // Generate an array of page numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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
    <div className="flex w-full md:flex-row">
      <div className="flex flex-col w-[69%]">
        <div className="w-full px-3 ml-1">Linked Account</div>
        <div className="md:flex w-full flex-row md:justify-start">
          <div className="w-full">
            <button
              className="w-[135px] h-[35px] mt-2 ml-4 rounded-md border border-1 bg-[#2652FF] p-2 text-xs text-white flex item-center justify-center"
              onClick={loginFacebook}
            >
              <Image
                src="/assets/icons/plus.png"
                width="15"
                height="15"
                className="mr-[12px]"
              />
              Add Account
            </button>
          </div>
          <div className="w-full ml-96">
            <button
              className="w-[200px] h-[35px] my-2 rounded-md  border-1 bg-[#DCDDDE] p-2 text-xs text-black flex item-center justify-center"
              onClick={handleSortStatus}
              style={{
                fontFamily: "Arial, sans-serif", // Example font family
                fontWeight: "bold", // Example font weight
                color: "#333", // Example text color
                borderRadius: "5px", // Example border radius
              }}
            >
              Sort by Status: {sortOrder === "asc" ? "Suspend" : "Active"}
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <table className="w-full text-sm text-left ml-1 text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Account Name
                </th>
                <th scope="col" className="px-6 py-3">
                  ID Account
                </th>
                <th scope="col" className="px-6 py-3">
                  Suspension Expiration Date
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Status Account
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {facebookAccounts.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-black"
                  >
                    {item.name}
                  </td>
                  <td className="px-6 py-4">{item.fb_id}</td>
                  <td className="px-6 py-4">{item.avatar_url}</td>
                  {/* <td className="">
                    <div
                      className={`flex items-center justify-center rounded-md border ${}  h-[18px] w-[56px] text-[10px] ml-10`}
                    >
                      qweqwe
                    </div>
                  </td> */}

                  <td>
                    <button
                      className="w-[32px] h-[32px] my-2 rounded-md border border-1 ml-8 "
                      onClick={Alert}
                    >
                      <Image
                        src="/assets/icons/icons-delete.png"
                        width="32"
                        height="32"
                        className="mr-[14px]"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-3 ml-7 text-gray-500 dark:text-gray-400 text-[14px]">
            <div>
              Showing data {currentEntriesStart} to {currentEntriesEnd} of{" "}
              {data.length} entries
            </div>
            <div className="flex space-x-4">
              <button
                className="bg-[#F5F5F5] text-black p-2 rounded-md"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`bg-[#F5F5F5] text-black p-2 rounded-md ${
                    pageNumber === currentPage ? "font-bold" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                  style={{
                    borderColor:
                      pageNumber === currentPage ? "blue" : "#F5F5F5",
                    cursor: "pointer",
                  }}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                className="bg-[#F5F5F5] text-black p-2 rounded-md"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * itemsPerPage >= data.length}
                style={{
                  borderColor:
                    currentPage * itemsPerPage >= data.length
                      ? "#F5F5F5"
                      : "blue",
                  cursor:
                    currentPage * itemsPerPage >= data.length
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
