import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) => {
    return (
        <nav className="nav__cover">
            <h1>
                <i className={icon}></i>{title}
            </h1> 
            <ul className='nav__container'>
                <li className="nav__link">
                    <Link to="/" className="nav__text">Home</Link>
                </li>
                <li className="nav__link">
                    <Link to="/about" className="nav__text">About </Link>
                </li>
            </ul>
        </nav>
    )
}
Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}
export default Navbar
