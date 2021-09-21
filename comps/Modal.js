import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Style from "../styles/card.module.css"

function Modal() {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    if (isBrowser) {
        return ReactDOM.createPortal(
            <div>Hello from modal</div>, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}



export default Modal;