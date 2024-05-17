"use client";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function callbackFacebook() {
  const { get } = useSearchParams();
  const { push } = useRouter();
  const [facebookParams, setFacebookParams] = useState({
    code: undefined,
    state: undefined,
  });

  useEffect(() => {
    setFacebookParams({
      code: get("code"),
      state: get("state"),
    });
  }, []);

  useEffect(() => {
    const fetchUserAndStoreToken = async () => {
      if (facebookParams.code !== undefined) {
        await axios
          .get("/api/auth/facebook/call-back", { params: facebookParams })
          .then((res) => {
            if (res.code === 200) {
              const token = res.data.data.access_token;
              var in2hours = 1 / 12;
              Cookies.set("facebook_token", token, { expires: in2hours });
              Swal.fire({
                imageUrl: "/assets/icons/alert-circle-success.png",
                imageHeight: 70,
                imageWidth: 70,
                title: "Successfully Sending Inbox to Friendlist",
                text: "You have successfully sent an inbox to your friendlist",
                confirmButtonText: "Okey",
                buttonsStyling: false,
                customClass: {
                  title: "sweet_titleImportant",
                  htmlContainer: "sweet_textImportant",
                  confirmButton: "alert-btn",
                },
              });
              // return push("/fb-auto-post");
            }
          })
          .catch((err) => {
            Swal.fire({
              imageUrl: "/assets/icons/alert-circle-danger.png",
              imageHeight: 70,
              imageWidth: 70,
              title: "Successfully Sending Inbox to Friendlist",
              text: "You have successfully sent an inbox to your friendlist",
              confirmButtonText: "Okey",
              buttonsStyling: false,
              customClass: {
                title: "sweet_titleImportant",
                htmlContainer: "sweet_textImportant",
                confirmButton: "alert-btn",
              },
            });
            console.error("Error fetching token:", err);
            // push("/fb-auto-post");
            return;
          });
      }
    };
    fetchUserAndStoreToken();
  }, [facebookParams]);
}
