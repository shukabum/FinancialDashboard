import React, { useState } from "react";
import classes from "../Styles/company.module.css";
import profilepng from "../Assests/avatar.png";
import { faker } from "@faker-js/faker";
import DatePicker from "react-datepicker";
import { useGlobalState } from "../Context/authctx";
const Profile = () => {
  let tracdat= [];
  const [data,setdata] =useState(tracdat);

  for (let i = 0; i < 22; i++) {
    const transac = faker.finance.accountNumber();
    const transac2 = faker.finance.transactionType();
    const month = faker.date.month({ abbreviated: true, context: true });
    const amount = faker.finance.amount();
    tracdat[i] = { transac, transac2, month, amount };
  }
  function handleoptions(e) {
    e.preventDefault();
    if(e.target.value=="month"){
      setdata(tracdat)
    }
    else{
      const dummy =tracdat.filter((i)=>{
        return e.target.value==i.month;
      })
      setdata(dummy);
    }
  }
  const [state,dispatch]=useGlobalState();
  return (
    <div className={classes.profile}>
      <div className={classes.profileimage}>
        <img src={profilepng} className={classes.avatar} />
        {localStorage.getItem("name")}
      </div>
      <div className={classes.balance}>
        <p>My Cards</p>
        <p className={classes.cardname}>XYZ</p>
        <div className={classes.balancebox}>
          <div className={classes.balancebox2}>
            <p>Balance</p>
            <p>$29.99</p>
          </div>
        </div>
      </div>
      <p>Recent Transactions</p>
      <div className={classes.transactions}>
        <span style={{display:'flex',justifyContent:"right"}}>
          <select
            name="charts"
            id={classes.chartdropdown}
            onChange={handleoptions}
          >
            <option value="month" className={classes.option}>
              Month
            </option>
            <option value="Jan" className={classes.option}>
              Jan
            </option>
            <option value="Feb" className={classes.option}>
              Feb
            </option>
            <option value="Mar" className={classes.option}>Mar</option>
            <option value="Apr" className={classes.option}>Apr</option>
            <option value="May" className={classes.option}>May</option>
            <option value="Jun" className={classes.option}>Jun</option>
            <option value="Jul" className={classes.option}>Jul</option>
            <option value="Aug" className={classes.option}>Aug</option>
          </select>
        </span>

        {data.map((i, index) => (
          <div key={index}>
            <p>
              <b style={{
                color:`${i.transac2=="deposit"?"green":i.transac2=="withdrawal"?"red":i.transac2=="invoice"?"yellow":""}`
              }}>
                {i.transac2} :
              </b>
              <br />
              <br /> {i.amount} from Account number: {i.transac}
            </p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
