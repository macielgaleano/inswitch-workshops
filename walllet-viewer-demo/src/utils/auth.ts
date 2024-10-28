import axiosInstance from "./axios";

export const getAccessToken = async () => {
  const response = await axiosInstance.post(
    `${import.meta.env.VITE_API_AUTH_SERVICE}`,
    new URLSearchParams({
      grant_type: "password",
      username: import.meta.env.VITE_AUTH_USER,
      password: import.meta.env.VITE_AUTH_PASSWORD,
    }).toString()
  );
  return response?.data?.access_token;
};
