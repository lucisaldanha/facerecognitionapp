import React from 'react';
import './InputImageLinkForm.css'


const InputImageLinkForm = () => {
	return (
		<div>
			<p className='f4'>
				{'Please, paste a image link below. The Virtual Brain will detect faces within the image.'}
			</p>
			<div className='centerFlex'>
				<div className='centerFlex pa4 br3 shadow-3' >
					<input className='w-70 pa2 f4 tc' type='text'  />
					<button className='ml1 pointer br2 w-30 grow f4 link ph3 pv2 white bg-dark-green' >Detect</button>
				</div>
			</div>
		</div>
	);  
};

export default InputImageLinkForm;