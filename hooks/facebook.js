import useSWR from "swr";
import axios from "@/lib/axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./auth";

export const useAuthFacebook = () => {
  const router = useRouter();

  const {
    data: facebook_user,
    error,
    mutate,
  } = useSWR("/api/list-accounts", () =>
    axios
      .get("/api/list-accounts")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status === 401) throw error;
      })
  );

  const { user } = useAuth();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const setPostSchedule = async ({ setErrors, setStatus, ...props }) => {
    await csrf();
    setErrors([]);
    setStatus(null);

    axios
      .post("/api/manage-schedule/schedule", props, {
        params: {
          user_id: user?.id,
        },
      })
      .then((response) => setStatus(response.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  return {
    facebook_user,
    setPostSchedule,
  };
};
