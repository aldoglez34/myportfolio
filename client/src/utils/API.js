import axios from "axios";

export default {
  sendEmail: (data) => axios.post("/api/sendEmail", data),
};
