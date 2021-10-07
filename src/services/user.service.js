import axios from "axios";
import authHeader from "./auth-header";

const getConnectedBanks = async (phno) => {
	await axios.post(
		"http://localhost:8080/api/user/getConnectedBanks",
		{ phoneNum: phno },
		{ headers: authHeader() }
	).then(response => {
		console.log(response.data);
		return {error: null, connectedBanks: response.data};
	}).catch(err => {
		console.log(err);
		return {error: err, connectedBanks: []};;
	})
}

const getBankDetails = (id) => {
	axios.post(
		"http://localhost:8080/api/user/getBankDetails",
		{ id: id },
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
	getConnectedBanks,
	getBankDetails,
	uploadDocument
};