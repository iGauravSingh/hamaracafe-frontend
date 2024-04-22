import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setHelp,deleteHelp,clearHelp } from "../features/adminHelpSlice";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";




const useHelp = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

    // used by admin
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

      // used by user add-querry
      const addHelp = async (data) => {
        console.log('from addhElp', data)
        try {
          const response = await axios.post('http://localhost:8080/help/add-querry',data,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const helpData = response.data;
          

          console.log(helpData)
          return helpData
        } catch (error) {
          return dispatch(clearHelp())
        }
      };

      // used by admin
      const deleteHelpQuerry = async (id) => {
        console.log('from delete help', IDBIndex)
        try {
          const response = await axios.delete(`http://localhost:8080/help/delete-query/${id}`,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const helpData = response.data;
          

          console.log(helpData)

          if (response.data.success) {
          dispatch(deleteHelp(id))
          }

        } catch (error) {
          return dispatch(clearHelp())
        }
      };
    
      return { fetchHelpList, addHelp, deleteHelpQuerry };
}

export default useHelp;