import React from 'react';
import style from "./../styles/Photo.module.css";
import { FaPhotoVideo } from "react-icons/fa";

import { TbBallon } from "react-icons/tb";


const Photo = ({ artB }) => {



	const photo = `https://sharik.ua/images/elements_big/${artB}_m1.jpg`;

	const link = `https://sharik.ua/ua/search/?q=${artB}`


	return (
		<div className={style.photo}>

			{artB.length == 9 ?
				<a href={link} target="_blanked">
					<img src={photo} alt="Здесь должно быть изображение артикула" ></img>
				</a> :
				<TbBallon />}



		</div>
	);
};

export default Photo;

