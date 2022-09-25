import React from "react";

export default function Alert(props) {
  return (
    <>
      <div style={{ height: "50px" }} className="container my-3">
        {props.alert && (
          <div class="alert alert-success" role="alert">
            {props.alert.tag} : {props.alert.msg}
          </div>
        )}
      </div>
    </>
  );
}
