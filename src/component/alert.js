import React from "react";

// export default function alert() {
//   return (
//     <div>

//     </div>
//   )
// }

export default function Alert(props) {
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
         
        </div>
      </div>
    )
  );
}
