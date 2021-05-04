import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

class SignUp extends React.Component{

        constructor(props){
                super(props);

                this.state = {
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                }
        }

        handleSubmit = event => {
                event.preventDefault();

                this.setState({
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                })
        }

        handleChange = event => {
                const {name, value} = event.target;
                this.setState({
                        [name]: value
                });
        }

        render(){
                return(
                        <div className="sign-up">
                                <h2 className="title">I don't have an account</h2>
                                <span className="subtitle">Sign up with your email and password</span>

                                <form onSubmit={this.handleSubmit}>
                                        <FormInput
                                                name="displayName"
                                                type="text"
                                                handleChange = {this.handleChange}
                                                value={this.state.displayName}
                                                label="Display Name"
                                                required
                                        />
                                        <FormInput
                                                name="email"
                                                type="email"
                                                handleChange = {this.handleChange}
                                                value={this.state.email}
                                                label="Email"
                                                required
                                        />
                                        <FormInput
                                                name="password"
                                                type="password"
                                                handleChange = {this.handleChange}
                                                value={this.state.password}
                                                label="Password"
                                                required
                                        />
                                        <FormInput
                                                name="confirmPassword"
                                                type="password"
                                                handleChange = {this.handleChange}
                                                value={this.state.confirmPassword}
                                                label="Confirm Password"
                                                required
                                        />
                                        <CustomButton type="submit">
                                        Sign Up
                                        </CustomButton>
                                        
                                </form>
                        </div>
                );
        }
}

export default SignUp;