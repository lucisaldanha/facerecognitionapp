import React from 'react';

const Navigation = ( {routeChange, isSignedIn} ) => {
	if ( isSignedIn ) {
		return (
			<nav style={{display:'flex', justifyContent:'flex-end'}} >
				<p
					onClick={() => routeChange('signin')}
					className='f4  ttc navy dim pa3 mv1 link underline-hover pointer'>
					Sign out
				</p>
			</nav>
		)
	} else {
		return (
			<nav style={{display:'flex', justifyContent:'flex-end'}} >
				<p
					onClick={() => routeChange('signin')}
					className='f4  ttc navy dim pa3 mv1 link underline-hover pointer'>
					Sign In
				</p>
				<p
					onClick={() => routeChange('register')}
					className='f4  ttc navy dim pa3 mv1 link underline-hover pointer'>
					Register
				</p>
			</nav>
		)
	}
}

export default Navigation;

