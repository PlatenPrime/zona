
import { useState } from 'react';
import './App.css';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';











import { artZone } from './artZone.js';



function App() {



	const [zone, setZone] = useState("");
	const [artB, setArtB] = useState("");


	let item = artZone.find(item => item.art == artB);




	const handlerZone = () => {



		setZone(item["zone"]);


	}



	return (


		<div className="App">


			<input label="Артикул" className="appInput" type="text"
				onChange={(event) => { setArtB(event.target.value) }}
			/>
			<button variant="contained" className='appButton' onClick={handlerZone}>Проверить зону</button>

			<h3>Зона: {zone}</h3>

		</div>
	);
}

export default App;
