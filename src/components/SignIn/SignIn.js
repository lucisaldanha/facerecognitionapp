import React from 'react';

const SignIn = ( {routeChange} ) => {
	return (
		<article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw6 center shadow-4">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input className="br2 black pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="br2 black b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      	onClick={() => routeChange('home')} 
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
			  </form>
			</main>
		</article>
	);  
};

export default SignIn;