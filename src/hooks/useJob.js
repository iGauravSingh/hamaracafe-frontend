import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setJob,clearJob } from "../features/adminJobSlice";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";




const useJob = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

      const fetchJobList = async () => {
        try {
          const response = await axios.get('http://localhost:8080/admin/getallJob',{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const jobData = response.data;
          if(!jobData){
            return dispatch(clearJob())
          }

          console.log(jobData)
          dispatch(setJob(jobData))
        } catch (error) {
          return dispatch(clearJob())
        }
      };
    
      return { fetchJobList };
}

export default useJob;