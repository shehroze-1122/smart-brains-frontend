import React, { useState } from 'react';
import './alert.css';

const Alert = ({alertTitle, alertMessage, color}) => {
    const [closeAlert, setCloseAlert] = useState(false);

    return (
        <>
            {!closeAlert?(<div className={`alert ${color}`} id="alert">
                <span className="closebtn" onClick={()=> setCloseAlert(true)}>&times;</span> 
                <strong>{alertTitle}</strong>: {alertMessage}
            </div>):null}
        </>
    )}
export default Alert;