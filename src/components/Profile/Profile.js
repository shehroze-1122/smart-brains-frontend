import React,{ useState } from 'react';
import './profile.css';
// import Alert from '../Alert/Alert';
import Button from '@material-ui/core/Button';

const Profile =({user, handleUsernameUpdate, Alert}) =>{

    const { name, email, joined, entries } = user;
    const joinDate = joined.split('T');

    const [username, setUserName] = useState(name);
    const [errorUpdating, setErrorUpdating] = useState(false);
    const [successUpdating, setSuccessUpdating] = useState(false);

    const selectInput = ()=>{

        const inp  = document.getElementById('name-editable');
        inp.focus();
        const btn = document.getElementById('update-name-button')
        btn.style.display = 'block';

    }
    
    const handleNameChange = (e)=>{
        setUserName(e.target.value)
    }

    const onClickOutsideListener = () => {
        if(username===''){
            const inp  = document.getElementById('name-editable');
            if (inp){
                inp.value = name;
            }
            
        }
        document.removeEventListener("click", onClickOutsideListener)
    }

    const updateUsername = ()=>{

        fetch('https://afternoon-hollows-86751.herokuapp.com/updateName', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userEmail: email,
                newName: username
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data);
            if(data !== 'failed'){
                setSuccessUpdating(true);
                setErrorUpdating(false);
                handleUsernameUpdate(data);
                const btn = document.getElementById('update-name-button')
                btn.style.display = 'none';
        
            }else{
                setSuccessUpdating(false);
                setErrorUpdating(true);
            }
        })
        .catch(err=>{
            console.log(err);
            setErrorUpdating(true);
        })
    }
    return(
        <>
        
            <div className="profile center ba b--black-10 br3 shadow-3 cf mt3" onMouseLeave={() => { document.addEventListener("click", onClickOutsideListener)}}>
            {errorUpdating? <Alert alertTitle="Failed" alertMessage="Sorry, we couldn't update your name" color="danger"/>: null}
            {successUpdating? <Alert alertTitle="Success" alertMessage="Successfully updated your username" color="success"/>: null}
         
                <h2><i className="fas fa-user pr3 black"></i>Profile</h2>
                <div className="profile-item">
                    <label htmlFor="username">Name</label>
                    <div className="profile-name">
                        <p><input name="username" id="name-editable" type="text" defaultValue={username} onChange={handleNameChange} onClick={()=>selectInput()}/>
                        <i className="far fa-edit black" onClick={()=>selectInput()}></i></p>
                    </div>
                

                    <Button variant="contained" id='update-name-button' style={{display:'none'}} color="primary" disabled={username===name || username===''} onClick={()=>updateUsername()}>Update</Button>
                    
                </div>

                <div className="profile-item">
                    <label>Email</label>
                    <p>{email}</p>
                </div>

                <div className="profile-item">
                    <label>Joined</label>
                    <p>{`${joinDate[0]}`}</p>
                </div>

                <div className="profile-item">
                    <label>Entry count</label>
                    <p>{entries}</p>       
                </div>
            </div>
        </>
    )
}
export default Profile;