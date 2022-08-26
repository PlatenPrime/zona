import React from 'react';

const Buttons = () => {
	return (
		<div className="appButtonsDiv">

			<button variant="contained" className='appButtonZona' onClick={handlerZone}>ЗОНА</button>
			<button variant="contained" className='appButtonKasa' onClick={handlerKasaMassage}>ПРИНЕСТИ</button>

		</div>
	);
};

export default Buttons;