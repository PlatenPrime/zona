import React from 'react';

const KasaMessage = () => {
	return (
		<div className="appKasaMassageDiv" style={{
			boxShadow: borderKasaMassage,
		}}>

			{displayKasaMassage ? <div className="appKasaMassage"  >

				<p style={{
					fontStyle: 'italic',
					fontWeight: "100",
					fontSize: "1rem",
					textAlign: "center",
				}}>
					Скопировано в буфер обмена:  </p>
				<p>{massage}</p>

			</div> : ""}
		</div>
	);
};

export default KasaMessage;