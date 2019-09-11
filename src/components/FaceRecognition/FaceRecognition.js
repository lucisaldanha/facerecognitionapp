import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ( {ImageUrlDisplay, box} ) => {
	return (
		<div className = 'centerFlex' > {/* very important for css styling */ }
			<div className=' absolute mt3'>{/* very important for css styling */ }
				<img 
					id = 'inputimage'
					src = {ImageUrlDisplay}
					alt = 'input entered' 
					className = 'image'
				/>
				<div 
					className='bounding-box' 
					style = {{ top: box.topRow , right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
				>
				</div>
			</div>
		</div>
	)
}

export default FaceRecognition;