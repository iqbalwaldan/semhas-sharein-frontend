"use client";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function callbackURL() {
  const { get } = useSearchParams();
  const { push } = useRouter();
  const [googleParams, setGoogleParams] = useState({
    code: undefined,
    scope: undefined,
    authuser: undefined,
    prompt: undefined,
  });

  useEffect(() => {
    setGoogleParams({
      code: get("code"),
      scope: get("scope"),
      authuser: get("authuser"),
      prompt: get("prompt"),
    });
  }, []);

  useEffect(() => {
    const fetchUserAndStoreToken = async () => {
      if (googleParams.code !== undefined) {
        await axios
          .get("/api/auth/google/call-back", { params: googleParams })
          .then((res) => {
            if (res.code === 200) {
              const token = res.data.data.access_token;
              var in2hours = 1 / 12;
              Cookies.set("google_token", token, { expires: in2hours });
              // push("/fb-auto-post");
            }
          })
          .catch((err) => {
            console.error("Error fetching token:", err);
          });
      }
    };
    fetchUserAndStoreToken();
  }, [googleParams]);
}
