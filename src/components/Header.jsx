import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchApi } from '../helpers/FetchIp'
import { useForm } from '../hook/useForm'
import { setData, setError, setLoading } from "../store/ipActions";
import IconArrow from '../assets/IconArrow.svg'

const Header = () => {

  const {value, onChange, reset} = useForm()

  const dispatch = useDispatch()
  const {ok} = useSelector((state) => state.ipData)

  const handleSumbit = async() => {
    dispatch(setLoading())
    reset()
    const {data} = await fetchApi(value)

    if(data) {
      dispatch(setData(data))
    } else {
      console.log('error')
      dispatch(setError())
    }
  }


  return (
    <div className="header">
      <h1 className="text-center w-100 pt-4 text-light">IP Adress Tracker</h1>

      <div className="d-flex inputContainer mx-auto aling-items-strech">
          <input
            style={(ok) ? {border: 'white 2px solid'} : {border: 'red 2px solid'} }
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            className="form-control inputText"
            name="inputIp"
            id="inputIp"
            aria-describedby="helpId"
            placeholder="Search for any IP adress or domain"
          />
          <button className="buttonInputText" onClick={handleSumbit}> <img src={IconArrow} alt="Boton enviar" /> </button>
      </div>
    </div>
  );
};

export default Header;
