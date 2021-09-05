import React from 'react';
import './alert.css';

const Alert = ({alertTitle, alertMessage, color}) => {
    const hide = ()=>{
        const alert = document.getElementById('alert');
        alert.style.display = 'none';
    }
    return (
        <div className={`alert ${color}`} id="alert">
            <span className="closebtn" onClick={()=> hide()}>&times;</span> 
            <strong>{alertTitle}</strong>: {alertMessage}
        </div>
    )
}
export default Alert;