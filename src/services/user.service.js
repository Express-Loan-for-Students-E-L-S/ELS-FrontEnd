import axios from "axios";
import authHeader from "./auth-header";

const getBankDetails = (phno) => {
  axios.post(
    "http://localhost:8080/api/test/getBankDetails",
    { phoneNum: phno },
    { headers: authHeader() }
  ).then(response => {
    console.log(response.data.userDetails);
    // localStorage.setItem("bankDetails", JSON.stringify(response.data));
    return response.data.userDetails;
  })
};

const uploadDocument = (file) => {
  axios.post(
    "http://localhost:8080/api/upload",
    { file: file },
    { headers: authHeader() }
  ).then(response => {
    console.log(response.data);
    return response.data;
  })
}

export default {
  getBankDetails,
  uploadDocument
};