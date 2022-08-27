import React from 'react';
import style from "../styles/Header.module.css";


const Header = ({ setArtB, setNumber, handlerReset }) => {



	return (
		<div className={style.header}>


			<input type="text"
				placeholder="Введи артикул..."
				className={style.inputArt}

				onChange={(event) => {
					setArtB(event.target.value);
					handlerReset();

				}}
			/>

			<input type="number"
				placeholder="Введи количество..."
				className={style.inputNum}
				onChange={(event) => {
					setNumber(event.target.value);
					handlerReset();

				}}

			/>

		</div>
	);
};

export default Header;