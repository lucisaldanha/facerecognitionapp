import React from 'react';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			name: '',
		}
	}
	onEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	};

	onPasswordChange = (event) => {
 		this.setState({
			password: event.target.value
		})
	};

	onNameChange = (event) => {
 		this.setState({
			name: event.target.value
		})
	};

	onSubmitRegister = (event) => {
		// this.props.routeChange('home');
		// alert(`Registering: ${this.state.name},with email: ${this.state.email}`);
		fetch('http://localhost:3000/register',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
			.then(response => response.json())
			.then(user => {
				if(user.id) {
					this.props.loadUser(user);
					this.props.routeChange('home');
				} else {
					alert('Unable to register.');
				}
			})

	}
	
	render() {
		return (
			<article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw6 center shadow-4">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0 center">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
					        className="br2 black pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
					        type="text" 
					        name="name"  
					        id="name" 
					        onChange={this.onNameChange}
				        />
				      </div>
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
				      	onClick={this.onSubmitRegister} 
				      	className="br2 black b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Register" 
				      />
				    </div>
				  </div>
				</main>
			</article>
		);  
	}
};

export default Register;