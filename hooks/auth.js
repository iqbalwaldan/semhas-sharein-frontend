import useSWR from "swr";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { distDir } from "@/next.config";

axios.defaults.withCredentials = true;

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const [token, setToken] = useState(null)

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/users", () =>
    axios
      .get("/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status === 401) throw error;
        // router.push("/verify-email");
      })
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const register = async ({ setErrors, setStatus, ...props }) => {
    await csrf();
    setErrors([]);
    setStatus(null);
    axios
      .post("/api/register", props)
      .then(() => mutate() && router.push("/verify-email"))
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const login = async ({ setErrors, setStatus, email, password }) => {
    setErrors([]);
    setStatus(null);
    // await csrf();
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      // console.log(response.status);
      // const { message, user, token_type, access_token } = response.data;

      if (response.data.status == 200) {
        const expirationSeconds = 5;
        // document.cookie = `token=${response.data.data.token};max-age=${expirationSeconds};`;
        setToken(response.data.data.token);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error !== 422) throw error;
      setErrors(error.response.message);
    }
  };

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    try {
      await axios.post("/api/forgotPassword", {
        email,
      });

      const { message } = response.data;

      if (message === "Password reset link sent") {
        router.push("/forgot-password/verify");
      } else {
        alert(message);
      }
    } catch (error) {
      if (error.response.status !== 422) throw error;
      setErrors(error.response.data.errors);
    }
  };

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/api/resetPassword", { setErrors, setStatus, ...props })
      .then((response) =>
        router.push("/login?reset=" + btoa(response.data.status))
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post("/email-verification")
      .then((response) => setStatus(response.data.status));
  };

  const logout = async () => {
    if (!error) {
      await axios.post("/api/logout").then(() => mutate());
    }

    window.location.pathname = "/login";
  };

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated);
    if (window.location.pathname === "/verify-email" && user?.email_verified_at)
      router.push(redirectIfAuthenticated);
    if (middleware === "auth" && error) logout();
  }, [user, error]);

  return {
    user,
    csrf,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};
