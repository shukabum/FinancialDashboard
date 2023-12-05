import React from "react";
import classes from "../../Styles/company.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={classes.modal_overlay}>
      <div className={classes.modal_content}>
        <span
          style={{
            display:'flex',
            alignItems:"center",
            justifyContent:"space-between",
            width: "100%",
            color: "#262431ff",
            fontFamily:
              ' "Lucida Sans", "Lucida Sans Regular", "Lucida Grande","Lucida Sans Unicode", Geneva, Verdana, sans-serif',
              fontWeight:"bolder",
              fontSize:'1.8rem'
          }}
        >
          Socks Price Trends
          <button
            className={classes.modal_btn}
            onClick={onClose}

          >
            ❌
          </button>
        </span>
        {children}
      </div>
    </div>
  );
};
const Accountstats = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={classes.accountstats} onClick={handleClickOpen}>
        <div className={classes.infos}>
          <label htmlFor="compname">Company :</label>
          <p name="compname">Credhive</p>
        </div>
        <div className={classes.infos}>
          <label htmlFor="mshare">Market Share :</label>
          <p name="mshare"></p>
        </div>
      </div>
      <Modal isOpen={open} onClose={handleClose}>
        <p>Display the stocks of the company in form of graph or numbers </p>
      </Modal>
    </>
  );
};

export default Accountstats;
