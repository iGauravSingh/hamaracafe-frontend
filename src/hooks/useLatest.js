import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLatest,clearLatest,addLatest,deleteLatest } from "../features/adminLatestSlice";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "https://api.hamaracafe.in";
// const urllive = "https://backerbackend.onrender.com";




const useLatest = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

      const fetchLatestList = async () => {
        try {
          const response = await axios.get(`${urllocal}/admin/getallLatest`,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const latestData = response.data;
          if(!latestData){
            return dispatch(clearLatest())
          }

          // console.log(latestData)
          dispatch(setLatest(latestData))
        } catch (error) {
          return dispatch(clearLatest())
        }
      };

      const addLatestUpdates = async (data) => {
        try {
          const response = await axios.post(`${urllocal}/admin/addLatest`,data,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });

                const latestData = response.data
                if(!latestData){
                  return dispatch(clearLatest())
                }
      
                // console.log(latestData)
                dispatch(addLatest(latestData))
        } catch (error) {
          // console.log("error from useLatest add", error)
          return dispatch(clearLatest())
        }
      }

      const deleteLatestUpdates = async (id) => {
        try {
          const response = await axios.delete(`${urllocal}/admin/deleteLatest/${id}`, {
            headers: {
              ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
            },
          });
          if (response.data.success) {
            dispatch(deleteLatest(id)); // Update Redux store by removing the deleted item
          }
        } catch (error) {
          console.error('Error deleting latest news:', error);
        }
      };
    
      return { fetchLatestList, addLatestUpdates, deleteLatestUpdates };
}

export default useLatest;