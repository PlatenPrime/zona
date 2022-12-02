
import { useEffect, useState } from 'react';
import './App.css';
import Bubbles from './components/Bubbles';
import Buttons from './components/Buttons';
import Container from './components/Container';
import Header from './components/Header';
import KasaMessage from './components/KasaMessage';
import Name from './components/Name';
import Photo from './components/Photo';
import Traversa from './components/Traversa';


import { artZone } from './data/artZone.js';


function App() {


	const [zone, setZone] = useState("");
	const [artB, setArtB] = useState("");
	const [message, setMessage] = useState("");
	const [messageCopy, setMessageCopy] = useState("");

	const [number, setNumber] = useState("");
	const [name, setName] = useState("");




	const [displayTraversa, setDisplayTraversa] = useState(false)
	const [displayKasa, setDisplayKasa] = useState(false)




	let item = artZone.find(item => item.title == artB.trim());

	const photo = `https://sharik.ua/images/elements_big/${artB.trim()}_m1.jpg`



	const copy = (whatCopy) => navigator.clipboard.writeText(whatCopy);




	const handlerMessage = () => {

		setMessage(`${zone}__${artB}__${number} шт `)

		setMessageCopy(`\r\n
		Зона ${zone}\r\n
		Артикул ${artB}\r\n
		Количество ${number} шт \r\n
		${photo} \r\n
		${name} 
		
		`);

		copy(messageCopy);

	}


	const handlerReset = () => {
		setDisplayKasa(false);
		setDisplayTraversa(false)

	}


	const handlerKasaMessage = () => {
		setZone(item["zone"]);
		setDisplayKasa(true);
		setDisplayTraversa(false)


	}

	const handlerZone = () => {

		setZone(item["zone"]);
		setDisplayTraversa(true);
		setDisplayKasa(false);

	}

	useEffect(handlerMessage);

	useEffect(() => {
		if (item) setName(item["name"])
	})








	return (


		<div className="App">

			<Bubbles />

			<Container>

				<Header
					setArtB={setArtB}
					setNumber={setNumber}
					handlerReset={handlerReset}
				></Header>



				<Photo artB={artB} />

				<Name name={name} />


				<Buttons
					handlerZone={handlerZone}
					handlerKasaMessage={handlerKasaMessage}
				></Buttons>






				{displayKasa && <KasaMessage message={message}></KasaMessage>}

				{displayTraversa && <Traversa zone={zone}></Traversa>}



			</Container>

		</div >
	);
}

export default App;
