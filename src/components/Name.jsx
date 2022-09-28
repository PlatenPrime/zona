import React from 'react';
import style from "./../styles/Name.module.css";

const Name = ({ name }) => {
	return (
		<div className={style.name}>

			{name}

		</div>
	);
};

export default Name;