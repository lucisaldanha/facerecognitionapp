import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" 
				options={{ max : 80 }} 
				style={{ height: 120,
					 width: 120, 
					 display:'flex', 
					 alignItems:'center', 
					 justifyContent:'center'  
				}} 
			>
				<div className="Tilt-inner"> 👽 </div>
			</Tilt>
		</div>
	);
};

export default Logo;