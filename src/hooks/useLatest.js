import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLatest,clearLatest } from "../features/adminLatestSlice";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";




const useLatest = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

      const fetchLatestList = async () => {
        try {
          const response = await axios.get('http://localhost:8080/admin/getallLatest',{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const latestData = response.data;
          if(!latestData){
            return dispatch(clearLatest())
          }

          console.log(latestData)
          dispatch(setLatest(latestData))
        } catch (error) {
          return dispatch(clearLatest())
        }
      };
    
      return { fetchLatestList };
}

export default useLatest;