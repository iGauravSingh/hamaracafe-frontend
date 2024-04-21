import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { clearAdmin, setAdmin } from "../features/adminSlice";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";

// This is useADmin hook used for fetching admin credentials from server and storing token and other data in redux store

const useAdmin = () => {
    const dispatch = useDispatch()

    const login = async ({ username, password }) => {
        try {
            const response = await axios.post(`${urllocal}/affaliate/login`, {
                username,
                password,
              });
              console.log("from useAdmin ", response.data);
              const { user, token } = response.data;
              cookie.set("admin_session_token", token);
              dispatch(
                setAdmin({
                    username: user.username,
                })
              );
              return response.data;
        } catch (error) {
            return error
            // if (error.response) {
            //     // The request was made and the server responded with a status code
            //     // that falls out of the range of 2xx
            //     // console.log(error.response.data.errors[0].msg); // This will log your custom error response
            //   } else if (error.request) {
            //     // The request was made but no response was received
            //     console.log(error.request);
            //   } else {
            //     // Something happened in setting up the request that triggered an Error
            //     console.log('Error', error.message);
            //   }
            //   console.log(error.config);
        }
      };

      const logout = () => {
        cookie.remove("admin_session_token");
        return dispatch(clearAdmin());
      };

      return { login, logout };
}

export default useAdmin;
