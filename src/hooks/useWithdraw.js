import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setWithdraw,clearWithdraw,deleteWithdraw } from "../features/adminWithdrawSlice";

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

      const requestWithdraw = async (data) => {
        try {
          const response = await axios.post('http://localhost:8080/admin/addwithdraw',data,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const withdrawData = response.data;
          // if(!withdrawData){
          //   return dispatch(clearWithdraw())
          // }

          console.log(withdrawData)
          return withdrawData
          // dispatch(setWithdraw(withdrawData))
        } catch (error) {
          // return dispatch(clearWithdraw())
        }
      };

      // used by admin
      const deleteWithdrawQuery = async (id) => {
        // console.log('from delete help', IDBIndex)
        try {
          const response = await axios.delete(`http://localhost:8080/admin/delete-withdraw/${id}`,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const withdrawData = response.data;
          

          console.log(withdrawData)

          if (response.data.success) {
          dispatch(deleteWithdraw(id))
          }

        } catch (error) {
          return dispatch(clearWithdraw())
        }
      };
    
      return { fetchWithdrawList, requestWithdraw, deleteWithdrawQuery };
}

export default useWithdraw;