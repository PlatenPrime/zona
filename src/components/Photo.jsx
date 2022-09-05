import React from 'react';
import style from "./../styles/Photo.module.css";
import { FaPhotoVideo } from "react-icons/fa";


const Photo = ({ artB }) => {



	const photo = `https://sharik.ua/images/elements_big/${artB}_m1.jpg`


	return (
		<div className={style.photo}>

			{artB.length == 9 ? <img src={photo} alt="artB" /> : <FaPhotoVideo />}

		</div>
	);
};

export default Photo;

