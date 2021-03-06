import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onChange = e => setText( e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if(text === "") {
            alertContext.setAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..." 
                    className="form__input"
                    value={text}
                    onChange={onChange}
                />
                <input type="submit" value="Search" className="form__search" />
            </form>
            {
                githubContext.users.length > 0 &&  <button onClick={githubContext.clearUsers} className="form__btn">Clear</button>
            }
            
        </div>
    )

}

export default Search
