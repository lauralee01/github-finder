 import React, {Fragment, Component } from 'react';
 import Spinner from '../layout/Spinner';
 import Repos from '../repos/Repos';
 import PropTypes from 'prop-types';
 import { Link } from 'react-router-dom';
 
 export class User extends Component {
     componentDidMount() { 
         this.props.getUser(this.props.match.params.login);
         this.props.getUserRepos(this.props.match.params.login);
     }

     static propTypes = {
         loading: PropTypes.bool,
         user: PropTypes.object.isRequired,
         getUser: PropTypes.func.isRequired,
         getUserRepos: PropTypes.func.isRequired,
         repos: PropTypes.array.isRequired,
     }
     render() {
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
         } = this.props.user
         const {loading, repos} = this.props;
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
 }
 
 export default User
 