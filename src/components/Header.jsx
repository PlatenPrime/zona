import React from 'react';

const Header = () => {
	return (
		<div className="appHeader">


			<input placeholder="Введи артикул..." className="appInputArt" type="text"
				onChange={(event) => {
					setArtB(event.target.value);
					setDisplayKasaMassage(false);
					setDisplayZone(false);
					setBorderKasaMassage("");
				}}
			/>

			<input type="number"
				placeholder="Введи количество..." className="appInputNum"
				onChange={(event) => {
					setNumber(event.target.value);
					setDisplayKasaMassage(false);
					setDisplayZone(false);
					setBorderKasaMassage("");
				}}

			/>

		</div>
	);
};

export default Header;