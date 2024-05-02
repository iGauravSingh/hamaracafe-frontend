import { useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";


const useLetter = () => {
    

    const addLetterImage = async (data) => {
        try {
            const response = await axios.post(`http://localhost:8080/franchise/banner-upload`,data)
            const imageData = response.data
            console.log(imageData)
            return imageData
        } catch (error) {
            console.log(error)
        }
    }

    const getLetterBanner = async (data) => {
        try {
            const response = await axios.get("http://localhost:8080/franchise/banner-fetch")
            const bannerData = response.data
            console.log(bannerData)
            return bannerData
        } catch (error) {
            console.log(error)
        }
    }

    return { addLetterImage, getLetterBanner }
}

export default useLetter