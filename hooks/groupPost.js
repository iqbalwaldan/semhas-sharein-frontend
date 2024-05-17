import axios from "@/lib/axios";

export const useGroupPost = () => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const setGroupPost = async ({ setErrors, setStatus, ...props }) => {
    await csrf();
    setErrors([]);
    setStatus(null);

    axios
      .post("/api/group-post/direct-post", props)
      .then((response) => setStatus(response.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const setGroupSchedulePost = async ({ setErrors, setStatus, ...props }) => {
    await csrf();
    setErrors([]);
    setStatus(null);

    axios
      .post("/api/manage-schedule/schedule", props)
      .then((response) => setStatus(response.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  return {
    setGroupPost,
    setGroupSchedulePost,
  };
};
