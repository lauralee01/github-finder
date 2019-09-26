 import React, {Fragment, useEffect, useContext } from 'react';
 import Spinner from '../layout/Spinner';
 import Repos from '../repos/Repos';
 import { Link } from 'react-router-dom';
 import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
    } = user

    if(loading) return <Spinner />  

    return <Fragment>
            <Link to="/" className="form__back">
                Back to search
            </Link>
            Hireable: { ''}
            { hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-check text-danger" /> }
            <div className="user__card">
                <img 
                    src={avatar_url} 
                    alt="" 
                    className="user__image" 
                    style={{width: '60px'}} 
                />
                 <h1>{name}</h1>
                 <p>Location: {location}</p>
            </div>
            <div>
                {bio && (
                    <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>
                )}
                <a href={html_url} className="form__button">
                    Visit Github profile
                </a>
                <ul>
                    <li>
                        {login && <Fragment>
                            <strong>Username:</strong> {login}
                        </Fragment>}
                    </li>
                    <li>
                        {company && <Fragment>
                            <strong>Company:</strong> {company}
                        </Fragment>}
                    </li>
                    <li>
                        {blog && <Fragment>
                            <strong>Website:</strong> {blog}
                        </Fragment>}
                    </li>
                </ul>
            </div>
            <div>
                <div>Followers: {followers}</div>
                <div>Following: {following}</div>
                <div>Public Repos: {public_repos}</div>
                <div>Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos } />
         </Fragment>
    
}

export default User
 