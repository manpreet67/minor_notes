import React, { useState } from "react";
import fetch from "../utils/apiClient";

const SERVER = "http://127.0.0.1:5000/"

async function searchKeyword(value) {
  try {
    let url = SERVER + `?keywords=${value}`
    const resp = await fetch.get(url)
    if (resp.error) {
      throw new Error(resp.error)
    }
    else {
      return resp
    }
  } catch (e) {
    console.error(e)
    throw e
  }
}

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const inputEvent = (event) => {
    const { value } = event.target;
    setSearchItem(() => value);
  }

  const addEvent = () => {

  }
  return (
    <div>
      <input type="text" value />
    </div>
  )
}

export default SearchBar