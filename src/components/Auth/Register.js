import React, {Component} from 'react';
import axios from 'axios';
import '../../css/Auth.css';

export default class Register extends Component {
    state = {
        name:'',
        email: '',
        password: ''
    };


    _onChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    _register = async () => {
        const {name, email, password} = this.state;

        const response = await axios.post(process.env.REACT_APP_API_URL + 'register', {
            name, email, password
        });

        if (response && response.data && response.data.responseType === 'success') {
            this.props.history.push('/login');
            alert('Successfully registered! Wait for admin approval!');
        } else {
            alert('Error: Incorrect input data!');
        }
    };

    render() {
        const {name, email, password} = this.state;

        return (
            <div className="login-card">
                <h1>Hello, register!</h1>

                <input type={'text'} name={'name'} id={'name'} value={name} onChange={this._onChange} placeholder="Name"/>
                <input type={'text'} name={'email'} id={'email'} value={email} onChange={this._onChange} placeholder="Email"/>
                <input type={'password'} name={'password'} id={'password'} value={password} onChange={this._onChange} placeholder="Password"/>
                <input type="submit" name="login" className="login login-submit" value="register" onClick={this._register}/>

                <div className="login-help">
                    <p>Already registered? -> <a href="/login">Go to Login</a></p>
                </div>
            </div>
        )
    }
}
