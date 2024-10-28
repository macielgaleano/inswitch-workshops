import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import { getAccessToken } from "../../utils/auth";

export default function MasterBalance() {
  const [balance, setBalance] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchBalance = async () => {
      const access_token = await getAccessToken();
      const balance = await axiosInstance.get(
        `${import.meta.env.VITE_API_WALLET}/entityid%401/balance`,
        {
          headers: {
            "X-User-Bearer": `Bearer ${access_token}`,
          },
        }
      );
      setBalance(balance?.data);
    };
    fetchBalance();
  }, []);

  console.log(balance);

  return <div></div>;
}
