import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: {login, avatar_url, html_url} }) => {
    return (
        <div className="user__coverage">
             <div className="user__card">
            <img 
                src={avatar_url} 
                alt="" 
                className="user__image" 
                style={{width: '60px'}} 
            />
            <h3>{login}</h3>
            <div className="user__cover">
                <Link to={`/user/${login}`} className="user__link" >
                    More
                </Link>
            </div>
            </div>
        </div>
       
    )
   
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
