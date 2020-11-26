import axios from "axios"

export default axios.create({
  headers: {
    "Content-Type": "application/json",
    "idToken": JSON.parse(localStorage.getItem("jwt"))
  }
})
