import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle, auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component{

        constructor(props){
                super(props);

                this.state = {
                        email: '',
                        password: ''
                }
        }

        handleSubmit = async (event) => {
                event.preventDefault();

                const {email, password} = this.state;
                
                try{
                        await auth.signInWithEmailAndPassword(email, password);
                        
                        this.setState({
                                email: "",
                                password: ""
                        });
                }catch(err){
                        console.log(err);
                        alert(err.message);
                }
        }

        handleChange = event => {
                const {value, name} = event.target;
                this.setState({[name]: value})
        }      

        render(){
                return(
                        <div className="sign-in">
                                <h2 className="title">I already have an account</h2>
                                <span className="subtitle">Sign in with your email and password</span>

                                <form onSubmit={this.handleSubmit}>
                                        <FormInput 
                                                name="email" 
                                                type="email" 
                                                value={this.state.email} 
                                                handleChange={this.handleChange}
                                                required
                                                label="Email"
                                        />
                                        <FormInput 
                                                name="password" 
                                                type="password" 
                                                value={this.state.password} 
                                                handleChange = {this.handleChange}
                                                required
                                                label="Password"
                                        />
                                        <div className="buttons">
                                                <CustomButton type="submit" >
                                                        Sign In
                                                </CustomButton>
                                                
                                                <CustomButton onClick={signInWithGoogle} isSignInWithGoogle>
                                                        Sign In with Google
                                                </CustomButton>
                                        </div>
                                </form>

                        </div>
                );
        }
}

export default SignIn;