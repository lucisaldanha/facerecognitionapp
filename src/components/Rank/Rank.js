import React from 'react';

const Rank = ( {name, entries} ) => {
	return (
		<div>
			<div className='f3 pa2 near-white ' >
				{`${name}, your current entry count is`}
			</div>
			<div className='f1 pa1 light-gray  ' >
				{entries}
			</div>
		</div>
	);  
};

export default Rank;