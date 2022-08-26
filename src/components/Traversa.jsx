import React from 'react';

const Traversa = () => {
	return (
		<div className="appTraversa">

			{displayZone ? <div className="appZone">

				{zone}

			</div> :

				""}

		</div>
	);
};

export default Traversa;