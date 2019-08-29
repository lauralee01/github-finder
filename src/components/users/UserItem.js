import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: {login, avatar_url, html_url} }) => {
    return (
        <div className="user__card">
            <img 
                src={avatar_url} 
                alt="" 
                className="user__image" 
                style={{width: '60px'}} 
            />
            <h3>{login}</h3>
            <div className="user__cover">
                <a href={html_url} className="user__link">
                    More
                </a>
            </div>
        </div>
    )
   
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
