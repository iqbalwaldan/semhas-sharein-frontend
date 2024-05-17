import axios from "@/lib/axios";

export const useReminder = () => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const setReminder = async ({ setErrors, setStatus, ...props }) => {
    await csrf();
    setErrors([]);
    setStatus(null);

    axios
      .post("/api/reminder", props)
      .then((response) => setStatus(response.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  return {
    setReminder,
  };
};
