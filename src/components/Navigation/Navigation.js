import React from 'react';

const Navigation = ( {routeChange} ) => {
	return (
		<nav style={{display:'flex', justifyContent:'flex-end'}} >
			<p
				onClick={() => routeChange('home')}
				className='f4  ttc navy dim pa3 mv1 link underline-hover pointer'>
				Sign out
			</p>
		</nav>
	)
}

export default Navigation;