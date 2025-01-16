import { useState } from "react";
import { login, LoginData } from "../../../../../api/user.api";
import { setCache, CACHE_KEY } from "../../../../../cache/CacheUtils";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorShow, setIsErrorShow] = useState(false);
  const navigate = useNavigate();

  const reqLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username) {
      setErrorMessage("Username is required");
      setIsErrorShow(true);
      return;
    }
    if (!password) {
      setErrorMessage("Password is required");
      setIsErrorShow(true);
      return;
    }

    setLoading(true);
    try {
      const loginData: LoginData = { email: username, password: password };
      const result = await login(loginData);
      const packetPurchased = {
        user_id: result.data.user_id,
        price: result.data.price,
        current_quota: result.data.current_quota,
        packet_id: result.data.packet_id
      }
      setCache(CACHE_KEY, result.data, 24 * 60 * 60 * 1000);
      setIsErrorShow(false);
      navigate("/dashboard");
    } catch (error: any) {
      setErrorMessage(error.error || "Login failed");
      setIsErrorShow(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    username,
    password,
    errorMessage,
    isErrorShow,
    setUsername,
    setPassword,
    reqLogin,
    setIsErrorShow,
  };
};

export default useLogin;
