import Axios from "axios";

const baseUrl = Axios.create({
    baseURL: "http://api.report.gouni.edu.ng"
});

export default baseUrl;