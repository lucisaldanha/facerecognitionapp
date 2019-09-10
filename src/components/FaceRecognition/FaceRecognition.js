import React from 'react';

const FaceRecognition = ( {ImageUrlDisplay} ) => {
	return (
		<div className = 'centerFlex' >
			<div >
				<img 
					id = 'inputimage'
					src = {ImageUrlDisplay}
					alt = 'input entered' 
					className = 'image'
				/>
			</div>
		</div>
	)
}

export default FaceRecognition;