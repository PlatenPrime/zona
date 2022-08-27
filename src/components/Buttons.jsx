import React from 'react';
import style from "./../styles/Buttons.module.css";

const Buttons = ({ handlerZone, handlerKasaMessage }) => {
	return (
		<div className={style.buttons}>

			<button className={style.buttonZona} onClick={handlerZone}>ЗОНА</button>
			<button className={style.buttonKasa} onClick={handlerKasaMessage}>ПРИНЕСТИ</button>

		</div>
	);
};

export default Buttons;