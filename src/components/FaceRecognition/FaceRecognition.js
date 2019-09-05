import React from 'react';

const FaceRecognition = ( {ImageUrlDisplay} ) => {
	return (
		<div className = 'centerFlex' >
			<div >
				<img 
					src = {ImageUrlDisplay}
					alt = 'input entered' 
					className = 'image'
				/>
			</div>
		</div>
	)
}

export default FaceRecognition;