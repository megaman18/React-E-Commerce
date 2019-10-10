import React from 'react';
import './sign-in.styles.scss';   
import FormInput from '../form-input/form-input.component';  
import CustomButton from '../custom-button/custom-button';  
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
 state = {
      email: '', 
      password: ''
 }
 
 
 handleSubmit = async e => {
     e.preventDefault()
      
    const {email, password} = this.state;

    try {
    await auth.signInWithEmailAndPassword(email, password);
      this.setState({email:'', password:''});
    } catch (error) {
        console.log(error);
        
    }

     this.setState({ email:'', password:''})
 }; 

 handleChange = e => {
   const {value, name} = e.target;

   this.setState({ [name]: value})
}; 


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>

                <form onSubmit= {this.handleSubmit}>
                  <FormInput name ="email" type ="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>  
                  
                  <FormInput name ="password" type ="password"  handleChange={this.handleChange} value={this.state.password} label="password" required/>  
                  
                  
                 
                   <div className="buttons">
                  <CustomButton type="submit" >Sign In</CustomButton>
                  <CustomButton onClick ={signInWithGoogle} isGoogleSignIn > Sign In With Google</CustomButton>
                  </div>
                </form>
            </div>
        )
    }
}  

