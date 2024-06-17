"use server";
import { createSession, getSession } from "../lib/session";
import PostLogin from "../utils/api/auth/postLogin";
import { LoginData } from "../utils/types/sessionType";

export const HandleLogin = async (loginData: LoginData) => {
  console.log(loginData);
  const data = await PostLogin(loginData);
  console.log(data);
  if (!data.error) await createSession(data);

  return data;
};

export const getServerSession = async () => {
  const data = await getSession();
  console.log(data);
  return data;
};
