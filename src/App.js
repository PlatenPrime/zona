
import { useEffect, useState } from 'react';
import './App.css';
import Bottom from './components/Bottom';
import Bubbles from './components/Bubbles';
import Buttons from './components/Buttons';
import Container from './components/Container';
import Header from './components/Header';
import KasaMessage from './components/KasaMessage';
import Main from './components/Main';
import Traversa from './components/Traversa';


import { artZone } from './data/artZone.js';


function App() {


	const [zone, setZone] = useState("");
	const [artB, setArtB] = useState("");
	const [message, setMessage] = useState("");
	const [number, setNumber] = useState("");

	const [displayTraversa, setDisplayTraversa] = useState(false)
	const [displayKasa, setDisplayKasa] = useState(false)
	const [displayBottom, setDisplayBottom] = useState(true)



	let item = artZone.find(item => item.art == artB.trim());


	const copy = (whatCopy) => navigator.clipboard.writeText(whatCopy);




	const handlerMessage = () => {

		setMessage(`${zone}__${artB}__${number} шт `);
		copy(message);

	}


	const handlerReset = () => {
		setDisplayKasa(false);
		setDisplayTraversa(false)
		setDisplayBottom(true)
	}


	const handlerKasaMessage = () => {
		setZone(item["zone"]);
		setDisplayKasa(true);
		setDisplayTraversa(false)
		setDisplayBottom(false)

	}

	const handlerZone = () => {

		setZone(item["zone"]);
		setDisplayTraversa(true);
		setDisplayKasa(false);
		setDisplayBottom(false)
	}

	useEffect(handlerMessage);






	return (


		<div className="App">

			<Bubbles />

			<Container>

				<Header
					setArtB={setArtB}
					setNumber={setNumber}
					handlerReset={handlerReset}
				></Header>

				<Main>

					<Buttons
						handlerZone={handlerZone}
						handlerKasaMessage={handlerKasaMessage}
					></Buttons>

					{displayBottom && <Bottom />}

					{displayKasa && <KasaMessage message={message}></KasaMessage>}

					{displayTraversa && <Traversa zone={zone}></Traversa>}

				</Main>

			</Container>

		</div >
	);
}

export default App;
