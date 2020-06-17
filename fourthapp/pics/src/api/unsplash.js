import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID DWnMft61Uky96ibYEoRMIUHHcodPv87r7ToAwNruP38",
  },
});
