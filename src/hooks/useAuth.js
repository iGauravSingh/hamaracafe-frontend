import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../features/userSlice";

const cookie = new Cookie();

const urllocal = "https://api.hamaracafe.in";
// const urllive = "https://backerbackend.onrender.com";

const useAuth = () => {

  const sessionToken = cookie.get("session_token");
  const dispatch = useDispatch();
 

  const login = async ({ email, password }) => {
    try {
        const response = await axios.post(`${urllocal}/affaliate/login`, {
            email,
            password,
          });
          // console.log("from useAuth ", response.data);
          const { user, token } = response.data;
          cookie.set("session_token", token);
          dispatch(
            setUser({
              id: user.id,
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
        
    }
  };

  const signup = async (data) => {
    try {
      const response = await axios.post(`${urllocal}/affaliate/signup`, data);
    // console.log("from signup in useAuth", name);
    // const { user, token } = response.data;
    // cookie.set("session_token", token);
    // dispatch(setUser({ email: user.email, username: user.username }));
    // console.log(response.data)
    return response.data;
    } catch (error) {
      return error
    }
  };

  const imageUpload = async (data) => {
    try {
      // console.log('from useAuth')
      const response = await axios.patch(`${urllocal}/affaliate/imageupload`, data);
      // console.log(response.data)
      return response.data
    } catch (error) {
      console.log('error',error)
    }
  }

  const changePassword = async(data) => {
    try {
      const response = await axios.patch(`${urllocal}/affaliate/password-update`, data, {
        headers: {
          ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
        },
      })
      // console.log(response.data)
      return response.data
      // console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  // const fetchUser = async () => {
  //   const sessionToken = cookie.get("session_token");
  //   try {
  //     const response = await axios.get(`${urllocal}/affaliate/me`, {
  //       headers: {
  //         ...(sessionToken
  //           ? { Authorization: `Bearer ${sessionToken}` }
  //           : null),
  //       },
  //     });
  //     const user = response.data;
  //     console.log('from frtch user', user)
      

  //     if (!user) {
  //       dispatch(clearUser());
  //     } else {
  //       dispatch(
  //         setUser({
  //           id: user.id,
  //           email: user.email,
  //           name: user.name,
  //           mobile: user.mobile,
  //           website: user.website,
  //           youtube: user.youtube,
  //           instagram: user.instagram,
  //           affiliateCode: user.affiliateCode,
  //           imageUrl: user.imageUrl,
  //           totalClicks: user.totalClicks,
  //           totalInquiry: user.totalInquiry,
  //           workgoingon: user.workgoingon,
  //           totalMoney: user.totalMoney,
  //         })
  //       );
  //     }
  //   } catch (error) {
  //     dispatch(clearUser());
      
  //   } 
  // };

  const fetchUser = async () => {
    const sessionToken = cookie.get("session_token");

    if (!sessionToken) {
      dispatch(clearUser());
      return;
    }

    try {
      const response = await axios.get(`${urllocal}/affaliate/me`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      const { user } = response.data;
      console.log('from frtch user', user)

      if (!user) {
        dispatch(clearUser());
      } else {
        dispatch(setUser(user));
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      dispatch(clearUser());
    }
  };

  const logout = () => {
    cookie.remove("session_token");
    return dispatch(clearUser());
  };

  return { signup, login, logout, fetchUser, imageUpload, changePassword };
};

export default useAuth;
