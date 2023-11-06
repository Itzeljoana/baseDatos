import React from "react";

const Alert = ({type,  mensaje }) => {
  return (
    <div className="alert alert-${type} color" >
      {mensaje}
    </div>
  );
};

export default Alert;