"use client";
import { HandleLogin } from "@/app/actions/auth";
import { LoginData } from "@/app/utils/types/sessionType";
import { useState } from "react";

const useLogin = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await HandleLogin(loginData);

    if (!res.error) window.alert("Login Success");
  };

  return { handleChange, handleSubmit, loginData };
};

export default useLogin;
