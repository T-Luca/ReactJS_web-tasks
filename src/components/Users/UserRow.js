import React, {Component} from 'react';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import '../../css/Users.css';

export default class UserRow extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        edit: PropTypes.func.isRequired
    };

    _showRole = role => {
        switch (role) {
            case 1:
                return 'Admin';
            case 2:
                return 'User';
            default:
                return 'Unknown'
        }
    };

    _edit = (user) => {
        const {edit} = this.props;

        edit && edit(user);
    };

    _del = (user) => {
        const {del} = this.props;

        del && del(user);
    };

    render() {
        const {user} = this.props;

        return (

            <tbody>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{this._showRole(user.role_id)}</td>
                    <td>
                        <Button color="warning" size="sm" onClick={() => this._edit(user)}>Edit</Button>
                        <div className="divider"/>
                        <Button color="danger"  size="sm" onClick={() => {
                            if (window.confirm('Are you sure you wish to delete this user?'))
                                this._del(user)}}>Delete
                        </Button>
                    </td>
                </tr>
            </tbody>

        );
    }
}