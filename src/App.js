
import axios from 'axios';
import 'tw-elements';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as Ballons } from './assets/ballons.svg'
import { ReactComponent as Smile } from './assets/smile-icon.svg'

import Telegram from 'telegram-send-message';









function App() {

	const [arts, setArts] = useState([]);
	const [art, setArt] = useState("")
	const [send, setSend] = useState(false)



	const pieces = useRef();







	const fetchArts = async () => {
		try {

			const { data } = await axios.get(`https://btw-server-2.up.railway.app/api/arts`);
			setArts(data.arts)


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

		setSend(true);




		if (item) {
			setTimeout(() => {
				Telegram.setMessage(`${photo}`);
				Telegram.send();
			}, 300);
		}


		if (item) {
			setTimeout(() => {
				Telegram.setMessage(`${item.zone}`);
				Telegram.send();
			}, 600);
		}


		if (item) {
			setTimeout(() => {
				Telegram.setMessage(`${art}`);
				Telegram.send();
			}, 900);
		}

		if (item) {
			setTimeout(() => {
				Telegram.setMessage(`${pieces.current.value} шт`);
				Telegram.send();
			}, 1200);
		}

		if (item) {
			setTimeout(() => {
				Telegram.setMessage(`${item.name}`);
				Telegram.send();
			}, 1500);
		}


	}


	function resetInputNumber() {
		pieces.current.value = 0;
	}




	return (


		<div className="
		
		min-h-screen 
		max-h-screen
		overflow-auto

		flex flex-col justify-center md:flex-row  items-stretch
		
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
						onChange={(e) => { setArt(e.target.value); setSend(false); resetInputNumber(); }}
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
			 w-full md:w-3/4 
		 flex justify-center items-center
			  '>

				<div className={
					`
				flex flex-col items-center justify-evenly
				border-8 border-green-500 

				${send ? "border-opacity-100" : "border-opacity-0"}
				
				
				rounded-lg
shadow-xl
				${send && "shadow-green-400"}		

				w-5/6 h-5/6

				`}>


					<div>

						{art.trim().length === 9 &&

							<div className='flex flex-col justify-center items-center'>
								<h2 className='text-white text-3xl'>{art}</h2>
								<h2 className='text-white text-lg italic'>{item?.name}</h2>
							</div>
						}

					</div>


					<div className="w-5/12 h-5/12 flex justify-center items-center ">

						{art.trim().length === 9 ?
							<a href={link} target="_blanked">
								{<img className='rounded-lg shadow-md shadow-white' src={photo} alt="Изображение артикула" ></img>}
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









		</div >
	);
}

export default App;
