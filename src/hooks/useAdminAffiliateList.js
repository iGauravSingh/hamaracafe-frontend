import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearAffiliateUsers,setAffiliateUsers,updateAffiliateUser } from "../features/adminAffiliateListSlice";


import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://3.6.32.146:8080";
// const urllive = "https://backerbackend.onrender.com";




const useAdminAffilateList = () => {
    const sessionToken = cookie.get("session_token");
    
    const dispatch = useDispatch()

      const fetchAffilateList = async () => {
        try {
          const response = await axios.get(`${urllocal}/admin/getallAffiliates`,{
                    headers: {
                      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                    },
                  });
          const affilateData = response.data;
          if(!affilateData){
            return dispatch(clearAffiliateUsers())
          }

          // console.log(affilateData)
          dispatch(setAffiliateUsers(affilateData))
        } catch (error) {
          return dispatch(clearAffiliateUsers())
        }
      };

      const updateAffiliateWork = async (id, data) => {
        try {
            const response = await axios.patch(`${urllocal}/admin/updateaffwork/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
                },
            });
            const updatedAffiliate = response.data;
            dispatch(updateAffiliateUser(updatedAffiliate));
        } catch (error) {
            console.error("Failed to update affiliate:", error);
            // Optionally handle errors differently
        }
    };

    const updateAffiliateInquiries = async (id, data) => {
      try {
          const response = await axios.patch(`${urllocal}/admin/updateainquires/${id}`, data, {
              headers: {
                  'Content-Type': 'application/json',
                  ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
              },
          });
          const updatedAffiliate = response.data;
          dispatch(updateAffiliateUser(updatedAffiliate));
      } catch (error) {
          console.error("Failed to update affiliate:", error);
          // Optionally handle errors differently
      }
  };

  const updateAffiliatetotalEarning = async (id, data) => {
    try {
        const response = await axios.patch(`${urllocal}/admin/updateeraning/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
                ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
            },
        });
        const updatedAffiliate = response.data;
        dispatch(updateAffiliateUser(updatedAffiliate));
    } catch (error) {
        console.error("Failed to update affiliate:", error);
        // Optionally handle errors differently
    }
};
    
      return { fetchAffilateList, updateAffiliateWork, updateAffiliateInquiries, updateAffiliatetotalEarning };
}

export default useAdminAffilateList;