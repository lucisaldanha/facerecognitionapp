import React, { Component } from 'react';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	};

	onEmailChange = (event) => { //setState capture and save user input as a value. 
		this.setState({
			signInEmail: event.target.value
		});
		event.preventDefault();
	};

	onPasswordChange = (event) => { //setState capture and save user input as a value. 
 		this.setState({
			signInPassword: event.target.value
		});
		event.preventDefault();
	};

	onSubmitSignIn = (event) => {
		event.preventDefault();
		fetch('https://infinite-falls-28010.herokuapp.com/signin',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
			.then(user => {
				if(user.id && user.email) { // Checks two conditions, if user email and id already exists on Database. If not, else statement runs.
					this.props.loadUser(user);
					this.props.routeChange('home');
				} else {
					alert('User not found.');
					this.props.routeChange('register'); //Added an routeChange if sign in fails.
				}
			})
			.catch(err => console.log(err));
	}

	render() {
		const { routeChange } = this.props; 
		return (
			<article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw6 center shadow-4">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
					        className="br2 black pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
					        type="email" 
					        name="email-address"  
					        id="email-address" 
					        onChange={this.onEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="br2 black b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password" 
				        	onChange={this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={this.onSubmitSignIn} 
				      	className="br2 black b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Sign in" 
				      />
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => routeChange('register')} className="f6 link dim black db pointer" >
				        Register
				      </p>
				    </div>
				  </div>
				</main>
			</article>
		);  
	}
};

export default SignIn;