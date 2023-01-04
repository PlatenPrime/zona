import React from 'react';




const Photo = ({ artB }) => {



	const photo = `https://sharik.ua/images/elements_big/${artB.trim()}_m1.jpg`;

	const link = `https://sharik.ua/ua/search/?q=${artB.trim()}`


	return (
		<div className="">

			{artB.trim().length == 9 ?
				<a href={link} target="_blanked">
					{<img src={photo} alt="Здесь должно быть изображение артикула" ></img>}
				</a> :
				<TbBallon />}



		</div>
	);
};

export default Photo;

