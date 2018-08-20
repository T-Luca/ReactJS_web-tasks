import React, {Component} from 'react';
import axios from 'axios';
import '../../css/Auth.css';


export default class Login extends Component {
    state = {
        email: '',
        password: ''
    };


    _onChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    _login = async () => {
        const {email, password} = this.state;

        const response = await axios.post(process.env.REACT_APP_API_URL + 'login', {
            email, password
        });

        if (response && response.data && response.data.data) {
            sessionStorage.setItem('token', response.data.data.jwt);
            this.props.history.push('/users');
        } else {
            alert('Error: Incorrect input data!');
        }
    };

    render() {
        const {email, password} = this.state;

        return (
            <div className="login-card">
                <h1>Hello, login!</h1>

                <input type={'text'} name={'email'} id={'email'} value={email} onChange={this._onChange} placeholder="Email"/>
                <input type={'password'} name={'password'} id={'password'} value={password} onChange={this._onChange} placeholder="Password"/>
                <input type="submit" name="login" className="login login-submit" value="login" onClick={this._login}/>

                <div className="login-help">
                    <a href="/register">Register</a> • <a href="/forgot-password">Forgot Password</a>
                </div>
            </div>
        )
    }
}
