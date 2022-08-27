import React from 'react';
import style from "../styles/Header.module.css";


const Header = ({ setArtB, setNumber }) => {



	return (
		<div className={style.header}>


			<input type="text"
				placeholder="Введи артикул..."
				className={style.inputArt}

				onChange={(event) => {
					setArtB(event.target.value);

				}}
			/>

			<input type="number"
				placeholder="Введи количество..."
				className={style.inputNum}
				onChange={(event) => {
					setNumber(event.target.value);

				}}

			/>

		</div>
	);
};

export default Header;