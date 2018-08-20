import React, {Component} from 'react';
import axios from 'axios';
import '../../css/Auth.css';


export default class ChangePassword extends Component {
    state = {
        email: '',
        password: '',
        code: ''
    };


    _onChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    _changePassword = async () => {
        const {email, password, code} = this.state;

        const response = await axios.post(process.env.REACT_APP_API_URL + 'change-password', {
            email, password, code
        });

        if (response && response.data && response.data.responseType === 'success') {
            this.props.history.push('/login');
            alert('Your password has been reset successfully!');
        } else {
            alert('Error: Incorrect input data!');
        }
    };

    render() {
        const {email, password, code} = this.state;

        return (
            <div className="login-card">
                <h1>Reset password</h1>

                <input type={'text'} name={'email'} id={'email'} value={email} onChange={this._onChange} placeholder="Email"/>
                <input type={'password'} name={'password'} id={'password'} value={password} onChange={this._onChange} placeholder="Password"/>
                <input type={'text'} name={'code'} id={'code'} value={code} onChange={this._onChange} placeholder="Code"/>
                <input type="submit" name="login" className="login login-submit" value="change password" onClick={this._changePassword}/>

                <div className="login-help">
                    <a href="/">Home</a>
                </div>
            </div>
        )
    }
}
