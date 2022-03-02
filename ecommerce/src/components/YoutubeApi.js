import axios from "axios"



const KEY = "AIzaSyBZbQX40Hs4HNM_eMfihrVb5SodZRfH8hc"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    },
    headers: {}
});