import React, {useContext} from 'react';
import './userInfo.css';
import { AuthContext } from '../../contexts/AuthContext';

const UserInfo = ({thresholdEntries}) => {

  const {currentUser} = useContext(AuthContext);
  
  const  { name, entries } = currentUser;

    return (
        <div className="user-info pa1 tc">
          <div className="f4 mt2">
              <span className='f2 pa2'>{`${name},`}</span>  
              {`your current number of image entries is`}
              <span className="f1 pa2">{`${entries}`}</span>
              <div className="tc mt2">

                <p className="black pv2 ph3 br3 shadow-5 center grow bn">Entries Remaining: {thresholdEntries-entries}</p>

            </div>
          </div>
            
        </div>
    )
}
export default UserInfo;
