import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { setLatest,clearLatest,addLatest,deleteLatest } from "../features/adminLatestSlice";
import { setFranchisework, clearFranchisework, addFranchisework, deleteFranchisework, updateFranchiseWork } from "../features/adminFranchiseWorkSlice";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
// const urllive = "https://backerbackend.onrender.com";




const useAdminFranchiseWork = () => {
    const sessionToken = cookie.get("admin_session_token");
    
    const dispatch = useDispatch()

      const fetchWorkList = async (id) => {
        // console.log('from useworl list')
        try {
          const response = await axios.get(`${urllocal}/franchise/getall/${id}`);
          const latestData = response.data;
          if(!latestData){
            return dispatch(clearFranchisework())
          }

          // console.log(latestData)
          dispatch(setFranchisework(latestData))
        } catch (error) {
          return dispatch(clearFranchisework())
        }
      };

      const addWorkUpdates = async (data) => {
        try {
          const response = await axios.post(`${urllocal}/franchise/addwork`,data,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });

                const latestData = response.data
                if(!latestData){
                  return dispatch(clearFranchisework())
                }
      
                // console.log(latestData)
                dispatch(addFranchisework(latestData))
        } catch (error) {
          // console.log("error from useLatest add", error)
          return dispatch(clearFranchisework())
        }
      }

      const deleteWorkUpdates = async (id) => {
        try {
          const response = await axios.delete(`${urllocal}/franchise/deletework/${id}`, {
            headers: {
              ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
            },
          });
          if (response.data.success) {
            dispatch(deleteFranchisework(id)); // Update Redux store by removing the deleted item
          }
        } catch (error) {
          console.error('Error deleting latest news:', error);
        }
      };

      const updateWork = async (data) => {
        try {
          const response = await axios.patch(`${urllocal}/franchise/updatework`, data)
          const updateWork = response.data
          // console.log(updateWork)
          if(response.data?.id){
            // console.log(updateWork)
            dispatch(updateFranchiseWork(updateWork))
          }

        } catch (error) {
          
        }
      }
    
      return { fetchWorkList, addWorkUpdates, deleteWorkUpdates,updateWork };
}

export default useAdminFranchiseWork;