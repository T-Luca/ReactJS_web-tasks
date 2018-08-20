import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Button} from 'reactstrap';
import '../../css/header.css';

export default class Header extends Component {
    state = {
        redirect: false
    };

    _logout = () => {
        sessionStorage.removeItem('token');

        this.setState({
            redirect: true
        });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/login'}/>;
        }

        return (
            <div className={'header'}>
                <nav className="ccsticky-nav">
                    <ul>
                        <Button color="info" size="sm" onClick={this._logout}>Logout</Button>
                    </ul>
                </nav>
            </div>
        );
    }
}