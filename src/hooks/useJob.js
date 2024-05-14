import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setJob,clearJob, deleteJob,editJob } from "../features/adminJobSlice";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "https://api.hamaracafe.in";
// const urllive = "https://backerbackend.onrender.com";




const useJob = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

      const fetchJobList = async () => {
        try {
          const response = await axios.get(`${urllocal}/admin/getallJob`,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const jobData = response.data;
          if(!jobData){
            return dispatch(clearJob())
          }

          // console.log(jobData)
          dispatch(setJob(jobData))
        } catch (error) {
          return dispatch(clearJob())
        }
      };

      // add Job By User
      const addJobRequest = async (data) => {
        try {
          const response = await axios.post(`${urllocal}/admin/addjob`,data,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const jobData = response.data;
          

          // console.log(jobData)
          return jobData
        } catch (error) {
          console.log(error)
        }
      };

      // change Manager
      // used by admin
      const ChangeJobManager = async (data) => {
        // console.log('from change manager Job', IDBIndex)
        try {
          const response = await axios.patch(`${urllocal}/admin/change-manager`,data,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const jobData = response.data;
          

          

          if(!jobData){
            return dispatch(clearJob())
          }
          // console.log(jobData)
          dispatch(editJob(jobData))
          return jobData
        } catch (error) {
          return dispatch(clearJob())
        }
      };

      // remove Job
      // used by admin
      const deleteJobQuerry = async (id) => {
        // console.log('from delete Job', IDBIndex)
        try {
          const response = await axios.delete(`${urllocal}/admin/delete-job/${id}`,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const jobData = response.data;
          

          // console.log(jobData)

          if (response.data.success) {
          dispatch(deleteJob(id))
          }

        } catch (error) {
          return dispatch(clearJob())
        }
      };

    
      return { fetchJobList, addJobRequest, deleteJobQuerry, ChangeJobManager };
}

export default useJob;