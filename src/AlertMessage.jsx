//rsc
import React from "react";

const AlertMessage = (props) => {
  return (
    <div className={`alert ${props.alertType}`}>
      {props.message}
    </div>
  );
};

export default AlertMessage;
