import React from 'react';
import Header from './components/header/header.component';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route, Switch} from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

        constructor(props){
                super(props);

                this.state = {
                        currentUser: null
                }
        }

        unsubscribeFromAuth = null;

        componentDidMount(){
                this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
                        
                        if(userAuth){
                                const userRef = await createUserProfileDocument(userAuth);
                                userRef.onSnapshot(snapshot => {
                                        
                                        this.setState({
                                                currentUser:{
                                                        id: snapshot.id,
                                                        ...snapshot.data(),
                                                }
                                        }, () => {console.log(this.state.currentUser)});
                                });
                        }else{
                                this.setState({currentUser: null});
                        }
                })
        }

        componentWillUnmount(){
                this.unsubscribeFromAuth();
        }

        render(){
                return (
                        <div>
                                <Header currentUser = {this.state.currentUser}/>
                                <Switch>
                                        <Route exact path="/" component={HomePage}></Route>
                                        <Route exact path="/shop" component={ShopPage}></Route>
                                        <Route exact path="/signin" component={SignInAndSignUpPage}/>
                                </Switch>
                        </div>
                );
        }
}

export default App;
