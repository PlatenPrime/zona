import React from 'react';
import style from "./../styles/KasaMessage.module.css";

const KasaMessage = ({ message }) => {
	return (
		<div className={style.kasa}>

			<div className={style.kasaMessage}  >

				<p style={{
					fontStyle: 'italic',
					fontWeight: "100",
					fontSize: "1rem",
					textAlign: "center",
				}}>
					Скопировано в буфер обмена:  </p>
				<p>{message}</p>



			</div>

		</div>
	);
};

export default KasaMessage;