import React from 'react';

const UserInfo = ({ImgUrl, fullname, text}) => {
    return ( 

        <div className="text-center">
                        <img src={ImgUrl}
                         className="img-thumbnail img-fluid" 
                         alt="" />
                        <span className="card bg-danger shadow user-fullname">
                        {fullname}
                        </span>
                        <p>{text}</p>
                        
        </div>

     );
}
 
export default UserInfo;