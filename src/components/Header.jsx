import React from "react";
import { fetchApi } from '../helpers/FetchIp'
import { useForm } from '../hook/useForm'


const Header = () => {

  const {value, onChange, reset} = useForm()

  const handleSumbit = () => {
    console.log(value)
    fetchApi(value)
    reset()
  }


  return (
    <div className="header">
      <h1 className="text-center w-100 pt-4 text-light">IP Adress Tracker</h1>

      <div className="d-flex w-25 mx-auto aling-items-strech">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          className="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
        />
        <button onClick={handleSumbit}> {">"} </button>
      </div>
    </div>
  );
};

export default Header;
