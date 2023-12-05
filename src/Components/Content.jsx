import React, { useState } from "react";
import classes from "../Styles/content.module.css";
import SearchFilter from "./SearchFilter";
import Companyinfo from "./Company/Companyinfo";
import Companystats from "./Company/Companystats";
import Accountstats from "./Company/Accountstats";
import data from './Company/Data.js'


const Content = () => {
 
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        Dashboard
        <SearchFilter />
      </div>
      <Accountstats/>
      <Companystats chartdata={data}/> 
      <Companyinfo />
    </div>
  );
};

export default Content;
