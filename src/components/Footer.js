import React from "react";
import handlogo from "../img/hand-icon.svg";
import { useHistory } from "react-router-dom";


const HandleClick=()=>{
  const history = useHistory();
  history.replace(' href="mailto:tugceozdemiir@hotmail.com">')
}


export default function Footer() {
  return (
    <div className="footer">
      Let's work together on your next project <br />
      <img src={handlogo} alt="" className="iconhand" />
      <a className="foot" href="mailto:tugceozdemiir@hotmail.com">
        tugceozdemiir@hotmail.com{" "}
      </a>
      <button onClick={HandleClick}className="foot2">Contact With Me  </button>
    </div>
  );
}
