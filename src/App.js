
import { useEffect, useState } from 'react';
import './App.css';













import { artZone } from './data/artZone.js';



function App() {



	const [zone, setZone] = useState("");
	const [artB, setArtB] = useState("");
	const [massage, setMassage] = useState("");
	const [number, setNumber] = useState("");
	const [displayKasaMassage, setDisplayKasaMassage] = useState(false);
	const [displayZone, setDisplayZone] = useState(false);
	const [borderKasaMassage, setBorderKasaMassage] = useState("")


	let item = artZone.find(item => item.art == artB);


	const copy = (whatCopy) => navigator.clipboard.writeText(whatCopy);

	const handlerZone = () => {

		setZone(item["zone"]);
		setDisplayZone(true);

	}





	const handlerMassage = () => {

		setMassage(`${zone}__${artB}__${number} шт `);
		copy(massage);

	}




	const handlerKasaMassage = () => {
		setZone(item["zone"]);
		setDisplayKasaMassage(true);
		setDisplayZone(true);
		setBorderKasaMassage("0px 0px 5px 0px rgb(255, 255, 255)");

	}


	useEffect(handlerMassage);






	return (


		<div className="App">


			<div class="bubbles">
				<div class="bubble"></div>
				<div class="bubble"></div>
				<div class="bubble"></div>
				<div class="bubble"></div>
				<div class="bubble"></div>
				<div class="bubble"></div>
				<div class="bubble"></div>
				<div class="bubble"></div>
				<div class="bubble"></div>
				<div class="bubble"></div>

			</div>





			<div className="appContainer">




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


				<div className="appMain">


					<div className="appButtonsDiv">

						<button variant="contained" className='appButtonZona' onClick={handlerZone}>ЗОНА</button>

						<button variant="contained" className='appButtonKasa' onClick={handlerKasaMassage}>ПРИНЕСТИ</button>


					</div>








					<div className="appKasaMassageDiv" style={{
						boxShadow: borderKasaMassage,
					}}>

						{displayKasaMassage ? <div className="appKasaMassage"  >

							<p> Скопировано в буфер обмена:  </p>
							<p>{massage}</p>

						</div> : ""}
					</div>







					<div className="appTraversa">

						{displayZone ? <div className="appZone">

							{zone}

						</div> :

							""}



					</div>
















				</div>







			</div>

		</div>
	);
}

export default App;
