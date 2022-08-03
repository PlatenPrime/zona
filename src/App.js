
import { useState } from 'react';
import './App.css';













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

			<div className="appContainer">


				<input placeholder="Введи артикул..." className="appInput" type="text"
					onChange={(event) => { setArtB(event.target.value) }}
				/>



				<button variant="contained" className='appButton' onClick={handlerZone}>ЗОНА</button>






				<div className="appTraversa">


					<div className="appZone">

						{zone}

					</div>


				</div>



			</div>

		</div>
	);
}

export default App;
