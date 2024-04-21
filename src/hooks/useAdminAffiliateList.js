import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearAffiliateUsers,setAffiliateUsers } from "../features/adminAffiliateListSlice";


import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";




const useAdminAffilateList = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

      const fetchAffilateList = async () => {
        try {
          const response = await axios.get('http://localhost:8080/admin/getallAffiliates',{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const affilateData = response.data;
          if(!affilateData){
            return dispatch(clearAffiliateUsers())
          }

          console.log(affilateData)
          dispatch(setAffiliateUsers(affilateData))
        } catch (error) {
          return dispatch(clearAffiliateUsers())
        }
      };
    
      return { fetchAffilateList };
}

export default useAdminAffilateList;