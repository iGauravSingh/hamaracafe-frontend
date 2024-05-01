import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { setLatest,clearLatest,addLatest,deleteLatest } from "../features/adminLatestSlice";
import { setFranchisework, clearFranchisework, addFranchisework, deleteFranchisework } from "../features/adminFranchiseWorkSlice";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";




const useAdminFranchiseWork = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

      const fetchWorkList = async () => {
        try {
          const response = await axios.get('http://localhost:8080/franchise/getallLatest',{
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

      const addWorkUpdates = async (data) => {
        try {
          const response = await axios.post('http://localhost:8080/franchise/addwork',data,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });

                const latestData = response.data
                if(!latestData){
                  return dispatch(clearLatest())
                }
      
                console.log(latestData)
                dispatch(addLatest(latestData))
        } catch (error) {
          console.log("error from useLatest add", error)
          return dispatch(clearLatest())
        }
      }

      const deleteWorkUpdates = async (id) => {
        try {
          const response = await axios.delete(`http://localhost:8080/franchise/deleteLatest/${id}`, {
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
    
      return { fetchWorkList, addWorkUpdates, deleteWorkUpdates };
}

export default useAdminFranchiseWork;