import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setHelp,clearHelp } from "../features/adminHelpSlice";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";




const useHelp = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

      const fetchHelpList = async () => {
        try {
          const response = await axios.get('http://localhost:8080/admin/getallHelp',{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const helpData = response.data;
          if(!helpData){
            return dispatch(clearHelp())
          }

          console.log(helpData)
          dispatch(setHelp(helpData))
        } catch (error) {
          return dispatch(clearHelp())
        }
      };
    
      return { fetchHelpList };
}

export default useHelp;