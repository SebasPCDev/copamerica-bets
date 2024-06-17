import { LoginData } from "../../types/sessionType";
import { axiosApi } from "../api";

const PostLogin = async (data: LoginData) => {
  try {
    const response = await axiosApi.post(`/signin`, data);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    let message = "";
    if (error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
};

export default PostLogin;
