import axios from "@/lib/axios";

export const SendNewsLetter = () => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const postNewsLetter = async ({ ...props }) => {
    await csrf();

    axios.post("/api/newsletter", props);
  };

  return {
    postNewsLetter,
  };
};
