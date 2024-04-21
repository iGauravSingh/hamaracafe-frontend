import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../features/userSlice";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";

const useAuth = () => {
  const dispatch = useDispatch();

  const login = async ({ email, password }) => {
    try {
        const response = await axios.post(`${urllocal}/affaliate/login`, {
            email,
            password,
          });
          console.log("from useAuth ", response.data);
          const { user, token } = response.data;
          cookie.set("session_token", token);
          dispatch(
            setUser({
              email: user.email,
              name: user.name,
              mobile: user.mobile,
              website: user.website,
              youtube: user.youtube,
              instagram: user.instagram,
              affiliateCode: user.affiliateCode,
              imageUrl: user.imageUrl,
              totalClicks: user.totalClicks,
              totalInquiry: user.totalInquiry,
              workgoingon: user.workgoingon,
              totalMoney: user.totalMoney,
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

  const signup = async ({ email, password, name, address, phoneNumber }) => {
    const response = await axios.post(`${urllocal}/affaliate/signup`, {
      email,
      password,
      name,
      address,
      phoneNumber,
    });
    console.log("from signup in useAuth", name);
    const { user, token } = response.data;
    cookie.set("session_token", token);
    dispatch(setUser({ email: user.email, username: user.username }));
    return response.data;
  };

  const fetchUser = async () => {
    const sessionToken = cookie.get("session_token");
    try {
      const response = await axios.get(`${urllocal}/auth/me`, {
        headers: {
          ...(sessionToken
            ? { Authorization: `Bearer ${sessionToken}` }
            : null),
        },
      });
      const user = response.data;

      if (!user) {
        return dispatch(clearUser());
      }

      dispatch(setUser({ email: user.email, username: user.username }));
    } catch (error) {
      return dispatch(clearUser());
    }
  };

  const logout = () => {
    cookie.remove("session_token");
    return dispatch(clearUser());
  };

  return { signup, login, logout, fetchUser };
};

export default useAuth;