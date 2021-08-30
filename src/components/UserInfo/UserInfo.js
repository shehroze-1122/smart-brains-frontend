import React from 'react'
import './userInfo.css'
const UserInfo = ({name, entries, thresholdEntries}) => {
    return (
        <div className="user-info pa1 tc">
          <div className="f4">
              <span className='f2 pa3'>{`${name},`}</span>  
              {`your current number of image entries is`}
              <span className="f1 pa3">{`${entries}`}</span>
              <div class="tc mt3">

                <button className="white b pv2 ph3 bg-black grow hover-bg-purple bn br2 hover-shadow-inner">Entries Remaining: {thresholdEntries-entries}</button>

            </div>
          </div>
            
        </div>
    )
}
export default UserInfo;
