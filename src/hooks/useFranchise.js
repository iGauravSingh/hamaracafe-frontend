import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { clearFranchise, setFranchise } from "../features/franchiseSlice";
import { clearFranchiseUsers, setFranchiseUsers, updateFranchiseUsers } from "../features/adminFranchiseListSlice";

const cookie = new Cookie();

const urllocal = "https://api.hamaracafe.in";
// const urllive = "https://backerbackend.onrender.com";

const useFranchise = () => {

  const sessionToken = cookie.get("franchise_session_token");
  const dispatch = useDispatch();
 

  const login = async (data) => {
    try {
        const response = await axios.post(`${urllocal}/franchise/login`,data);
          // console.log("from useFranchise ", response.data);
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
       
    }
  };

  const signup = async (data) => {
    try {
      const response = await axios.post(`${urllocal}/franchise/signup`, data);
    
    // console.log(response.data)
    return response.data;
    } catch (error) {
      return error
    }
  };


  // franchise admin
  const fetchAllFranchie = async () => {
    try {
        const response = await axios.get(`${urllocal}/franchise/allfranchie`);

        const frenchiseData = response.data;
        if(!frenchiseData){
            return dispatch(clearFranchiseUsers())  
        }
        // console.log(frenchiseData)
        dispatch(setFranchiseUsers(frenchiseData)) 
    } catch (error) {
        return dispatch(clearFranchiseUsers())
    }
  }

  const imageUpload = async (data) => {
    try {
      // console.log('from useAuth')
      const response = await axios.patch(`${urllocal}/franchise/imageupload`, data);
      // console.log(response.data)
      return response.data
    } catch (error) {
      
    }
  }

  // franchise dashboard
  const fetchLetter = async() => {
    try {
      const response = await axios.get(`${urllocal}/franchise/fetch-letter`)
      // console.log(response.data)
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

      // console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  

  const logout = () => {
    cookie.remove("franchise_session_token");
    return dispatch(clearFranchise());
  };


  const fetchWorkList = async (id) => {
    // console.log('from useworl list')
    try {
      const response = await axios.get(`${urllocal}/franchise/getall/${id}`);
      const latestData = response.data;
      // console.log(latestData)
      return latestData
    } catch (error) {
      console.log('error in fetch work list ', error)
    }
  };
  

  return { signup, login, logout, imageUpload, changePassword, fetchAllFranchie, fetchWorkList, fetchLetter };
};

export default useFranchise;
