import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { clearFranchise, setFranchise } from "../features/franchiseSlice";
import { clearFranchiseUsers, setFranchiseUsers, updateFranchiseUsers } from "../features/adminFranchiseListSlice";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";

const useFranchise = () => {

  const sessionToken = cookie.get("session_token");
  const dispatch = useDispatch();
 

  const login = async (data) => {
    try {
        const response = await axios.post(`${urllocal}/franchise/login`,data);
          console.log("from useFranchise ", response.data);
          const { user, token } = response.data;
          cookie.set("franchise_session_token", token);
          dispatch(
            setFranchise({
              id: user.id,
              name: user.name,
              mobile: user.mobile,
              imageUrl: user.imageUrl,
              about: user.about
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

  const signup = async (data) => {
    try {
      const response = await axios.post(`${urllocal}/franchise/signup`, data);
    // console.log("from signup in useAuth", name);
    // const { user, token } = response.data;
    // cookie.set("session_token", token);
    // dispatch(setUser({ email: user.email, username: user.username }));
    console.log(response.data)
    return response.data;
    } catch (error) {
      return error
    }
  };

  const fetchAllFranchie = async () => {
    try {
        const response = await axios.get(`${urllocal}/franchise/allfranchie`);

        const frenchiseData = response.data;
        if(!frenchiseData){
            return dispatch(clearFranchiseUsers())  
        }
        console.log(frenchiseData)
        dispatch(setFranchiseUsers(frenchiseData)) 
    } catch (error) {
        return dispatch(clearFranchiseUsers())
    }
  }

  const imageUpload = async (data) => {
    try {
      // console.log('from useAuth')
      const response = await axios.patch(`${urllocal}/franchise/imageupload`, data);
      console.log(response.data)
      return response.data
    } catch (error) {
      
    }
  }

  const changePassword = async(data) => {
    try {
      const response = await axios.patch(`${urllocal}/franchise/password-update`, data, {
        headers: {
          ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
        },
      })

      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

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
    cookie.remove("franchise_session_token");
    return dispatch(clearFranchise());
  };

  return { signup, login, logout, fetchUser, imageUpload, changePassword, fetchAllFranchie };
};

export default useFranchise;
