import React, {Component} from 'react';


export default class Home extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-transparent">
                <div className="container">
                    <a className="navbar-brand" href="/">Home Page</a>
                    <a className="btn btn-primary" href="/login">Login</a>
                    <a className="btn btn-secondary" href="/register">Register</a>
                </div>
            </nav>


    )
    }
}
