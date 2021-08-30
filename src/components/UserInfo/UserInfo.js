import React from 'react'

const UserInfo = ({name, entries}) => {
    return (
        <div className="pa1 tc">
          <div className="f4">
              {`${name}, your current number of entries is`}
              <span className="f1 pa3">{`${entries}`}</span>
          </div>
            
        </div>
    )
}
export default UserInfo;
