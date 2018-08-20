import React, {Component} from 'react';
import axios from 'axios';
import '../../css/Auth.css';


export default class ForgotPassword extends Component {
    state = {
        email: '',
    };


    _onChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    _sendCode = async () => {
        const {email} = this.state;

        const response = await axios.post(process.env.REACT_APP_API_URL + 'forgot-password', {
            email
        });

        if (response && response.data && response.data.responseType === 'success') {
            this.props.history.push('/change-password');
        } else {
            alert('Error: Email not recognized!');
        }
    };

    render() {
        const {email} = this.state;

        return (
            <div className="login-card">
                <h1>Enter email to reset your password!</h1>

                <input type={'text'} name={'email'} id={'email'} value={email} onChange={this._onChange} placeholder="Email"/>
                <input type="submit" name="login" className="login login-submit" value="send code" onClick={this._sendCode}/>

                <div className="login-help">
                    <a href="/">Home</a> • <a href="/login">Login</a>
                </div>
            </div>
        )
    }
}
