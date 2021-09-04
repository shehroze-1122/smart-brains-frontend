import React from 'react'
import './userInfo.css'
const UserInfo = ({name, entries, thresholdEntries}) => {
    return (
        <div className="user-info pa1 tc">
          <div className="f4 mt4">
              <span className='f2 pa2'>{`${name},`}</span>  
              {`your current number of image entries is`}
              <span className="f1 pa2">{`${entries}`}</span>
              <div className="tc mt3">

                <p className="black pv2 ph3 br3 shadow-5 center grow bn">Entries Remaining: {thresholdEntries-entries}</p>

            </div>
          </div>
            
        </div>
    )
}
export default UserInfo;
