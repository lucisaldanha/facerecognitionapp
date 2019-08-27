import React from 'react';


const InputImageLinkForm = () => {
	return (
		<div>
			<p>
				{'Please, paste a image link below. The Virtual Brain will detect faces within the image.'}
			</p>
			<div>
				<input type='text' placeholder='drop image to see the magic!'/>
				<button>Detect</button>
			</div>
		</div>
	);  
};

export default InputImageLinkForm;