import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setWithdraw,clearWithdraw } from "../features/adminWithdrawSlice";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";




const useWithdraw = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

      const fetchWithdrawList = async () => {
        try {
          const response = await axios.get('http://localhost:8080/admin/getallwithdraw',{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const withdrawData = response.data;
          if(!withdrawData){
            return dispatch(clearWithdraw())
          }

          console.log(withdrawData)
          dispatch(setWithdraw(withdrawData))
        } catch (error) {
          return dispatch(clearWithdraw())
        }
      };
    
      return { fetchWithdrawList };
}

export default useWithdraw;