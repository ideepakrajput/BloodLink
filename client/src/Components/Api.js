import axios from "axios";

const baseURL = "https://bloodlink-fjkq.onrender.com/";

export default axios.create({ baseURL: baseURL });
