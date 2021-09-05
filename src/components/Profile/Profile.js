import React from 'react';
import './profile.css';

const Profile =({user}) =>{
    const { name, email, joined, entries } = user;
    const joinDate = joined.split('T');
    return(
        <div className="profile center ba b--black-10 br3 shadow-3 cf mt3">
            <h2><i className="fas fa-user pr3 black"></i>Profile</h2>
            <div className="profile-item">
                <label>Name</label>
                <input type="text" value={name}/>
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
    )
}
export default Profile;