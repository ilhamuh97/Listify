import axios from "axios";
import { toast } from "react-toastify";

export const handleAxiosError = (error: unknown, fallbackMessage: string) => {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message || error.message || fallbackMessage;
    toast.error(message);
  } else {
    toast.error(fallbackMessage);
  }
  console.error(error);
};
