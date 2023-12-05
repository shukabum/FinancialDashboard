import React, { useEffect, useState } from "react";
import { useGlobalState } from "../Context/authctx";
import { useNavigate } from "react-router-dom";
import classes from "../Styles/login.module.css";
const Login = () => {
  const [state, dispatch] = useGlobalState();
  const [name, setname] = useState("");
  const [password, setpass] = useState("");
  function handlechange(e){
    e.preventDefault();
    if (e.target.name =='name'){
        setname(e.target.value);
    }
    else{
        setpass(e.target.value);
    }
  }
  function handlelogin(e) {
    e.preventDefault();
    dispatch({ type: "LOGIN" });
    localStorage.setItem("name", name);
    localStorage.setItem("login", true);
  }
  return (
    <div className={classes.container}>
      <form onSubmit={handlelogin} className={classes.form}>
        <label htmlFor="name" className={classes.lbl}>Username</label>
        <input value={name}type="text" name="name" onChange={handlechange} required className={classes.in}/>
        <label htmlFor="password" className={classes.lbl}>Password</label>
        <input value={password}type="password" name="password" onChange={handlechange} required className={classes.in}/>
        <button type="submit"className={classes.btn}>Login</button>
      </form>
    </div>
  );
};

export default Login;
