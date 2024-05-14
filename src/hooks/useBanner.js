import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "https://api.hamaracafe.in";
// const urllive = "https://backerbackend.onrender.com";


const useBanner = () => {
    

    const addBannerImage = async (data) => {
        try {
            const response = await axios.post(`${urllocal}/admin/banner-upload`,data)
            const imageData = response.data
            // console.log('from add banner image',imageData)
            return imageData
        } catch (error) {
            console.log(error)
        }
    }

    const getAllBanner = async (data) => {
        try {
            const response = await axios.get(`${urllocal}/admin/banner-fetch`)
            const bannerData = response.data
            // console.log('from banner get all',bannerData)
            return bannerData
        } catch (error) {
            console.log(error)
        }
    }

    return { addBannerImage, getAllBanner }
}

export default useBanner