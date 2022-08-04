
import { useEffect, useState } from 'react';
import './App.css';













import { artZone } from './artZone.js';



function App() {



	const [zone, setZone] = useState("");
	const [artB, setArtB] = useState("");
	const [massage, setMassage] = useState("");
	const [number, setNumber] = useState("");
	const [displayKasaMassage, setDisplayKasaMassage] = useState(false);


	let item = artZone.find(item => item.art == artB);


	const copy = (whatCopy) => navigator.clipboard.writeText(whatCopy);

	const handlerZone = () => {

		setZone(item["zone"]);

	}

	const handlerMassage = () => {

		setMassage(`Зона ${zone}:  ${artB}, _  ${number} шт_ `);


	}

	const handlerKasaMassage = () => {
		setZone(item["zone"]);
		setDisplayKasaMassage(true);
		copy(massage);

	}


	useEffect(handlerMassage);






	return (


		<div className="App">





			<div className="appContainer">




				<div className="appHeader">


					<input placeholder="Введи артикул..." className="appInputArt" type="text"
						onChange={(event) => { setArtB(event.target.value) }}
					/>

					<input type="number"
						placeholder="Введи количество..." className="appInputNum"
						onChange={(event) => { setNumber(event.target.value) }}

					/>

				</div>


				<div className="appMain">




					<div className='appSklad' >

						<button variant="contained" className='appButton' onClick={handlerZone}>ЗОНА</button>

						<div className="appTraversa">

							<div className="appZone">

								{zone}

							</div>

						</div>

					</div>




					<div className="appKasa">



						<button variant="contained" className='appButton' onClick={handlerKasaMassage}>ПРИНЕСТИ</button>


						<div className="appKasaMassageDiv">

							{displayKasaMassage ? <div className="appKasaMassage">

								<p>{massage}</p>

							</div> : ""}
						</div>



					</div>




				</div>







			</div>

		</div>
	);
}

export default App;
