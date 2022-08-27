import React from 'react';
import style from "./../styles/Traversa.module.css";

const Traversa = ({ zone }) => {
	return (
		<div className={style.traversa}>

			<div className={style.zone}>
				{zone}
			</div>

		</div>
	);
};

export default Traversa;