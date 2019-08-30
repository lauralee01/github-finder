import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired, 
        setAlert: PropTypes.func.isRequired,
    }
    onChange = e => this.setState({ [e.target.name] : e.target.value })
    onSubmit = e => {
        e.preventDefault()
        if(this.state.text === "") {
            this.props.setAlert('Please enter something', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''})
        }
    }
    render() {
        const {showClear, clearUsers} = this.props
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users..." 
                        className="form__input"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Search" className="form__search" />
                </form>
                {
                    showClear &&  <button onClick={clearUsers} className="form__btn">Clear</button>
                }
               
            </div>
        )
    }
}

export default Search
