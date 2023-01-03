
import axios from 'axios';
import 'tw-elements';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as Ballons } from './assets/ballons.svg'

import Telegram from 'telegram-send-message';









function App() {

	const [arts, setArts] = useState([]);
	const [art, setArt] = useState("")
	const [message, setMessage] = useState("")
	const [smile, setSmile] = useState("")


	const pieces = useRef(0);



	const fetchSmiles = async () => {
		try {

			const { data } = await axios.get(`http://rzhunemogu.ru/RandJSON.aspx?CType=11`);

			setSmile(data.slice(11, -1));


		} catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {
		fetchSmiles()
	}, [])




	const fetchArts = async () => {
		try {

			const { data } = await axios.get(`https://btw-server-2.up.railway.app/api/arts`);
			setArts(data.arts)
			console.log(data.arts)

		} catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {
		fetchArts()

	}, [])





	const photo = `https://sharik.ua/images/elements_big/${art.trim()}_m1.jpg`;

	const link = `https://sharik.ua/ua/search/?q=${art.trim()}`





	let item = arts.find(item => item.title === art.trim());


	Telegram.setToken("5588902349:AAF9cN9rDnU2kKwYGs3sUXUkLvhKiSDAoiQ");


	Telegram.setRecipient("@kassabtw");



	const handlerMessage = () => {

		setTimeout(() => {
			Telegram.setMessage(`${item.zone}`);
			Telegram.send();
		}, 500);

		setTimeout(() => {
			Telegram.setMessage(`${pieces.current.value} шт`);
			Telegram.send();
		}, 1000);

		setTimeout(() => {
			Telegram.setMessage(`${art}`);
			Telegram.send();
		}, 1500);


		setTimeout(() => {
			Telegram.setMessage(`${item.name}`);
			Telegram.send();
		}, 2000);

		setTimeout(() => {
			Telegram.setMessage(`${photo}`);
			Telegram.send();
		}, 2500);



	}


	// const copy = (whatCopy) => navigator.clipboard.writeText(whatCopy); 


	/* 
	
		const handlerMessage = () => {
	
			setMessage(`${ zone }__${ artB }__${ number } шт`)
	
			setMessageCopy(`\r\n
			Зона ${ zone }\r\n
			Артикул ${ artB }\r\n
			Количество ${ number } шт \r\n
			${ photo } \r\n
			${ name }

			`);
	
			copy(messageCopy);
	
		}
	
	
		const handlerReset = () => {
			setDisplayKasa(false);
			setDisplayTraversa(false)
	
		} */


	/* const handlerKasaMessage = () => {
		setZone(item["zone"]);
		setDisplayKasa(true);
		setDisplayTraversa(false)


	} */

	/* const handlerZone = () => {

		setZone(item["zone"]);
		setDisplayTraversa(true);
		setDisplayKasa(false);

	} */

	/* useEffect(handlerMessage);

	useEffect(() => {
		if (item) setName(item["name"])
	})
 */







	return (


		<div className="
		
		min-h-screen 
		max-h-screen
		overflow-auto

		flex flex-col justify-between md:flex-row  items-stretch
		
		">



			<form
				onSubmit={(e) => { e.preventDefault() }}

				className="w-full md:w-1/4
			 bg-transparent  p-6  shadow-lg first-letter:
			 flex flex-col justify-center
			 
			 ">




				<div className=" mb-6">

					<input
						type="text"
						className="input"
						onChange={(e) => { setArt(e.target.value) }}
						placeholder="Введи артикул">
					</input>

				</div>


				<div className=" mb-6">

					<input
						type="number"
						className=" input"
						ref={pieces}
						placeholder="Введи количество">

					</input>

				</div>


				<button
					onClick={handlerMessage}
					className='button w-full text-xl cursor-pointer'
					type="submit"
				>Принести
				</button>

			</form>




			<div className='
			 w-full md:w-1/2 
		 flex justify-center items-center
			  '>

				<div className='
				flex flex-col items-center justify-evenly
				border-8 border-white
				w-5/6 h-5/6

				'>


					<div>

						{art.trim().length === 9 &&

							<div className='flex flex-col justify-center items-center'>
								<h2 className='text-white text-3xl'>{art}</h2>
								<h2 className='text-white text-lg italic'>{item?.name}</h2>
							</div>
						}

					</div>


					<div className="w-1/2 h-1/2 flex justify-center items-center">

						{art.trim().length === 9 ?
							<a href={link} target="_blanked">
								{<img src={photo} alt="Изображение артикула" ></img>}
							</a> :
							<Ballons></Ballons>}

					</div>



					<div>

						{art.trim().length === 9 &&
							<h2 className='text-white text-3xl'>{item?.zone}</h2>
						}

					</div>




				</div>



			</div>








			<div className=' flex justify-center items-center w-full md:w-1/4 
			 bg-green-600 bg-opacity-10'>

				<div className='hidden md:flex justify-center items-center text-white '>


					{smile}




				</div>

			</div>






		</div >
	);
}

export default App;
